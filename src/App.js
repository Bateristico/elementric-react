import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './App.css'

const App = () => {
  const activeMenu = true // momentarely
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-x1
                hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              {' '}
              navbar
            </div>
          </div>
          <div>
            <Routes>
              {/*Main Dashboard */}
              <Route path="/" element="Home" />
              <Route path="/home" element="Home" />
              <Route path="/organization" element="Organization" />
              <Route path="/buildingmaps" element="Building Maps" />
              <Route path="/buildinglist" element="Building List" />
              <Route path="/users" element="Users" />
              {/*App*/}
              <Route path="/events" element="Events" />
              <Route path="/webhooks" element="Webhooks" />
              {/*Settings*/}
              <Route path="/settings" element="Settings" />
              <Route path="/billing" element="Billing" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
