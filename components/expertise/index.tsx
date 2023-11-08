import css from "./styles.module.css"

export function Expertise() {
	return (
		<section className={css.expertise}>
			<div>
				<h2>Highly effective developer</h2>
				<p>Known for delivering code that is maintainable and simple, even in the setting of complex problems.</p>
			</div>

			<div>
				<h2>Strong eye for design</h2>
				<p>Steers conceptualization, delivers the right features and well-designed experiences.</p>
			</div>

			<div>
				<h2>Standards-based and Open Source</h2>
				<p>Future-proof code built according to today's best practices and modern standards.</p>
			</div>
		</section>
	)
}
