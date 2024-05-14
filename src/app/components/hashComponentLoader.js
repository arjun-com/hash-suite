import dynamic from "next/dynamic"

export default function HashComponentLoader({ hash }) {
	if(hash == null) {
		return(
			<>
				<h1>No hash selected.</h1>
			</>
		)
	}

	const HashComponent = dynamic(() => import(`./hashComponents/${hash}`))

	return <HashComponent />
}
