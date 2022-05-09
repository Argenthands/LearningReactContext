import React, { useContext } from "react"
import { ExampleContext } from "../../Context/ExampleContext"
import { 
	Card,
	Title,
 } from "../../Components/index"

export function Home() {
	const example = useContext(ExampleContext) as any
	return (
		<div className='Home'>
			Home
			{example.exampleState}
		</div>
	)
}
