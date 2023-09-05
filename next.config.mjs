export default {
	output: "standalone",
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	async headers() {
		const isDev = !process.argv.includes("build")

		if (isDev) {
			return []
		}

		const contentSecurityPolicy = `
			default-src
				'self'
				vercel.live
				assets.vercel.com
				vitals.vercel-insights.com
				*.pusher.com
				;

			img-src
				'self'
				assets.vercel.com
				vercel.com
				avatars.githubusercontent.com
				;

			style-src
				'self'
				'unsafe-inline'
				;

			script-src
				'self'
				'unsafe-inline'
				vercel.live
				;

			font-src
				'self'
				data:
				;
		`

		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Content-Security-Policy",
						value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
					},
				],
			},
		]
	},
}
