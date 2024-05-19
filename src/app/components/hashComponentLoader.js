import dynamic from "next/dynamic"

export default function HashComponentLoader({ hash }) {
	if(hash == null) {
		return(
			<>
				<h1 className = "text-center p-4 rounded-md border border-neutral-800 text-neutral-100 mx-auto my-4">Select A Hash From The Sidebar.</h1>
			</>
		)
	}

	const HashComponent = dynamic(() => import(`./hashComponents/${hash}`))

	return <HashComponent />
}
