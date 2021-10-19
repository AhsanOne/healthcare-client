import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication()
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])

    const handleSignOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        handleGoogleSignIn,
        handleSignOut
    }
}

export default useFirebase