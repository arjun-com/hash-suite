"use client"

import { availableHashes as hashes } from "@/lib/hashesList"
import Image from "next/image"
import { plexMono } from "@/lib/fonts"
import { StopIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import HashComponentLoader from "../components/hashComponentLoader"

export default function Suite() {
	const [selectedHash, setSelectedHash] = useState(null)

	const handleClick = function(hash) {
		setSelectedHash(hash)
	}

	return (
		<>
			<div className = "flex h-screen overflow-y-hidden">
				<menu className = "w-48 h-screen border-r border-neutral-800 overflow-scroll no-scrollbar">
					<section className = "border-b border-neutral-800 p-6">
						<Image
							src = "/icon.png"
							width = "600"
							height = "600"
							alt = "HashSuite logo with black background."
							className = "w-14 mx-auto"
						/>
					</section>

					<section className = "p-6">
						{
							hashes.map(function(hash) {
								return(
									<>
										<div className = "w-full p-2 rounded-md hover:bg-neutral-800 cursor-pointer transition-colors group">
											<button onClick = { () => handleClick(hash) } className = { `${ plexMono.className } text-lg` }> <StopIcon className = "inline w-4 h-4 text-neutral-600 group-hover:fill-neutral-600"/> { hash }</button>
										</div>
									</>
								)
							})
						}
					</section>
				</menu>

				<section className = "flex-1 overflow-scroll no-scrollbar p-4">
					{
						<div className = "mx-auto max-w-[500px]">
							<HashComponentLoader hash = { selectedHash } />
						</div>
					}
				</section>
			</div>
		</>
	)
}
