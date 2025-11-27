// App.tsx
import React, { FC } from 'react'
import Header from './components/Header'
import Breadcrumb from './components/BreadCrumb'
import OrderDetails from './components/OrderDetails'
import SecurityInfo from './components/SecurityInfo'
import ConfirmButton from './components/ConfirmButton'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <OrderDetails />
        <SecurityInfo />
        <ConfirmButton />
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
