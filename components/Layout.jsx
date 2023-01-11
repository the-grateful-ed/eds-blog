import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col ">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
