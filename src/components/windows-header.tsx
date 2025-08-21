export default function WindowsHeader() {
  const handleCall=()=>{
      window.location.href = "tel:+1 810 258 3601"
  }
  return (
    <header className="bg-blue-600 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-3">
          {/* Windows logo - 4 squares */}
           <img className="w-12 h-12" src="/windows-logo-vector-format-available-illustrator-ai-windows-logo-122264979-removebg-preview.png" alt=""/>
          <span className="text-lg font-semibold text-white">Windows Support</span>
        </div>

        <button onClick={handleCall} className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
          <span className="text-red-500">📞</span>
          +1 810 258 3601
        </button>
      </div>
    </header>
  )
}
