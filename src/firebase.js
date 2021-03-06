

import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";

import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import {
      doc,
      getFirestore,
      query,
      getDocs,
      collection,
      where,
      addDoc,
      setDoc,
      getDoc
    } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBZ_HJAqWcu4XKxFm6LUAv2w55rQVdKBl4",
    authDomain: "shop-demo-42d51.firebaseapp.com",
    projectId: "shop-demo-42d51",
    storageBucket: "shop-demo-42d51.appspot.com",
    messagingSenderId: "571824858342",
    appId: "1:571824858342:web:b2a655cb097e5309e38727"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);


  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
  try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
      });
      }
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Bạn đã đăng nhập vào tài khoản " + email)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };



export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}





  const registerWithEmailAndPassword = async (username, email, password, displayName) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password, displayName);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        authProvider: "local",
        email,
        displayName,
      });
      alert("Đăng ký thành công, hệ thống tự động đăng nhập ! " + username)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
    alert("Đã đăng xuất")
  };

  // Order

  const addOrder = async (infoCart) => {
    
    try {
      const newOrder =  doc(collection(db, "orders"));
      await setDoc(newOrder, infoCart)
      alert("Đặt hàng thành công!")
    } catch(err) {
      console.log(err.message);
    }
  }

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    addOrder,
  };