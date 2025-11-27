// Breadcrumb.tsx
import React, { FC } from 'react'

const Breadcrumb: FC = () => {
  return (
    <nav className="bg-white px-4 py-3 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex items-center gap-2">
        <a href="#" className="text-primary hover:underline">Home</a>
        <span>/</span>
        <span className="text-gray-900">Place Order</span>
      </div>
    </nav>
  )
}

export default Breadcrumb
