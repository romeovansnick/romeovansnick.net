import Link from "next/link"
import css from "./styles.module.css"

const github = "https://github.com/romeovs"
const linkedIn = "https://www.linkedin.com/in/romeo-van-snick-109894120/"
const repo = "https://github.com/romeovs/romeovansnick.net"
const email = "mailto:contact@romeovansnick.net"

export function Footer() {
	return (
		<footer className={css.footer}>
			<div className={css.main}>
				<div className={css.titles}>
					<h1>
						<Link href="/">Romeo Van Snick</Link>
					</h1>
					<h2>
						Software Engineering <br /> and Consultancy
					</h2>
				</div>

				<nav>
					<ul>
						<li>
							<a href={email}>Email</a>
						</li>
						<li>
							<a href={github} target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</li>
						<li>
							<a href={linkedIn} target="_blank" rel="noopener noreferrer">
								LinkedIn
							</a>
						</li>
						<li>
							<a href={repo} target="_blank" rel="noopener noreferrer">
								Repository
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className={css.foot}>
				Copyright &copy; 2023 Romeo Van Snick &mdash; <Link href="/privacy-statement">Privacy Statement</Link>
			</div>
		</footer>
	)
}
