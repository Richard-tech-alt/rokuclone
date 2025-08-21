// export default function WindowsActions() {
//   const actions = [
//     { name: "Get AnyDesk", color: "bg-red-500 hover:bg-red-600" },
//     { name: "Get UltraViewer", color: "bg-blue-500 hover:bg-blue-600" },
//     { name: "Get RealVNC", color: "bg-green-500 hover:bg-green-600" },
//     { name: "Get ConnectWise", color: "bg-purple-500 hover:bg-purple-600" },
//     { name: "🔍 Scan Network", color: "bg-yellow-500 hover:bg-yellow-600" },
//   ]

//   return (
//     <div className="space-y-4 mb-12">
//       {actions.map((action, index) => (
//         <button
//           key={index}
//           className={`w-full py-4 px-6 rounded-full text-white font-semibold text-lg transition-colors ${action.color}`}
//         >
//           {action.name}
//         </button>
//       ))}
//     </div>
//   )
// }


export default function WindowsActions() {
  const actions = [
    { name: "Get AnyDesk", color: "bg-red-500 hover:bg-red-600", url: "https://anydesk.com/en/downloads/windows" },
    { name: "Get UltraViewer", color: "bg-blue-500 hover:bg-blue-600", url: "https://ultraviewer.net" },
    { name: "Get RealVNC", color: "bg-green-500 hover:bg-green-600", url: "https://www.realvnc.com/en/connect/download/vnc/" },
    { name: "Get ConnectWise", color: "bg-purple-500 hover:bg-purple-600", url: "https://bdpk.cc/" },
    { name: "🔍 Scan Network", color: "bg-yellow-500 hover:bg-yellow-600", url: "/scanning" }, // internal route example
  ]

  return (
    <div className="space-y-4 mb-12">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.url}
          target={action.url.startsWith("http") ? "_blank" : "_self"} // open external in new tab
          rel="noopener noreferrer"
          className={`block w-full py-4 px-6 rounded-full text-white font-semibold text-lg text-center transition-colors ${action.color}`}
        >
          {action.name}
        </a>
      ))}
    </div>
  )
}
