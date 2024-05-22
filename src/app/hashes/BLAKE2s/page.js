"use client"

import { blake2s } from "@noble/hashes/blake2s"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

export default function BLAKE2s() {
	const [input, setInput] = useState("")
	const [output, setOutput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [processing, setProcessing] = useState(false)

	async function generateHash() {
		if(input == "" || prevInput == input) return null

		setProcessing(true)
		setOutput(Buffer.from(blake2s(input)).toString("hex"))
		setPrevInput(input)
		setProcessing(false)
	}

	return(
		<>
			<section className = "flex-1 border-r border-neutral-800 p-6 min-w-96">
				<textarea placeholder = "Input for hash function" onChange = {(e) => setInput(e.target.value)} value = { input } className = { `${ inter.className } bg-black text-neutral-100 w-full h-[100px] text-md border border-neutral-800 focus:border-neutral-600 rounded-md outline-none transition-colors p-2 my-2 font-light` }></textarea>
				<button onClick = { generateHash } className = { `w-full p-2 my-2 bg-black hover:bg-neutral-800 text-neutral-100 ${ inter.className } border border-neutral-800 rounded-md font-light transition-colors relative text-md ${ processing ? "animate-ping" : "" }` }>Generate Hash</button>
				<input type = "text" value = { output } disabled className = { `w-full bg-black text-neutral-100 ${plexMono.className} border border-neutral-800 rounded-md p-2 my-2 relative` } />
			</section>

			<section className = "flex-1 max-w-96 min-w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>Blake2s Hex Digest</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>
					Writing in progress.
				</p>
			</section>
		</>
	)
}
