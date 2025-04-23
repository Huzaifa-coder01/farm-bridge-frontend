
import React from "react";
import { Link } from "react-router-dom";
import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Wheat className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Farm Bridge
              </span>
            </Link>
            <p className="mt-4 text-gray-500">
              Connecting Faisalabad farmers directly with urban consumers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Join Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/farmer-signup"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Register as Farmer
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-signup"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Register as Consumer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/marketplace"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/farmer-dashboard"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Farmer Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/consumer-dashboard"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Consumer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                WhatsApp: +92 300 1234567
              </li>
              <li className="text-base text-gray-500">
                Email: support@farmbridge.pk
              </li>
              <li className="text-base text-gray-500">
                Address: Faisalabad, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2025 Farm Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
