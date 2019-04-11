import React, { Component } from 'react';
import { blue, green } from '../resources/colors';
import { SearchBar, Section, ListItem, Logo, SideList, Header, Footer } from '../components';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />

				<GridView>
					<SideList />
					<ListView>
						<h2 style={{ textAlign: 'left' }}>Top Questions</h2>
						<ListItem
							title={'Undefined is not an object React Native'}
							user={'Hanen Wahabi'}
							date={'16-03-2019'}
							likes={'4'}
						/>
					</ListView>
				</GridView>

				<div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Home;

const ListView = styled.div`
	display: flex;
	flex: 3;
	flex-direction: column;
	max-width: 50%;
`;
const GridView = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	margin-top: 40;
`;

/* const form = styled.`
	display: flex;
	flexDirection: column;
	backgroundColor: white;
	alignItems: center;
	justifyContent: center;
	width: 30%;
	height: 400;
	borderRadius: 10;
`;

const inputs = styled.`
	border: 1px solid #ccc;
	background: white;
	height: 45;
	width: 40%;
	alignItems: left;
	marginTop: 25;
	fontSize: 16;
	outlineColor: green;
`;

const button = styled.`
	background: green;
	color: white;
	height: 60;
	width: 40%;
	alignItems: center;
	marginTop: 25;
	fontSize: 20;
`;

const error = styled.`
	color: red;
	fontSize: 14;
	marginTop: 25;
	textAlign: center;
`; */
