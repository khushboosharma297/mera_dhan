// Footer.tsx
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Disclaimer */}
        <div className="mb-12 pb-8 border-b border-gray-700 text-center text-xs text-gray-400">
          <p>
            Disclaimer: Investments in debt securities/ municipal debt securities/ securitised debt instruments are subject to risks including credit risk and/ or default in payment. Read all the offer related documents carefully.
          </p>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">MeraDhan</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-white transition">f</a>
              <a href="#" className="hover:text-white transition">in</a>
              <a href="#" className="hover:text-white transition">tw</a>
              <a href="#" className="hover:text-white transition">yt</a>
              <a href="#" className="hover:text-white transition">li</a>
            </div>
            <p className="text-xs mb-4">
              📍 D-2703, Aditya Tower, Dr. SS Road, Parsi Panti (East) Mumbai - 400012, Maharashtra
            </p>
            <p className="text-xs">📧 contact@meradhan.co</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Bonds</a></li>
              <li><a href="#" className="hover:text-white transition">Fixed Deposits</a></li>
              <li><a href="#" className="hover:text-white transition">Debentures</a></li>
              <li><a href="#" className="hover:text-white transition">Return Calculator</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Career</a></li>
              <li><a href="#" className="hover:text-white transition">Media Kit</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">News</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition">Events</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 MeraDhan. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
