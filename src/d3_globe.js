/* global topojson */
/* eslint-disable */
// event needs a bound import to function correctly
import Content from './content/index'
import * as event from 'd3-selection'

const d3 = Object.assign(
	{},
	require('d3-geo'),
	require('d3-selection'),
	require('d3-drag'),
	require('d3-transition'),
	require('d3-interpolate'),
)
d3.event = event
/* eslint-enable */


function renderGlobe({ world, names, mapTopo, mapGeo } = {}) {
	// set globe size
	const width = window.innerWidth
	const height = window.innerHeight
	const sens = 0.25
	let focused = null // used in drag events, currently disabled

	// Setting projection
	const projection = d3.geoOrthographic()
		.scale(Math.min(width, height) * 0)
		.rotate([0, 0])
		.translate([width / 2, height / 2])
		.clipAngle(90)

	const path = d3.geoPath()
		.projection(projection)

	// SVG container
	const svg = d3.select('#globeContainer')
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('class', 'globe')


	// Adding water background
	svg.append('path')
		.datum({ type: 'Sphere' })
		.attr('class', 'water')
		.attr('d', path)

	// adding globe grid lines
	svg.append('path')
		.datum(d3.geoGraticule())
		.attr('class', 'graticule')
		.attr('d', path)


	const countryTooltip = d3
		.select('#container')
		.append('div')
		.attr('class', 'countryTooltip')


	const countries = topojson.feature(world, world.objects.countries).features
		// country names are missing from world data, find them by matching id to name and filter anything missing
		.map(country => {
			const foundName = names.find(n => parseInt(n.id, 10) === parseInt(country.id, 10))
			const output = country
			const nameToUse = (foundName ? foundName.name : '')
			output.name = nameToUse
			return output
		})
		.filter(country => country.name)

	const countryById = countries.reduce((output, country) => {
		const update = output
		update[country.id] = country.name
		return update
	}, {})

	console.info({ countries })
	const getRotationPosition = () => {
		const r = projection.rotate()
		return { x: r[0] / sens, y: -r[1] / sens }
	}

	const dragRotate = () => {
		// if (/iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream) return
		// const rotate = projection.rotate();

		// // TODO - rewrite to support v4
		// // https://stackoverflow.com/questions/43772975/drag-rotate-projection-in-d3-v4
		// // https://jsfiddle.net/usze5ej2/
		// projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
		// svg.selectAll("path.land").attr("d", path);
		// svg.selectAll("path.circle").attr("d", path);
		// svg.selectAll("path.graticule").attr("d", path);
		// svg.selectAll(".focused").classed("focused", focused = false);
	}

	// TODO - move to globals
	let locationIndex = 0
	// TODO - refactor into main content obj and refactor refernces
	// const locations = [
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('korea'))[0],
	// 		scale: 1.5,
	// 		circle: 0,
	// 		origin: [100, 100],
	// 	},
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('australia'))[0],
	// 		scale: 0.9,
	// 		circle: 1.1,
	// 		origin: [100, 100],
	// 	},
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('united kingdom'))[0],
	// 		scale: 0.5,
	// 		circle: 1.8,
	// 		origin: [0, 0],
	// 	},
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('arctic'))[0],
	// 		scale: 0.3,
	// 		circle: 1.5,
	// 		origin: [100, 100],
	// 	},
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('united states'))[0],
	// 		scale: 0.6,
	// 		circle: 2,
	// 		origin: [100, 100],
	// 	},
	// 	{
	// 		country: countries.filter(c => c.name.toLowerCase().includes('brazil'))[0],
	// 		scale: 0.6,
	// 		circle: 2.3,
	// 		origin: [100, 100],
	// 	},
	// ]
	// const headerLocation = Content.header.map

	const locations = Content.parts
		.reduce((output, p, i) => {
			console.log(output)
			const update = output
			const { country } = p.map
			update.push(p.map)
			if (!country) {
				update[i].country = false
			} else {
				update[i].country = countries.filter(c => c.name.toLowerCase().includes(country))[0]
			}
			return update
		}, [/* headerLocation */])
	console.log(locations)

	const sections = document.querySelectorAll('[data-type="maplocation"]')

	window.addEventListener('scroll', () => {
		sections.forEach(section => {
			const thisIndex = parseInt(section.getAttribute('data-index'), 10)
			if (thisIndex === locationIndex) return
			const { top } = section.getBoundingClientRect()
			if (top < window.innerHeight && top > 0) {
				locationIndex = thisIndex
				transition()
			}
		})
	})

	// render globe background 'water' lement
	const svgWater = svg.selectAll('path.water') // eslint-disable-line
		.call(d3.drag()
			.subject(getRotationPosition)
			.on('drag', dragRotate))

	// Drawing countries on the globe
	const svgWorld = svg.selectAll('path.land') // eslint-disable-line
		.data(countries)
		.enter()
		.append('path')
		.attr('class', 'land')
		.attr('d', path)
		.call(d3 // add drag behaviour
			.drag()
			.subject(getRotationPosition)
			.on('drag', dragRotate)
		)
		.on('mouseover', d => {
			// console.log('mouseOver', d3.mouse())
			countryTooltip.text(countryById[d.id])
				.style('left', `${d3.event.pageX + 7}px`)
				.style('top', `${d3.event.pageY - 15}px`)
				.style('display', 'block')
				.style('opacity', 1)
		})
		.on('mouseout', d => {
			countryTooltip.style('opacity', 0)
				.style('display', 'none')
		})
		.on('mousemove', d => {
			countryTooltip
				.style('left', `${d3.event.pageX + 7}px`)
				.style('top', `${d3.event.pageY - 15}px`)
		})

	// add circle mapped to projection - tester
	// TODO - refactor from main content
	const circleStart = {
		angle: 50 * locations[locationIndex].circle,
		origin: locations[0].country ? locations[0].country.geometry.coordinates[0][0] : [0, 0],
	}

	// console.log(locations[0].country.geometry.coordinates[0][0])

	// TODO - create factories for SVG templates
	const svgCircle = svg
		.append('path')
		.datum(d3
			.geoCircle()
			.center([-90, 0])
			.radius([circleStart.angle])()
		)
		.attr('class', 'circle')
		.attr('d', path)
		.call(d3.drag()
			.subject(getRotationPosition)
			.on('drag', dragRotate)
		)

	// Country focus on option select
	function transition() {
		// const rotate = projection.rotate() // unused
		// console.log('focussed', locations, locationIndex)
		const focusedCountry = locations[locationIndex].country
		console.log(focusedCountry)
		if (!focusedCountry) return
		const p = d3.geoCentroid(focusedCountry) // TODO - remove single latter naming
		const circleTweenFromAngle = circleStart.angle
		const newAngle = (50 * locations[locationIndex].circle)
		circleStart.angle = newAngle
		d3.transition()
			.duration(2500)
			.tween('scale', () => {
				const r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
				const circleTweenAngle = d3.interpolate(circleTweenFromAngle, newAngle)
				// console.log(locations[locationIndex])
				const scaleTweenFrom = projection.scale()
				const scaleTweenTo = (Math.min(width, height) * locations[locationIndex].scale)
				const scaleTween = d3.interpolate(scaleTweenFrom, scaleTweenTo)

				return t => {
					svgCircle
						.datum(d3
							.geoCircle()
							.center(circleStart.origin)
							.radius(circleTweenAngle(t))
						)
						.attr('d', path);

					projection
						.rotate(r(t))
						.scale(scaleTween(t))

					svg
						.selectAll('path')
						.attr('d', path)
						// TODO - what is this?
						.classed('focused', d => d.id === focusedCountry.id ? focused = d : false)
				};
			})
	}
	transition()
}


export default renderGlobe
