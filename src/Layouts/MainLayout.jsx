import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { supabase } from '..';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/slices/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/firebaseconfig';
import { current } from '@reduxjs/toolkit';
import { doc, onSnapshot } from 'firebase/firestore';

function MainLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        onSnapshot(doc(db, 'users', currentUser?.uid), (doc) => {
          console.log('Current user: ', doc.data());
          const user = doc.data();
          dispatch(
            logIn({
              userName: user.lastName + ' ' + user.firstName,
              userEmail: user.email,
              userRole: user.role,
              userId: currentUser?.uid,
            })
          );
        });
      }
    });
  }, []);

  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
