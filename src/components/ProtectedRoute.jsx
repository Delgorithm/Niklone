import React from "react";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { user } = useUserAuth();

	if (!user) {
		console.log(user);
        return <Navigate to="/signup" />
	}
	return children;
};

export default ProtectedRoute;
