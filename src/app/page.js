import Image from "next/image"
import Link from "next/link"
import { brico, inter } from "../lib/fonts"

export default function Home() {
	return (
		<>
			<p className = "absolute top-2 left-1/2 -translate-x-1/2 text-md font-light">Work In Progress</p>

			<div className = "text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
				<h1 className = { `${brico.className} text-6xl my-6 text-neutral-100` }>Problems With Hashing?</h1>
				<Link href = "/suite" className = { `${inter.className} w-max align-top text-xl rounded-md px-6 py-2 bg-neutral-100 text-neutral-800 font-light group transition-all text-nowrap hover:ring-2 ring-blue-500 ring-offset-2` }>HashSuite has got your back. </Link>
			</div>

			<Image
				src = "/homepage_background.jpg"
				width = "1000"
				height = "1000"
				alt = "Dark background with math solutions sketched on it."
				className = "opacity-20 w-screen h-screen object-cover fixed top-0 left-0 z-0"
			/>
		</>
	)
}
