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
	twelveHourFormat: false,
  title: 'Home',

	// Theme
	theme: 'latte-mocha',
	imageBackground: false,
  imageUrl: './assets/background.jpg', // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: 'Morning,',
	greetingAfternoon: 'Afternoon,',
	greetingEvening: 'Have a Nice Evening,',
	greetingNight: 'Go bed',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '017b77a6cf784a856aad45bd8c6efc28', // Write here your API Key
	weatherIcons: 'Onedark', // 'Onedark', 'Nord', 'Dark', 'White'
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
      link: 'https://search.nixos.org/packages',
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
      icon: "image",
      id: '1',
      links: [
        {
					name: 'Youtube',
					link: 'https://youtube.com',
				},
        {
					name: 'Odysee',
					link: 'https://odysee.com/',
				},
        {
					name: 'Reddit',
					link: 'https://reddit.com'',
				},
        {
					name: 'Coolors',
					link: 'hhttps://www.coolors.co/000000',
				},
      ]
    },
		{
			icon: 'snowflake',
			id: '2',
			links: [
				{
					name: 'Nix Search',
					link: 'https://search.nixos.org',
				},
				{
					name: 'Nixlang Wiki',
					link: 'https://nixlang.wiki',
				},
				{
					name: 'MyNixOS',
					link: 'https://mynixos.com',
				},
				{
					name: 'Nixpkgs Github',
					link: 'https://www.github.com/NixOS/nixpkgs',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'code-2',
			id: '1',
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/wiillou',
				},
				{
					name: 'Phind',
					link: 'https://phind.com',
				},
        			{
          				name: 'LazyVim',
          				url: 'https://lazyvim.org',
        			},
        			{
          				name: 'Catppuccin',
          				link: 'https://catppuccin.github.io'
        			}
				],
			},
		{
			icon: 'folder-open-dot',
			id: '2',
			links: [
        			{
          				name: 'Proton Mail',
          				link: 'https://proton.me',
        			},
				{
					name: 'Empty',
					link: 'https://www.wiillou.github.io/bento',
				},
				{
					name: 'Empty',
					link: 'https://www.wiillou.github.io/bento',
				},
				{
					name: 'Empty',
					link: 'https://www.wiillou.github.io/bento',
				},
			],
		},
	],
};
