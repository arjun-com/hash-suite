import { sha224, sha256 } from "@noble/hashes/sha256"
import { sha512 } from "@noble/hashes/sha512"
import { sha1 } from "@noble/hashes/sha1"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

export default function SHA3() {
	const [availableHashLengths] = useState([160, 224, 256, 512])
	const [input, setInput] = useState("")
	const [hashLength, setHashLength] = useState(160)
	const [output, setOutput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [prevHashLength, setPrevHashLength] = useState(0)
	const [processing, setProcessing] = useState(false)

	async function generateHash() {
		if(hashLength == 0 || input == "") return null
		if(prevHashLength == hashLength && prevInput == input) return null

		const hashLengthToFunction = {
			160: sha1,
			224: sha224,
			256: sha256,
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
								<>
									<button className = { `${ inter.className } flex-1 p-2 my-2 rounded-md border border-neutral-800 transition-colors ${ hashLength == availableHashLength ? "bg-neutral-800" : "" }` } onClick = { () => { setHashLength(availableHashLength) }}>{ availableHashLength } bit</button>
								</>
							)
						})
					}
				</div>
				<input type = "text" value = { output } disabled className = { `w-full bg-black text-neutral-100 ${plexMono.className} border border-neutral-800 rounded-md p-2 my-2 relative` } />
			</section>

			<section className = "w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>SHA3 Digest</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>{ `SHA-3, or Secure Hash Algorithm 3, is a cryptographic hash function designed by Keccak, selected as the winner of the NIST hash function competition in 2012. Its development was primarily motivated by the need for a secure hash algorithm that could offer resistance against emerging cryptographic attacks while maintaining high efficiency. Unlike its predecessors, SHA-1 and SHA-2, which are based on the Merkle–Damgård construction, SHA-3 utilizes the sponge construction, which enhances its resistance to certain types of attacks, such as length extension attacks. `}
				<br /><br />
				{ `One of the key features of SHA-3 is its flexibility in terms of output size and security level, providing hash functions with varying bit lengths to accommodate different security requirements. This adaptability makes SHA-3 suitable for a wide range of applications, from cryptographic protocols to digital signatures and password hashing. Its resistance to known attacks and its ability to withstand future cryptanalytic advances make it a robust choice for ensuring data integrity and authenticity in diverse security scenarios. `}
				<br /><br />
				{ `The design principles of SHA-3 emphasize simplicity, transparency, and security, with the intention of facilitating analysis and ensuring confidence in its cryptographic strength. Its internal structure comprises a permutation-based compression function, which undergoes repeated transformations to process input data and produce a fixed-size hash value. This design not only enhances its security but also contributes to its efficiency, allowing for fast and reliable hashing of large volumes of data. `}
				<br /><br />
				{ `Since its standardization, SHA-3 has gained widespread adoption in various cryptographic applications and protocols, becoming a cornerstone of modern information security. Its status as a NIST standard and its rigorous evaluation process provide assurance of its reliability and trustworthiness. As the cryptographic landscape continues to evolve, SHA-3 remains a pivotal tool for safeguarding digital assets and protecting against malicious attacks on data integrity.` }
				</p>
			</section>
		</>
	)
}
