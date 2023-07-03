//скрипт сокращает длину текста до заданной высоты блока для предварительного просмотра в новостной карточке
// #box is a selector with text
export function sl() {
	const box = document.querySelector('#box');

	let lengthString = box.textContent.length;
	let myString = box.innerHTML;
	const styleHeight = getComputedStyle(box).height; //height of the text block
	let heightBox = +styleHeight.slice(0, styleHeight.length - 2);

	const heightBase = 220; //required block height
	while (heightBox > heightBase) {
		lengthString = lengthString / 1.2;
		myString = myString.slice(0, lengthString);

		box.innerHTML = myString;
		let styleHeight = getComputedStyle(box).height; //new height of the text block
		heightBox = +styleHeight.slice(0, styleHeight.length - 2);
	}

	myString = myString.slice(0, lengthString - 3); //remove a three symbols for '...'
	box.innerHTML = myString + '...';
}
