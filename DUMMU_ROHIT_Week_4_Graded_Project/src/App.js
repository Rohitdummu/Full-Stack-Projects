import React from 'react';
import './App.css';
import 'h8k-components';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LeaderBoard from './Component/LeaderBoard';
import Name from './Component/Name';
import Points from './Component/Points';
import Age from './Component/Age';
import Rank from './Component/Rank';
const title = "SPA - LeaderBoard";
function App() {
	return (
		<div>
			<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			</div>
			<Router>
				<Switch> 
					{/* use exact before path bcoz in this version it will render all macthes with "/" and loads all components one below other */}
					<Route exact path='/'>
						<LeaderBoard></LeaderBoard>
					</Route>
					<Route path='/rank'>
						<Rank></Rank>
					</Route>
					<Route path={'/name'}>
						<Name></Name>
					</Route>
					<Route path={'/points'}>
						<Points></Points>
					</Route>
					<Route path={'/age'}>
						<Age></Age>
					</Route> 
				</Switch>
			</Router>
		</div>
	);
}

export default App;
