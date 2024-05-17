"use client"

import { useEffect, useState } from "react"
import HashComponentLoader from "../components/hashComponentLoader"
import Menu from "../components/menu"
import MenuMobile from "../components/menuMobile"

export default function Suite() {
	const [selectedHash, setSelectedHash] = useState(null)
	const [isMobile, setIsModile] = useState(false)

	useEffect(function() {
		const handleWindowResize = function() {
			setIsModile(window.innerWidth <= 768)
		}

		handleWindowResize()

		window.addEventListener("resize", function() {
			handleWindowResize()
		})
	}, [])

	return (
		<>
			<div className = "flex h-screen overflow-y-hidden">
				{
					!isMobile ?
					<Menu selectedHash = { selectedHash } setSelectedHash = { setSelectedHash } />
					:
					<MenuMobile selectedHash = { selectedHash } setSelectedHash = { setSelectedHash } />
				}

				<section className = "flex-1 overflow-scroll no-scrollbar">
					{
						<div className = "mx-auto flex"> { /* flex attribute here cuz the hash components are defined such that they are elements inside a flexbox. */}
							<HashComponentLoader hash = { selectedHash } />
						</div>
					}
				</section>
			</div>
		</>
	)
}
