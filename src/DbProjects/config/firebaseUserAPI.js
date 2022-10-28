import {
	collection,
	query,
	orderBy,
	getDocs,
	doc,
	updateDoc,
	deleteDoc,
	addDoc,
} from "firebase/firestore";
import { db } from "./db";

export const updateUserAPI = (id, email, password) => {
	const fbUserRef = doc(db, "users", id);
	return updateDoc(fbUserRef, {
		email: email,
		password: password,
	});
};

export const addUserAPI = (data) => {
	return addDoc(collection(db, "users"), data);
};
export const deleteUserAPI = (id) => {
	const firebaseUserObj = doc(db, "users", id);
	return deleteDoc(firebaseUserObj);
};
export const getUsersAPI = () => {
	const q = query(collection(db, "users"), orderBy("created", "desc"));
	return getDocs(q);
};
