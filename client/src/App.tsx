import {
	Routes,
	Route
} from 'react-router-dom';
import './App.css';

// Pages
import {
	Home,
	//Products,
	NoPage,
} from './Pages'

// Components
import {
	NavBar,
	Footer,
} from './Components'

/*
import logo from './logo.svg';
<img src={logo} className="App-logo" alt="logo" />
<code>src/App.tsx</code>
*/
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
