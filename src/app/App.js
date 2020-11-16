import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Enter from '../pages/enter/enter.jsx';
import Footer from '../components/Footer/footer';

//important for hosting on Github pages
import { HashRouter } from 'react-router-dom';

function App() {
	return (
		<HashRouter basename='/'>
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
		</HashRouter>
	);
}

export default App;
