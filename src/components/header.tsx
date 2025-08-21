// export default function Header() {
//   return (
//     <div className="bg-[#5A2D82] text-white py-3">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <div className="flex justify-end">
//           <span className="text-sm">
//             Need help? Call Toll-Free: <span className="font-semibold">+1 (810) 258-3601</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function Header() {
  return (
    <div className="bg-[#5A2D82] text-white py-3">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center sm:justify-end text-center sm:text-right">
          <span className="text-xs sm:text-sm md:text-base">
            Need help? Call Toll-Free:{" "}
            <span className="font-semibold block sm:inline">
              +1 (810) 258-3601
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
