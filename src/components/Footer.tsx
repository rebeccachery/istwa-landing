import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl text-white mb-2">LIBERTÉ</div>
            <p className="text-neutral-500">
              © 2025 Liberté Film. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-red-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-red-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-red-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-900 text-center text-sm text-neutral-500">
          <p>
            This film honors the memory of those who fought for Haiti's independence and
            the universal struggle for human freedom.
          </p>
        </div>
      </div>
    </footer>
  );
}
