import { createKeyboard } from './js/keyboard.js';
//import { clickButtonInPhysicalKeyboard, removeActiveButtonInKeyboard } from './js/key-checked.js';
//import * as S from './js/key-checked.js';

createKeyboard();


//selected virtual key if click physical key
const keyboard = document.querySelector('.keyboard');
const button = document.querySelectorAll('button');

document.addEventListener('keydown', clickButtonInPhysicalKeyboard);
document.addEventListener('keyup', removeActiveButtonInKeyboard);

function clickButtonInPhysicalKeyboard(e) {
	console.log(e.key, e.code);
	for(let i=0; i < button.length; i++) {
		console.log(e.code);
		if(button[i].id) {
			if(e.key.toLowerCase() === button[i].id.toLowerCase() || e.code.toLowerCase() === button[i].id.toLowerCase() ) {
				button[i].classList.add('key-active');
				console.log('1');
			}
		};
		if(!button[i].id) {
			if( e.key.toLowerCase() === button[i].innerHTML.toLowerCase() || e.code.toLowerCase() === button[i].innerHTML.toLowerCase() ) {
				button[i].classList.add('key-active');
				console.log('2');
			};
		};
	};

}

function removeActiveButtonInKeyboard() {
	for(let i=0; i < button.length; i++) {
			button[i].classList.remove('key-active');
	};
}