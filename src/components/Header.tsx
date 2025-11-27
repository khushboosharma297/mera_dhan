export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-500">🎯</span>
            <div>
              <h1 className="text-lg font-bold text-gray-900">MeraDhan</h1>
              <p className="text-xs text-gray-500">Invest Wise, Grow Secure</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium">How it Works</a>
          <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium">Products</a>
          <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium">Tools</a>
          <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium">Resources</a>
          <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium">Login</a>
          <button className="bg-primary text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700">
            Sign Up
          </button>
        </nav>

        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
