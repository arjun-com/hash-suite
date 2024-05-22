"use client"

import md5 from "md5"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

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
			<section className = "flex-1 border-r border-neutral-800 p-6 min-w-96">
				<textarea placeholder = "Input for hash function" onChange = {(e) => setInput(e.target.value)} value = { input } className = { `${ inter.className } bg-black text-neutral-100 w-full h-[100px] text-md border border-neutral-800 focus:border-neutral-600 rounded-md outline-none transition-colors p-2 my-2 font-light` }></textarea>
				<button onClick = { generateHash } className = { `w-full p-2 my-2 bg-black hover:bg-neutral-800 text-neutral-100 ${ inter.className } border border-neutral-800 rounded-md font-light transition-colors relative text-md ${ processing ? "animate-ping" : "" }` }>Generate Hash</button>
				<input type = "text" value = { output } disabled className = { `w-full bg-black text-neutral-100 ${plexMono.className} border border-neutral-800 rounded-md p-2 my-2 relative` } />
			</section>

			<section className = "flex-1 max-w-96 min-w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>MD5 Hex Digest</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>The MD5 (Message Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value. It was created by Ronald Rivest in 1991 as a successor to MD4, with the intention of strengthening the security of hash functions.
				<br />
				<br />
				MD5 was designed to be fast and efficient, generating a unique fixed-size hash value for any input data. It is commonly used in various applications such as digital signatures, checksums, and data integrity verification.
				<br />
				<br />
				However, due to vulnerabilities discovered over time, including collision attacks, MD5 is no longer considered secure for cryptographic purposes. It is recommended to use stronger hash functions such as SHA-256 or SHA-3 for cryptographic applications.
				<br />
				<br />
				Despite its security shortcomings, MD5 still finds use in non-cryptographic applications such as storing passwords (with proper salting and hashing algorithms), checksums for verifying data integrity in non-security-critical scenarios, and as a checksum in file integrity verification.
				<br />
				<br />
				It is important to note that MD5 should not be relied upon for cryptographic security in modern systems, but it can still be useful in certain contexts where cryptographic strength is not a primary concern.</p>
			</section>
		</>
	)
}
