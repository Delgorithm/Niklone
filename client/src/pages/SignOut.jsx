import React from 'react'
import { getAuth, signOut } from 'firebase/auth'

const SignOut = () => {
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Vous êtes déconnecté(e)");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return (
        <button onClick={handleSignOut}>SignOut</button>
    )
}

export default SignOut