import { useContext, createContext, useEffect, useState } from 'react'
import firebase from './firebase'
import { createUser } from './db'

const authContext = createContext();

// custom react hook
function useProvideAuth() {
	const [user, setUser] = useState(null);

	const handleUser = rawUser => {
		if (rawUser) {
			const user = formatUser(rawUser)
			createUser(user.uid, user)
			setUser(user)
			return user
		}

		setUser(false)
		return false
	}

	const signInWithGithub = () => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider())
			.then(response => handleUser(response.user));
	}

	const signOut = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => handleUser(false))
	}

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setUser(user);
			} else {
				setUser(false);
			}
		});

		return (() => unsubscribe());
	}, [])

	return {
		user,
		signInWithGithub,
		signOut
	}
}

// HOC authContext Provider
export function AuthProvider({ children }) {
	const auth = useProvideAuth();
	return (
		<authContext.Provider value={auth}>
			{children}
		</authContext.Provider>
	);
}

// custom hook for implementing auth context
export const useAuth = () => {
	return useContext(authContext)
}

const formatUser = user => {
	return {
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL
	}
}