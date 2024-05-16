import { blake2b } from "@noble/hashes/blake2b"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

export default function BLAKE2() {
	const [input, setInput] = useState("")
	const [output, setOutput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [processing, setProcessing] = useState(false)

	async function generateHash() {
		if(input == "" || prevInput == input) return null

		setProcessing(true)
		setOutput(Buffer.from(blake2b(input)).toString("hex"))
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

			<section className = "w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>CRC</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>
					Blake2b is a cryptographic hash function that was introduced in 2012 as part of the Blake2 family of cryptographic algorithms. It was developed by Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O&#39Hearn, and Christian Winnerlein. Building upon the earlier Blake hash function, Blake2b was designed to provide improved security, efficiency, and versatility for various cryptographic applications.
					<br /><br />
					Blake2b is widely used in various fields of computer science and cryptography. It serves as a fundamental building block for applications requiring secure hashing, such as digital signatures, password hashing, and data integrity verification. Additionally, Blake2b is utilized in blockchain technologies, including cryptocurrencies, for tasks like block hashing and mining.
					<br /><br />
					One of the key advantages of Blake2b is its high-speed hashing performance, making it suitable for both software and hardware implementations. It offers strong security guarantees against cryptographic attacks, including collision resistance and pre-image resistance. Blake2b also supports various input and output sizes, allowing for flexibility in different use cases. Moreover, its simple and compact design contributes to its efficiency and ease of integration.
					<br /><br />
					While Blake2b offers numerous benefits, it is essential to consider potential limitations. Like any cryptographic algorithm, Blake2b may be susceptible to future advancements in cryptanalysis, although it has undergone extensive scrutiny and analysis since its introduction. Additionally, its widespread adoption across different applications may lead to concerns about standardization and interoperability. Continuous evaluation and updates are necessary to ensure Blake2b&#39s resilience to emerging threats and evolving cryptographic requirements.
				</p>
			</section>
		</>
	)
}
