
function increase({ item, max }) {
	console.log({max})
	const { width, height } = item.getBoundingClientRect()
	let size = parseInt(window.getComputedStyle(item)['font-size']
	.replace('px', ''), 10)
	size++
	// console.log({ item, size, width, height, w: window.innerWidth, h: window.innerHeight })
	item.style.fontSize = `${size}px`
	if (width < (window.innerWidth * 0.95)
		&& height < (window.innerHeight * 0.95)
		&& (size < max)
	) {
		return increase({ item, max })
	}
	return
}

function scaleText({ type, max = 500 }) {
	console.log({ type, max })
	const items = [...document.querySelectorAll(type)]
	items.forEach(item => {
		item.style.width = 'auto'
		item.style.position = 'relative'
		item.style.display = 'inline-block'
		item.style.whiteSpace = 'nowrap'
		increase({ item, max })
	})
}

export default scaleText
