import "./global.css"

import { Footer } from "~/components/footer"

import css from "./styles.module.css"

type Props = {
	children: React.ReactNode
}

export const metadata = {
	title: "Romeo Van Snick",
}

export default function Layout(props: Props) {
	return (
		<html lang="en">
			<body>
				<div className={css.page}>{props.children}</div>
				<Footer />
			</body>
		</html>
	)
}
