// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Web Application',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'E-Commerce',
		category: 'E-Commerce',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'E-Learning',
		category: 'Educational',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Custom CMS',
		category: 'Custom CMS',
		img: require('@/assets/images/ui-project-2.jpg'),
	}
];

export default projects;
