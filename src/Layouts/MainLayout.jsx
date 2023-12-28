import Footer from '../components/Footer';
import Nav from '../components/Nav';

function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
