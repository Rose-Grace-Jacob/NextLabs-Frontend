import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PointsPage from './pages/PointsPage';
import TasksPage from './pages/TasksPage';
import UserLayout from './components/User/UserLayout';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomepage from './pages/Admin/AdminHomePage';
import AddAppPage from './pages/Admin/AddAppPage';
import Header from './components/Header'
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<SignUpPage/>} path='/register' />   {/* Signup page for user */}
        </Routes>
          <AuthProvider>
            <Header />
              <Routes>
                {/* <Route element={<HomePage/>} path="/" exact /> */}
                <Route element={<LoginPage/>} path="/login" />
              </Routes>

              <Routes>
                <Route element={<AdminLayout />} path='/admin/' >
                      <Route element={<AdminHomepage/>} path='/admin/home' exact />
                      <Route element={<AddAppPage/>} path='/admin/add-app' />
                  </Route>
                
                <Route element={<UserLayout/>} path="/user/">
                    <Route element={<HomePage/>} path="/user/home" />
                    <Route element={<ProfilePage/>} path="/user/profile" />
                    <Route element={<PointsPage/>} path="/user/points" />
                    <Route element={<TasksPage/>} path="/user/tasks" />
                  </Route>
              </Routes>

          </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
