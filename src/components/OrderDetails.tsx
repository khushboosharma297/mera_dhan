// OrderDetails.tsx
export default function OrderDetails() {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Confirm Order</h2>
      </div>

      {/* Company Info */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-lg">🏢</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">KRAZYBEE SERVICES LIMITED</h3>
            <p className="text-xs text-gray-500">ISIN: INE342107G01</p>
          </div>
          <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium">✓ AAA</span>
        </div>
      </div>

      {/* Order Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <InfoCard label="Valid to Maturity" value="10000%" />
        <InfoCard label="Coupon Rate" value="10.7500%" />
        <InfoCard label="Issue Value" value="₹ 100,000.00" />
        <InfoCard label="Maturity Date" value="29 Jun 2027" />
        <InfoCard label="Clean Price" value="₹ 98.8842" />
        <InfoCard label="Accrual Date / Trade Date" value="25 Nov 2025 (Wednesday)" />
        <InfoCard label="Settlement Date" value="26 Nov 2025 (1 + 1)" dropdown />
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

      {/* Bank Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
        <AccountSection title="Demat Account Details">
          <DetailRow label="Account Number" value="000070163263278" verified />
          <DetailRow label="Bank Name" value="ICICI BANK LIMITED" />
        </AccountSection>

        <div className="md:col-span-1">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Depository</p>
            <p className="font-semibold text-gray-900">CDSL</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-xs text-gray-600 mb-2">Demat Account Type</p>
            <p className="font-semibold text-gray-900">SOLE</p>
          </div>
        </div>
      </div>

      {/* Settlement Amount */}
      <div className="bg-blue-50 rounded-lg p-4 md:p-6 border-t pt-6">
        <p className="text-sm text-gray-700 mb-2">Settlement Amount</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">(Total Consideration + Stamp Duty + Other Charges)</p>
        <p className="text-3xl font-bold text-orange-500">₹ 99,699.10</p>
        <p className="text-xs text-gray-600 mt-2">Amount (Unblocked)</p>
      </div>
    </div>
  )
}

function InfoCard({ label, value, dropdown }: { label: string; value: string; dropdown?: boolean }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
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
}

function AccountSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
}

function DetailRow({
  label,
  value,
  verified,
  badge
}: {
  label: string
  value: string
  verified?: boolean
  badge?: boolean
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-b-0">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-900">{value}</span>
        {verified && <span className="text-blue-600 text-xs">✓</span>}
        {badge && <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">✓ Verified</span>}
      </div>
    </div>
  )
}
