const resourseSection = document.querySelector('.resource-section');

const options = {
	threshold: 0.2
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if(!entry.isIntersecting) {
			return;
		};
		
		const serRight = document.querySelectorAll('.ser-right');
		// serRight.classList.toggle('for-txt');
		serRight.forEach((left) => {
			left.classList.toggle('for-txt');
		})

		const secLeft = document.querySelectorAll('.ser-left');
		// secLeft.classList.toggle('for-txt2');
		secLeft.forEach((right) => {
			right.classList.toggle('for-txt2');
		})
	})

	
}

const observer = new IntersectionObserver(callback, options);

observer.observe(resourseSection);

// counter part

const countSection = document.querySelector('.count-section');

const options2 = {
	threshold: 1
}

const callback2 = (entries2) => {
	entries2.forEach(entry2 => {
		if(!entry2.isIntersecting) {
			return;
		}; 
		const counter = document.querySelectorAll('.count');
		counter.forEach(counterPart => {
			let count = 1;
			setInterval(() => {
				if(count < 100) {
					count++;
					counterPart.innerText = count;
				}
			}, 10)

		})

		const counter24 = document.querySelector('.counter-24'); 
		let count1 = 0;
		setInterval(() => {
			if(count1 <= 23) {
				count1++;
				counter24.innerText = count1;
			}
		}, 100)

		const counter7 = document.querySelector('.counter-7'); 
		let count2 = 0;
		setInterval(() => {
			if(count2 <= 6) {
				count2++;
				counter7.innerText = count2;
			}
		}, 300)

	})
} 

const observer2 = new IntersectionObserver(callback2, options2);
observer2.observe(countSection);

// for typing effect
const texts = ['developers', 'fonders', 'designers'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
	if(count === texts.length) {
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector('.typing').textContent = letter;
	if(letter.length === currentText.length) {
		count++;
		index = 0;

	}
	setTimeout(type, 200);
}())