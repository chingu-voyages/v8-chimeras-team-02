import uuidv4 from 'uuid/v4';
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

export async function Register(name, email, password, mongo) {
	const Users = mongo.collection('User');
	const existingUser = await Users.findOne({ email });
	if (existingUser) {
		throw new Error('Email is already used');
	}
	let _id = uuidv4();
	const token = jsonwebtoken.sign({ userId: _id }, process.env.JWT_SECRET);
	const hash = await bcrypt.hash(password, 10);
	await Users.insertOne({
		email,
		_id,
		name,
		password: hash,
		rememberToken: token,
	});
	return await Users.findOne({ email });
}

export async function Login(email, password, mongo) {
	const Users = mongo.collection('User');
	const user = await Users.findOne({ $or: [{ email: email }, { phone: email }, { username: email }] });
	const validPassword = await bcrypt.compare(password, user.password);

	if (!user) {
		throw new Error('Email not found');
	}
	if (!validPassword) {
		throw new Error('Password is incorrect');
	}

	const token = jsonwebtoken.sign({ userId: user._id }, process.env.JWT_SECRET);
	await Users.update({ _id: user._id }, { $set: { rememberToken: token } });

	return await Users.findOne({ $or: [{ email: email }, { username: email }] });
}

export async function LogOut(mongo, user) {
	if (!user) {
		throw new Error("User isn't authenticated");
	}
	const Users = mongo.collection('User');
	let id = user._id;
	await Users.update({ _id: id }, { $set: { rememberToken: '' } });
	return await Users.findOne({ _id: id });
}

export async function createQuestion(title, question, user_id, tags, answers, mongo) {
	const Questions = mongo.collection('Question');
	const Users = mongo.collection('User');
	console.log(user_id);

	const user = await Users.findOne({ _id: user_id });
	if (!user) {
		throw new Error('User is not found');
	}
	let _id = uuidv4();
	let date = new Date().toISOString();

	await Questions.insertOne({ _id, title, question, createAt: date, updatedAt: date, user, tags, answers });

	return await Questions.findOne({ _id });
}

export async function deleteQuestion(_id, mongo) {
	const Questions = mongo.collection('Question');
	const existedQuestion = await Questions.findOne({ _id });

	if (!existedQuestion) {
		throw new Error('This question does not exist');
	}
	await Questions.remove({ _id });
	return existedQuestion;
}

export async function updateQuestion(_id, title, question, createAt, user_id, tags, answers, mongo) {
	const Questions = mongo.collection('Question');
	let updatedAt = new Date().toISOString();
	const Users = mongo.collection('User');
	const user = await Users.findOne({ _id: user_id });

	await Questions.update({ _id }, { title, question, createAt, updatedAt, user, tags, answers });

	return await Questions.findOne({ _id });
}

export async function getQuestion(_id, mongo) {
	const Questions = mongo.collection('Question');
	const question = await Questions.findOne({ _id });

	if (!question) {
		throw new Error('Not found');
	}
	return question;
}

export async function getQuestions(number = '0', mongo) {
	const Questions = mongo.collection('Question');
	const questions = await Questions.find()
		.limit(Number(number))
		.toArray();
	if (!questions) {
		throw new Error('Not found');
	}
	return questions;
}

export async function createAnswer(question_id, newAnswer, user, mongo) {
	// Find the question we're answering
	const Questions = mongo.collection('Question');
	const question = await Questions.findOne({ _id: question_id });

	if (!question) {
		throw new Error(
			`Something Wrong! Trying to create answer for a question that doesn't exist. Id: ${question_id}`
		);
	}

	// Creatre MetaData
	let _id = uuidv4();
	let date = new Date().toISOString();

	// Create and push Answer
	const answer = { _id, answer: newAnswer, createDate: date, updateDate: date, user };
	if (!question.answers) {
		question.answers = [];
	}
	question.answers.push(answer);

	await Questions.updateOne({ _id: question_id }, { $set: { answers: question.answers } });

	return answer;
}

export async function getAnswer(question_id, _id, mongo) {
	let answer;

	// Get the Question
	const Questions = mongo.collection('Question');
	const question = await Questions.findOne({ _id: question_id });

	if (!question) {
		throw new Error(`Something Wrong! Trying to get answer for a question that doesn't exist. Id: ${question_id}`);
	}
	console.log(question.answers);
	// Loop trough array to check for the _id
	for (let i in question.answers) {
		if (question.answers[i]._id === _id) {
			answer = question.answers[i];
		}
	}

	if (!answer) {
		throw new Error(`No Answer found for id: ${_id}`);
	}

	return answer;
}

export async function updateAnswer(question_id, _id, newAnswer, mongo) {
	// Get Question
	const Questions = mongo.collection('Question');
	const question = await Questions.findOne({ _id: question_id });

	if (!question) {
		throw new Error(`No question found for id: ${question_id}`);
	}

	let answer;

	// Create MetaData
	let date = new Date().toISOString();

	// Loop trough array to check for the _id and update answer
	for (let i in question.answers) {
		if (question.answers[i]._id === _id) {
			question.answers[i].answer = newAnswer;
			answer = question.answers[i];
		}
	}

	if (!answer) {
		throw new Error(`No Answer found for id: ${_id}`);
	}

	await Questions.updateOne({ _id: question_id }, { $set: { answers: question.answers } });

	return answer;
}

export async function deleteAnswer(question_id, _id, mongo) {
	// Get Question
	let answer;
	const Questions = mongo.collection('Question');
	const question = await Questions.findOne({ _id: question_id });

	if (!question) {
		throw new Error(
			`Something Wrong! Trying to delete an answer for a question that doesn't exist. Id: ${question_id}`
		);
	}

	for (let i in question.answers) {
		if (question.answers[i]._id === _id) {
			answer = question.answers[i];
		}
	}

	if (!answer) {
		throw new Error(`No Answer found for id: ${_id}`);
	}

	const filteredAnswers = question.answers.filter(x => {
		return x._id !== _id;
	});

	await Questions.updateOne({ _id: question_id }, { $set: { answers: filteredAnswers } });

	return answer;
}
