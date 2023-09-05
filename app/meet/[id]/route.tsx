import { redirect } from "next/navigation"

type Context = {
	params: {
		id: string
	}
}

export function GET(_: Request, context: Context) {
	const { id } = context.params
	return redirect(`https://meet.google.com/${id}`)
}
