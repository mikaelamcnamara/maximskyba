import React from 'react';
import { Link } from 'react-router-dom';

import '../home/home.css';

function Home() {
	return (
		<div className='body'>
			<h1 align='center' className='glitch' data-text='MAXIM SKYBA'>
				MAXIM SKYBA
			</h1>
			<Link to='Enter'>
				<div className='button' id='colorchange' align='center'>
					<div align='center'>Enter</div>
					<svg>
						<polyline
							className='o1'
							points='0 0, 150 0, 150 55, 0 55, 0 0'
						></polyline>
						<polyline
							className='o2'
							points='0 0, 150 0, 150 55, 0 55, 0 0'
						></polyline>
					</svg>
				</div>
			</Link>
		</div>
	);
}

export default Home;
