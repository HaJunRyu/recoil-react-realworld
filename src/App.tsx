import { GlobalNavigation, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
