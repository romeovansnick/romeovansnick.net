import { Header } from "~/components/header"
import { Footer } from "~/components/footer"

import css from "./styles.module.css"

export default function HomePage() {
	return (
		<div className={css.page}>
			<Header />
			<Footer />
		</div>
	)
}
