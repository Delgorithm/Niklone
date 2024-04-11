import React from "react";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	let { user } = useUserAuth();
    const navigate = useNavigate();
	console.log(user);
	if (!user) {
		console.log(user);
        return navigate('/signup');
	}
	return children;
};

export default ProtectedRoute;
