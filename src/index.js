import _ from 'lodash';

import data from './datas/data.xml';

import './stylesheets/normalize.css';
import './stylesheets/font.css';
import './stylesheets/style.css';

import stoat from './images/stoat.jpg';

function component(){
	let element = document.createElement('div');

	element.innerHTML = _.join(['hello', 'webpack'], data.note.body[0]);
	element.classList.add('hello');

	let img = new Image();

	img.src = stoat;
	element.appendChild(img);
	return element;
}

document.body.appendChild(component());