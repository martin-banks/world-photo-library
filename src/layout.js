import Styles from './app.sass'
import Content from './content/index'

// Template content
function sections({ part, i }) {
	const { title, text, link, hide } = part
	return `<section data-index="${i}" data-hide="${hide}" data-type="maplocation">
		<a href="${link}">
			<h1>${title}</h1>
			<p>${text}</p>
		</a>
	</section>`
}

function layout() {
	const template = `<div>
		<div id="globeContainer"></div>
		<section class="${Styles.wrapper}">
			<h1>${Content.header.title}</h1>
			<h3>${Content.header.intro}</h3>
		</section>
		${Content.parts.map((part, i) => sections({ part, i})).join('')}
	</div>`

	return template
}

export default layout
