import ".././globals.css";
import Menu from "../components/menu";

export const metadata = {
	title: "Hash Suite",
	description: "An all in one solution for all of your hashing needs.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className = "min-h-screen bg-black antialiased">
				<section className = "flex">
					<Menu />
					{ children }
				</section>
			</body>
		</html>
  	)
}
