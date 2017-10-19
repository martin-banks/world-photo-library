// All content is stored and used from this file
// Recomend multiple parts are created as separate files
// and imported to keep this file streamlined

const Content = {
	header: {
		title: 'Hello world',
		intro: 'The app has rendered!!',
	},

	parts: [
		{
			title: 'Section title',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
			map: {
				// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
				scale: 0.9,
				circle: 2.5,
				origin: [100, 100],
			},
		},

	],
}

export default Content
