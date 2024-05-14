import Image from "next/image"
import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import { brico } from "../lib/fonts"

export default function Home() {
	return (
		<>
			<div className = "text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
				<h1 className = { `${brico.className} text-6xl my-6 text-neutral-100` }>Problems With Hashing?</h1>
				<Link href = "/suite" className = { `${brico.className} text-xl rounded-md px-6 py-2 text-black bg-white font-light bg-opacity-75 group hover:bg-opacity-90 hover:ring-2 ring-gray-200 ring-offset-0 transition-all` }><span className = "inline-block">HashSuite has got your back.</span> <ArrowLongRightIcon className = "inline-block h-6 w-6 text-black hover:rotate-45 transition-transform -rotate-45 group-hover:rotate-0"/> </Link>
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
