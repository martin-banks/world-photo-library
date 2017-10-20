import Styles from './app.sass'
import Content from './content/index'

// Template content
function sections({ title, text, i }) {
	return `<section data-index="${i}" data-type="editorialsection">
		<h1>${title}</h1>
		<p>${text}</p>
	</section>`
}

function layout() {
	const template = `
	<div id="globeContainer"></div>
	<section class="${Styles.wrapper}">
		<h1>${Content.header.title}</h1>
		<h3>${Content.header.intro}</h3>
	</section>
	${Content.parts.map((p, i) => sections({ title: p.title, text: p.text, i}))}
	
	`

	return template
}

export default layout
