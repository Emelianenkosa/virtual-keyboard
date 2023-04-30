// const keyboard = document.querySelector('.keyboard');
// const button = document.querySelectorAll('button');

// document.addEventListener('keydown', clickButtonInPhysicalKeyboard);
// document.addEventListener('keyup', removeActiveButtonInKeyboard);

// function clickButtonInPhysicalKeyboard(e) {
// 	console.log(e.key, e.code);
// 	for(let i=0; i < button.length; i++) {
// 		console.log(e.code);
// 		if(e.key.toLowerCase() === button[i].innerHTML.toLowerCase() || e.key.toLowerCase() === button[i].id.toLowerCase() || e.code.toLowerCase() === button[i].id.toLowerCase() || e.code.toLowerCase() === button[i].innerHTML.toLowerCase()) {
// 			button[i].classList.add('key-active');
// 			console.log(button[i]);
// 		};
// 	};

// }

// function removeActiveButtonInKeyboard() {
// 	for(let i=0; i < button.length; i++) {
// 			button[i].classList.remove('key-active');
// 	};
// }

//export { clickButtonInPhysicalKeyboard, removeActiveButtonInKeyboard };