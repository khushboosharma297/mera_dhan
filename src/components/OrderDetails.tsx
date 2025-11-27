// OrderDetails.tsx
import React, { FC, ReactNode } from 'react'

interface InfoCardProps {
  label: string
  value: string
  dropdown?: boolean
}

interface AccountSectionProps {
  title: string
  children: ReactNode
}

interface DetailRowProps {
  label: string
  value: string
  verified?: boolean
  badge?: boolean
}

const OrderDetails: FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Review & Confirm Order</h2>
        <p className="text-sm text-gray-500">Check the order details and verify your account information before confirming.</p>
      </div>

      {/* Company Info */}
      <div className="border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🏢</div>
          <div>
            <h3 className="font-semibold text-gray-900">KRAZYBEE SERVICES LIMITED</h3>
            <p className="text-xs text-gray-500">ISIN: INE342107G01</p>
          </div>
          <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">AAA</span>
        </div>
      </div>

      {/* Order Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <InfoCard label="Valid to Maturity" value="10000%" />
        <InfoCard label="Coupon Rate" value="10.7500%" />
        <InfoCard label="Issue Value" value="₹ 100,000.00" />
        <InfoCard label="Maturity Date" value="29 Jun 2027" />
        <InfoCard label="Clean Price" value="₹ 98.8842" />
        <InfoCard label="Accrual Date / Trade Date" value="25 Nov 2025 (Wed)" />
        <InfoCard label="Settlement Date" value="26 Nov 2025" dropdown />
        <InfoCard label="Quantity of Bonds" value="1" />
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
        <AccountSection title="Demat Account Details">
          <DetailRow label="DP ID" value="MENEFC" />
          <DetailRow label="Client ID" value="I2081661" verified />
        </AccountSection>

        <AccountSection title="Bank Account Details">
          <DetailRow label="Bank Status" value="Verified" badge />
          <DetailRow label="Account Number" value="00070163263278" verified />
        </AccountSection>
      </div>

      {/* Bank & Demat Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
        <AccountSection title="Bank Account Details">
          <DetailRow label="Account Number" value="000070163263278" verified />
          <DetailRow label="Bank Name" value="ICICI BANK LIMITED" />
        </AccountSection>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-600 mb-1">Depository</p>
            <p className="font-semibold text-gray-900">CDSL</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <p className="text-xs text-gray-600 mb-1">Demat Account Type</p>
            <p className="font-semibold text-gray-900">SOLE</p>
          </div>
        </div>
      </div>

      {/* Settlement Amount */}
      <div className="bg-orange-50 rounded-xl p-6 border-t pt-6 text-center">
        <p className="text-sm text-gray-700 mb-1">Settlement Amount</p>
        <p className="text-lg md:text-2xl font-semibold text-gray-900 mb-1">(Total Consideration + Stamp Duty + Other Charges)</p>
        <p className="text-3xl font-bold text-orange-600">₹ 99,699.10</p>
        <p className="text-xs text-gray-500 mt-1">Amount (Unblocked)</p>
      </div>
    </div>
  )
}

const InfoCard: FC<InfoCardProps> = ({ label, value, dropdown }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
    <p className="text-xs text-gray-500 mb-1">{label}</p>
    <div className="flex items-center justify-between">
      <p className="font-semibold text-gray-900">{value}</p>
      {dropdown && (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )}
    </div>
  </div>
)

const AccountSection: FC<AccountSectionProps> = ({ title, children }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
)

const DetailRow: FC<DetailRowProps> = ({ label, value, verified, badge }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-b-0">
    <span className="text-sm text-gray-500">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-900">{value}</span>
      {verified && <span className="text-blue-600 text-xs font-semibold">✓</span>}
      {badge && <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Verified</span>}
    </div>
  </div>
)

export default OrderDetails
