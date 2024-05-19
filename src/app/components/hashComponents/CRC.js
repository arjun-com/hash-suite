import { crc1, crc8, crc16, crc32 } from "crc"
import { useState } from "react"
import { brico, plexMono, inter } from "@/lib/fonts"

export default function CRC() {
	const [availableHashLengths] = useState([1, 8, 16, 32])
	const [input, setInput] = useState("")
	const [hashLength, setHashLength] = useState(32)
	const [output, setOutput] = useState("")
	const [prevInput, setPrevInput] = useState("")
	const [prevHashLength, setPrevHashLength] = useState(0)
	const [processing, setProcessing] = useState(false)

	async function generateHash() {
		if(hashLength == 0 || input == "") return null
		if(prevHashLength == hashLength && prevInput == input) return null

		const hashLengthToFunction = {
			1: crc1,
			8: crc8,
			16: crc16,
			32: crc32
		}

		setProcessing(true)
		setOutput(hashLengthToFunction[hashLength](input).toString(16))
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

			<section className = "flex-1 max-w-96 min-w-80 p-6">
				<h1 className = { `${ brico.className } text-2xl font-medium text-neutral-100` }>CRC</h1>

				<p className = { `${ inter.className } text-sm font-light text-neutral-200` }>
					CRC (Cyclic Redundancy Check) is a type of error-detecting code commonly used in digital networks and storage devices to detect accidental changes to raw data. Unlike cryptographic hash functions, CRC is not designed for security purposes but rather for data integrity.
					<br /><br />
					The CRC algorithm was developed by W. Wesley Peterson in 1961 as a method to detect errors in communication channels such as telecommunications and storage mediums like hard drives and flash memory.
					<br /><br />
					CRC works by generating a fixed-size checksum (typically 16 or 32 bits) based on the data being checked. This checksum is appended to the data and transmitted or stored alongside it. Upon receiving or retrieving the data, the checksum is recalculated, and if the recalculated checksum matches the transmitted checksum, it is assumed that the data is intact. If not, it indicates that errors have occurred during transmission or storage.
					<br /><br />
					One of the key advantages of CRC is its efficiency in detecting errors, particularly single-bit errors and burst errors commonly encountered in digital communication channels. However, CRC is not suitable for detecting malicious tampering or intentional alterations to data, as it lacks cryptographic security features.
				</p>
				</section>
		</>
	)
}
