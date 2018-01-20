function tiltOn(e) {
	const title = this.querySelector('h1')
	const par = this.querySelector('p')
	par.style.color = 'lime'
	title.style.color = 'orange'
}

function tiltOff(e) {
	const title = this.querySelector('h1')
	const par = this.querySelector('p')
	par.style.color = ''
	title.style.color = ''
}

function tiltOnHover() {
	const items = [...document.querySelectorAll('section')]
	items.forEach(item => {
		console.log(item)
		item.addEventListener('mouseover', tiltOn)
		item.addEventListener('mouseout', tiltOff)
	})
}

export default tiltOnHover
