
import type React from "react"
import { useEffect } from "react"

interface LoadingScreenProps {
  isVisible: boolean
  onComplete?: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onComplete }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete()
        }
      }, 3000) // 3 seconds

      return () => clearTimeout(timer)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Detecting Your Device...</h1>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          Please wait while we redirect you to the right support page.
        </p>

        {/* Loading Spinner */}
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
