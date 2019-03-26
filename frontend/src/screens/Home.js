import React, { Component } from "react";
import { user } from "../resources/images";
import { blue } from "../resources/colors";
import { SearchBar, Section, ListItem, Logo, SideList } from "../components";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

class Home extends Component {
    state = {
        name: "hanen",
        email: "hanen@gmail.com",
        password: "111111",
        error: ''
    }

    onSignup() {
        const { name, email, password } = this.state;
        this.props.mutate({
            variables: { name, email, password }
        })
            .then((data) => console.log(JSON.stringify(data)))
            .catch((err) => console.log(err, password, email, name))
    }

    onLogin() {
        const { email, password } = this.state;
        this.props.mutate({
            variables: { email, password }
        })
            .then((data) => console.log(JSON.stringify(data)))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div style={container}>
                <div style={header}>
                    <Logo />
                    <SearchBar />
                    <Section title="Ask" />
                    <Section title="Login" onClick={() => this.onLogin()} />
                    <Section title="Signup" onClick={() => this.onSignup()} />
                    <img src={user} style={avatar} alt={user} />
                </div>


                <div style={gridView}>
                    <SideList />
                    <div style={listview}>
                        <ListItem
                            title={"Undefined is not an object React Native"}
                            user={"Hanen Wahabi"}
                            date={"16-03-2019"}
                            likes={"4"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const SIGNUP = gql`
    mutation Signup($name: String!, $email:String!, $password: String!){
        signup(name: $name, email: $email, password: $password){
            _id
        }
    }
`;

const LOGIN = gql`
    mutation Login($email:String!, $password: String!){
        login(email: $email, password: $password){
            _id
            name
            email
        }
    }
`;

export default graphql(LOGIN, SIGNUP)(Home);


const container = {
    backgroundColor: blue,
};
const header = {
    display: "flex",
    flexDirection: "row",
    background: "linear-gradient(to top, #00AB90 0%, #080A38 15%, #080A38 100%)",
    height: 85,
    alignItems: "center",
};

const avatar = {
    height: 35,
    width: 35,
    borderRadius: 40,
    border: "30px solid #2FE090",
    borderWidth: 2,
    resizeMode: "cover",
    marginRight: 40,
    marginLeft: 20,
};
const listview = {
    display: "flex",
    flex: 3,
    flexDirection: "column",
};
const gridView = {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginTop: 40,
};
