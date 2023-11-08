import css from "./styles.module.css"

const github = "https://github.com/romeovs"
const linkedIn = "https://www.linkedin.com/in/romeo-van-snick-109894120/"
const repo = "https://github.com/romeovs/romeovansnick.net"
const email = "mailto:hello@romeovansnick.net"

export function Footer() {
	return (
		<footer className={css.footer}>
			<div className={css.main}>
				<div className={css.titles}>
					<h1>Romeo Van Snick</h1>
					<h2>Software Engineer and Consultant</h2>
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
							<a href="/resume">Résumé</a>
						</li>
						<li>
							<a href={repo} target="_blank" rel="noopener noreferrer">
								Repository
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className={css.foot}>Copyright &copy; 2023 Romeo Van Snick.</div>
		</footer>
	)
}
