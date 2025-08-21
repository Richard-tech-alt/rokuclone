// import type React from "react"

// import { useState } from "react"

// export default function SearchSection() {
//   const [searchQuery, setSearchQuery] = useState("")

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle search functionality here
//     console.log("Searching for:", searchQuery)
//   }

//   return (
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How can we help you?</h2>

//       <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
//         <div className="flex flex-col sm:flex-row gap-2">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search support topics, articles, and more..."
//             className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
//           />
//           <button
//             type="submit"
//             className="px-8 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }


import type React from "react"
import { useState } from "react"

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
        How can we help you?
      </h2>

      <div className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search support topics, articles, and more..."
            className="flex-1 w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg sm:rounded-md text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-500"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-purple-700 text-white font-medium rounded-lg sm:rounded-md hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-base sm:text-sm whitespace-nowrap active:bg-purple-900"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}