export default function SecurityInfo() {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-6">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600" />
        <span className="text-sm text-gray-700">
          I hereby give MeraDhan permission to act as my broker end to send or respond to filed (non-negligible) quotes for the security on the IFO platform (one to One Model) of any stock exchange and to take any steps needed to complete the transaction.
        </span>
      </label>
    </div>
  )
}
