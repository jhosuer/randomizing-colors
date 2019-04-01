function changePageColors() {
	let page = document.querySelector('body');
	let colorSequence1 = Math.floor(Math.random() * 256);
	let colorSequence2 = Math.floor(Math.random() * 256);
	let colorSequence3 = Math.floor(Math.random() * 256);
	setInterval(() => {
		return page.style.backgroundColor = 'RGB( ' + colorSequence1 +',' + colorSequence2 + ',' + colorSequence3 + ')'
	}, 1000);
	//console.log(page.style.backgroundColor = 'RGB( ' + colorSequence1 +',' + colorSequence2 + ',' + colorSequence3 + ')' );
}

changePageColors();