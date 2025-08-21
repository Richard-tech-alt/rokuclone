const supportCategories = [
  {
    title: "Getting Started",
    description: "Learn how to set up and activate your Roku device.",
  },
  {
    title: "Streaming Channels",
    description: "Find and manage your favorite streaming channels and apps.",
  },
  {
    title: "Troubleshooting",
    description: "Fix common issues with your Roku device and remote.",
  },
  {
    title: "Account & Billing",
    description: "Manage your Roku account, subscriptions, and payment options.",
  },
  {
    title: "Roku TV Support",
    description: "Get help specifically for Roku TV models and features.",
  },
  {
    title: "Contact Support",
    description: (
      <>
        Call our official Roku Helpline at <span className="font-semibold">+1 (833) 351-0302</span> for assistance.
      </>
    ),
  },
]

export default function SupportGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {supportCategories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-[#5A2D82] p-6 m-4 hover:shadow-md transition-shadow cursor-pointer group"
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-3 group-hover:text-purple-800 transition-colors">
            {category.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{category.description}</p>
        </div>
      ))}
    </div>
  )
}
