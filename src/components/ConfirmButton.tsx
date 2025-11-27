// ConfirmButton.tsx
import React, { FC } from 'react'

const ConfirmButton: FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 mt-6">
      <button className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg transition">
        Confirm & Continue →
      </button>
    </div>
  )
}

export default ConfirmButton
