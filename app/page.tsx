import { Header } from "~/components/header"
import { Expertise } from "~/components/expertise"
import { Skills } from "~/components/skills"

import css from "./styles.module.css"

export default function HomePage() {
	return (
		<>
			<Header />
			<div className={css.content}>
				<Expertise />
				<Skills />
			</div>
		</>
	)
}
