
const keyboard = {
	En: {
		1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
		2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
		3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
		4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '&#8593;', 'Shift'],
		5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
	},
	Ru: {
		1: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
	2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
	3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter'],
	4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '&#8593;', 'Shift'],
	5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'],
	}
};

const body = document.querySelector('body');
const componentKeyBoard = createComponent('section', 'keyboard');
body.append(componentKeyBoard);


function createKeyboard(lang) {

	const rowOne = createComponent('div', 'row');
	componentKeyBoard.append(rowOne);
	for(let i=0; i < keyboard[lang][1].length; i++) {
		if( keyboard[lang][1][i] === 'Backspace' ) {
			rowOne.append(createComponentKey('button', 'key-double', keyboard[lang][1][i]));
		} else {
			rowOne.append(createComponentKey('button', 'key-single', keyboard[lang][1][i]));
		}
	}

	const rowTwo = createComponent('div', 'row');
	componentKeyBoard.append(rowTwo);
	for(let i=0; i < keyboard[lang][2].length; i++) {
			let newComponent = createComponentKey('button', 'key-single', keyboard[lang][2][i]);
			rowTwo.append(newComponent);
			if(keyboard[lang][2][i] === 'Del') {newComponent.setAttribute('id', 'delete')};
	}


	const rowThree = createComponent('div', 'row');
	componentKeyBoard.append(rowThree);
	for(let i=0; i < keyboard[lang][3].length; i++) {
		if( keyboard[lang][3][i] === 'CapsLock' || keyboard[lang][3][i] === 'Enter' ) {
			rowThree.append(createComponentKey('button', 'key-double', keyboard[lang][3][i]));
		} else {
			rowThree.append(createComponentKey('button', 'key-single', keyboard[lang][3][i]));
		}
	}

	const rowFour = createComponent('div', 'row');
	componentKeyBoard.append(rowFour);
	for(let i=0; i < keyboard[lang][4].length; i++) {
		let newComponentSingle = createComponentKey('button', 'key-single', keyboard[lang][4][i]);
		let newComponentDouble = createComponentKey('button', 'key-double', keyboard[lang][4][i]);
		if( keyboard[lang][4][i] === 'Shift') {
			rowFour.append(newComponentDouble);
			if(i === 0) {newComponentDouble.setAttribute('id', 'shiftleft')};
			if(i === 11) {newComponentDouble.setAttribute('id', 'shiftright')};
		} else {
			rowFour.append(newComponentSingle);
			if(i === 10) {newComponentSingle.setAttribute('id', 'arrowup')};
		}	
	}

	const rowFive = createComponent('div', 'row');
	componentKeyBoard.append(rowFive);
	for(let i=0; i < keyboard[lang][5].length; i++) {
		let newComponentSingle = createComponentKey('button', 'key-single', keyboard[lang][5][i]);
		let newComponentSpace = createComponentKey('button', 'key-space', keyboard[lang][5][i]);
		if( keyboard[lang][5][i] === 'Space') {
			rowFive.append(newComponentSpace);
		} else {
			rowFive.append(newComponentSingle);
			if(i === 0) {newComponentSingle.setAttribute('id', 'controlleft')};
			if(i === 1) {newComponentSingle.setAttribute('id', 'metaleft')};
			if(i === 2) {newComponentSingle.setAttribute('id', 'altleft')};
			if(i === 4) {newComponentSingle.setAttribute('id', 'altright')};
			if(i === 5) {newComponentSingle.setAttribute('id', 'controlright')};
			if(i === 6) {newComponentSingle.setAttribute('id', 'arrowleft')};
			if(i === 7) {newComponentSingle.setAttribute('id', 'arrowdown')};
			if(i === 8) {newComponentSingle.setAttribute('id', 'arrowright')};
		}
	}

	const languageComponent = createComponent('p', 'language-text');
	componentKeyBoard.append(languageComponent);
	languageComponent.innerHTML = 'language switching: "Shift-Left" + "Alt-Left"'

return componentKeyBoard;
}

function removeKeyboard() {
	while (componentKeyBoard.firstChild) {
		componentKeyBoard.removeChild(componentKeyBoard.firstChild);
	}
	return componentKeyBoard;
}


function createComponent(tagName, className) {
	const element = document.createElement(tagName);
	element.classList.add(className);
	return element;
}

function createComponentKey(tagName, className, value) {
	const element = document.createElement(tagName);
	element.classList.add(className);
	element.innerHTML = value;
	return element;
}


export { createKeyboard, removeKeyboard };