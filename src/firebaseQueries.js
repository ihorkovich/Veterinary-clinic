import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export const addDocumentToCollection = async (coll, collId, data) => {
  const docRef = doc(db, coll, collId);
  await setDoc(docRef, data);
};

export const addDocumentToSubcollection = async (
  coll,
  collId,
  subcoll,
  subcollId,
  data
) => {
  const docRef = doc(db, coll, collId);
  const subcollRef = collection(docRef, subcoll);
  const subcollDocRef = doc(subcollRef, subcollId);
  await setDoc(subcollDocRef, data);
};

export const getAllDocumentsFromCollection = async (coll) => {
  const querySnapshot = await getDocs(collection(db, coll));
  const data = querySnapshot.docs.map((doc) => doc.data());
  return data;
};

export const getSpecificDocumentFromCollection = async (coll, collId) => {
  const documentRef = await getDoc(doc(db, coll, collId));
  return documentRef.data();
};

export const getAllDocumentsFromSubcollection = async (
  coll,
  collId,
  subcoll
) => {
  const subcollectionRef = collection(db, coll, collId, subcoll);
  const snapshot = await getDocs(subcollectionRef);
  const subcollectionData = snapshot.docs.map((doc) => doc.data());
  return subcollectionData;
};

export const getSpecificDocumentFromSubcollection = async (
  coll,
  collId,
  subcoll,
  subcollId
) => {
  const subcollectionRef = collection(db, coll, collId, subcoll);
  const specificDocRef = doc(subcollectionRef, subcollId);
  const specificDoc = await getDoc(specificDocRef);
  return specificDoc.data();
};

export const updateSpecificDocumentInCollection = async (
  coll,
  collId,
  data
) => {
  const documentRef = doc(db, coll, collId);
  await updateDoc(documentRef, data);
};

export const updateDocumentInSubcollection = async (
  coll,
  collId,
  subcoll,
  subcollId,
  data
) => {
  const subcollectionRef = collection(db, coll, collId, subcoll);
  const subDocRef = doc(subcollectionRef, subcollId);
  await updateDoc(subDocRef, data);
};

export const deleteSpecificDocumentFromCollection = async (coll, collId) => {
  await deleteDoc(doc(db, coll, collId));
};

export const deleteSpecificDocumentFromSubcollection = async (
  coll,
  collId,
  subcoll,
  subcollId
) => {
  const subcollectionRef = collection(db, coll, collId, subcoll);
  const documentRef = doc(subcollectionRef, subcollId);
  await deleteDoc(documentRef);
};
