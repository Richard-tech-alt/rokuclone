// "use client"

// import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
// import { usePathname } from "next/navigation"
// import { LoadingScreen } from "./loading-screen"

// interface LoadingContextType {
//   isLoading: boolean
//   setLoading: (loading: boolean) => void
// }

// const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

// export function useLoading() {
//   const context = useContext(LoadingContext)
//   if (!context) {
//     throw new Error("useLoading must be used within LoadingProvider")
//   }
//   return context
// }

// interface LoadingProviderProps {
//   children: ReactNode
// }

// export function LoadingProvider({ children }: LoadingProviderProps) {
//   const [isLoading, setIsLoading] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     setIsLoading(true)
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 3000)

//     return () => clearTimeout(timer)
//   }, [pathname])

//   const setLoading = (loading: boolean) => {
//     setIsLoading(loading)
//   }

//   return (
//     <LoadingContext.Provider value={{ isLoading, setLoading }}>
//       <LoadingScreen isLoading={isLoading} />
//       <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}>{children}</div>
//     </LoadingContext.Provider>
//   )
// }
