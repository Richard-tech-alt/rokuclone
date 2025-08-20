export default function WindowsHero() {
  return (
    <div className="text-center py-12">
      {/* Large Windows logo */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 gap-2 w-16 h-16">
          <div className="bg-cyan-400 rounded-lg"></div>
          <div className="bg-cyan-400 rounded-lg"></div>
          <div className="bg-cyan-400 rounded-lg"></div>
          <div className="bg-cyan-400 rounded-lg"></div>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Remote Support for Windows</h1>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Fast, secure, and reliable troubleshooting for your Windows PC from trusted professionals.
      </p>
    </div>
  )
}
