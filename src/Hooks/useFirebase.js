import initializeAuthentication from "../component/FireBase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //   google signup
    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

                setUser({})
            }
            setIsLoading(false)
        });



        return () => unsubscribe;
    }, [])

    return {
        user,
        setUser,
        isLoading,
        signinWithGoogle,
        logOut
    }

}
export default useFirebase;