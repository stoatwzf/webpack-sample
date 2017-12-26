import _ from 'lodash';
import printMe from './print.js';

import './style.css';

const component = () => {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	element.innerHTML = _.join(['hello', 'webpack'], '');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
};
document.body.appendChild(component());

if (module.hot){
	module.hot.accept('./print.js', () => {
		console.log('Accept the update printMe module');
		printMe();
	});
}