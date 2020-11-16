import React from 'react';
import { Link } from 'react-router-dom';

import '../enter/enter.css';

function Enter() {
	window.onload = function () {
		window.setTimeout(fadeout, 4900); //5 seconds
	};

	//reset timeout function if the window has already been loaded
	let navData = window.performance.getEntriesByType('navigation');
	if (navData.length > 0 && navData[0].loadEventEnd > 0) {
		window.setTimeout(fadeout, 4900); //5 seconds
	} else {
		console.log('Document is not loaded');
	}

	function fadeout() {
		document.getElementById('fadeout').style.opacity = '0';
	}

	function enter() {
		if (document.getElementById('password').value === 'max') {
			window.location.href = 'target.html';
		} else {
			alert('Access denied');
		}
	}

	return (
		<div className='body'>
			<div id='fadeout' className='loading' align='center'>
				<div id='fadeout' className='loading-dot'></div>
				<div id='fadeout' className='loading-dot'></div>
				<div id='fadeout' className='loading-dot'></div>
				<div id='fadeout' className='loading-dot'></div>
			</div>
			<div id='fadein' align='center' className='password'>
				<div id='fadein'>
					<input
						className='password'
						id='password'
						type='password'
						placeholder='PIN'
					></input>
					<button onClick={enter}>ENTER</button>
				</div>
				<Link to='Home'>
					<div id='fadein'> GO BACK</div>
				</Link>
			</div>
		</div>
	);
}

export default Enter;
