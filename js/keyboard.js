const KeyRowOne = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const KeyRowTwo = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'];
const KeyRowThree = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
const KeyRowFour = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '&#8593;', 'Shift'];
const KeyRowFive = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;'];
const body = document.querySelector('body');

function createKeyboard() {
	const componentKeyBoard = createComponent('section', 'keyboard');
	body.append(componentKeyBoard);

	const rowOne = createComponent('div', 'row');
	componentKeyBoard.append(rowOne);
	for(let i=0; i < KeyRowOne.length; i++) {
		if( KeyRowOne[i] === 'Backspace' ) {
			rowOne.append(createComponentKey('button', 'key-double', KeyRowOne[i]));
		} else {
			rowOne.append(createComponentKey('button', 'key-single', KeyRowOne[i]));
		}
	}

	const rowTwo = createComponent('div', 'row');
	componentKeyBoard.append(rowTwo);
	for(let i=0; i < KeyRowTwo.length; i++) {
			rowTwo.append(createComponentKey('button', 'key-single', KeyRowTwo[i]));
	}

	const rowThree = createComponent('div', 'row');
	componentKeyBoard.append(rowThree);
	for(let i=0; i < KeyRowThree.length; i++) {
		if( KeyRowThree[i] === 'CapsLock' || KeyRowThree[i] === 'Enter' ) {
			rowThree.append(createComponentKey('button', 'key-double', KeyRowThree[i]));
		} else {
			rowThree.append(createComponentKey('button', 'key-single', KeyRowThree[i]));
		}
	}

	const rowFour = createComponent('div', 'row');
	componentKeyBoard.append(rowFour);
	for(let i=0; i < KeyRowFour.length; i++) {
		if( KeyRowFour[i] === 'Shift') {
			rowFour.append(createComponentKey('button', 'key-double', KeyRowFour[i]));
		} else {
			rowFour.append(createComponentKey('button', 'key-single', KeyRowFour[i]));
		}
	}

	const rowFive = createComponent('div', 'row');
	componentKeyBoard.append(rowFive);
	for(let i=0; i < KeyRowFive.length; i++) {
		if( KeyRowFive[i] === 'Space') {
			rowFive.append(createComponentKey('button', 'key-space', KeyRowFive[i]));
		} else {
			rowFive.append(createComponentKey('button', 'key-single', KeyRowFive[i]));
		}
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

export { createKeyboard };