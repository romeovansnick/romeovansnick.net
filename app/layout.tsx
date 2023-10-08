import "./global.css"

type Props = {
	children: React.ReactNode
}

export default function Layout(props: Props) {
	return (
		<html lang="en">
			<body>{props.children}</body>
		</html>
	)
}
