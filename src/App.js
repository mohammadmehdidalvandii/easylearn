import './custom.css'
import NavTop from './components/NavTop/NavTop';
import NavDown from './components/NavDown/NavDown';
import TopNavRes from './components/TopNavRes/TopNavRes';
import DownNavRes from './components/DownNavRes/DownNavRes';
import Footer from './components/Footer/Footer';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css'
function App() {

  const router = useRoutes(routes)
  return (
    <>
      <div className="nav-top">
        <NavTop />
      </div>
      <div className="nav-down">
        <NavDown />
      </div>
      <TopNavRes />
      <DownNavRes />
      {router}
      <Footer/>
    </>
  );
}

export default App;
