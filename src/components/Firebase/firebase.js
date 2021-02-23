import 'firebase/auth'
import app from 'firebase/app';


  // Your web app's Firebase configuration
const Config = {
    apiKey: "AIzaSyCIbtNOuvNgPMcWqImtFFeDD6h0AujWBmg",
    authDomain: "marvel-quiz-9c506.firebaseapp.com",
    projectId: "marvel-quiz-9c506",
    storageBucket: "marvel-quiz-9c506.appspot.com",
    messagingSenderId: "964006439341",
    appId: "1:964006439341:web:274742a041c9ef1e4dd924"
  };
  
class Firebase {
    constructor(){
        app.initializeApp(Config)
        this.auth = app.auth()
    }

    //Inscription 
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)

    //Connexion 
    signinUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

    //Déconnexion
    signoutUser = () => this.auth.signOut()
}

export default Firebase 