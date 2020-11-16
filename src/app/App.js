import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Enter from '../pages/enter/enter.jsx';
import Footer from '../components/Footer/footer';

function App() {
	return (
		<div style={{ backgroundColor: 'black' }}>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/Welcome' component={Home} />
					<Route path='/Home' component={Home} />
					<Route path='/Enter' component={Enter} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
