export default function WindowsHeader() {
  return (
    <header className="bg-blue-600 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-3">
          {/* Windows logo - 4 squares */}
          <div className="grid grid-cols-2 gap-1 w-6 h-6">
            <div className="bg-cyan-400 w-2.5 h-2.5 rounded-sm"></div>
            <div className="bg-cyan-400 w-2.5 h-2.5 rounded-sm"></div>
            <div className="bg-cyan-400 w-2.5 h-2.5 rounded-sm"></div>
            <div className="bg-cyan-400 w-2.5 h-2.5 rounded-sm"></div>
          </div>
          <span className="text-lg font-semibold">Windows Support</span>
        </div>

        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
          <span className="text-red-500">📞</span>
          +1 (833) 351-0302
        </button>
      </div>
    </header>
  )
}
