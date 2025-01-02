import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import HomePage from './app/HomePage'
import PropertiesPage from './app/PropertiesPage'
import CompanyInfoPage from './app/CompanyInfoPage'

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                {/* Sidebar will be always visible */}
                <Sidebar />

                <div className="flex-1">
                    {/* Nav will be always visible */}
                    <Nav />

                    {/* Content area, will change based on route */}
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/properties" element={<PropertiesPage />} />
                            <Route path="/company-info" element={<CompanyInfoPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
