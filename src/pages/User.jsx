import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";

function User() {
	const { user } = useUserAuth();
	return (
		<>
			<Navbar />
			<section className="mx-6">
				<h1 className="text-2xl pb-4">Page utilisateur</h1>
				<p className="pb-4">Utilisateur : {user.email}</p>
				<p>Mes articles favoris :</p>
			</section>
			<Footer />
		</>
	);
}

export default User;
