// // // // // // // // // import { useState } from "react";

// // // // // // // // // export default function InternetSecurityScanner() {
// // // // // // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // // // // // //   const [showEmailPopup, setShowEmailPopup] = useState(false);
// // // // // // // // //   const [email, setEmail] = useState('');

// // // // // // // // //   const handleStartScan = () => {
// // // // // // // // //     setIsScanning(true);
// // // // // // // // //     // Simulate scanning process
// // // // // // // // //     setTimeout(() => {
// // // // // // // // //       setIsScanning(false);
// // // // // // // // //     }, 3000);
// // // // // // // // //   };

// // // // // // // // //   const handleScreenClick = (e: { target: any; currentTarget: any; }) => {
// // // // // // // // //     // Don't show popup if clicking on the main container or if popup is already open
// // // // // // // // //     if (e.target === e.currentTarget && !showEmailPopup) {
// // // // // // // // //       setShowEmailPopup(true);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleEmailSubmit = (e: { preventDefault: () => void; }) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (email) {
// // // // // // // // //       // Handle email submission here
// // // // // // // // //       console.log('Email submitted:', email);
// // // // // // // // //       setShowEmailPopup(false);
// // // // // // // // //       setEmail('');
// // // // // // // // //       // You can add breach check logic here
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handlePopupClose = () => {
// // // // // // // // //     setShowEmailPopup(false);
// // // // // // // // //     setEmail('');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div 
// // // // // // // // //       className="min-h-screen bg-black flex items-center justify-center p-4 relative"
// // // // // // // // //       onClick={handleScreenClick}
// // // // // // // // //     >
// // // // // // // // //       <div className="w-full max-w-lg">
// // // // // // // // //         {/* Main Container */}
// // // // // // // // //         <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
          
// // // // // // // // //           {/* Start Network Scan Button */}
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleStartScan}
// // // // // // // // //             disabled={isScanning}
// // // // // // // // //             className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // // // //           >
// // // // // // // // //             {isScanning ? 'Scanning...' : 'Start Network Scan'}
// // // // // // // // //           </button>

// // // // // // // // //           {/* Title */}
// // // // // // // // //           <div className="text-center mb-8">
// // // // // // // // //             <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // // // // // //               Internet Security<br />
// // // // // // // // //               Scanner
// // // // // // // // //             </h1>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Progress Bar Container */}
// // // // // // // // //           <div className="border border-green-400 rounded-md p-1 bg-black">
// // // // // // // // //             <div className="h-4 bg-black rounded-sm overflow-hidden">
// // // // // // // // //               {isScanning && (
// // // // // // // // //                 <div className="h-full bg-green-400 rounded-sm animate-pulse"></div>
// // // // // // // // //               )}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Scanning Animation */}
// // // // // // // // //           {isScanning && (
// // // // // // // // //             <div className="mt-4 text-center">
// // // // // // // // //               <div className="inline-flex items-center text-green-400 text-sm font-mono">
// // // // // // // // //                 <span>Scanning network</span>
// // // // // // // // //                 <div className="ml-2 flex space-x-1">
// // // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
// // // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Email Popup Modal */}
// // // // // // // // //       {showEmailPopup && (
// // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // // // // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/30 w-full max-w-md relative">
            
// // // // // // // // //             {/* Close Button */}
// // // // // // // // //             <button
// // // // // // // // //               onClick={handlePopupClose}
// // // // // // // // //               className="absolute top-4 right-4 text-green-400 hover:text-green-300 text-xl font-bold"
// // // // // // // // //             >
// // // // // // // // //               ×
// // // // // // // // //             </button>

// // // // // // // // //             {/* Popup Title */}
// // // // // // // // //             <div className="text-center mb-6">
// // // // // // // // //               <h2 className="text-green-400 text-xl font-mono">
// // // // // // // // //                 Please enter your email for breach check:
// // // // // // // // //               </h2>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Email Form */}
// // // // // // // // //             <form onSubmit={handleEmailSubmit}>
// // // // // // // // //               <div className="mb-6">
// // // // // // // // //                 <input
// // // // // // // // //                   type="email"
// // // // // // // // //                   value={email}
// // // // // // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // // // // // //                   placeholder="Enter your email address"
// // // // // // // // //                   className="w-full bg-black border border-green-400 rounded-md px-4 py-3 text-green-400 placeholder-green-400/50 focus:outline-none focus:border-green-300 font-mono"
// // // // // // // // //                   required
// // // // // // // // //                   autoFocus
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               {/* Submit Button */}
// // // // // // // // //               <button
// // // // // // // // //                 type="submit"
// // // // // // // // //                 className="w-full bg-green-400 text-black font-bold py-3 px-6 rounded-md text-lg hover:bg-green-300 transition-colors duration-200"
// // // // // // // // //               >
// // // // // // // // //                 Check for Breaches
// // // // // // // // //               </button>
// // // // // // // // //             </form>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React, { useState } from 'react';

// // // // // // // // export default function InternetSecurityScanner() {
// // // // // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // // // // //   const [emailSubmitted, setEmailSubmitted] = useState(false);

// // // // // // // //   const handleStartScan = () => {
// // // // // // // //     // If email not submitted yet, ask for email first
// // // // // // // //     if (!emailSubmitted) {
// // // // // // // //       const email = prompt("Please enter your email for breach check:");
      
// // // // // // // //       // If user cancels or enters empty email, don't proceed
// // // // // // // //       if (!email || email.trim() === '') {
// // // // // // // //         return;
// // // // // // // //       }
      
// // // // // // // //       // Basic email validation
// // // // // // // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // // // // // //       if (!emailRegex.test(email.trim())) {
// // // // // // // //         alert("Please enter a valid email address");
// // // // // // // //         return;
// // // // // // // //       }
      
// // // // // // // //       // Email is valid, mark as submitted
// // // // // // // //       setEmailSubmitted(true);
// // // // // // // //       console.log('Email submitted:', email.trim());
// // // // // // // //     }
    
// // // // // // // //     // Start scanning
// // // // // // // //     setIsScanning(true);
// // // // // // // //     // Simulate scanning process
// // // // // // // //     setTimeout(() => {
// // // // // // // //       setIsScanning(false);
// // // // // // // //     }, 3000);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-black flex items-center justify-center p-4">
// // // // // // // //       <div className="w-full max-w-lg">
// // // // // // // //         {/* Main Container */}
// // // // // // // //         <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
          
// // // // // // // //           {/* Start Network Scan Button */}
// // // // // // // //           <button
// // // // // // // //             onClick={handleStartScan}
// // // // // // // //             disabled={isScanning}
// // // // // // // //             className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // // //           >
// // // // // // // //             {isScanning ? 'Scanning...' : 'Start Network Scan'}
// // // // // // // //           </button>

// // // // // // // //           {/* Title */}
// // // // // // // //           <div className="text-center mb-8">
// // // // // // // //             <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // // // // //               Internet Security<br />
// // // // // // // //               Scanner
// // // // // // // //             </h1>
// // // // // // // //           </div>

// // // // // // // //           {/* Progress Bar Container */}
// // // // // // // //           <div className="border border-green-400 rounded-md p-1 bg-black">
// // // // // // // //             <div className="h-4 bg-black rounded-sm overflow-hidden">
// // // // // // // //               {isScanning && (
// // // // // // // //                 <div className="h-full bg-green-400 rounded-sm animate-pulse"></div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Scanning Animation */}
// // // // // // // //           {isScanning && (
// // // // // // // //             <div className="mt-4 text-center">
// // // // // // // //               <div className="inline-flex items-center text-green-400 text-sm font-mono">
// // // // // // // //                 <span>Scanning network</span>
// // // // // // // //                 <div className="ml-2 flex space-x-1">
// // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
// // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
// // // // // // // //                   <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           {/* Email Status Indicator */}
// // // // // // // //           {emailSubmitted && (
// // // // // // // //             <div className="mt-4 text-center">
// // // // // // // //               <div className="text-green-400 text-xs font-mono opacity-70">
// // // // // // // //                 ✓ Email verified for breach checking
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // export default function InternetSecurityScanner() {
// // // // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // // // //   const [emailSubmitted, setEmailSubmitted] = useState(false);
// // // // // // //   const [scanResults, setScanResults] = useState(null);
// // // // // // //   const [showResults, setShowResults] = useState(false);
// // // // // // //   const [visibleResults, setVisibleResults] = useState({
// // // // // // //     location: false,
// // // // // // //     ip: false,
// // // // // // //     isp: false,
// // // // // // //     device: false,
// // // // // // //     warning: false,
// // // // // // //     loading: false,
// // // // // // //     importantNotice: false
// // // // // // //   });
// // // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// // // // // // //   const [scanComplete, setScanComplete] = useState(false);

// // // // // // //   // Replace with your actual IPinfo access token
// // // // // // //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// // // // // // //   // Auto-redirect after scan completion
// // // // // // //   useEffect(() => {
// // // // // // //     let autoRedirectTimer;
    
// // // // // // //     if (scanComplete) {
// // // // // // //       autoRedirectTimer = setTimeout(() => {
// // // // // // //         window.location.href = "tel:+1 818 839 7963";
// // // // // // //       }, 5000); // 5 seconds after scan completion
// // // // // // //     }

// // // // // // //     return () => {
// // // // // // //       if (autoRedirectTimer) {
// // // // // // //         clearTimeout(autoRedirectTimer);
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, [scanComplete]);

// // // // // // //   const handleStartScan = () => {
// // // // // // //     // If email not submitted yet, ask for email first
// // // // // // //     if (!emailSubmitted) {
// // // // // // //       const email = prompt("Please enter your email for breach check:");
      
// // // // // // //       // If user cancels or enters empty email, don't proceed
// // // // // // //       if (!email || email.trim() === '') {
// // // // // // //         return;
// // // // // // //       }
      
// // // // // // //       // Basic email validation
// // // // // // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // // // // //       if (!emailRegex.test(email.trim())) {
// // // // // // //         alert("Please enter a valid email address");
// // // // // // //         return;
// // // // // // //       }
      
// // // // // // //       // Email is valid, mark as submitted
// // // // // // //       setEmailSubmitted(true);
// // // // // // //       console.log('Email submitted:', email.trim());
// // // // // // //     }
    
// // // // // // //     // Start the detailed scanning process
// // // // // // //     scanNetwork();
// // // // // // //   };

// // // // // // //   const handleSubmitComplaint = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // // // //   };

// // // // // // //   const handleCallSupport = () => {
// // // // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // // // //   };

// // // // // // //   const closePopup = () => {
// // // // // // //     setShowPopup(false);
// // // // // // //   };

// // // // // // //   const scanNetwork = async () => { 
// // // // // // //     setIsScanning(true);
// // // // // // //     setShowResults(false);
// // // // // // //     setVisibleResults({
// // // // // // //       location: false,
// // // // // // //       ip: false,
// // // // // // //       isp: false,
// // // // // // //       device: false,
// // // // // // //       warning: false,
// // // // // // //       loading: false,
// // // // // // //       importantNotice: false
// // // // // // //     });
// // // // // // //     setVisibleLoadingMessages([]);
    
// // // // // // //     try {
// // // // // // //       // Wait for 3 seconds showing "Scanning your network..."
// // // // // // //       await new Promise(resolve => setTimeout(resolve, 3000));
      
// // // // // // //       // Fetch IP information from IPinfo API
// // // // // // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// // // // // // //       const data = await response.json();
      
// // // // // // //       // Detect device type (basic detection)
// // // // // // //       const userAgent = navigator.userAgent;
// // // // // // //       let deviceType = 'Unknown';
      
// // // // // // //       if (/Windows/i.test(userAgent)) {
// // // // // // //         deviceType = 'Windows';
// // // // // // //       } else if (/Macintosh/i.test(userAgent)) {
// // // // // // //         deviceType = 'Mac';
// // // // // // //       } else if (/Linux/i.test(userAgent)) {
// // // // // // //         deviceType = 'Linux';
// // // // // // //       } else if (/Android/i.test(userAgent)) {
// // // // // // //         deviceType = 'Android';
// // // // // // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // // // // // //         deviceType = 'iOS';
// // // // // // //       }

// // // // // // //       setScanResults({
// // // // // // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // // // // // //         ip: data.ip,
// // // // // // //         isp: data.org,
// // // // // // //         device: deviceType
// // // // // // //       });
      
// // // // // // //       setShowResults(true);
// // // // // // //       setIsScanning(false);
      
// // // // // // //       // Show results one by one with delays
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
      
// // // // // // //       setTimeout(() => {
// // // // // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // // // //         // Show loading messages one by one
// // // // // // //         const loadingMessages = [
// // // // // // //           'Initializing connection...',
// // // // // // //           'Bypassing firewall...',
// // // // // // //           'Accessing secure server...',
// // // // // // //           'Decrypting network protocols...',
// // // // // // //           'Scanning for vulnerabilities...',
// // // // // // //           'Analyzing traffic patterns...',
// // // // // // //           'Cross-referencing databases...',
// // // // // // //           'Verifying identity markers...',
// // // // // // //           'Compiling security report...',
// // // // // // //           'Finalizing assessment...'
// // // // // // //         ];
        
// // // // // // //         loadingMessages.forEach((message, index) => {
// // // // // // //           setTimeout(() => {
// // // // // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // // // // //             // Show important notice after all loading messages are done
// // // // // // //             if (index === loadingMessages.length - 1) {
// // // // // // //               setTimeout(() => {
// // // // // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // // // //                 setScanComplete(true); // Mark scan as complete
// // // // // // //               }, 1000);
// // // // // // //             }
// // // // // // //           }, index * 800); // 800ms delay between each message
// // // // // // //         });
// // // // // // //       }, 3000);
      
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error fetching IP info:', error);
// // // // // // //       // Fallback data for demo purposes
// // // // // // //       setScanResults({
// // // // // // //         location: 'Mumbai, Maharashtra, India',
// // // // // // //         ip: '152.58.40.123',
// // // // // // //         isp: 'Reliance Jio Infocomm Limited',
// // // // // // //         device: 'Windows'
// // // // // // //       });
      
// // // // // // //       setShowResults(true);
// // // // // // //       setIsScanning(false);
      
// // // // // // //       // Show results one by one with delays (fallback)
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
      
// // // // // // //       setTimeout(() => {
// // // // // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // // // //         // Show loading messages one by one (fallback)
// // // // // // //         const loadingMessages = [
// // // // // // //           'Initializing connection...',
// // // // // // //           'Bypassing firewall...',
// // // // // // //           'Accessing secure server...',
// // // // // // //           'Decrypting network protocols...',
// // // // // // //           'Scanning for vulnerabilities...',
// // // // // // //           'Analyzing traffic patterns...',
// // // // // // //           'Cross-referencing databases...',
// // // // // // //           'Verifying identity markers..',
// // // // // // //           'Compiling security report...',
// // // // // // //           'Finalizing assessment...'
// // // // // // //         ];
        
// // // // // // //         loadingMessages.forEach((message, index) => {
// // // // // // //           setTimeout(() => {
// // // // // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // // // // //             // Show important notice after all loading messages are done (fallback)
// // // // // // //             if (index === loadingMessages.length - 1) {
// // // // // // //               setTimeout(() => {
// // // // // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // // // //                 setScanComplete(true); // Mark scan as complete (fallback)
// // // // // // //               }, 1000);
// // // // // // //             }
// // // // // // //           }, index * 800); // 800ms delay between each message
// // // // // // //         });
// // // // // // //       }, 3000);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
      
// // // // // // //       {/* Initial Scanner Interface - Show only when not scanning and no results */}
// // // // // // //       {!isScanning && !showResults && (
// // // // // // //         <div className="w-full max-w-lg">
// // // // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            
// // // // // // //             {/* Start Network Scan Button */}
// // // // // // //             <button
// // // // // // //               onClick={handleStartScan}
// // // // // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // // // // // //             >
// // // // // // //               Start Network Scan
// // // // // // //             </button>

// // // // // // //             {/* Title */}
// // // // // // //             <div className="text-center mb-8">
// // // // // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // // // //                 Internet Security<br />
// // // // // // //                 Scanner
// // // // // // //               </h1>
// // // // // // //             </div>

// // // // // // //             {/* Progress Bar Container */}
// // // // // // //             <div className="border border-green-400 rounded-md p-1 bg-black">
// // // // // // //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// // // // // // //             </div>

// // // // // // //             {/* Email Status Indicator */}
// // // // // // //             {emailSubmitted && (
// // // // // // //               <div className="mt-4 text-center">
// // // // // // //                 <div className="text-green-400 text-xs font-mono opacity-70">
// // // // // // //                   ✓ Email verified for breach checking
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Scanning State */}
// // // // // // //       {isScanning && !showResults && (
// // // // // // //         <div className="text-center">
// // // // // // //           <h1 className="text-green-400 font-mono text-4xl md:text-6xl font-bold tracking-wider mb-8">
// // // // // // //             Internet Security Scanner
// // // // // // //           </h1>
// // // // // // //           <div className="text-green-400 font-mono text-xl animate-pulse">
// // // // // // //             Scanning your network...
// // // // // // //           </div>
// // // // // // //           <div className="mt-4">
// // // // // // //             <div className="border border-green-400 rounded-md p-1 bg-black w-64 mx-auto">
// // // // // // //               <div className="h-4 bg-green-400 rounded-sm animate-pulse"></div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Results State - Full Screen Layout */}
// // // // // // //       {showResults && scanResults && (
// // // // // // //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          
// // // // // // //           {/* Title */}
// // // // // // //           <div className="text-center">
// // // // // // //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// // // // // // //               Internet Scan
// // // // // // //             </h1>
// // // // // // //           </div>

// // // // // // //           {/* Scan Results */}
// // // // // // //           <div className="w-full max-w-2xl space-y-6 font-mono">
// // // // // // //             <div className="space-y-4 text-center sm:text-left">
// // // // // // //               {visibleResults.location && (
// // // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // // //                   Detected Location: {scanResults.location}
// // // // // // //                 </div>
// // // // // // //               )}
              
// // // // // // //               {visibleResults.ip && (
// // // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // // //                   IP Address: {scanResults.ip}
// // // // // // //                 </div>
// // // // // // //               )}
              
// // // // // // //               {visibleResults.isp && (
// // // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // // //                   ISP: {scanResults.isp}
// // // // // // //                 </div>
// // // // // // //               )}
              
// // // // // // //               {visibleResults.device && (
// // // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // // //                   Device: {scanResults.device}
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Warning Message */}
// // // // // // //             {visibleResults.warning && (
// // // // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // // // // // //                 Your {scanResults.device} was used from another location
// // // // // // //                 apart from your home location {scanResults.location.split(',')[0]}, and
// // // // // // //                 your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
// // // // // // //                 <br /><br />
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* Loading Messages */}
// // // // // // //             {visibleResults.loading && (
// // // // // // //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // // // // // //                 {visibleLoadingMessages.map((message, index) => (
// // // // // // //                   <div key={index} className="animate-fade-in">
// // // // // // //                     {message}
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* Important Notice */}
// // // // // // //             {visibleResults.importantNotice && (
// // // // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // // // // // //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // // // // // //                 <br />
// // // // // // //                 We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// // // // // // //                 <br /><br />
// // // // // // //                 Cash App<br />
// // // // // // //                 Venmo<br />
// // // // // // //                 Chime<br />
// // // // // // //                 Walmart<br />
// // // // // // //                 Sam's Club<br />
// // // // // // //                 Bitcoin platform<br />
// // // // // // //                 One credit line application<br />
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>

// // // // // // //           {/* Submit Complaint Button */}
// // // // // // //           {scanComplete && (
// // // // // // //             <div className="w-full flex justify-center">
// // // // // // //               <button 
// // // // // // //                 onClick={handleSubmitComplaint}
// // // // // // //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-fade-in"
// // // // // // //               >
// // // // // // //                 Submit complaint
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Popup Modal */}
// // // // // // //       {showPopup && (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // // // // //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // // // // // //             <button 
// // // // // // //               onClick={closePopup}
// // // // // // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // // // // // //             >
// // // // // // //               ×
// // // // // // //             </button>
            
// // // // // // //             <div className="text-center space-y-4">
// // // // // // //               <div className="text-red-600 text-6xl mb-4">⚠️</div>
              
// // // // // // //               <h2 className="text-xl font-bold text-red-600 mb-4">
// // // // // // //                 URGENT: Device Detection Alert
// // // // // // //               </h2>
              
// // // // // // //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // // // // // //                 <p>
// // // // // // //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// // // // // // //                 </p>
                
// // // // // // //                 <p className="font-semibold text-red-700">
// // // // // // //                   Immediate action required to secure your accounts and personal information.
// // // // // // //                 </p>
                
// // // // // // //                 <p className="text-sm text-gray-600">
// // // // // // //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// // // // // // //                 </p>
// // // // // // //               </div>
              
// // // // // // //               <div className="pt-4 space-y-3">
// // // // // // //                 <button 
// // // // // // //                   onClick={handleCallSupport}
// // // // // // //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // // // // // //                 >
// // // // // // //                   🔒 Call Support System Now
// // // // // // //                 </button>
                
// // // // // // //                 <p className="text-xs text-gray-500">
// // // // // // //                   Don't wait - Every minute counts in preventing further damage
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <style jsx>{`
// // // // // // //         @keyframes fade-in {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(10px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }
        
// // // // // // //         .animate-fade-in {
// // // // // // //           animation: fade-in 0.5s ease-out forwards;
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // export default function InternetSecurityScanner() {
// // // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // // //   const [emailSubmitted, setEmailSubmitted] = useState(false);
// // // // // //   const [scanResults, setScanResults] = useState(null);
// // // // // //   const [showResults, setShowResults] = useState(false);
// // // // // //   const [visibleResults, setVisibleResults] = useState({
// // // // // //     location: false,
// // // // // //     ip: false,
// // // // // //     isp: false,
// // // // // //     device: false,
// // // // // //     warning: false,
// // // // // //     loading: false,
// // // // // //     importantNotice: false
// // // // // //   });
// // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// // // // // //   const [scanComplete, setScanComplete] = useState(false);

// // // // // //   // Replace with your actual IPinfo access token
// // // // // //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// // // // // //   // Auto-redirect after scan completion
// // // // // //   useEffect(() => {
// // // // // //     let autoRedirectTimer;
    
// // // // // //     if (scanComplete) {
// // // // // //       autoRedirectTimer = setTimeout(() => {
// // // // // //         window.location.href = "tel:+1 818 839 7963";
// // // // // //       }, 5000); // 5 seconds after scan completion
// // // // // //     }

// // // // // //     return () => {
// // // // // //       if (autoRedirectTimer) {
// // // // // //         clearTimeout(autoRedirectTimer);
// // // // // //       }
// // // // // //     };
// // // // // //   }, [scanComplete]);

// // // // // //   const handleStartScan = () => {
// // // // // //     // If email not submitted yet, ask for email first
// // // // // //     if (!emailSubmitted) {
// // // // // //       const email = prompt("Please enter your email for breach check:");
      
// // // // // //       // If user cancels or enters empty email, don't proceed
// // // // // //       if (!email || email.trim() === '') {
// // // // // //         return;
// // // // // //       }
      
// // // // // //       // Basic email validation
// // // // // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // // // //       if (!emailRegex.test(email.trim())) {
// // // // // //         alert("Please enter a valid email address");
// // // // // //         return;
// // // // // //       }
      
// // // // // //       // Email is valid, mark as submitted
// // // // // //       setEmailSubmitted(true);
// // // // // //       console.log('Email submitted:', email.trim());
// // // // // //     }
    
// // // // // //     // Start the detailed scanning process
// // // // // //     scanNetwork();
// // // // // //   };

// // // // // //   const handleSubmitComplaint = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // // //   };

// // // // // //   const handleCallSupport = () => {
// // // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // // //   };

// // // // // //   const closePopup = () => {
// // // // // //     setShowPopup(false);
// // // // // //   };

// // // // // //   const scanNetwork = async () => { 
// // // // // //     setIsScanning(true);
// // // // // //     setShowResults(false);
// // // // // //     setVisibleResults({
// // // // // //       location: false,
// // // // // //       ip: false,
// // // // // //       isp: false,
// // // // // //       device: false,
// // // // // //       warning: false,
// // // // // //       loading: false,
// // // // // //       importantNotice: false
// // // // // //     });
// // // // // //     setVisibleLoadingMessages([]);
    
// // // // // //     try {
// // // // // //       // Fetch IP information from IPinfo API first
// // // // // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// // // // // //       const data = await response.json();
      
// // // // // //       // Detect device type (basic detection)
// // // // // //       const userAgent = navigator.userAgent;
// // // // // //       let deviceType = 'Unknown';
      
// // // // // //       if (/Windows/i.test(userAgent)) {
// // // // // //         deviceType = 'Windows';
// // // // // //       } else if (/Macintosh/i.test(userAgent)) {
// // // // // //         deviceType = 'Mac';
// // // // // //       } else if (/Linux/i.test(userAgent)) {
// // // // // //         deviceType = 'Linux';
// // // // // //       } else if (/Android/i.test(userAgent)) {
// // // // // //         deviceType = 'Android';
// // // // // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // // // // //         deviceType = 'iOS';
// // // // // //       }

// // // // // //       // Set scan results immediately to show in terminal
// // // // // //       setScanResults({
// // // // // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // // // // //         ip: data.ip,
// // // // // //         isp: data.org,
// // // // // //         device: deviceType
// // // // // //       });
      
// // // // // //       // Wait for 5 seconds to show the terminal output
// // // // // //       await new Promise(resolve => setTimeout(resolve, 5000));
      
// // // // // //       setShowResults(true);
// // // // // //       setIsScanning(false);
      
// // // // // //       // Show results one by one with delays
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
      
// // // // // //       setTimeout(() => {
// // // // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // // //         // Show loading messages one by one
// // // // // //         const loadingMessages = [
// // // // // //           'Initializing connection...',
// // // // // //           'Bypassing firewall...',
// // // // // //           'Accessing secure server...',
// // // // // //           'Decrypting network protocols...',
// // // // // //           'Scanning for vulnerabilities...',
// // // // // //           'Analyzing traffic patterns...',
// // // // // //           'Cross-referencing databases...',
// // // // // //           'Verifying identity markers...',
// // // // // //           'Compiling security report...',
// // // // // //           'Finalizing assessment...'
// // // // // //         ];
        
// // // // // //         loadingMessages.forEach((message, index) => {
// // // // // //           setTimeout(() => {
// // // // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // // // //             // Show important notice after all loading messages are done
// // // // // //             if (index === loadingMessages.length - 1) {
// // // // // //               setTimeout(() => {
// // // // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // // //                 setScanComplete(true); // Mark scan as complete
// // // // // //               }, 1000);
// // // // // //             }
// // // // // //           }, index * 800); // 800ms delay between each message
// // // // // //         });
// // // // // //       }, 3000);
      
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching IP info:', error);
// // // // // //       // Fallback data for demo purposes
// // // // // //       setScanResults({
// // // // // //         location: 'Mumbai, Maharashtra, India',
// // // // // //         ip: '152.58.40.123',
// // // // // //         isp: 'Reliance Jio Infocomm Limited',
// // // // // //         device: 'Windows'
// // // // // //       });
      
// // // // // //       // Wait for 5 seconds to show the terminal output (fallback)
// // // // // //       await new Promise(resolve => setTimeout(resolve, 5000));
      
// // // // // //       setShowResults(true);
// // // // // //       setIsScanning(false);
      
// // // // // //       // Show results one by one with delays (fallback)
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // // //       setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
      
// // // // // //       setTimeout(() => {
// // // // // //         setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // // //         // Show loading messages one by one (fallback)
// // // // // //         const loadingMessages = [
// // // // // //           'Initializing connection...',
// // // // // //           'Bypassing firewall...',
// // // // // //           'Accessing secure server...',
// // // // // //           'Decrypting network protocols...',
// // // // // //           'Scanning for vulnerabilities...',
// // // // // //           'Analyzing traffic patterns...',
// // // // // //           'Cross-referencing databases...',
// // // // // //           'Verifying identity markers..',
// // // // // //           'Compiling security report...',
// // // // // //           'Finalizing assessment...'
// // // // // //         ];
        
// // // // // //         loadingMessages.forEach((message, index) => {
// // // // // //           setTimeout(() => {
// // // // // //             setVisibleLoadingMessages(prev => [...prev, message]);
            
// // // // // //             // Show important notice after all loading messages are done (fallback)
// // // // // //             if (index === loadingMessages.length - 1) {
// // // // // //               setTimeout(() => {
// // // // // //                 setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // // //                 setScanComplete(true); // Mark scan as complete (fallback)
// // // // // //               }, 1000);
// // // // // //             }
// // // // // //           }, index * 800); // 800ms delay between each message
// // // // // //         });
// // // // // //       }, 3000);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
      
// // // // // //       {/* Initial Scanner Interface - Show only when not scanning and no results */}
// // // // // //       {!isScanning && !showResults && (
// // // // // //         <div className="w-full max-w-lg">
// // // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            
// // // // // //             {/* Start Network Scan Button */}
// // // // // //             <button
// // // // // //               onClick={handleStartScan}
// // // // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // // // // //             >
// // // // // //               Start Network Scan
// // // // // //             </button>

// // // // // //             {/* Title */}
// // // // // //             <div className="text-center mb-8">
// // // // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // // //                 Internet Security<br />
// // // // // //                 Scanner
// // // // // //               </h1>
// // // // // //             </div>

// // // // // //             {/* Progress Bar Container */}
// // // // // //             <div className="border border-green-400 rounded-md p-1 bg-black">
// // // // // //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// // // // // //             </div>

// // // // // //             {/* Email Status Indicator */}
// // // // // //             {emailSubmitted && (
// // // // // //               <div className="mt-4 text-center">
// // // // // //                 <div className="text-green-400 text-xs font-mono opacity-70">
// // // // // //                   ✓ Email verified for breach checking
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Scanning State - Terminal Style Layout */}
// // // // // //       {isScanning && !showResults && (
// // // // // //         <div className="w-full max-w-lg">
// // // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            
// // // // // //             {/* Start Network Scan Button - Disabled during scanning */}
// // // // // //             <button
// // // // // //               disabled={true}
// // // // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 opacity-75 cursor-not-allowed"
// // // // // //             >
// // // // // //               Scanning...
// // // // // //             </button>

// // // // // //             {/* Title */}
// // // // // //             <div className="text-center mb-8">
// // // // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // // //                 Internet Security<br />
// // // // // //                 Scanner
// // // // // //               </h1>
// // // // // //             </div>

// // // // // //             {/* Terminal Output Container */}
// // // // // //             <div className="border border-green-400 rounded-md p-4 bg-black min-h-64">
// // // // // //               <div className="text-green-400 font-mono text-sm space-y-2">
// // // // // //                 <div className="animate-fade-in">Fetching your location & ISP info...</div>
// // // // // //                 <div className="mt-4 space-y-1">
// // // // // //                   {scanResults && (
// // // // // //                     <>
// // // // // //                       <div className="animate-fade-in">Location: {scanResults.location}</div>
// // // // // //                       <div className="animate-fade-in">IP Address:</div>
// // // // // //                       <div className="animate-fade-in text-xs">{scanResults.ip}</div>
// // // // // //                       <div className="animate-fade-in">ISP: {scanResults.isp}</div>
// // // // // //                       <div className="animate-fade-in">Device: {scanResults.device}</div>
// // // // // //                       <div className="animate-fade-in text-red-400">Email: {emailSubmitted ? 'paet@gmail.com' : 'Not provided'} (found on the dark web)</div>
// // // // // //                     </>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //                 <div className="mt-4 space-y-1">
// // // // // //                   <div className="animate-fade-in">Initializing secure connection...</div>
// // // // // //                   <div className="animate-fade-in">Bypassing firewall layers...</div>
// // // // // //                   <div className="animate-fade-in">Accessing encrypted servers...</div>
// // // // // //                   <div className="animate-fade-in">Decrypting security keys...</div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Results State - Full Screen Layout */}
// // // // // //       {showResults && scanResults && (
// // // // // //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          
// // // // // //           {/* Title */}
// // // // // //           <div className="text-center">
// // // // // //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// // // // // //               Internet Scan
// // // // // //             </h1>
// // // // // //           </div>

// // // // // //           {/* Scan Results */}
// // // // // //           <div className="w-full max-w-2xl space-y-6 font-mono">
// // // // // //             <div className="space-y-4 text-center sm:text-left">
// // // // // //               {visibleResults.location && (
// // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // //                   Detected Location: {scanResults.location}
// // // // // //                 </div>
// // // // // //               )}
              
// // // // // //               {visibleResults.ip && (
// // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // //                   IP Address: {scanResults.ip}
// // // // // //                 </div>
// // // // // //               )}
              
// // // // // //               {visibleResults.isp && (
// // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // //                   ISP: {scanResults.isp}
// // // // // //                 </div>
// // // // // //               )}
              
// // // // // //               {visibleResults.device && (
// // // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // // //                   Device: {scanResults.device}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>

// // // // // //             {/* Warning Message */}
// // // // // //             {visibleResults.warning && (
// // // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // // // // //                 Your {scanResults.device} was used from another location
// // // // // //                 apart from your home location {scanResults.location.split(',')[0]}, and
// // // // // //                 your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
// // // // // //                 <br /><br />
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Loading Messages */}
// // // // // //             {visibleResults.loading && (
// // // // // //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // // // // //                 {visibleLoadingMessages.map((message, index) => (
// // // // // //                   <div key={index} className="animate-fade-in">
// // // // // //                     {message}
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Important Notice */}
// // // // // //             {visibleResults.importantNotice && (
// // // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // // // // //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // // // // //                 <br />
// // // // // //                 We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// // // // // //                 <br /><br />
// // // // // //                 Cash App<br />
// // // // // //                 Venmo<br />
// // // // // //                 Chime<br />
// // // // // //                 Walmart<br />
// // // // // //                 Sam's Club<br />
// // // // // //                 Bitcoin platform<br />
// // // // // //                 One credit line application<br />
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* Submit Complaint Button */}
// // // // // //           {scanComplete && (
// // // // // //             <div className="w-full flex justify-center">
// // // // // //               <button 
// // // // // //                 onClick={handleSubmitComplaint}
// // // // // //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-fade-in"
// // // // // //               >
// // // // // //                 Submit complaint
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Popup Modal */}
// // // // // //       {showPopup && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // // // //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // // // // //             <button 
// // // // // //               onClick={closePopup}
// // // // // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // // // // //             >
// // // // // //               ×
// // // // // //             </button>
            
// // // // // //             <div className="text-center space-y-4">
// // // // // //               <div className="text-red-600 text-6xl mb-4">⚠️</div>
              
// // // // // //               <h2 className="text-xl font-bold text-red-600 mb-4">
// // // // // //                 URGENT: Device Detection Alert
// // // // // //               </h2>
              
// // // // // //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // // // // //                 <p>
// // // // // //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// // // // // //                 </p>
                
// // // // // //                 <p className="font-semibold text-red-700">
// // // // // //                   Immediate action required to secure your accounts and personal information.
// // // // // //                 </p>
                
// // // // // //                 <p className="text-sm text-gray-600">
// // // // // //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// // // // // //                 </p>
// // // // // //               </div>
              
// // // // // //               <div className="pt-4 space-y-3">
// // // // // //                 <button 
// // // // // //                   onClick={handleCallSupport}
// // // // // //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // // // // //                 >
// // // // // //                   🔒 Call Support System Now
// // // // // //                 </button>
                
// // // // // //                 <p className="text-xs text-gray-500">
// // // // // //                   Don't wait - Every minute counts in preventing further damage
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <style jsx>{`
// // // // // //         @keyframes fade-in {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(10px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }
        
// // // // // //         .animate-fade-in {
// // // // // //           animation: fade-in 0.5s ease-out forwards;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState, useEffect } from 'react';

// // // // // export default function InternetSecurityScanner() {
// // // // //   const [isScanning, setIsScanning] = useState(false);
// // // // //   const [emailSubmitted, setEmailSubmitted] = useState(false);
// // // // //   const [scanResults, setScanResults] = useState(null);
// // // // //   const [showResults, setShowResults] = useState(false);
// // // // //   const [visibleResults, setVisibleResults] = useState({
// // // // //     location: false,
// // // // //     ip: false,
// // // // //     isp: false,
// // // // //     device: false,
// // // // //     warning: false,
// // // // //     loading: false,
// // // // //     importantNotice: false
// // // // //   });
// // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);
// // // // //   const [scanComplete, setScanComplete] = useState(false);
// // // // //   const [terminalLines, setTerminalLines] = useState([]);
// // // // //   const [currentStep, setCurrentStep] = useState(0);

// // // // //   // Replace with your actual IPinfo access token
// // // // //   const IPINFO_ACCESS_TOKEN = '26347059c50ccc';

// // // // //   // Auto-redirect after scan completion
// // // // //   useEffect(() => {
// // // // //     let autoRedirectTimer;
    
// // // // //     if (scanComplete) {
// // // // //       autoRedirectTimer = setTimeout(() => {
// // // // //         window.location.href = "tel:+1 818 839 7963";
// // // // //       }, 5000); // 5 seconds after scan completion
// // // // //     }

// // // // //     return () => {
// // // // //       if (autoRedirectTimer) {
// // // // //         clearTimeout(autoRedirectTimer);
// // // // //       }
// // // // //     };
// // // // //   }, [scanComplete]);

// // // // //   const handleStartScan = () => {
// // // // //     // If email not submitted yet, ask for email first
// // // // //     if (!emailSubmitted) {
// // // // //       const email = prompt("Please enter your email for breach check:");
      
// // // // //       // If user cancels or enters empty email, don't proceed
// // // // //       if (!email || email.trim() === '') {
// // // // //         return;
// // // // //       }
      
// // // // //       // Basic email validation
// // // // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // // //       if (!emailRegex.test(email.trim())) {
// // // // //         alert("Please enter a valid email address");
// // // // //         return;
// // // // //       }
      
// // // // //       // Email is valid, mark as submitted
// // // // //       setEmailSubmitted(true);
// // // // //       console.log('Email submitted:', email.trim());
// // // // //     }
    
// // // // //     // Start the detailed scanning process
// // // // //     scanNetwork();
// // // // //   };

// // // // //   const handleSubmitComplaint = (e) => {
// // // // //     e.preventDefault();
// // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // //   };

// // // // //   const handleCallSupport = () => {
// // // // //     window.location.href = "tel:+1 818 839 7963";
// // // // //   };

// // // // //   const closePopup = () => {
// // // // //     setShowPopup(false);
// // // // //   };

// // // // //   const scanNetwork = async () => { 
// // // // //     setIsScanning(true);
// // // // //     setShowResults(false);
// // // // //     setTerminalLines([]);
// // // // //     setCurrentStep(0);
// // // // //     setVisibleResults({
// // // // //       location: false,
// // // // //       ip: false,
// // // // //       isp: false,
// // // // //       device: false,
// // // // //       warning: false,
// // // // //       loading: false,
// // // // //       importantNotice: false
// // // // //     });
// // // // //     setVisibleLoadingMessages([]);
    
// // // // //     // Define all scanning steps
// // // // //     const scanningSteps = [
// // // // //       { text: "Initializing network scanner...", delay: 500, type: "normal" },
// // // // //       { text: "Connecting to secure servers...", delay: 700, type: "normal" },
// // // // //       { text: "Fetching your location & ISP info...", delay: 800, type: "normal" },
// // // // //       { text: "", delay: 200, type: "normal" },
// // // // //       { text: "Detecting device information...", delay: 600, type: "normal" },
// // // // //       { text: "Analyzing network protocols...", delay: 700, type: "normal" },
// // // // //       { text: "Scanning active connections...", delay: 800, type: "normal" },
// // // // //       { text: "", delay: 200, type: "normal" },
// // // // //       // Results will be inserted here
// // // // //       { text: "Checking email breach databases...", delay: 800, type: "normal" },
// // // // //       { text: "Cross-referencing dark web data...", delay: 900, type: "normal" },
// // // // //       { text: "", delay: 200, type: "normal" },
// // // // //       { text: "Initializing secure connection...", delay: 600, type: "normal" },
// // // // //       { text: "Bypassing firewall layers...", delay: 700, type: "normal" },
// // // // //       { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
// // // // //       { text: "Decrypting security keys...", delay: 700, type: "normal" },
// // // // //       { text: "Performing deep packet inspection...", delay: 800, type: "normal" },
// // // // //       { text: "Analyzing traffic patterns...", delay: 700, type: "normal" },
// // // // //       { text: "Scanning for vulnerabilities...", delay: 800, type: "normal" },
// // // // //       { text: "Cross-referencing threat databases...", delay: 900, type: "normal" },
// // // // //       { text: "Verifying identity markers...", delay: 700, type: "normal" },
// // // // //       { text: "Compiling security report...", delay: 800, type: "normal" },
// // // // //       { text: "Finalizing assessment...", delay: 600, type: "normal" },
// // // // //       { text: "", delay: 300, type: "normal" },
// // // // //       { text: "⚠️  SECURITY BREACH DETECTED!", delay: 1000, type: "error" },
// // // // //       { text: "Suspicious activity found in your network!", delay: 800, type: "warning" },
// // // // //       { text: "Scan complete. Generating detailed report...", delay: 1000, type: "success" }
// // // // //     ];

// // // // //     try {
// // // // //       // Fetch IP information from IPinfo API first
// // // // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`);
// // // // //       const data = await response.json();
      
// // // // //       // Detect device type
// // // // //       const userAgent = navigator.userAgent;
// // // // //       let deviceType = 'Windows';
      
// // // // //       if (/Windows/i.test(userAgent)) {
// // // // //         deviceType = 'Windows';
// // // // //       } else if (/Macintosh/i.test(userAgent)) {
// // // // //         deviceType = 'Mac';
// // // // //       } else if (/Linux/i.test(userAgent)) {
// // // // //         deviceType = 'Linux';
// // // // //       } else if (/Android/i.test(userAgent)) {
// // // // //         deviceType = 'Android';
// // // // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // // // //         deviceType = 'iOS';
// // // // //       }

// // // // //       const scanData = {
// // // // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // // // //         ip: data.ip,
// // // // //         isp: data.org,
// // // // //         device: deviceType
// // // // //       };

// // // // //       setScanResults(scanData);

// // // // //       // Execute scanning steps with delays
// // // // //       let stepIndex = 0;
// // // // //       const executeStep = () => {
// // // // //         if (stepIndex < scanningSteps.length) {
// // // // //           const step = scanningSteps[stepIndex];
          
// // // // //           // Insert actual data after "Scanning active connections..."
// // // // //           if (stepIndex === 7) {
// // // // //             const dataLines = [
// // // // //               { text: `Location: ${scanData.location}`, type: "success" },
// // // // //               { text: `IP Address:`, type: "normal" },
// // // // //               { text: `${scanData.ip}`, type: "normal" },
// // // // //               { text: `ISP: ${scanData.isp}`, type: "normal" },
// // // // //               { text: `Device: ${scanData.device}`, type: "normal" },
// // // // //               { text: `Email: ${emailSubmitted ? 'paet@gmail.com' : 'user@email.com'} (found on the dark web)`, type: "error" },
// // // // //               { text: "", type: "normal" }
// // // // //             ];
            
// // // // //             dataLines.forEach((line, i) => {
// // // // //               setTimeout(() => {
// // // // //                 setTerminalLines(prev => [...prev, line]);
// // // // //               }, i * 300);
// // // // //             });
            
// // // // //             setTimeout(() => {
// // // // //               stepIndex++;
// // // // //               setCurrentStep(stepIndex);
// // // // //               executeStep();
// // // // //             }, dataLines.length * 300 + step.delay);
// // // // //           } else {
// // // // //             setTerminalLines(prev => [...prev, step]);
// // // // //             setTimeout(() => {
// // // // //               stepIndex++;
// // // // //               setCurrentStep(stepIndex);
// // // // //               executeStep();
// // // // //             }, step.delay);
// // // // //           }
// // // // //         } else {
// // // // //           // All steps completed, transition to results
// // // // //           setTimeout(() => {
// // // // //             setShowResults(true);
// // // // //             setIsScanning(false);
            
// // // // //             // Show results progressively
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
            
// // // // //             setTimeout(() => {
// // // // //               setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // //               const loadingMessages = [
// // // // //                 'Initializing connection...',
// // // // //                 'Bypassing firewall...',
// // // // //                 'Accessing secure server...',
// // // // //                 'Decrypting network protocols...',
// // // // //                 'Scanning for vulnerabilities...',
// // // // //                 'Analyzing traffic patterns...',
// // // // //                 'Cross-referencing databases...',
// // // // //                 'Verifying identity markers...',
// // // // //                 'Compiling security report...',
// // // // //                 'Finalizing assessment...'
// // // // //               ];
              
// // // // //               loadingMessages.forEach((message, index) => {
// // // // //                 setTimeout(() => {
// // // // //                   setVisibleLoadingMessages(prev => [...prev, message]);
                  
// // // // //                   if (index === loadingMessages.length - 1) {
// // // // //                     setTimeout(() => {
// // // // //                       setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // //                       setScanComplete(true);
// // // // //                     }, 1000);
// // // // //                   }
// // // // //                 }, index * 800);
// // // // //               });
// // // // //             }, 3000);
// // // // //           }, 2000);
// // // // //         }
// // // // //       };

// // // // //       executeStep();
      
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching IP info:', error);
// // // // //       // Fallback data
// // // // //       const fallbackData = {
// // // // //         location: 'Mumbai, Maharashtra, India',
// // // // //         ip: '152.58.40.123',
// // // // //         isp: 'Reliance Jio Infocomm Limited',
// // // // //         device: 'Windows'
// // // // //       };
      
// // // // //       setScanResults(fallbackData);
      
// // // // //       // Continue with fallback data
// // // // //       let stepIndex = 0;
// // // // //       const executeStepFallback = () => {
// // // // //         if (stepIndex < scanningSteps.length) {
// // // // //           const step = scanningSteps[stepIndex];
          
// // // // //           if (stepIndex === 7) {
// // // // //             const dataLines = [
// // // // //               { text: `Location: ${fallbackData.location}`, type: "success" },
// // // // //               { text: `IP Address:`, type: "normal" },
// // // // //               { text: `${fallbackData.ip}`, type: "normal" },
// // // // //               { text: `ISP: ${fallbackData.isp}`, type: "normal" },
// // // // //               { text: `Device: ${fallbackData.device}`, type: "normal" },
// // // // //               { text: `Email: ${emailSubmitted ? 'paet@gmail.com' : 'user@email.com'} (found on the dark web)`, type: "error" },
// // // // //               { text: "", type: "normal" }
// // // // //             ];
            
// // // // //             dataLines.forEach((line, i) => {
// // // // //               setTimeout(() => {
// // // // //                 setTerminalLines(prev => [...prev, line]);
// // // // //               }, i * 300);
// // // // //             });
            
// // // // //             setTimeout(() => {
// // // // //               stepIndex++;
// // // // //               setCurrentStep(stepIndex);
// // // // //               executeStepFallback();
// // // // //             }, dataLines.length * 300 + step.delay);
// // // // //           } else {
// // // // //             setTerminalLines(prev => [...prev, step]);
// // // // //             setTimeout(() => {
// // // // //               stepIndex++;
// // // // //               setCurrentStep(stepIndex);
// // // // //               executeStepFallback();
// // // // //             }, step.delay);
// // // // //           }
// // // // //         } else {
// // // // //           setTimeout(() => {
// // // // //             setShowResults(true);
// // // // //             setIsScanning(false);
            
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, location: true })), 500);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, ip: true })), 1000);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, isp: true })), 1500);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, device: true })), 2000);
// // // // //             setTimeout(() => setVisibleResults(prev => ({ ...prev, warning: true })), 2500);
            
// // // // //             setTimeout(() => {
// // // // //               setVisibleResults(prev => ({ ...prev, loading: true }));
// // // // //               const loadingMessages = [
// // // // //                 'Initializing connection...',
// // // // //                 'Bypassing firewall...',
// // // // //                 'Accessing secure server...',
// // // // //                 'Decrypting network protocols...',
// // // // //                 'Scanning for vulnerabilities...',
// // // // //                 'Analyzing traffic patterns...',
// // // // //                 'Cross-referencing databases...',
// // // // //                 'Verifying identity markers..',
// // // // //                 'Compiling security report...',
// // // // //                 'Finalizing assessment...'
// // // // //               ];
              
// // // // //               loadingMessages.forEach((message, index) => {
// // // // //                 setTimeout(() => {
// // // // //                   setVisibleLoadingMessages(prev => [...prev, message]);
                  
// // // // //                   if (index === loadingMessages.length - 1) {
// // // // //                     setTimeout(() => {
// // // // //                       setVisibleResults(prev => ({ ...prev, importantNotice: true }));
// // // // //                       setScanComplete(true);
// // // // //                     }, 1000);
// // // // //                   }
// // // // //                 }, index * 800);
// // // // //               });
// // // // //             }, 3000);
// // // // //           }, 2000);
// // // // //         }
// // // // //       };

// // // // //       executeStepFallback();
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
      
// // // // //       {/* Initial Scanner Interface - Show only when not scanning and no results */}
// // // // //       {!isScanning && !showResults && (
// // // // //         <div className="w-full max-w-lg">
// // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            
// // // // //             {/* Start Network Scan Button */}
// // // // //             <button
// // // // //               onClick={handleStartScan}
// // // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // // // //             >
// // // // //               Start Network Scan
// // // // //             </button>

// // // // //             {/* Title */}
// // // // //             <div className="text-center mb-8">
// // // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // //                 Internet Security<br />
// // // // //                 Scanner
// // // // //               </h1>
// // // // //             </div>

// // // // //             {/* Progress Bar Container */}
// // // // //             <div className="border border-green-400 rounded-md p-1 bg-black">
// // // // //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// // // // //             </div>

// // // // //             {/* Email Status Indicator */}
// // // // //             {emailSubmitted && (
// // // // //               <div className="mt-4 text-center">
// // // // //                 <div className="text-green-400 text-xs font-mono opacity-70">
// // // // //                   ✓ Email verified for breach checking
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Scanning State - Terminal Style Layout */}
// // // // //       {isScanning && !showResults && (
// // // // //         <div className="w-full max-w-2xl">
// // // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            
// // // // //             {/* Start Network Scan Button - Disabled during scanning */}
// // // // //             <button
// // // // //               disabled={true}
// // // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 opacity-75 cursor-not-allowed"
// // // // //             >
// // // // //               Scanning...
// // // // //             </button>

// // // // //             {/* Title */}
// // // // //             <div className="text-center mb-8">
// // // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // // //                 Internet Security<br />
// // // // //                 Scanner
// // // // //               </h1>
// // // // //             </div>

// // // // //             {/* Terminal Output Container */}
// // // // //             <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
// // // // //               <div className="text-green-400 font-mono text-sm space-y-1">
// // // // //                 {terminalLines.map((line, index) => (
// // // // //                   <div 
// // // // //                     key={index} 
// // // // //                     className={`animate-fade-in ${line.type === 'error' ? 'text-red-400' : line.type === 'warning' ? 'text-yellow-400' : line.type === 'success' ? 'text-green-300' : 'text-green-400'}`}
// // // // //                     style={{animationDelay: `${index * 0.1}s`}}
// // // // //                   >
// // // // //                     {line.text}
// // // // //                   </div>
// // // // //                 ))}
// // // // //                 {currentStep < 100 && (
// // // // //                   <div className="text-green-300 animate-pulse">
// // // // //                     {'>'} <span className="animate-pulse">_</span>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Results State - Full Screen Layout */}
// // // // //       {showResults && scanResults && (
// // // // //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          
// // // // //           {/* Title */}
// // // // //           <div className="text-center">
// // // // //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// // // // //               Internet Scan
// // // // //             </h1>
// // // // //           </div>

// // // // //           {/* Scan Results */}
// // // // //           <div className="w-full max-w-2xl space-y-6 font-mono">
// // // // //             <div className="space-y-4 text-center sm:text-left">
// // // // //               {visibleResults.location && (
// // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // //                   Detected Location: {scanResults.location}
// // // // //                 </div>
// // // // //               )}
              
// // // // //               {visibleResults.ip && (
// // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // //                   IP Address: {scanResults.ip}
// // // // //                 </div>
// // // // //               )}
              
// // // // //               {visibleResults.isp && (
// // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // //                   ISP: {scanResults.isp}
// // // // //                 </div>
// // // // //               )}
              
// // // // //               {visibleResults.device && (
// // // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // // //                   Device: {scanResults.device}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Warning Message */}
// // // // //             {visibleResults.warning && (
// // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // // // //                 Your {scanResults.device} was used from another location
// // // // //                 apart from your home location {scanResults.location.split(',')[0]}, and
// // // // //                 your data was accessed through your ISP {scanResults.isp.replace(/AS\d+\s+/, '')}.
// // // // //                 <br /><br />
// // // // //               </div>
// // // // //             )}

// // // // //             {/* Loading Messages */}
// // // // //             {visibleResults.loading && (
// // // // //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // // // //                 {visibleLoadingMessages.map((message, index) => (
// // // // //                   <div key={index} className="animate-fade-in">
// // // // //                     {message}
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}

// // // // //             {/* Important Notice */}
// // // // //             {visibleResults.importantNotice && (
// // // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // // // //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // // // //                 <br />
// // // // //                 We've found strong indicators that your personal information is being misused across multiple platforms. Specifically, it appears that your identity has been used on the following apps and services:
// // // // //                 <br /><br />
// // // // //                 Cash App<br />
// // // // //                 Venmo<br />
// // // // //                 Chime<br />
// // // // //                 Walmart<br />
// // // // //                 Sam's Club<br />
// // // // //                 Bitcoin platform<br />
// // // // //                 One credit line application<br />
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Submit Complaint Button */}
// // // // //           {scanComplete && (
// // // // //             <div className="w-full flex justify-center">
// // // // //               <button 
// // // // //                 onClick={handleSubmitComplaint}
// // // // //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-full text-base sm:text-lg lg:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-fade-in"
// // // // //               >
// // // // //                 Submit complaint
// // // // //               </button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Popup Modal */}
// // // // //       {showPopup && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // // //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // // // //             <button 
// // // // //               onClick={closePopup}
// // // // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // // // //             >
// // // // //               ×
// // // // //             </button>
            
// // // // //             <div className="text-center space-y-4">
// // // // //               <div className="text-red-600 text-6xl mb-4">⚠️</div>
              
// // // // //               <h2 className="text-xl font-bold text-red-600 mb-4">
// // // // //                 URGENT: Device Detection Alert
// // // // //               </h2>
              
// // // // //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // // // //                 <p>
// // // // //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized access attempts from your device.
// // // // //                 </p>
                
// // // // //                 <p className="font-semibold text-red-700">
// // // // //                   Immediate action required to secure your accounts and personal information.
// // // // //                 </p>
                
// // // // //                 <p className="text-sm text-gray-600">
// // // // //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital identity.
// // // // //                 </p>
// // // // //               </div>
              
// // // // //               <div className="pt-4 space-y-3">
// // // // //                 <button 
// // // // //                   onClick={handleCallSupport}
// // // // //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // // // //                 >
// // // // //                   🔒 Call Support System Now
// // // // //                 </button>
                
// // // // //                 <p className="text-xs text-gray-500">
// // // // //                   Don't wait - Every minute counts in preventing further damage
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       <style jsx>{`
// // // // //         @keyframes fade-in {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(10px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }
        
// // // // //         .animate-fade-in {
// // // // //           animation: fade-in 0.5s ease-out forwards;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }






// // // // "use client"

// // // // import { useState, useEffect } from "react"

// // // // export default function InternetSecurityScanner() {
// // // //   const [isScanning, setIsScanning] = useState(false)
// // // //   const [emailSubmitted, setEmailSubmitted] = useState(false)
// // // //   const [scanResults, setScanResults] = useState(null)
// // // //   const [showResults, setShowResults] = useState(false)
// // // //   const [visibleResults, setVisibleResults] = useState({
// // // //     location: false,
// // // //     ip: false,
// // // //     isp: false,
// // // //     device: false,
// // // //     warning: false,
// // // //     loading: false,
// // // //     importantNotice: false,
// // // //   })
// // // //   const [showPopup, setShowPopup] = useState(false)
// // // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([])
// // // //   const [scanComplete, setScanComplete] = useState(false)
// // // //   const [terminalLines, setTerminalLines] = useState([])
// // // //   const [currentStep, setCurrentStep] = useState(0)

// // // //   // Replace with your actual IPinfo access token
// // // //   const IPINFO_ACCESS_TOKEN = "26347059c50ccc"

// // // //   // Auto-redirect after scan completion
// // // //   useEffect(() => {
// // // //     let autoRedirectTimer

// // // //     if (scanComplete) {
// // // //       autoRedirectTimer = setTimeout(() => {
// // // //         window.location.href = "tel:+1 818 839 7963"
// // // //       }, 5000) // 5 seconds after scan completion
// // // //     }

// // // //     return () => {
// // // //       if (autoRedirectTimer) {
// // // //         clearTimeout(autoRedirectTimer)
// // // //       }
// // // //     }
// // // //   }, [scanComplete])

// // // //   const handleStartScan = () => {
// // // //     // If email not submitted yet, ask for email first
// // // //     if (!emailSubmitted) {
// // // //       const email = prompt("Please enter your email for breach check:")

// // // //       // If user cancels or enters empty email, don't proceed
// // // //       if (!email || email.trim() === "") {
// // // //         return
// // // //       }

// // // //       // Basic email validation
// // // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// // // //       if (!emailRegex.test(email.trim())) {
// // // //         alert("Please enter a valid email address")
// // // //         return
// // // //       }

// // // //       // Email is valid, mark as submitted
// // // //       setEmailSubmitted(true)
// // // //       console.log("Email submitted:", email.trim())
// // // //     }

// // // //     // Start the detailed scanning process
// // // //     scanNetwork()
// // // //   }

// // // //   const handleSubmitComplaint = (e) => {
// // // //     e.preventDefault()
// // // //     window.location.href = "tel:+1 818 839 7963"
// // // //   }

// // // //   const handleCallSupport = () => {
// // // //     window.location.href = "tel:+1 818 839 7963"
// // // //   }

// // // //   const closePopup = () => {
// // // //     setShowPopup(false)
// // // //   }

// // // //   const scanNetwork = async () => {
// // // //     setIsScanning(true)
// // // //     setShowResults(false)
// // // //     setTerminalLines([])
// // // //     setCurrentStep(0)
// // // //     setVisibleResults({
// // // //       location: false,
// // // //       ip: false,
// // // //       isp: false,
// // // //       device: false,
// // // //       warning: false,
// // // //       loading: false,
// // // //       importantNotice: false,
// // // //     })
// // // //     setVisibleLoadingMessages([])

// // // //     const scanningSteps = [
// // // //       { text: "Initializing secure connection...", delay: 800, type: "normal" },
// // // //       { text: "Bypassing firewall layers...", delay: 800, type: "normal" },
// // // //       { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
// // // //       { text: "Decrypting security keys...", delay: 800, type: "normal" },
// // // //       { text: "Analyzing network packets...", delay: 800, type: "normal" },
// // // //       { text: "Tracing data leaks...", delay: 800, type: "normal" },
// // // //       { text: "Detecting suspicious endpoints...", delay: 800, type: "normal" },
// // // //       { text: "Compiling vulnerability report...", delay: 800, type: "normal" },
// // // //       { text: "Scan complete.", delay: 1000, type: "success" },
// // // //       { text: "", delay: 500, type: "normal" },
// // // //       { text: "⚠️ Important Notice: Suspicious Activity Detected ⚠️", delay: 1000, type: "error" },
// // // //       { text: "It appears your identity is being used on the", delay: 800, type: "error" },
// // // //       { text: "following platforms:", delay: 800, type: "error" },
// // // //       { text: "", delay: 300, type: "normal" },
// // // //       { text: "Cash App", delay: 600, type: "error" },
// // // //       { text: "Venmo", delay: 600, type: "error" },
// // // //       { text: "Chime", delay: 600, type: "error" },
// // // //       { text: "Walmart", delay: 600, type: "error" },
// // // //       { text: "Sam's Club", delay: 600, type: "error" },
// // // //       { text: "Bitcoin Platform", delay: 600, type: "error" },
// // // //       { text: "One Credit Line Application", delay: 600, type: "error" },
// // // //     ]

// // // //     try {
// // // //       // Fetch IP information from IPinfo API first
// // // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`)
// // // //       const data = await response.json()

// // // //       // Detect device type
// // // //       const userAgent = navigator.userAgent
// // // //       let deviceType = "Windows"

// // // //       if (/Windows/i.test(userAgent)) {
// // // //         deviceType = "Windows"
// // // //       } else if (/Macintosh/i.test(userAgent)) {
// // // //         deviceType = "Mac"
// // // //       } else if (/Linux/i.test(userAgent)) {
// // // //         deviceType = "Linux"
// // // //       } else if (/Android/i.test(userAgent)) {
// // // //         deviceType = "Android"
// // // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // // //         deviceType = "iOS"
// // // //       }

// // // //       const scanData = {
// // // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // // //         ip: data.ip,
// // // //         isp: data.org,
// // // //         device: deviceType,
// // // //       }

// // // //       setScanResults(scanData)

// // // //       let stepIndex = 0
// // // //       const executeStep = () => {
// // // //         if (stepIndex < scanningSteps.length) {
// // // //           const step = scanningSteps[stepIndex]

// // // //           // Insert actual data after "Scan complete."
// // // //           if (stepIndex === 8) {
// // // //             const dataLines = [{ text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" }]

// // // //             dataLines.forEach((line, i) => {
// // // //               setTimeout(() => {
// // // //                 setTerminalLines((prev) => [...prev, line])
// // // //               }, i * 300)
// // // //             })

// // // //             setTimeout(
// // // //               () => {
// // // //                 stepIndex++
// // // //                 setCurrentStep(stepIndex)
// // // //                 executeStep()
// // // //               },
// // // //               dataLines.length * 300 + step.delay,
// // // //             )
// // // //           } else {
// // // //             setTerminalLines((prev) => [...prev, step])
// // // //             setTimeout(() => {
// // // //               stepIndex++
// // // //               setCurrentStep(stepIndex)
// // // //               executeStep()
// // // //             }, step.delay)
// // // //           }
// // // //         } else {
// // // //           // All steps completed, show submit button
// // // //           setTimeout(() => {
// // // //             setScanComplete(true)
// // // //             setIsScanning(false)
// // // //           }, 2000)
// // // //         }
// // // //       }

// // // //       executeStep()
// // // //     } catch (error) {
// // // //       console.error("Error fetching IP info:", error)
// // // //       // Fallback execution with same logic
// // // //       let stepIndex = 0
// // // //       const executeStepFallback = () => {
// // // //         if (stepIndex < scanningSteps.length) {
// // // //           const step = scanningSteps[stepIndex]

// // // //           if (stepIndex === 8) {
// // // //             const dataLines = [{ text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" }]

// // // //             dataLines.forEach((line, i) => {
// // // //               setTimeout(() => {
// // // //                 setTerminalLines((prev) => [...prev, line])
// // // //               }, i * 300)
// // // //             })

// // // //             setTimeout(
// // // //               () => {
// // // //                 stepIndex++
// // // //                 setCurrentStep(stepIndex)
// // // //                 executeStepFallback()
// // // //               },
// // // //               dataLines.length * 300 + step.delay,
// // // //             )
// // // //           } else {
// // // //             setTerminalLines((prev) => [...prev, step])
// // // //             setTimeout(() => {
// // // //               stepIndex++
// // // //               setCurrentStep(stepIndex)
// // // //               executeStepFallback()
// // // //             }, step.delay)
// // // //           }
// // // //         } else {
// // // //           setTimeout(() => {
// // // //             setScanComplete(true)
// // // //             setIsScanning(false)
// // // //           }, 2000)
// // // //         }
// // // //       }

// // // //       executeStepFallback()
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
// // // //       {/* Initial Scanner Interface - Show only when not scanning and no results */}
// // // //       {!isScanning && !showResults && !scanComplete && (
// // // //         <div className="w-full max-w-lg">
// // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
// // // //             {/* Start Network Scan Button */}
// // // //             <button
// // // //               onClick={handleStartScan}
// // // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // // //             >
// // // //               Start Network Scan
// // // //             </button>

// // // //             {/* Title */}
// // // //             <div className="text-center mb-8">
// // // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // // //                 Internet Security
// // // //                 <br />
// // // //                 Scanner
// // // //               </h1>
// // // //             </div>

// // // //             {/* Progress Bar Container */}
// // // //             <div className="border border-green-400 rounded-md p-1 bg-black">
// // // //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// // // //             </div>

// // // //             {/* Email Status Indicator */}
// // // //             {emailSubmitted && (
// // // //               <div className="mt-4 text-center">
// // // //                 <div className="text-green-400 text-xs font-mono opacity-70">✓ Email verified for breach checking</div>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {(isScanning || scanComplete) && (
// // // //         <div className="w-full max-w-4xl">
// // // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20 bg-gradient-to-br from-green-900/10 to-black">
// // // //             {/* Terminal Output Container - matches image styling */}
// // // //             <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
// // // //               <div className="text-green-400 font-mono text-base space-y-1">
// // // //                 {terminalLines.map((line, index) => (
// // // //                   <div
// // // //                     key={index}
// // // //                     className={`animate-fade-in ${
// // // //                       line.type === "error"
// // // //                         ? "text-red-400"
// // // //                         : line.type === "warning"
// // // //                           ? "text-yellow-400"
// // // //                           : line.type === "success"
// // // //                             ? "text-green-300"
// // // //                             : "text-green-400"
// // // //                     }`}
// // // //                     style={{ animationDelay: `${index * 0.1}s` }}
// // // //                   >
// // // //                     {line.text}
// // // //                   </div>
// // // //                 ))}
// // // //                 {isScanning && (
// // // //                   <div className="text-green-300 animate-pulse">
// // // //                     {">"} <span className="animate-pulse">_</span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {scanComplete && (
// // // //               <div className="w-full flex justify-center mt-8">
// // // //                 <button
// // // //                   onClick={handleSubmitComplaint}
// // // //                   className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
// // // //                 >
// // // //                   📋 Submit Complaint
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Results State - Full Screen Layout */}
// // // //       {showResults && scanResults && (
// // // //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
// // // //           {/* Title */}
// // // //           <div className="text-center">
// // // //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// // // //               Internet Scan
// // // //             </h1>
// // // //           </div>

// // // //           {/* Scan Results */}
// // // //           <div className="w-full max-w-2xl space-y-6 font-mono">
// // // //             <div className="space-y-4 text-center sm:text-left">
// // // //               {visibleResults.location && (
// // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // // //                   Detected Location: {scanResults.location}
// // // //                 </div>
// // // //               )}

// // // //               {visibleResults.ip && (
// // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">IP Address: {scanResults.ip}</div>
// // // //               )}

// // // //               {visibleResults.isp && (
// // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">ISP: {scanResults.isp}</div>
// // // //               )}

// // // //               {visibleResults.device && (
// // // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">Device: {scanResults.device}</div>
// // // //               )}
// // // //             </div>

// // // //             {/* Warning Message */}
// // // //             {visibleResults.warning && (
// // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // // //                 Your {scanResults.device} was used from another location apart from your home location{" "}
// // // //                 {scanResults.location.split(",")[0]}, and your data was accessed through your ISP{" "}
// // // //                 {scanResults.isp.replace(/AS\d+\s+/, "")}.
// // // //                 <br />
// // // //                 <br />
// // // //               </div>
// // // //             )}

// // // //             {/* Loading Messages */}
// // // //             {visibleResults.loading && (
// // // //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // // //                 {visibleLoadingMessages.map((message, index) => (
// // // //                   <div key={index} className="animate-fade-in">
// // // //                     {message}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )}

// // // //             {/* Important Notice */}
// // // //             {visibleResults.importantNotice && (
// // // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // // //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // // //                 <br />
// // // //                 We've found strong indicators that your personal information is being misused across multiple platforms.
// // // //                 Specifically, it appears that your identity has been used on the following apps and services:
// // // //                 <br />
// // // //                 <br />
// // // //                 Cash App
// // // //                 <br />
// // // //                 Venmo
// // // //                 <br />
// // // //                 Chime
// // // //                 <br />
// // // //                 Walmart
// // // //                 <br />
// // // //                 Sam's Club
// // // //                 <br />
// // // //                 Bitcoin platform
// // // //                 <br />
// // // //                 One credit line application
// // // //                 <br />
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Popup Modal */}
// // // //       {showPopup && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // // //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // // //             <button
// // // //               onClick={closePopup}
// // // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // // //             >
// // // //               ×
// // // //             </button>

// // // //             <div className="text-center space-y-4">
// // // //               <div className="text-red-600 text-6xl mb-4">⚠️</div>

// // // //               <h2 className="text-xl font-bold text-red-600 mb-4">URGENT: Device Detection Alert</h2>

// // // //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // // //                 <p>
// // // //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized
// // // //                   access attempts from your device.
// // // //                 </p>

// // // //                 <p className="font-semibold text-red-700">
// // // //                   Immediate action required to secure your accounts and personal information.
// // // //                 </p>

// // // //                 <p className="text-sm text-gray-600">
// // // //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital
// // // //                   identity.
// // // //                 </p>
// // // //               </div>

// // // //               <div className="pt-4 space-y-3">
// // // //                 <button
// // // //                   onClick={handleCallSupport}
// // // //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // // //                 >
// // // //                   🔒 Call Support System Now
// // // //                 </button>

// // // //                 <p className="text-xs text-gray-500">Don't wait - Every minute counts in preventing further damage</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <style jsx>{`
// // // //         @keyframes fade-in {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: translateY(10px);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }
        
// // // //         .animate-fade-in {
// // // //           animation: fade-in 0.5s ease-out forwards;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   )
// // // // }



// // // "use client"

// // // import { useState, useEffect } from "react"

// // // export default function InternetSecurityScanner() {
// // //   const [isScanning, setIsScanning] = useState(false)
// // //   const [emailSubmitted, setEmailSubmitted] = useState(false)
// // //   const [scanResults, setScanResults] = useState(null)
// // //   const [showResults, setShowResults] = useState(false)
// // //   const [visibleResults, setVisibleResults] = useState({
// // //     location: false,
// // //     ip: false,
// // //     isp: false,
// // //     device: false,
// // //     warning: false,
// // //     loading: false,
// // //     importantNotice: false,
// // //   })
// // //   const [showPopup, setShowPopup] = useState(false)
// // //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([])
// // //   const [scanComplete, setScanComplete] = useState(false)
// // //   const [terminalLines, setTerminalLines] = useState([])
// // //   const [currentStep, setCurrentStep] = useState(0)

// // //   // Replace with your actual IPinfo access token
// // //   const IPINFO_ACCESS_TOKEN = "26347059c50ccc"

// // //   // Auto-redirect after scan completion
// // //   useEffect(() => {
// // //     let autoRedirectTimer

// // //     if (scanComplete) {
// // //       autoRedirectTimer = setTimeout(() => {
// // //         window.location.href = "tel:+1 818 839 7963"
// // //       }, 5000) // 5 seconds after scan completion
// // //     }

// // //     return () => {
// // //       if (autoRedirectTimer) {
// // //         clearTimeout(autoRedirectTimer)
// // //       }
// // //     }
// // //   }, [scanComplete])

// // //   const handleStartScan = () => {
// // //     // If email not submitted yet, ask for email first
// // //     if (!emailSubmitted) {
// // //       const email = prompt("Please enter your email for breach check:")

// // //       // If user cancels or enters empty email, don't proceed
// // //       if (!email || email.trim() === "") {
// // //         return
// // //       }

// // //       // Basic email validation
// // //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// // //       if (!emailRegex.test(email.trim())) {
// // //         alert("Please enter a valid email address")
// // //         return
// // //       }

// // //       // Email is valid, mark as submitted
// // //       setEmailSubmitted(true)
// // //       console.log("Email submitted:", email.trim())
// // //     }

// // //     // Start the detailed scanning process
// // //     scanNetwork()
// // //   }

// // //   const handleSubmitComplaint = (e) => {
// // //     e.preventDefault()
// // //     window.location.href = "tel:+1 818 839 7963"
// // //   }

// // //   const handleCallSupport = () => {
// // //     window.location.href = "tel:+1 818 839 7963"
// // //   }

// // //   const closePopup = () => {
// // //     setShowPopup(false)
// // //   }

// // //   const scanNetwork = async () => {
// // //     setIsScanning(true)
// // //     setShowResults(false)
// // //     setTerminalLines([])
// // //     setCurrentStep(0)
// // //     setVisibleResults({
// // //       location: false,
// // //       ip: false,
// // //       isp: false,
// // //       device: false,
// // //       warning: false,
// // //       loading: false,
// // //       importantNotice: false,
// // //     })
// // //     setVisibleLoadingMessages([])

// // //     const scanningSteps = [
// // //       { text: "Initializing secure connection...", delay: 800, type: "normal" },
// // //       { text: "Bypassing firewall layers...", delay: 800, type: "normal" },
// // //       { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
// // //       { text: "Decrypting security keys...", delay: 800, type: "normal" },
// // //       { text: "Analyzing network packets...", delay: 800, type: "normal" },
// // //       { text: "Tracing data leaks...", delay: 800, type: "normal" },
// // //       { text: "Detecting suspicious endpoints...", delay: 800, type: "normal" },
// // //       { text: "Compiling vulnerability report...", delay: 800, type: "normal" },
// // //       { text: "Scan complete.", delay: 1000, type: "success" },
// // //       { text: "", delay: 500, type: "normal" },
// // //       { text: "⚠️ Important Notice: Suspicious Activity Detected ⚠️", delay: 1000, type: "error" },
// // //       { text: "It appears your identity is being used on the", delay: 800, type: "error" },
// // //       { text: "following platforms:", delay: 800, type: "error" },
// // //       { text: "", delay: 300, type: "normal" },
// // //       { text: "Cash App", delay: 600, type: "error" },
// // //       { text: "Venmo", delay: 600, type: "error" },
// // //       { text: "Chime", delay: 600, type: "error" },
// // //       { text: "Walmart", delay: 600, type: "error" },
// // //       { text: "Sam's Club", delay: 600, type: "error" },
// // //       { text: "Bitcoin Platform", delay: 600, type: "error" },
// // //       { text: "One Credit Line Application", delay: 600, type: "error" },
// // //     ]

// // //     try {
// // //       // Fetch IP information from IPinfo API first
// // //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`)
// // //       const data = await response.json()

// // //       // Detect device type
// // //       const userAgent = navigator.userAgent
// // //       let deviceType = "Windows"

// // //       if (/Windows/i.test(userAgent)) {
// // //         deviceType = "Windows"
// // //       } else if (/Macintosh/i.test(userAgent)) {
// // //         deviceType = "Mac"
// // //       } else if (/Linux/i.test(userAgent)) {
// // //         deviceType = "Linux"
// // //       } else if (/Android/i.test(userAgent)) {
// // //         deviceType = "Android"
// // //       } else if (/iPhone|iPad/i.test(userAgent)) {
// // //         deviceType = "iOS"
// // //       }

// // //       const scanData = {
// // //         location: `${data.city}, ${data.region}, ${data.country}`,
// // //         ip: data.ip,
// // //         isp: data.org,
// // //         device: deviceType,
// // //       }

// // //       setScanResults(scanData)

// // //       let stepIndex = 0
// // //       const executeStep = () => {
// // //         if (stepIndex < scanningSteps.length) {
// // //           const step = scanningSteps[stepIndex]

// // //           // Insert actual data after "Scan complete."
// // //           if (stepIndex === 8) {
// // //             const dataLines = [{ text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" }]

// // //             dataLines.forEach((line, i) => {
// // //               setTimeout(() => {
// // //                 setTerminalLines((prev) => [...prev, line])
// // //               }, i * 300)
// // //             })

// // //             setTimeout(
// // //               () => {
// // //                 stepIndex++
// // //                 setCurrentStep(stepIndex)
// // //                 executeStep()
// // //               },
// // //               dataLines.length * 300 + step.delay,
// // //             )
// // //           } else {
// // //             setTerminalLines((prev) => [...prev, step])
// // //             setTimeout(() => {
// // //               stepIndex++
// // //               setCurrentStep(stepIndex)
// // //               executeStep()
// // //             }, step.delay)
// // //           }
// // //         } else {
// // //           // All steps completed, show submit button
// // //           setTimeout(() => {
// // //             setScanComplete(true)
// // //             setIsScanning(false)
// // //           }, 2000)
// // //         }
// // //       }

// // //       executeStep()
// // //     } catch (error) {
// // //       console.error("Error fetching IP info:", error)
// // //       // Fallback execution with same logic
// // //       let stepIndex = 0
// // //       const executeStepFallback = () => {
// // //         if (stepIndex < scanningSteps.length) {
// // //           const step = scanningSteps[stepIndex]

// // //           if (stepIndex === 8) {
// // //             const dataLines = [{ text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" }]

// // //             dataLines.forEach((line, i) => {
// // //               setTimeout(() => {
// // //                 setTerminalLines((prev) => [...prev, line])
// // //               }, i * 300)
// // //             })

// // //             setTimeout(
// // //               () => {
// // //                 stepIndex++
// // //                 setCurrentStep(stepIndex)
// // //                 executeStepFallback()
// // //               },
// // //               dataLines.length * 300 + step.delay,
// // //             )
// // //           } else {
// // //             setTerminalLines((prev) => [...prev, step])
// // //             setTimeout(() => {
// // //               stepIndex++
// // //               setCurrentStep(stepIndex)
// // //               executeStepFallback()
// // //             }, step.delay)
// // //           }
// // //         } else {
// // //           setTimeout(() => {
// // //             setScanComplete(true)
// // //             setIsScanning(false)
// // //           }, 2000)
// // //         }
// // //       }

// // //       executeStepFallback()
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
// // //       {/* Initial Scanner Interface - Show only when not scanning and no results */}
// // //       {!isScanning && !showResults && !scanComplete && (
// // //         <div className="w-full max-w-lg">
// // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
// // //             {/* Start Network Scan Button */}
// // //             <button
// // //               onClick={handleStartScan}
// // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // //             >
// // //               Start Network Scan
// // //             </button>

// // //             {/* Title */}
// // //             <div className="text-center mb-8">
// // //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// // //                 Internet Security
// // //                 <br />
// // //                 Scanner
// // //               </h1>
// // //             </div>

// // //             {/* Progress Bar Container */}
// // //             <div className="border border-green-400 rounded-md p-1 bg-black">
// // //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// // //             </div>

// // //             {/* Email Status Indicator */}
// // //             {emailSubmitted && (
// // //               <div className="mt-4 text-center">
// // //                 <div className="text-green-400 text-xs font-mono opacity-70">✓ Email verified for breach checking</div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {(isScanning || scanComplete) && (
// // //         <div className="w-full max-w-4xl">
// // //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20 bg-gradient-to-br from-green-900/10 to-black">
// // //             {/* Keep Start Network Scan Button visible during scanning */}
// // //             <button
// // //               onClick={handleStartScan}
// // //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// // //               disabled={isScanning}
// // //             >
// // //               Start Network Scan
// // //             </button>

// // //             {/* Keep Title visible during scanning with gradient */}
// // //             <div className="text-center mb-8">
// // //               <h1 className="text-3xl font-mono leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
// // //                 Internet Security
// // //                 <br />
// // //                 Scanner
// // //               </h1>
// // //             </div>

// // //             {/* Terminal Output Container - matches image styling */}
// // //             <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
// // //               <div className="text-green-400 font-mono text-base space-y-1">
// // //                 {terminalLines.map((line, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className={`animate-fade-in ${
// // //                       line.type === "error"
// // //                         ? "text-red-400"
// // //                         : line.type === "warning"
// // //                           ? "text-yellow-400"
// // //                           : line.type === "success"
// // //                             ? "text-green-300"
// // //                             : "text-green-400"
// // //                     }`}
// // //                     style={{ animationDelay: `${index * 0.1}s` }}
// // //                   >
// // //                     {line.text}
// // //                   </div>
// // //                 ))}
// // //                 {isScanning && (
// // //                   <div className="text-green-300 animate-pulse">
// // //                     {">"} <span className="animate-pulse">_</span>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {scanComplete && (
// // //               <div className="w-full flex justify-center mt-8">
// // //                 <button
// // //                   onClick={handleSubmitComplaint}
// // //                   className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
// // //                 >
// // //                   📋 Submit Complaint
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Results State - Full Screen Layout */}
// // //       {showResults && scanResults && (
// // //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
// // //           {/* Title */}
// // //           <div className="text-center">
// // //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// // //               Internet Scan
// // //             </h1>
// // //           </div>

// // //           {/* Scan Results */}
// // //           <div className="w-full max-w-2xl space-y-6 font-mono">
// // //             <div className="space-y-4 text-center sm:text-left">
// // //               {visibleResults.location && (
// // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// // //                   Detected Location: {scanResults.location}
// // //                 </div>
// // //               )}

// // //               {visibleResults.ip && (
// // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">IP Address: {scanResults.ip}</div>
// // //               )}

// // //               {visibleResults.isp && (
// // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">ISP: {scanResults.isp}</div>
// // //               )}

// // //               {visibleResults.device && (
// // //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">Device: {scanResults.device}</div>
// // //               )}
// // //             </div>

// // //             {/* Warning Message */}
// // //             {visibleResults.warning && (
// // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// // //                 Your {scanResults.device} was used from another location apart from your home location{" "}
// // //                 {scanResults.location.split(",")[0]}, and your data was accessed through your ISP{" "}
// // //                 {scanResults.isp.replace(/AS\d+\s+/, "")}.
// // //                 <br />
// // //                 <br />
// // //               </div>
// // //             )}

// // //             {/* Loading Messages */}
// // //             {visibleResults.loading && (
// // //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// // //                 {visibleLoadingMessages.map((message, index) => (
// // //                   <div key={index} className="animate-fade-in">
// // //                     {message}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             {/* Important Notice */}
// // //             {visibleResults.importantNotice && (
// // //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// // //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// // //                 <br />
// // //                 We've found strong indicators that your personal information is being misused across multiple platforms.
// // //                 Specifically, it appears that your identity has been used on the following apps and services:
// // //                 <br />
// // //                 <br />
// // //                 Cash App
// // //                 <br />
// // //                 Venmo
// // //                 <br />
// // //                 Chime
// // //                 <br />
// // //                 Walmart
// // //                 <br />
// // //                 Sam's Club
// // //                 <br />
// // //                 Bitcoin platform
// // //                 <br />
// // //                 One credit line application
// // //                 <br />
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Popup Modal */}
// // //       {showPopup && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// // //             <button
// // //               onClick={closePopup}
// // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// // //             >
// // //               ×
// // //             </button>

// // //             <div className="text-center space-y-4">
// // //               <div className="text-red-600 text-6xl mb-4">⚠️</div>

// // //               <h2 className="text-xl font-bold text-red-600 mb-4">URGENT: Device Detection Alert</h2>

// // //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// // //                 <p>
// // //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized
// // //                   access attempts from your device.
// // //                 </p>

// // //                 <p className="font-semibold text-red-700">
// // //                   Immediate action required to secure your accounts and personal information.
// // //                 </p>

// // //                 <p className="text-sm text-gray-600">
// // //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital
// // //                   identity.
// // //                 </p>
// // //               </div>

// // //               <div className="pt-4 space-y-3">
// // //                 <button
// // //                   onClick={handleCallSupport}
// // //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// // //                 >
// // //                   🔒 Call Support System Now
// // //                 </button>

// // //                 <p className="text-xs text-gray-500">Don't wait - Every minute counts in preventing further damage</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style jsx>{`
// // //         @keyframes fade-in {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
        
// // //         .animate-fade-in {
// // //           animation: fade-in 0.5s ease-out forwards;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   )
// // // }





// // import type React from "react"

// // import { useState, useEffect } from "react"

// // interface ScanResults {
// //   location: string
// //   ip: string
// //   isp: string
// //   device: string
// // }

// // interface TerminalLine {
// //   text: string
// //   delay?: number
// //   type: string
// // }

// // interface LoadingMessage {
// //   text: string
// //   delay: number
// //   type: string
// // }

// // export default function InternetSecurityScanner() {
// //   const [isScanning, setIsScanning] = useState(false)
// //   const [emailSubmitted, setEmailSubmitted] = useState(false)
// //   const [scanResults, setScanResults] = useState<ScanResults | null>(null)
// //   const [showResults, setShowResults] = useState(false)
// //   const [visibleResults, setVisibleResults] = useState({
// //     location: false,
// //     ip: false,
// //     isp: false,
// //     device: false,
// //     warning: false,
// //     loading: false,
// //     importantNotice: false,
// //   })
// //   const [showPopup, setShowPopup] = useState(false)
// //   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState<LoadingMessage[]>([])
// //   const [scanComplete, setScanComplete] = useState(false)
// //   const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])
// //   const [currentStep, setCurrentStep] = useState(0)

// //   const IPINFO_ACCESS_TOKEN = "26347059c50ccc"

// //   useEffect(() => {
// //     let autoRedirectTimer: number | undefined

// //     if (scanComplete) {
// //       autoRedirectTimer = setTimeout(() => {
// //         window.location.href = "tel:+1 818 839 7963"
// //       }, 5000)
// //     }

// //     return () => {
// //       if (autoRedirectTimer) {
// //         clearTimeout(autoRedirectTimer)
// //       }
// //     }
// //   }, [scanComplete])

// //   const handleStartScan = () => {
// //     if (!emailSubmitted) {
// //       const email = prompt("Please enter your email for breach check:")

// //       if (!email || email.trim() === "") {
// //         return
// //       }

// //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// //       if (!emailRegex.test(email.trim())) {
// //         alert("Please enter a valid email address")
// //         return
// //       }

// //       setEmailSubmitted(true)
// //       console.log("Email submitted:", email.trim())
// //     }

// //     scanNetwork()
// //   }

// //   const handleSubmitComplaint = (e: React.MouseEvent) => {
// //     e.preventDefault()
// //     window.location.href = "tel:+1 818 839 7963"
// //   }

// //   const handleCallSupport = () => {
// //     window.location.href = "tel:+1 818 839 7963"
// //   }

// //   const closePopup = () => {
// //     setShowPopup(false)
// //   }

// //   const scanNetwork = async () => {
// //     setIsScanning(true)
// //     setShowResults(false)
// //     setTerminalLines([])
// //     setCurrentStep(0)
// //     setVisibleResults({
// //       location: false,
// //       ip: false,
// //       isp: false,
// //       device: false,
// //       warning: false,
// //       loading: false,
// //       importantNotice: false,
// //     })
// //     setVisibleLoadingMessages([])

// //     const scanningSteps: LoadingMessage[] = [
// //       { text: "Initializing secure connection...", delay: 800, type: "normal" },
// //       { text: "Bypassing firewall layers...", delay: 800, type: "normal" },
// //       { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
// //       { text: "Decrypting security keys...", delay: 800, type: "normal" },
// //       { text: "Analyzing network packets...", delay: 800, type: "normal" },
// //       { text: "Tracing data leaks...", delay: 800, type: "normal" },
// //       { text: "Detecting suspicious endpoints...", delay: 800, type: "normal" },
// //       { text: "Compiling vulnerability report...", delay: 800, type: "normal" },
// //       { text: "Scan complete.", delay: 1000, type: "success" },
// //       { text: "", delay: 500, type: "normal" },
// //       { text: "⚠️ Important Notice: Suspicious Activity Detected ⚠️", delay: 1000, type: "error" },
// //       { text: "It appears your identity is being used on the", delay: 800, type: "error" },
// //       { text: "following platforms:", delay: 800, type: "error" },
// //       { text: "", delay: 300, type: "normal" },
// //       { text: "Cash App", delay: 600, type: "error" },
// //       { text: "Venmo", delay: 600, type: "error" },
// //       { text: "Chime", delay: 600, type: "error" },
// //       { text: "Walmart", delay: 600, type: "error" },
// //       { text: "Sam's Club", delay: 600, type: "error" },
// //       { text: "Bitcoin Platform", delay: 600, type: "error" },
// //       { text: "One Credit Line Application", delay: 600, type: "error" },
// //     ]

// //     try {
// //       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`)
// //       const data = await response.json()

// //       const userAgent = navigator.userAgent
// //       let deviceType = "Windows"

// //       if (/Windows/i.test(userAgent)) {
// //         deviceType = "Windows"
// //       } else if (/Macintosh/i.test(userAgent)) {
// //         deviceType = "Mac"
// //       } else if (/Linux/i.test(userAgent)) {
// //         deviceType = "Linux"
// //       } else if (/Android/i.test(userAgent)) {
// //         deviceType = "Android"
// //       } else if (/iPhone|iPad/i.test(userAgent)) {
// //         deviceType = "iOS"
// //       }

// //       const scanData: ScanResults = {
// //         location: `${data.city}, ${data.region}, ${data.country}`,
// //         ip: data.ip,
// //         isp: data.org,
// //         device: deviceType,
// //       }

// //       setScanResults(scanData)

// //       let stepIndex = 0
// //       const executeStep = () => {
// //         if (stepIndex < scanningSteps.length) {
// //           const step = scanningSteps[stepIndex]

// //           if (stepIndex === 8) {
// //             const dataLines: TerminalLine[] = [
// //               { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
// //             ]

// //             dataLines.forEach((line, i) => {
// //               setTimeout(() => {
// //                 setTerminalLines((prev) => [...prev, line])
// //               }, i * 300)
// //             })

// //             setTimeout(
// //               () => {
// //                 stepIndex++
// //                 setCurrentStep(stepIndex)
// //                 executeStep()
// //               },
// //               dataLines.length * 300 + step.delay,
// //             )
// //           } else {
// //             setTerminalLines((prev) => [...prev, step])
// //             setTimeout(() => {
// //               stepIndex++
// //               setCurrentStep(stepIndex)
// //               executeStep()
// //             }, step.delay)
// //           }
// //         } else {
// //           setTimeout(() => {
// //             setScanComplete(true)
// //             setIsScanning(false)
// //           }, 2000)
// //         }
// //       }

// //       executeStep()
// //     } catch (error) {
// //       console.error("Error fetching IP info:", error)
// //       let stepIndex = 0
// //       const executeStepFallback = () => {
// //         if (stepIndex < scanningSteps.length) {
// //           const step = scanningSteps[stepIndex]

// //           if (stepIndex === 8) {
// //             const dataLines: TerminalLine[] = [
// //               { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
// //             ]

// //             dataLines.forEach((line, i) => {
// //               setTimeout(() => {
// //                 setTerminalLines((prev) => [...prev, line])
// //               }, i * 300)
// //             })

// //             setTimeout(
// //               () => {
// //                 stepIndex++
// //                 setCurrentStep(stepIndex)
// //                 executeStepFallback()
// //               },
// //               dataLines.length * 300 + step.delay,
// //             )
// //           } else {
// //             setTerminalLines((prev) => [...prev, step])
// //             setTimeout(() => {
// //               stepIndex++
// //               setCurrentStep(stepIndex)
// //               executeStepFallback()
// //             }, step.delay)
// //           }
// //         } else {
// //           setTimeout(() => {
// //             setScanComplete(true)
// //             setIsScanning(false)
// //           }, 2000)
// //         }
// //       }

// //       executeStepFallback()
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
// //       {!isScanning && !showResults && !scanComplete && (
// //         <div className="w-full max-w-lg">
// //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
// //             <button
// //               onClick={handleStartScan}
// //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// //             >
// //               Start Network Scan
// //             </button>

// //             <div className="text-center mb-8">
// //               <h1 className="text-green-400 text-3xl font-mono leading-tight">
// //                 Internet Security
// //                 <br />
// //                 Scanner
// //               </h1>
// //             </div>

// //             <div className="border border-green-400 rounded-md p-1 bg-black">
// //               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
// //             </div>

// //             {emailSubmitted && (
// //               <div className="mt-4 text-center">
// //                 <div className="text-green-400 text-xs font-mono opacity-70">✓ Email verified for breach checking</div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {(isScanning || scanComplete) && (
// //         <div className="w-full max-w-4xl">
// //           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20 bg-gradient-to-br from-green-900/10 to-black">
// //             <button
// //               onClick={handleStartScan}
// //               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
// //               disabled={isScanning}
// //             >
// //               Start Network Scan
// //             </button>

// //             <div className="text-center mb-8">
// //               <h1 className="text-3xl font-mono leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
// //                 Internet Security
// //                 <br />
// //                 Scanner
// //               </h1>
// //             </div>

// //             <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
// //               <div className="text-green-400 font-mono text-base space-y-1">
// //                 {terminalLines.map((line, index) => (
// //                   <div
// //                     key={index}
// //                     className={`animate-fade-in ${
// //                       line.type === "error"
// //                         ? "text-red-400"
// //                         : line.type === "warning"
// //                           ? "text-yellow-400"
// //                           : line.type === "success"
// //                             ? "text-green-300"
// //                             : "text-green-400"
// //                     }`}
// //                     style={{ animationDelay: `${index * 0.1}s` }}
// //                   >
// //                     {line.text}
// //                   </div>
// //                 ))}
// //                 {isScanning && (
// //                   <div className="text-green-300 animate-pulse">
// //                     {">"} <span className="animate-pulse">_</span>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {scanComplete && (
// //               <div className="w-full flex justify-center mt-8">
// //                 <button
// //                   onClick={handleSubmitComplaint}
// //                   className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
// //                 >
// //                   📋 Submit Complaint
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {showResults && scanResults && (
// //         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
// //           <div className="text-center">
// //             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// //               Internet Scan
// //             </h1>
// //           </div>

// //           <div className="w-full max-w-2xl space-y-6 font-mono">
// //             <div className="space-y-4 text-center sm:text-left">
// //               {visibleResults.location && (
// //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
// //                   Detected Location: {scanResults.location}
// //                 </div>
// //               )}

// //               {visibleResults.ip && (
// //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">IP Address: {scanResults.ip}</div>
// //               )}

// //               {visibleResults.isp && (
// //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">ISP: {scanResults.isp}</div>
// //               )}

// //               {visibleResults.device && (
// //                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">Device: {scanResults.device}</div>
// //               )}
// //             </div>

// //             {visibleResults.warning && (
// //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
// //                 Your {scanResults.device} was used from another location apart from your home location{" "}
// //                 {scanResults.location.split(",")[0]}, and your data was accessed through your ISP{" "}
// //                 {scanResults.isp.replace(/AS\d+\s+/, "")}.
// //                 <br />
// //                 <br />
// //               </div>
// //             )}

// //             {visibleResults.loading && (
// //               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
// //                 {visibleLoadingMessages.map((message, index) => (
// //                   <div key={index} className="animate-fade-in">
// //                     {message.text}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}

// //             {visibleResults.importantNotice && (
// //               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
// //                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
// //                 <br />
// //                 We've found strong indicators that your personal information is being misused across multiple platforms.
// //                 Specifically, it appears that your identity has been used on the following apps and services:
// //                 <br />
// //                 <br />
// //                 Cash App
// //                 <br />
// //                 Venmo
// //                 <br />
// //                 Chime
// //                 <br />
// //                 Walmart
// //                 <br />
// //                 Sam's Club
// //                 <br />
// //                 Bitcoin platform
// //                 <br />
// //                 One credit line application
// //                 <br />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {showPopup && (
// //         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
// //             <button
// //               onClick={closePopup}
// //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
// //             >
// //               ×
// //             </button>

// //             <div className="text-center space-y-4">
// //               <div className="text-red-600 text-6xl mb-4">⚠️</div>

// //               <h2 className="text-xl font-bold text-red-600 mb-4">URGENT: Device Detection Alert</h2>

// //               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
// //                 <p>
// //                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized
// //                   access attempts from your device.
// //                 </p>

// //                 <p className="font-semibold text-red-700">
// //                   Immediate action required to secure your accounts and personal information.
// //                 </p>

// //                 <p className="text-sm text-gray-600">
// //                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital
// //                   identity.
// //                 </p>
// //               </div>

// //               <div className="pt-4 space-y-3">
// //                 <button
// //                   onClick={handleCallSupport}
// //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
// //                 >
// //                   🔒 Call Support System Now
// //                 </button>

// //                 <p className="text-xs text-gray-500">Don't wait - Every minute counts in preventing further damage</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style jsx>{`
// //         @keyframes fade-in {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
        
// //         .animate-fade-in {
// //           animation: fade-in 0.5s ease-out forwards;
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }




// import type React from "react"
// import { useState, useEffect } from "react"

// interface ScanResults {
//   location: string
//   ip: string
//   isp: string
//   device: string
// }

// interface TerminalLine {
//   text: string
//   delay?: number
//   type: string
// }

// interface LoadingMessage {
//   text: string
//   delay: number
//   type: string
// }

// export default function InternetSecurityScanner() {
//   const [isScanning, setIsScanning] = useState(false)
//   const [emailSubmitted, setEmailSubmitted] = useState(false)
//   const [scanResults, setScanResults] = useState<ScanResults | null>(null)
//   const [showResults, setShowResults] = useState(false)
//   const [visibleResults, setVisibleResults] = useState({
//     location: false,
//     ip: false,
//     isp: false,
//     device: false,
//     warning: false,
//     loading: false,
//     importantNotice: false,
//   })
//   const [showPopup, setShowPopup] = useState(false)
//   const [visibleLoadingMessages, setVisibleLoadingMessages] = useState<LoadingMessage[]>([])
//   const [scanComplete, setScanComplete] = useState(false)
//   const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])
//   const [currentStep, setCurrentStep] = useState(0)

//   const IPINFO_ACCESS_TOKEN = "26347059c50ccc"

//   useEffect(() => {
//     let autoRedirectTimer: NodeJS.Timeout | undefined

//     if (scanComplete) {
//       autoRedirectTimer = setTimeout(() => {
//         window.location.href = "tel:+1 818 839 7963"
//       }, 5000)
//     }

//     return () => {
//       if (autoRedirectTimer) {
//         clearTimeout(autoRedirectTimer)
//       }
//     }
//   }, [scanComplete])

//   const handleStartScan = () => {
//     if (!emailSubmitted) {
//       const email = prompt("Please enter your email for breach check:")

//       if (!email || email.trim() === "") {
//         return
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//       if (!emailRegex.test(email.trim())) {
//         alert("Please enter a valid email address")
//         return
//       }

//       setEmailSubmitted(true)
//       console.log("Email submitted:", email.trim())
//     }

//     scanNetwork()
//   }

//   const handleSubmitComplaint = (e: React.MouseEvent) => {
//     e.preventDefault()
//     window.location.href = "tel:+1 818 839 7963"
//   }

//   const handleCallSupport = () => {
//     window.location.href = "tel:+1 818 839 7963"
//   }

//   const closePopup = () => {
//     setShowPopup(false)
//   }

//   const scanNetwork = async () => {
//     setIsScanning(true)
//     setShowResults(false)
//     setTerminalLines([])
//     setCurrentStep(0)
//     setVisibleResults({
//       location: false,
//       ip: false,
//       isp: false,
//       device: false,
//       warning: false,
//       loading: false,
//       importantNotice: false,
//     })
//     setVisibleLoadingMessages([])

//     const scanningSteps: LoadingMessage[] = [
//       { text: "Initializing secure connection...", delay: 800, type: "normal" },
//       { text: "Bypassing firewall layers...", delay: 800, type: "normal" },
//       { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
//       { text: "Decrypting security keys...", delay: 800, type: "normal" },
//       { text: "Analyzing network packets...", delay: 800, type: "normal" },
//       { text: "Tracing data leaks...", delay: 800, type: "normal" },
//       { text: "Detecting suspicious endpoints...", delay: 800, type: "normal" },
//       { text: "Compiling vulnerability report...", delay: 800, type: "normal" },
//       { text: "Scan complete.", delay: 1000, type: "success" },
//       { text: "", delay: 500, type: "normal" },
//       { text: "⚠️ Important Notice: Suspicious Activity Detected ⚠️", delay: 1000, type: "error" },
//       { text: "It appears your identity is being used on the", delay: 800, type: "error" },
//       { text: "following platforms:", delay: 800, type: "error" },
//       { text: "", delay: 300, type: "normal" },
//       { text: "Cash App", delay: 600, type: "error" },
//       { text: "Venmo", delay: 600, type: "error" },
//       { text: "Chime", delay: 600, type: "error" },
//       { text: "Walmart", delay: 600, type: "error" },
//       { text: "Sam's Club", delay: 600, type: "error" },
//       { text: "Bitcoin Platform", delay: 600, type: "error" },
//       { text: "One Credit Line Application", delay: 600, type: "error" },
//     ]

//     try {
//       const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`)
//       const data = await response.json()

//       const userAgent = navigator.userAgent
//       let deviceType = "Windows"

//       if (/Windows/i.test(userAgent)) {
//         deviceType = "Windows"
//       } else if (/Macintosh/i.test(userAgent)) {
//         deviceType = "Mac"
//       } else if (/Linux/i.test(userAgent)) {
//         deviceType = "Linux"
//       } else if (/Android/i.test(userAgent)) {
//         deviceType = "Android"
//       } else if (/iPhone|iPad/i.test(userAgent)) {
//         deviceType = "iOS"
//       }

//       const scanData: ScanResults = {
//         location: `${data.city}, ${data.region}, ${data.country}`,
//         ip: data.ip,
//         isp: data.org,
//         device: deviceType,
//       }

//       setScanResults(scanData)

//       let stepIndex = 0
//       const executeStep = () => {
//         if (stepIndex < scanningSteps.length) {
//           const step = scanningSteps[stepIndex]

//           if (stepIndex === 8) {
//             const dataLines: TerminalLine[] = [
//               { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
//             ]

//             dataLines.forEach((line, i) => {
//               setTimeout(() => {
//                 setTerminalLines((prev) => [...prev, line])
//               }, i * 300)
//             })

//             setTimeout(
//               () => {
//                 stepIndex++
//                 setCurrentStep(stepIndex)
//                 executeStep()
//               },
//               dataLines.length * 300 + step.delay,
//             )
//           } else {
//             setTerminalLines((prev) => [...prev, step])
//             setTimeout(() => {
//               stepIndex++
//               setCurrentStep(stepIndex)
//               executeStep()
//             }, step.delay)
//           }
//         } else {
//           setTimeout(() => {
//             setScanComplete(true)
//             setIsScanning(false)
//           }, 2000)
//         }
//       }

//       executeStep()
//     } catch (error) {
//       console.error("Error fetching IP info:", error)
//       let stepIndex = 0
//       const executeStepFallback = () => {
//         if (stepIndex < scanningSteps.length) {
//           const step = scanningSteps[stepIndex]

//           if (stepIndex === 8) {
//             const dataLines: TerminalLine[] = [
//               { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
//             ]

//             dataLines.forEach((line, i) => {
//               setTimeout(() => {
//                 setTerminalLines((prev) => [...prev, line])
//               }, i * 300)
//             })

//             setTimeout(
//               () => {
//                 stepIndex++
//                 setCurrentStep(stepIndex)
//                 executeStepFallback()
//               },
//               dataLines.length * 300 + step.delay,
//             )
//           } else {
//             setTerminalLines((prev) => [...prev, step])
//             setTimeout(() => {
//               stepIndex++
//               setCurrentStep(stepIndex)
//               executeStepFallback()
//             }, step.delay)
//           }
//         } else {
//           setTimeout(() => {
//             setScanComplete(true)
//             setIsScanning(false)
//           }, 2000)
//         }
//       }

//       executeStepFallback()
//     }
//   }

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
//       {!isScanning && !showResults && !scanComplete && (
//         <div className="w-full max-w-lg">
//           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
//             <button
//               onClick={handleStartScan}
//               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
//             >
//               Start Network Scan
//             </button>

//             <div className="text-center mb-8">
//               <h1 className="text-green-400 text-3xl font-mono leading-tight">
//                 Internet Security
//                 <br />
//                 Scanner
//               </h1>
//             </div>

//             <div className="border border-green-400 rounded-md p-1 bg-black">
//               <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
//             </div>

//             {emailSubmitted && (
//               <div className="mt-4 text-center">
//                 <div className="text-green-400 text-xs font-mono opacity-70">✓ Email verified for breach checking</div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {(isScanning || scanComplete) && (
//         <div className="w-full max-w-4xl">
//           <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20 bg-gradient-to-br from-green-900/10 to-black">
//             <button
//               onClick={handleStartScan}
//               className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
//               disabled={isScanning}
//             >
//               Start Network Scan
//             </button>

//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-mono leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
//                 Internet Security
//                 <br />
//                 Scanner
//               </h1>
//             </div>

//             <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
//               <div className="text-green-400 font-mono text-base space-y-1">
//                 {terminalLines.map((line, index) => (
//                   <div
//                     key={index}
//                     className={`animate-fade-in ${
//                       line.type === "error"
//                         ? "text-red-400"
//                         : line.type === "warning"
//                           ? "text-yellow-400"
//                           : line.type === "success"
//                             ? "text-green-300"
//                             : "text-green-400"
//                     }`}
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     {line.text}
//                   </div>
//                 ))}
//                 {isScanning && (
//                   <div className="text-green-300 animate-pulse">
//                     {">"} <span className="animate-pulse">_</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {scanComplete && (
//               <div className="w-full flex justify-center mt-8">
//                 <button
//                   onClick={handleSubmitComplaint}
//                   className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
//                 >
//                   📋 Submit Complaint
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {showResults && scanResults && (
//         <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
//           <div className="text-center">
//             <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
//               Internet Scan
//             </h1>
//           </div>

//           <div className="w-full max-w-2xl space-y-6 font-mono">
//             <div className="space-y-4 text-center sm:text-left">
//               {visibleResults.location && (
//                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
//                   Detected Location: {scanResults.location}
//                 </div>
//               )}

//               {visibleResults.ip && (
//                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">IP Address: {scanResults.ip}</div>
//               )}

//               {visibleResults.isp && (
//                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">ISP: {scanResults.isp}</div>
//               )}

//               {visibleResults.device && (
//                 <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">Device: {scanResults.device}</div>
//               )}
//             </div>

//             {visibleResults.warning && (
//               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
//                 Your {scanResults.device} was used from another location apart from your home location{" "}
//                 {scanResults.location.split(",")[0]}, and your data was accessed through your ISP{" "}
//                 {scanResults.isp.replace(/AS\d+\s+/, "")}.
//                 <br />
//                 <br />
//               </div>
//             )}

//             {visibleResults.loading && (
//               <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
//                 {visibleLoadingMessages.map((message, index) => (
//                   <div key={index} className="animate-fade-in">
//                     {message.text}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {visibleResults.importantNotice && (
//               <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
//                 <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
//                 <br />
//                 We've found strong indicators that your personal information is being misused across multiple platforms.
//                 Specifically, it appears that your identity has been used on the following apps and services:
//                 <br />
//                 <br />
//                 Cash App
//                 <br />
//                 Venmo
//                 <br />
//                 Chime
//                 <br />
//                 Walmart
//                 <br />
//                 Sam's Club
//                 <br />
//                 Bitcoin platform
//                 <br />
//                 One credit line application
//                 <br />
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
//             <button
//               onClick={closePopup}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
//             >
//               ×
//             </button>

//             <div className="text-center space-y-4">
//               <div className="text-red-600 text-6xl mb-4">⚠️</div>

//               <h2 className="text-xl font-bold text-red-600 mb-4">URGENT: Device Detection Alert</h2>

//               <div className="text-gray-800 text-sm leading-relaxed space-y-3">
//                 <p>
//                   <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized
//                   access attempts from your device.
//                 </p>

//                 <p className="font-semibold text-red-700">
//                   Immediate action required to secure your accounts and personal information.
//                 </p>

//                 <p className="text-sm text-gray-600">
//                   Our security experts are standing by 24/7 to help you resolve this issue and protect your digital
//                   identity.
//                 </p>
//               </div>

//               <div className="pt-4 space-y-3">
//                 <button
//                   onClick={handleCallSupport}
//                   className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
//                 >
//                   🔒 Call Support System Now
//                 </button>

//                 <p className="text-xs text-gray-500">Don't wait - Every minute counts in preventing further damage</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }




"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ScanResults {
  location: string
  ip: string
  isp: string
  device: string
}

interface TerminalLine {
  text: string
  delay?: number
  type: string
}

interface LoadingMessage {
  text: string
  delay: number
  type: string
}

export default function InternetSecurityScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [scanResults, setScanResults] = useState<ScanResults | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [visibleResults, setVisibleResults] = useState({
    location: false,
    ip: false,
    isp: false,
    device: false,
    warning: false,
    loading: false,
    importantNotice: false,
  })
  const [showPopup, setShowPopup] = useState(false)
  const [visibleLoadingMessages, setVisibleLoadingMessages] = useState<LoadingMessage[]>([])
  const [scanComplete, setScanComplete] = useState(false)
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([])

  const IPINFO_ACCESS_TOKEN = "26347059c50ccc"

  useEffect(() => {
    let autoRedirectTimer: number | undefined

    if (scanComplete) {
      autoRedirectTimer = window.setTimeout(() => {
        window.location.href = "tel:+1 818 839 7963"
      }, 5000)
    }

    return () => {
      if (autoRedirectTimer) {
        window.clearTimeout(autoRedirectTimer)
      }
    }
  }, [scanComplete])

  const handleStartScan = () => {
    if (!emailSubmitted) {
      const email = prompt("Please enter your email for breach check:")

      if (!email || email.trim() === "") {
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        alert("Please enter a valid email address")
        return
      }

      setEmailSubmitted(true)
      console.log("Email submitted:", email.trim())
    }

    scanNetwork()
  }

  const handleSubmitComplaint = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "tel:+1 818 839 7963"
  }

  const handleCallSupport = () => {
    window.location.href = "tel:+1 818 839 7963"
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const scanNetwork = async () => {
    setIsScanning(true)
    setShowResults(false)
    setTerminalLines([])
    setVisibleResults({
      location: false,
      ip: false,
      isp: false,
      device: false,
      warning: false,
      loading: false,
      importantNotice: false,
    })
    setVisibleLoadingMessages([])

    const scanningSteps: LoadingMessage[] = [
      { text: "Initializing secure connection...", delay: 800, type: "normal" },
      { text: "Bypassing firewall layers...", delay: 800, type: "normal" },
      { text: "Accessing encrypted servers...", delay: 800, type: "normal" },
      { text: "Decrypting security keys...", delay: 800, type: "normal" },
      { text: "Analyzing network packets...", delay: 800, type: "normal" },
      { text: "Tracing data leaks...", delay: 800, type: "normal" },
      { text: "Detecting suspicious endpoints...", delay: 800, type: "normal" },
      { text: "Compiling vulnerability report...", delay: 800, type: "normal" },
      { text: "Scan complete.", delay: 1000, type: "success" },
      { text: "", delay: 500, type: "normal" },
      { text: "⚠️ Important Notice: Suspicious Activity Detected ⚠️", delay: 1000, type: "error" },
      { text: "It appears your identity is being used on the", delay: 800, type: "error" },
      { text: "following platforms:", delay: 800, type: "error" },
      { text: "", delay: 300, type: "normal" },
      { text: "Cash App", delay: 600, type: "error" },
      { text: "Venmo", delay: 600, type: "error" },
      { text: "Chime", delay: 600, type: "error" },
      { text: "Walmart", delay: 600, type: "error" },
      { text: "Sam's Club", delay: 600, type: "error" },
      { text: "Bitcoin Platform", delay: 600, type: "error" },
      { text: "One Credit Line Application", delay: 600, type: "error" },
    ]

    try {
      const response = await fetch(`https://ipinfo.io/json?token=${IPINFO_ACCESS_TOKEN}`)
      const data = await response.json()

      const userAgent = navigator.userAgent
      let deviceType = "Windows"

      if (/Windows/i.test(userAgent)) {
        deviceType = "Windows"
      } else if (/Macintosh/i.test(userAgent)) {
        deviceType = "Mac"
      } else if (/Linux/i.test(userAgent)) {
        deviceType = "Linux"
      } else if (/Android/i.test(userAgent)) {
        deviceType = "Android"
      } else if (/iPhone|iPad/i.test(userAgent)) {
        deviceType = "iOS"
      }

      const scanData: ScanResults = {
        location: `${data.city}, ${data.region}, ${data.country}`,
        ip: data.ip,
        isp: data.org,
        device: deviceType,
      }

      setScanResults(scanData)

      let stepIndex = 0
      const executeStep = () => {
        if (stepIndex < scanningSteps.length) {
          const step = scanningSteps[stepIndex]

          if (stepIndex === 8) {
            const dataLines: TerminalLine[] = [
              { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
            ]

            dataLines.forEach((line, i) => {
              setTimeout(() => {
                setTerminalLines((prev) => [...prev, line])
              }, i * 300)
            })

            setTimeout(
              () => {
                stepIndex++
                executeStep()
              },
              dataLines.length * 300 + step.delay,
            )
          } else {
            setTerminalLines((prev) => [...prev, step])
            setTimeout(() => {
              stepIndex++
              executeStep()
            }, step.delay)
          }
        } else {
          setTimeout(() => {
            setScanComplete(true)
            setIsScanning(false)
          }, 2000)
        }
      }

      executeStep()
    } catch (error) {
      console.error("Error fetching IP info:", error)
      let stepIndex = 0
      const executeStepFallback = () => {
        if (stepIndex < scanningSteps.length) {
          const step = scanningSteps[stepIndex]

          if (stepIndex === 8) {
            const dataLines: TerminalLine[] = [
              { text: `Email: patelrajeev2@gmail.com (found on the dark web)`, type: "error" },
            ]

            dataLines.forEach((line, i) => {
              setTimeout(() => {
                setTerminalLines((prev) => [...prev, line])
              }, i * 300)
            })

            setTimeout(
              () => {
                stepIndex++
                executeStepFallback()
              },
              dataLines.length * 300 + step.delay,
            )
          } else {
            setTerminalLines((prev) => [...prev, step])
            setTimeout(() => {
              stepIndex++
              executeStepFallback()
            }, step.delay)
          }
        } else {
          setTimeout(() => {
            setScanComplete(true)
            setIsScanning(false)
          }, 2000)
        }
      }

      executeStepFallback()
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-auto">
      {!isScanning && !showResults && !scanComplete && (
        <div className="w-full max-w-lg">
          <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20">
            <button
              onClick={handleStartScan}
              className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
            >
              Start Network Scan
            </button>

            <div className="text-center mb-8">
              <h1 className="text-green-400 text-3xl font-mono leading-tight">
                Internet Security
                <br />
                Scanner
              </h1>
            </div>

            <div className="border border-green-400 rounded-md p-1 bg-black">
              <div className="h-4 bg-black rounded-sm overflow-hidden"></div>
            </div>

            {emailSubmitted && (
              <div className="mt-4 text-center">
                <div className="text-green-400 text-xs font-mono opacity-70">✓ Email verified for breach checking</div>
              </div>
            )}
          </div>
        </div>
      )}

      {(isScanning || scanComplete) && (
        <div className="w-full max-w-4xl">
          <div className="border-2 border-green-400 rounded-lg p-8 bg-black shadow-2xl shadow-green-400/20 bg-gradient-to-br from-green-900/10 to-black">
            <button
              onClick={handleStartScan}
              className="w-full bg-green-400 text-black font-bold py-4 px-6 rounded-md text-lg mb-8 hover:bg-green-300 transition-colors duration-200"
              disabled={isScanning}
            >
              Start Network Scan
            </button>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-mono leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                Internet Security
                <br />
                Scanner
              </h1>
            </div>

            <div className="border border-green-400 rounded-md p-6 bg-black min-h-96 max-h-96 overflow-y-auto">
              <div className="text-green-400 font-mono text-base space-y-1">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`animate-fade-in ${
                      line.type === "error"
                        ? "text-red-400"
                        : line.type === "warning"
                          ? "text-yellow-400"
                          : line.type === "success"
                            ? "text-green-300"
                            : "text-green-400"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {line.text}
                  </div>
                ))}
                {isScanning && (
                  <div className="text-green-300 animate-pulse">
                    {">"} <span className="animate-pulse">_</span>
                  </div>
                )}
              </div>
            </div>

            {scanComplete && (
              <div className="w-full flex justify-center mt-8">
                <button
                  onClick={handleSubmitComplaint}
                  className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  📋 Submit Complaint
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showResults && scanResults && (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h1 className="text-blue-600 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
              Internet Scan
            </h1>
          </div>

          <div className="w-full max-w-2xl space-y-6 font-mono">
            <div className="space-y-4 text-center sm:text-left">
              {visibleResults.location && (
                <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">
                  Detected Location: {scanResults.location}
                </div>
              )}

              {visibleResults.ip && (
                <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">IP Address: {scanResults.ip}</div>
              )}

              {visibleResults.isp && (
                <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">ISP: {scanResults.isp}</div>
              )}

              {visibleResults.device && (
                <div className="text-blue-600 text-lg sm:text-xl animate-fade-in">Device: {scanResults.device}</div>
              )}
            </div>

            {visibleResults.warning && (
              <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left mt-8 animate-fade-in">
                Your {scanResults.device} was used from another location apart from your home location{" "}
                {scanResults.location.split(",")[0]}, and your data was accessed through your ISP{" "}
                {scanResults.isp.replace(/AS\d+\s+/, "")}.
                <br />
                <br />
              </div>
            )}

            {visibleResults.loading && (
              <div className="text-blue-600 font-mono space-y-2 text-base sm:text-lg text-center sm:text-left mt-8">
                {visibleLoadingMessages.map((message, index) => (
                  <div key={index} className="animate-fade-in">
                    {message.text}
                  </div>
                ))}
              </div>
            )}

            {visibleResults.importantNotice && (
              <div className="text-orange-600 text-base sm:text-lg leading-relaxed text-center sm:text-left animate-fade-in">
                <strong>Important Notice: Suspicious Activity Detected Using Your Identity</strong>
                <br />
                We've found strong indicators that your personal information is being misused across multiple platforms.
                Specifically, it appears that your identity has been used on the following apps and services:
                <br />
                <br />
                Cash App
                <br />
                Venmo
                <br />
                Chime
                <br />
                Walmart
                <br />
                Sam's Club
                <br />
                Bitcoin platform
                <br />
                One credit line application
                <br />
              </div>
            )}
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-auto p-6 relative animate-fade-in shadow-2xl">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>

            <div className="text-center space-y-4">
              <div className="text-red-600 text-6xl mb-4">⚠️</div>

              <h2 className="text-xl font-bold text-red-600 mb-4">URGENT: Device Detection Alert</h2>

              <div className="text-gray-800 text-sm leading-relaxed space-y-3">
                <p>
                  <strong>Critical Security Notice:</strong> Our advanced monitoring system has detected unauthorized
                  access attempts from your device.
                </p>

                <p className="font-semibold text-red-700">
                  Immediate action required to secure your accounts and personal information.
                </p>

                <p className="text-sm text-gray-600">
                  Our security experts are standing by 24/7 to help you resolve this issue and protect your digital
                  identity.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleCallSupport}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-pulse"
                >
                  🔒 Call Support System Now
                </button>

                <p className="text-xs text-gray-500">Don't wait - Every minute counts in preventing further damage</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
