import '../styles/app.scss';
import Layout from '../components/layout/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import Login from './pages/auth/Login';
import ProtectedRoutes from '../utils/ProtectedRoutes';
import ProtectedAuth from '../utils/ProtectedAuth';
import NotFound from './pages/NotFound';
import Apartments from './pages/apartments/Apartments';
import CreateApartment from './pages/apartments/CreateApartment';
import ApartmentDetails from './pages/apartments/ApartmentDetails';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Providers>
        <Layout>
          <Routes>
            <Route path='/' element={<ProtectedRoutes />}>
              <Route path="/" element={<Navigate to="/apartments" />} />
              <Route path="/apartments" element={<Apartments />} />
              <Route path="/apartments/create-apartment" element={<CreateApartment />} />
              <Route path="/apartments/create-apartment/:id" element={<CreateApartment />} />
              <Route path="/apartments/:id" element={<ApartmentDetails />} />
              <Route path="/not-found" element={<NotFound />} />
            </Route>
            <Route element={<ProtectedAuth />}>
              <Route path="/auth/login" element={<Login />} />
            </Route>
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </Layout>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
