// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

  
	// General
	name: 'wiillou!',
	openInNewTab: true,
	twelveHourFormat: true,
  title: 'Bento',

	// Theme
	theme: 'latte-mocha',
	imageBackground: false,
  imageUrl: './assets/background.jpg', // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: 'Cock-a-Doodle-Doo',
	greetingAfternoon: 'Good nyafternoon,',
	greetingEvening: 'Good nyevening,',
	greetingNight: 'Go bed ;3',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '017b77a6cf784a856aad45bd8c6efc28', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '53.789',
	defaultLongitude: '-2.240',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  	changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'NixOS Seach',
			icon: 'box',
      link: 'search.nixos.org/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.proton.me/u/0/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Phind',
			icon: 'brain',
			link: 'https://phind.com',
		},
		{
			id: '2',
			name: 'hypr',
			icon: 'droplet',
			link: 'https://wiki.hyprland.org/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Ebay',
			icon: 'ebay',
			link: 'https://ebay.co.uk',
		},
		{
			id: '6',
			name: 'coolors',
			icon: 'paintbrush',
			link: 'https://coolors.co/000000',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'linux',
			id: '1',
			links: [
				{
					name: 'New Testament',
					link: 'https://nixos.wiki/',
				},
        {
					name: 'Old Testament',
					link: 'https://wiki.archlinux.org/',
				},
				{
					name: 'FOSS!',
					link: 'https://itsfoss.com/',
				},
				{
					name: 'LunarVIM',
					link: 'https://www.lunarvim.org/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'DeviantArt',
					link: 'https://www.deviantart.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Figma',
					link: 'https://www.figma.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Firefox Addons',
					link: 'https://addons.mozilla.org/en-GB/firefox/extensions/',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Anonfiles',
					link: 'https://anonfiles.com/',
				},
				{
					name: 'Catppuccin <3',
					link: 'https://www.catppuccin.github.io/',
				},
			],
		},
		{
			icon: 'reddit',
			id: '2',
			links: [
				{
					name: 'UnixP**n',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'UnixSocks',
					link: 'https://www.reddit.com/r/unixsocks/',
				},
				{
					name: 'ProgrammerHumor',
					link: 'https://www.reddit.com/r/ProgrammerHumor/',
				},
				{
					name: 'My Github',
					link: 'https://github.com/wiillou',
				},
			],
		},
	],
};
