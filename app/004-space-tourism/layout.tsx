import type { Metadata } from "next"
import "./styles.css"

export const metadata: Metadata = {
	title: "004 - Space Tourism",
	description: "Space tourism is an incredible idea, but it's not easy to make it happen.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>
}
