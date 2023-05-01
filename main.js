import { createKeyboard, removeKeyboard } from './js/keyboard.js';

createKeyboard('En');

//selected virtual key if click physical key
const keyboard = document.querySelector('.keyboard');
const button = document.querySelectorAll('button');
const buttonShiftLeft = document.getElementById('shiftleft');
const buttonAltLeft = document.getElementById('altleft');

let lang = 'En';

document.addEventListener('keydown', clickButtonInPhysicalKeyboard);
document.addEventListener('keyup', removeActiveButtonInKeyboard);

function clickButtonInPhysicalKeyboard(e) {
	for(let i=0; i < button.length; i++) {
		console.log(e.key, e.code);
		if(button[i].id) {
			if(e.key.toLowerCase() === button[i].id.toLowerCase() || e.code.toLowerCase() === button[i].id.toLowerCase() ) {
				button[i].classList.add('key-active');
			}
		};
		if(!button[i].id) {
			if( e.key.toLowerCase() === button[i].innerHTML.toLowerCase() || e.code.toLowerCase() === button[i].innerHTML.toLowerCase() ) {
				button[i].classList.add('key-active');
			};
		};
	};
	if(buttonShiftLeft.classList.contains('key-active') && buttonAltLeft.classList.contains('key-active')) {
		if (lang === 'En') {
			removeKeyboard();
			createKeyboard('Ru');
			lang = 'Ru';
		} else {
			removeKeyboard();
			createKeyboard('En');
			lang = 'En';
		};
		return;
	};

}

function removeActiveButtonInKeyboard() {
	for(let i=0; i < button.length; i++) {
			button[i].classList.remove('key-active');
	};
}



