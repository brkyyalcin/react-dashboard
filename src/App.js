import './sass/_main.scss';
import AdminLayout from './layouts/AdminLayout'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Helmet from 'react-helmet'
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';

function App() {
  const { dark } = useSelector((state) => state.site)
  return (
    <div className={dark ? 'dark' : 'light'}>
      <Helmet>
        <title>Admin Paneli</title>
      </Helmet>
      <BrowserRouter>
        <div role="navigation" className='wrapper'>
          <Routes >
            <Route path="/" element={<AdminLayout/>}>
              <Route path="Navs" element={<h1>blabla</h1>}></Route>
              <Route path='Pages'>
                <Route path='Login' element={<Login/>}></Route>
              </Route>
            </Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>

        </div>

      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
