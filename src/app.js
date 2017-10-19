// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'
import start from './startApp'
import layout from './layout'

import world from './world-110m.json'
import countryNames from './world-country-names.json'
import mapTopo from './mapTopo.json'
import mapGeo from './mapGeo.json'

const d3 = Object.assign({}, 
	require('d3-geo'), 
	require('d3-selection'),
	// require('d3-queue'),
	// require('d3-request')
)

console.log(d3)

// Start and Render app
const APP = start({ inner: layout() })
APP.render()


// set globe size
const width = window.innerWidth;
const height = window.innerHeight;
const sens = 0.25;
let focused = null

// Setting projection
const projection = d3.geoOrthographic()
	.scale(Math.min(width, height) * 0.5)
	.rotate([0, 0])
	.translate([width / 2, height / 2])
	.clipAngle(90);

const path = d3.geoPath()
	.projection(projection);

// SVG container
const svg = d3.select("#container")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.attr('class', 'globe')


// Adding water background
svg.append("path")
	.datum({type: "Sphere"})
	.attr("class", "water")
	.attr("d", path);

// adding globe grid lines
svg.append('path')
	.datum(d3.geoGraticule())
	.attr('class', 'graticule')
	.attr('d', path)


const countryTooltip = d3.select("#container").append("div").attr("class", "countryTooltip")
// const countryList = d3.select("#container").append("select").attr("name", "countries");

// input data then render by calling the ready function
// d3.queue()
// 	.defer(d3.json, world)
// 	.defer(d3.json, countryNames)
// 	.defer(d3.json, mapTopo)
// 	.defer(d3.json, mapGeo)
// 	// .defer(d3.json, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
// 	// .defer(d3.json, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
	
// 	.await(ready);

ready(world, countryNames, mapTopo, mapGeo)

function ready(world, names, testTopo, testGeo) {
	console.log({ world, names, testGeo })


	const countries = topojson.feature(world, world.objects.countries).features
		// country names are missing from world data, find them by matching id to name and filter anything missing
		.map(country => { 
			const foundName = names.find(n => parseInt(n.id, 10) === parseInt(country.id, 10))
			country.name = foundName ? foundName.name : ''
			return country
		})
		.filter(country => country.name)

	const countryById = countries.reduce((output, country) => {
		const update = output
		update[country.id] = country.name
		return update
	}, {});

	console.log({countries})
	const getRotationPosition = () => {
		const r = projection.rotate()
		return {x: r[0] / sens, y: -r[1] / sens};
	}

	const dragRotate = () => {
		if (/iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream) return
		const rotate = projection.rotate();
		projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
		svg.selectAll("path.land").attr("d", path);
		svg.selectAll("path.circle").attr("d", path);
		svg.selectAll("path.graticule").attr("d", path);
		svg.selectAll(".focused").classed("focused", focused = false);
	}

	// TODO - move to globals
	let locationIndex = 0
	// TODO - refactor into main content obj and refactor refernces
	const locations = [
		{
			country: countries.filter(country => country.name.toLowerCase().includes('korea'))[0],
			scale: 2,
			circle: 2,
			origin: [100, 100]
		},
		{
			country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		},
		{
			country: countries.filter(country => country.name.toLowerCase().includes('france'))[0],
			scale: 1.0,
			circle: 0.8,
			origin: [0, 0]
		},
		{
			country: countries.filter(country => country.name.toLowerCase().includes('arctic'))[0],
			scale: 0.3,
			circle: 1.5,
			origin: [100, 100]
		},
		{
			country: countries.filter(country => country.name.toLowerCase().includes('brazil'))[0],
			scale: 0.6,
			circle: 1,
			origin: [100, 100]
		},
	]

	const isOnStage = ({ section, thisIndex } = {}) => {
		const {top, height } = section.getBoundingClientRect()
		if (top < window.innerHeight && top > 0) {
			locationIndex = thisIndex
		}
	}

	// TODO - refactor into main template render
	const sections = document.querySelectorAll('section')
	sections.forEach(section => {
		const thisIndex = parseInt(section.getAttribute('data-index'), 10)
		section.querySelector('h1').innerText = locations[thisIndex].country.name
		isOnStage({ section, thisIndex })
	})

	window.addEventListener('scroll', e => {
		sections.forEach(section => {
			const thisIndex = parseInt(section.getAttribute('data-index'), 10)
			if (thisIndex === locationIndex) return
			const {top, height } = section.getBoundingClientRect()
			if (top < window.innerHeight && top > 0) {
				locationIndex = thisIndex
				return transition()
			}
		})
	})

	// render globe background 'water' lement
	var water = svg.selectAll('path.water')
		.call(d3.behavior.drag()
			.origin(getRotationPosition)
			.on("drag", dragRotate))

	// Drawing countries on the globe
	var world = svg.selectAll("path.land")
		.data(countries)
		.enter()
		.append("path")
		.attr("class", "land")
		.attr("d", path)
		.call(d3.behavior // add drag behaviour
			.drag()
			.origin(getRotationPosition)
			.on("drag", dragRotate)
		)
		.on("mouseover", function(d) {
			countryTooltip.text(countryById[d.id])
			.style("left", (d3.event.pageX + 7) + "px")
			.style("top", (d3.event.pageY - 15) + "px")
			.style("display", "block")
			.style("opacity", 1);
		})
		.on("mouseout", function(d) {
			countryTooltip.style("opacity", 0)
			.style("display", "none");
		})
		.on("mousemove", function(d) {
			countryTooltip.style("left", (d3.event.pageX + 7) + "px")
			.style("top", (d3.event.pageY - 15) + "px");
		})

	// add circle mapped to projection - tester
	// TODO - refactor from main content
	let circleStart = {
		angle: 50 * locations[locationIndex].circle,
		origin: locations[locationIndex].country.geometry.coordinates[0][0][0],
	}

	// TODO - create factories for SVG templates
	const myCircle = svg.append('path')
		.datum(d3.geo
			.circle()
			.origin([0, 0])
			.angle([circleStart.angle])()
		)
		.attr('class', 'circle')
		.attr('d', path)
		.call(d3.behavior.drag()
			.origin(getRotationPosition)
			.on("drag", dragRotate)
		)

	// Country focus on option select
	function transition() {
		const rotate = projection.rotate()
		const focusedCountry = locations[locationIndex].country
		const p = d3.geo.centroid(focusedCountry) // TODO - remove single latter naming
		const circleTweenFromAngle = circleStart.angle
		const newAngle = (50 * locations[locationIndex].circle)
		circleStart.angle = newAngle
		d3.transition()
			.duration(2500)
			.tween("scale", function() {
				const r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
				const circleTweenAngle = d3.interpolate(circleTweenFromAngle, newAngle)
				const scaleTween = d3.interpolate(projection.scale(), (Math.min(width, height) * locations[locationIndex].scale))

				return function(t) {
					myCircle
						.datum(d3.geo
							.circle()
							.angle(circleTweenAngle(t))
						)
						.attr("d", path);

					projection
						.rotate(r(t))
						.scale(scaleTween(t))

					svg
						.selectAll("path")
						.attr("d", path)
						// TODO - what is this?
						.classed("focused", (d, i) => d.id == focusedCountry.id ? focused = d : false);
				};
			})
	};
	transition()

	// >>> DEPRICATED ?? >>>>>>>>>>>>>>>
	function country(cnt, sel) { 
		for(let i = 0, l = cnt.length; i < l; i++) {
			if(cnt[i].id == sel.value) {return cnt[i];}
		}
	};
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

};
