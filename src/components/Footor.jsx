import React from "react";

// BADE AKSHARO ME YE WALA COMPONENT AI MADE  

// Minimal Working Example: Footer component using Tailwind CSS
// Dark themed (you can set body bg to #1E1E1E in your app)

export default function Footor({ brand = "", links = [], small = false }) {
  return (
    <footer className="w-full bg-black text-gray-300">
      <div className="max-w-[79%] mx-auto px- py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Brand + short description */}
          <div className="flex items-start gap-4">
            
            <div>
              <div className="text-white font-semibold text-lg">{brand}</div>
              <p className="text-sm text-gray-400 max-w-md"></p>
            </div>
          </div>

          {/* Links section */}
          <nav aria-label="footer" className="flex flex-wrap gap-4">
            {links.length > 0 ? (
              links.map((ln, i) => (
                <a
                  key={i}
                  href={ln.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {ln.label}
                </a>
              ))
            ) : (
              <>
              </>
            )}
          </nav>
        </div>

        <div className="mt- border-t border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} {brand}. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {/* simple social icons - accessible buttons */}
            <a aria-label="Twitter" href="#" className="p-2 rounded hover:bg-gray-800 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.11 1.53-1.92-.68.4-1.43.69-2.23.84C18.52 4.4 17.61 4 16.6 4c-1.72 0-3.11 1.39-3.11 3.11 0 .24.03.48.08.7C9.7 7.6 6.13 5.8 3.7 3.03c-.27.47-.43 1.02-.43 1.6 0 1.11.56 2.09 1.42 2.66-.52-.02-1.01-.16-1.44-.4v.04c0 1.5 1.06 2.75 2.47 3.03-.26.07-.54.11-.83.11-.2 0-.39-.02-.58-.06.39 1.22 1.52 2.11 2.86 2.14-1.05.82-2.37 1.31-3.81 1.31-.25 0-.5-.01-.74-.04 1.37.88 3 1.4 4.75 1.4 5.7 0 8.82-4.72 8.82-8.82v-.4c.6-.44 1.12-.98 1.53-1.6-.55.25-1.13.42-1.73.5z" />
              </svg>
            </a>

            <a aria-label="GitHub" href="#" className="p-2 rounded hover:bg-gray-800 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.64 3.01 8.57 7.19 9.97.53.1.72-.23.72-.51 0-.25-.01-1.09-.02-1.98-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.95 1.63 2.5 1.16 3.11.89.1-.7.37-1.16.67-1.43-2.33-.27-4.78-1.16-4.78-5.18 0-1.14.39-2.07 1.02-2.79-.1-.26-.44-1.28.1-2.67 0 0 .83-.27 2.73 1.05a9.5 9.5 0 0 1 2.49-.34c.85.01 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.39.2 2.41.1 2.67.63.72 1.02 1.65 1.02 2.79 0 4.03-2.46 4.9-4.8 5.16.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.94 0 .28.19.62.73.51C20 20.08 23 16.15 23 11.51 23 5.24 18.27.5 12 .5z" />
              </svg>
            </a>

            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded hover:bg-gray-800 transition hidden sm:inline-flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* compact mode for tiny screens (optional) */}
      {small && (
        <div className="w-full bg-gray-900 text-gray-400 text-center py-2 text-xs">Compact footer — {brand}</div>
      )}
    </footer>
  );
}

/*
Usage (example):

import Footer from "./Footer";

function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">Your app content</main>
      <Footer brand="My MWE" links={[{label:'Docs', href:'#'},{label:'Contact', href:'#'}]} />
    </div>
  )
}
*/
