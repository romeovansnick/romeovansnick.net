import "./global.css"

import { Footer } from "~/components/footer"

import css from "./styles.module.css"

type Props = {
	children: React.ReactNode
}

export default function Layout(props: Props) {
	return (
		<html lang="en">
			<body>
				<div className={css.page}>
					{props.children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
