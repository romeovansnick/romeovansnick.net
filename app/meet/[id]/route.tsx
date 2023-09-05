import { redirect } from "next/navigation"

export function GET(_: Request, { params }) {
	const { id } = params
	return redirect(`https://meet.google.com/${id}`)
}
