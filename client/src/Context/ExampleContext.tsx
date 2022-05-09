import React, { useState } from "react";

export const ExampleContext = React.createContext({});

// Provider
export function ExampleProvider({ children }: any) {
	const [exampleState, setExampleState] = useState('Hello World i am the example text');
	return (
		<ExampleContext.Provider value={{exampleState, setExampleState}}>
			{children}
		</ExampleContext.Provider>
	)
}