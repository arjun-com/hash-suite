import md5 from "md5"
import { useState } from "react"
import { plexMono, inter } from "@/lib/fonts"

export default function Md5() {
	const [input, setInput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [output, setOutput] = useState("")
	const [processing, setProcessing] = useState(false)

	function generateHash() {
		if(prevInput == input) return
		if(input == "") return

		setProcessing(true)
		setOutput(md5(input))
		setPrevInput(input)
		setProcessing(false)
	}

	return(
		<>
			<textarea placeholder = "Input for hash function" onChange = {(e) => setInput(e.target.value)} value = { input } className = { `${ inter.className } bg-black text-neutral-100 w-full h-[100px] text-md border border-neutral-800 focus:border-neutral-600 rounded-md outline-none transition-colors p-2 my-2 font-light` }></textarea>
			<button onClick = { generateHash } className = { `w-full p-2 my-2 bg-black hover:bg-neutral-800 text-neutral-100 ${ inter.className } border border-neutral-800 rounded-md font-light transition-colors relative text-md ${ processing ? "animate-ping" : "" }` }>Generate Hash</button>
			<input type = "text" value = { output } disabled className = { `w-full bg-black text-neutral-100 ${plexMono.className} border border-neutral-800 rounded-md p-2 my-2 relative` } />
		</>
	)
}
