import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD3gUnb_8BzqVxxlP7wsELyr2MZFq2qZsw",
	authDomain: "project2-bc6af.firebaseapp.com",
	databaseURL: "https://project2-bc6af-default-rtdb.firebaseio.com",
	projectId: "project2-bc6af",
	storageBucket: "project2-bc6af.appspot.com",
	messagingSenderId: "643309579308",
	appId: "1:643309579308:web:28551ad613b6f402b7b589",
	measurementId: "G-FBNRV1BNPR",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
