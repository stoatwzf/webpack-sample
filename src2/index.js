import _ from 'lodash';
import Print from './print.js';

function component(){
	let element = document.createElement('div');

	element.innerHTML = _.join(['hello', 'webpack'], '');
	element.onclick = Print.bind(null, 'hello webpack yahoo!');
	return element;
}

document.body.appendChild(component());