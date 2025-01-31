import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screenflex flex-col bg-white">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
