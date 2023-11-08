import css from "./styles.module.css"

export function Header() {
	return (
		<header className={css.header}>
			<div className={css.hello}>
				Hi, I'm <h1>Romeo</h1>.
			</div>
			<div className={css.role}>
				<em>Software Engineer</em> at <em>Discogs.</em>
				<br />
				Based in <em>Amsterdam.</em>
			</div>
		</header>
	)
}
