export const SITE = {
	title: 'Resources',
	description: 'Website made to collect resources needed for CS and the underlying fields. Collected by Khaled & Viper.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: '/public/',
		alt:
			'Khaled & Viper OG'
	}
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Main Resources', header: true },
		{ text: 'Home', link: 'en/home' },
		{ text: 'Developer Tooling', link: 'en/developer-tooling' },
		
		{ text: 'Main Resources', header: true },
		{ text: 'General Computer Science', link: 'en/general-cs' },
		{ text: 'Data Science', link: 'en/data-science' },
		{ text: 'Web Development', link: 'en/web-dev' },
	],
};
