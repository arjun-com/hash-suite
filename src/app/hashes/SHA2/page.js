"use client"

import { sha224, sha256 } from "@noble/hashes/sha256"
import { sha512 } from "@noble/hashes/sha512"
import { sha384 } from "@noble/hashes/sha512"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

export default function SHA2() {
	const [availableHashLengths] = useState([224, 256, 384, 512])
	const [input, setInput] = useState("")
	const [hashLength, setHashLength] = useState(224)
	const [output, setOutput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [prevHashLength, setPrevHashLength] = useState(0)
	const [processing, setProcessing] = useState(false)

	async function generateHash() {
		if(hashLength == 0 || input == "") return null
		if(prevHashLength == hashLength && prevInput == input) return null

		const hashLengthToFunction = {
			224: sha224,
			256: sha256,
			384: sha384,
			512: sha512
		}

		setProcessing(true)
		setOutput(Buffer.from(hashLengthToFunction[hashLength](input)).toString("hex"))
		setPrevInput(input)
		setPrevHashLength(hashLength)
		setProcessing(false)
	}

	return(
		<>
			<section className = "flex-1 border-r border-neutral-800 p-6 min-w-96">
				<textarea placeholder = "Input for hash function" onChange = {(e) => setInput(e.target.value)} value = { input } className = { `${ inter.className } bg-black text-neutral-100 w-full h-[100px] text-md border border-neutral-800 focus:border-neutral-600 rounded-md outline-none transition-colors p-2 my-2 font-light` }></textarea>
				<button onClick = { generateHash } className = { `w-full p-2 my-2 bg-black hover:bg-neutral-800 text-neutral-100 ${ inter.className } border border-neutral-800 rounded-md font-light transition-colors relative text-md ${ processing ? "animate-ping" : "" }` }>Generate Hash</button>
				<div className = "flex">
					{
						availableHashLengths.map((availableHashLength) => {
							return(
								<button key = { availableHashLength } className = { `${ inter.className } flex-1 p-2 my-2 rounded-md border border-neutral-800 transition-colors ${ hashLength == availableHashLength ? "bg-neutral-800" : "" }` } onClick = { () => { setHashLength(availableHashLength) }}>{ availableHashLength } bit</button>
							)
						})
					}
				</div>
				<input type = "text" value = { output } disabled className = { `w-full bg-black text-neutral-100 ${plexMono.className} border border-neutral-800 rounded-md p-2 my-2 relative` } />
			</section>

			<section className = "flex-1 max-w-96 min-w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>SHA2 Hex Digest</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>
					Writing in progress.
				</p>
			</section>
		</>
	)
}
