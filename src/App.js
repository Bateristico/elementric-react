import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Home,
  Billing,
  Buildings,
  Maps,
  Events,
  Organization,
  Settings,
  Users,
  Webhooks,
  Login,
} from './pages';

import { useStateContext } from './context/ContextProvider';
import './App.css';

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  const loggedIn = false;

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {!loggedIn ? (
        <div className="dark:bg-main-dark-bg">
          <Login />
        </div>
      ) : (
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent content="Theme Settings" position="Top">
                <button
                  type="button"
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  style={{ background: currentColor, borderRadius: '50%' }}
                  onClick={() => setThemeSettings(true)}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}
                <Routes>
                  {/*Main Dashboard */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/organization" element={<Organization />} />
                  <Route path="/maps" element={<Maps />} />
                  <Route path="/buildings" element={<Buildings />} />
                  <Route path="/users" element={<Users />} />
                  {/*App*/}
                  <Route path="/events" element={<Events />} />
                  <Route path="/webhooks" element={<Webhooks />} />
                  {/*Settings*/}
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/billing" element={<Billing />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
