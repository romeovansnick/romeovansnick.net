import Image from "next/image"

import icon from "./icon.png"
import dmg from "./dmg.png"

import open from "./open.png"
import play from "./play.png"
import drop from "./drop.png"
import menu from "./menu.png"

import css from "./styles.module.css"

export const metadata = {
	title: "NTS Desktop",
}

export default async function NTSPage() {
	return (
		<>
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

				<section className={css.installation}>
					<h2>Usage</h2>

					<h3>Opening NTS Desktop</h3>
					<p>
						To open the NTS Desktop pane, click the <code>NTS</code> logo in the menubar.
					</p>

					<p>
						You can also press <code>^</code> + <code>N</code>
					</p>

					<h3>Navigating NTS Desktop</h3>
					<p>NTS Desktop has three main sections: Channel 1, Channel 2 and Archive Shows.</p>
					<p>
						You can navigate between these by pressing the <code>←</code> and <code>→</code> keys, or by clicking the
						arrows in the NTS Desktop window.
					</p>

					<h3>Playing the channels</h3>
					<p>To play a channel, click the black box that says "live now"</p>
					<p>The menubar icon should reflect the currently playing channel</p>

					<h3>Playing an archived show</h3>
					<p>To play an archived show, drag the link from your browser onto the NTS logo in the menubar</p>
					<p>When you open NTS Desktop now, the third panel should display some information about the show</p>
					<p>You can play, pause or even seek in the show (even backwards seek works!)</p>
					<p>
						If you scroll down you can see the tracklist for the show. Clicking any of the items will copy the track
						info to your paseboard, for easy copying into YouTube or elsewhere.
					</p>

					<h3>Opening the chat</h3>
					<p>
						Clicking the text baloon icon in the Channel 1 or Channel 2 panes will open the chat in your default
						browser.
					</p>

					<h3>Opening the live tracklist</h3>
					<p>
						Clicking the tracklist icon in the Channel 1 or Channel 2 panes will open the live tracklist in your default
						browser.
					</p>
					<p>
						Please note that for the live tracklist to work, you need an NTS Friends account and you need to be logged
						in.
					</p>

					<h3>Right click menu</h3>
					<p>You can right-click the NTS icon in the menubar to show a context menu.</p>
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
