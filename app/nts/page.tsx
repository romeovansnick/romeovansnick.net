import Image from "next/image"
import Head from "next/head"

import icon from "./icon.png"
import dmg from "./dmg.png"

import open from "./open.png"
import play from "./play.png"
import drop from "./drop.png"
import menu from "./menu.png"

import css from "./styles.module.css"

export default async function NTSPage() {
	return (
		<>
			<Head>
				<title>NTS Desktop</title>
			</Head>
			<div className={css.page}>
				<section className={css.header}>
					<div className={css.app}>
						<img src={icon.src} alt="NTS Desktop" sizes="20vw" />
						<h1 className={css.title}>NTS Desktop</h1>
					</div>
					<div className={css.description}>
						<p>An unofficial NTS app for your desktop computer.</p>
						<p>Use NTS without the need for an open browser window.</p>
					</div>
				</section>

				<section className={css.gifs}>
					<div>
						<img src={play.src} width={play.width / 2} height={play.height / 2} />
					</div>
					<div>
						<img src={drop.src} width={drop.width / 2} height={drop.height / 2} />
					</div>
					<div>
						<img src={menu.src} width={menu.width / 2} height={menu.height / 2} />
					</div>
				</section>

				<section className={css.installation}>
					<h2>Installation</h2>

					<ol>
						<li>Download the latest version below,</li>
						<li>
							Open the downloaded <code>.dmg</code> file,
						</li>
						<li>
							Drag the <code>NTS Desktop</code> to you <code>Applications</code> folder,
						</li>
						<li>
							Open the <code>NTS Desktop</code> you just dragged.
							<br />
							The first time you open the app it will show an error because the app is not signed using a Mac Developer
							License. These licenses are expensive so I do not own a Mac Developer license.
						</li>
						<li>
							To circumvent this issue, you can:
							<ol>
								<li>
									Open <code>System Preferences</code>,
								</li>
								<li>
									Go to the <code>Privacy &amp; Security</code> tab,
								</li>
								<li>
									Go to the <code>Privacy &amp; Security</code> tab,
								</li>
								<li>
									Scroll down and click <code>Open Anyway</code>,
								</li>
								<li>
									In the resulting pop up, click <code>Open Anyway</code> again.
								</li>
							</ol>
						</li>
					</ol>

					<DownloadLink />
				</section>
			</div>
		</>
	)
}

type Asset = {
	url: string
	name: string
	browser_download_url: string
}

type Release = {
	tag_name: string
	name: string
	body: string
	assets: Asset[]
}

async function DownloadLink() {
	const url = "https://api.github.com/repos/romeovs/nts-desktop/releases"
	const resp = await fetch(url, {
		headers: {
			"x-github-api-version": "2022-11-28",
			accept: "application/vnd.github+json",
		},
		next: {
			revalidate: 1,
		},
	})
	const data: Release[] = await resp.json()
	const latest = data[0]
	const asset = latest?.assets[0]

	if (!latest || !asset) {
		return null
	}

	return (
		<a href={asset.browser_download_url} download className={css.download}>
			<img src={dmg.src} />
			Download {latest.tag_name}
		</a>
	)
}
