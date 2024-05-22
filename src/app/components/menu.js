import { availableHashes as hashes } from "@/lib/hashesList"
import Image from "next/image"
import { brico } from "@/lib/fonts"
import { StopIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export default function Menu({ selectedHash, setSelectedHash }) {
	const router = useRouter()

	const handleClick = function(hash) {
		setSelectedHash(hash)
	}

	const routeToRoot = function() {
		router.push("/")
	}

	return (
		<>
			<menu className = "w-48 h-screen border-r border-neutral-800 overflow-scroll no-scrollbar">
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
								<div key = { hash } className ={ `w-full rounded-md hover:bg-neutral-800 cursor-pointer transition-colors group my-2 ${ selectedHash == hash ? "bg-neutral-800" : "" }` }>
									<button onClick = { () => handleClick(hash) } className = { `${ brico.className } text-lg w-full text-left m-2` }> <StopIcon className = "inline w-4 h-4 text-neutral-600 group-hover:fill-neutral-600"/> { hash }</button>
								</div>
							)
						})
					}
				</section>
			</menu>
		</>
	)
}
