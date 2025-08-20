export default function WindowsSecurity() {
  const securityFeatures = [
    "Encrypted remote sessions to protect your privacy.",
    "You maintain full control over your computer at all times.",
    "We will never request confidential information or passwords.",
  ]

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Security Comes First</h2>

      <ul className="space-y-4">
        {securityFeatures.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
