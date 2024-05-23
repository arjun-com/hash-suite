"use client"

import { useEffect, useState } from "react"
import { availableHashes as hashes } from "@/lib/hashesList"
import Image from "next/image"
import Link from "next/link"
import { brico } from "@/lib/fonts"
import { ArrowRightEndOnRectangleIcon, ArrowLeftEndOnRectangleIcon, StopIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter } from "next/navigation"

export default function Menu() {
	const router = useRouter()
	const [ isMobile, setIsMobile ] = useState(false)
	const [ menuHidden, setMenuHidden ] = useState(true) // Only matters if isMobile is true
	const [ selectedHash, setSelectedHash ] = useState(usePathname().split("/")[2])

	const handleClick = function(hash) {
		setSelectedHash(hash)
	}

	const routeToRoot = function() {
		router.push("/")
	}

	useEffect(function() {
		const handleWindowResize = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		handleWindowResize()

		window.addEventListener("resize", function() { handleWindowResize() })
	}, [])

	return (
		<>
			{
				menuHidden ?
				<ArrowRightEndOnRectangleIcon onClick = { () => { setMenuHidden(!menuHidden) } } className = { `cursor-pointer fixed z-20 bottom-2 left-2 w-12 h-12 p-3 rounded-md hover:bg-neutral-800 transition-colors  ${ isMobile ? "" : "hidden -z-50" } ` } />
				:
				<ArrowLeftEndOnRectangleIcon onClick = { () => { setMenuHidden(!menuHidden) } } className = { `cursor-pointer fixed z-20 bottom-2 left-2 w-12 h-12 p-3 rounded-md bg-neutral-800 transition-colors ${ isMobile ? "" : "hidden -z-50" } ` } />
			}

			<menu className = { `${ menuHidden && isMobile ? "w-0" : "min-w-48" } h-screen border-r border-neutral-800 overflow-scroll no-scrollbar transition-all` }>
				<section className = "border-b border-neutral-800 p-6">
					<Image
						src = "/icon.png"
						width = "600"
						height = "600"
						alt = "HashSuite logo with black background."
						className = "w-14 mx-auto cursor-pointer"
						onClick = { routeToRoot }
					/>
				</section>

				<section className = "p-6">
					{
						hashes.map(function(hash) {
							return(
								<Link key = { hash } href = { `/hashes/${hash}` } onClick = { () => handleClick(hash) } className = { `${ brico.className } text-lg text-left w-full block hover:bg-neutral-800 rounded-md my-2 p-2 group transition-all` }> <StopIcon className = "inline w-4 h-4 text-neutral-600 group-hover:fill-neutral-600"/> { hash }</Link>
							)
						})
					}
				</section>
			</menu>
		</>
	)
}
