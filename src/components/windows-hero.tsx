export default function WindowsHero() {
  return (
    <div className="text-center py-12">
      {/* Large Windows logo */}
      <div className="flex justify-center mb-8">
       <div className="flex items-center gap-y-96 ml-32">
          {/* Windows logo - 4 squares */}
           <img className="w-28 h-16" src="/windows-logo-vector-format-available-illustrator-ai-windows-logo-122264979-removebg-preview.png" alt=""/>
          <span className="text-lg font-semibold text-white">Windows Support</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Remote Support for Windows</h1>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Fast, secure, and reliable troubleshooting for your Windows PC from trusted professionals.
      </p>
    </div>
  )
}
