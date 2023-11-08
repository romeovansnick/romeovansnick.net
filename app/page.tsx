import { Header } from "~/components/header"
import { Expertise } from "~/components/expertise"
import { Skills } from "~/components/skills"
import { Footer } from "~/components/footer"

import css from "./styles.module.css"

export default function HomePage() {
	return (
		<div className={css.page}>
			<Header />
			<div className={css.content}>
				<Expertise />
				<Skills />
			</div>
			<Footer />
		</div>
	)
}
