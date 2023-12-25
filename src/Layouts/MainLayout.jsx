import Nav from '../components/Nav';

function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default MainLayout;
