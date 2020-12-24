import { useContext, createContext, useEffect, useState } from 'react'
import firebase from './firebase'

const authContext = createContext();

// custom react hook
function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signInWithGithub = () => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider())
			.then(response => {
				setUser(response.user);
				return response.user;
			});
	}

	const signOut = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
			})
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
export function ProviderAuth(props) {
	const auth = useProvideAuth();
	return (
		<authContext.Provider value={auth}>
			{props.children}
		</authContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(authContext)
}