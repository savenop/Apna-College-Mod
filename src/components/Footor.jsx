import React from "react";

// BADE AKSHARO ME YE WALA COMPONENT AI MADE  

// Minimal Working Example: Footer component using Tailwind CSS
// Dark themed (you can set body bg to #1E1E1E in your app)

 function Footor ({ brand = "v0.0.1", links = [], small = false }) {
  return (
    <footer className="w-full bg-black text-gray-300">
      <div className="max-w-[79%] mx-auto px- py-8 sm:py-12">
        <div className="mt- border-t border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} {brand}</p>

          <div className="flex items-center gap-3">
            {/* simple social icons - accessible buttons */}


            <a aria-label="Twitter" href="#" className="p-2 rounded hover:bg-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ced4da"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/></svg>
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

      {/* compact mode for tiny screens (optional)
      {small && (
        <div className="w-full bg-gray-900 text-gray-400 text-center py-2 text-xs">Compact footer — {brand}</div>
      )} */}
    </footer>
  );
}

export default Footor
