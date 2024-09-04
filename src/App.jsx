import Header from "./Header";
import Navigation from "./Navigation";
import Section from "./Section";
import Seo from "./Seo";
import Footer from "./Footer";

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Header />
				<Section />
				<Seo />
			</main>
			<Footer />
		</>
	);
}

export default App;
