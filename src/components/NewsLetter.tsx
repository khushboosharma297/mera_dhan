export default function Newsletter() {
  return (
    <section className="bg-orange-500 text-white py-8 md:py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Stay up-to-date with market updates!</h3>
            <p className="text-sm text-orange-100">Subscribe to our newsletter!</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email ID"
              className="flex-1 px-4 py-3 rounded text-gray-900 text-sm"
            />
            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-xs text-orange-100 mt-4">
          By clicking on "Subscribe" button, I agree to MeraDhan's Privacy Policy and Terms of Use.
        </p>
      </div>
    </section>
  )
}
