import './sass/_main.scss';
import AdminLayout from './layouts/AdminLayout'
import { useSelector,useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import { setIsWhoDrop } from './stores/site';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  const { dark ,toogleBtn } = useSelector((state) => state.site)
  return (
    <HelmetProvider>
    <div className={dark ? 'dark' : 'light'}>
      <Helmet>
        <title>Admin Paneli</title>
      </Helmet>
      <BrowserRouter>
        <div role="navigation" className={'wrapper'+ (toogleBtn ? " close" : "") }>
          <Routes >
            <Route path="/" element={<AdminLayout/>}>
              <Route path="Navs" element={<h1>blabla</h1>}></Route>
              <Route path='Pages'>
               
              </Route>
            </Route>
            <Route path='Login' element={<Login/>}></Route>
            <Route path='*' element={<ErrorPage Code="404" ErrorTitle="Not Found" ErrorDesc="The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved." />}></Route>
          </Routes>

        </div>

      </BrowserRouter>

      <ToastContainer />
    </div>
    </HelmetProvider>
  );
}

export default App;
