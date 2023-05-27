const reload = document.querySelector('.reload-btn');
const msg = document.querySelector('.captcha');
const field = document.querySelector('input');
const btn = document.querySelector('.enter');
const err = document.querySelector('.error');
const noerr = document.querySelector('.noerr');
const copy_btn = document.querySelector('.copy');

let allchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let allnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let allcharector = [];
for (let i = 0; i < allchar.length; i++) {
	allcharector[i] = allchar[i];
}
main = allcharector.concat(allnumbers);
console.log(main);

function random() {
	for (let i = 0; i < 6; i++) {
		let randomchar = main[Math.floor(Math.random() * main.length)];
		msg.innerHTML += `${randomchar}`;
	}
}
random();
reload.addEventListener('click', () => {
	msg.innerHTML = '';
	random();
});
window.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		mainevent();
	}
});
btn.addEventListener('click', () => {
	mainevent();
});

function mainevent() {
	let inputval = field.value.split().join();
	console.log(inputval);
	if (inputval == msg.textContent) {
		noerr.style.display = 'block';
		err.style.display = 'none';
	} else {
		err.style.display = 'block';
		noerr.style.display = 'none';
	}
}
copy_btn.addEventListener('click', () => {
	copy_btn.innerHTML = 'Code copied';
	navigator.clipboard.writeText(msg.innerHTML);
	copy_btn.style.background = '#8775c7';
	setTimeout(() => {
		copy_btn.innerHTML = 'Copy Code';
		copy_btn.style.background = '#8a6cff';
	}, 3000);
});
