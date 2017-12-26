import { file, parse } from './global.js';

const component = () => {
	let element = document.createElement('div');

	// element.innerHTML = _.join(['hello', 'webpack'], '');
	element.innerHTML = join(['hello', 'webpack'], '');
	// this.alert('hello world');
	parse();
	return element;
};

document.body.appendChild(component());