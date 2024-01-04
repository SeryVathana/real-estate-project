import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { supabase } from '..';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/slices/authSlice';

function MainLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    supabase.auth.onAuthStateChange((e, s) => {
      if (s) {
        console.log(s);
        dispatch(logIn({ userName: 'Seung Sovannary', userId: s.user.id, userEmail: s.user.email }));
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
