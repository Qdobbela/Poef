import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUser } from "./useUser";

export default function User(){
  const [user, setUser] = useUser();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user.uid);
    } else {
      setUser(null);
    }
  });
}

