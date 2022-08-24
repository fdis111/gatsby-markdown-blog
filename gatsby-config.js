module.exports = {
	siteMetadata: {
		siteUrl: `https://www.francoisdisubi.com/`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-WH736PZ',
				includeInDevelopment: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: { displayName: false },
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
					},
				],
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// gatsby-remark-relative-images must go before gatsby-remark-images
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							// [Optional] The root of "media_folder" in your config.yml
							// Defaults to "static"
							staticFolderName: 'static',
							// [Optional] Include the following fields, use dot notation for nested fields
							// All fields are included by default
							include: ['featured'],
							// [Optional] Exclude the following fields, use dot notation for nested fields
							// No fields are excluded by default
							exclude: ['featured.skip'],
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 1024, showCaptions: true },
					},
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							terminal: 'ubuntu',
							theme: 'blackboard',
						},
					},
				],
			},
		},
	],
};
