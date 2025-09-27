import React, { useEffect, useMemo, memo } from "react";

const Loader = memo(() => {
  const text = "Hello, I am Anuj.";

  // Memoize the text splitting to avoid re-splitting on every render
  const textChars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    // Try to dynamically import ldrs hatch for web component
    import("ldrs/hatch").catch(() => {
      console.log("ldrs hatch not available, using CSS fallback");
    });

    // Store original values for cleanup
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyHeight = document.body.style.height;
    const originalDocumentOverflow = document.documentElement.style.overflow;
    const originalDocumentHeight = document.documentElement.style.height;

    // Prevent scrolling when loader is mounted
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
      document.documentElement.style.overflow = originalDocumentOverflow;
      document.documentElement.style.height = originalDocumentHeight;
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] px-4 overflow-hidden">
      <h1 className="font-bold font-bebas text-5xl sm:text-5xl md:text-4xl lg:text-9xl text-center text-black mb-8 sm:mb-12">
        {textChars.map((char, index) => (
          <span
            key={`char-${index}`}
            className="inline-block animate-appear"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* ldrs web component - will fallback to CSS spinner if not loaded */}
      <l-hatch size="28" stroke="4" speed="3.5" color="black"></l-hatch>

      {/* CSS fallback spinner */}
      <div className="css-fallback-spinner"></div>

      <style>{`
        .animate-appear {
          animation: appear 0.8s both;
          opacity: 0;
        }
        
        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 1) translateY(20px);
          }
          60% {
            opacity: 1;
            transform: scale3d(1.1, 1.1, 1) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1) translateY(0);
          }
        }
        
        /* CSS fallback spinner styles */
        .css-fallback-spinner {
          width: 28px;
          height: 28px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #000000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: none;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Show fallback spinner if ldrs component is not defined */
        l-hatch:not(:defined) {
          display: none;
        }
        
        l-hatch:not(:defined) + .css-fallback-spinner {
          display: block;
        }
      `}</style>
    </div>
  );
});

Loader.displayName = "Loader";

export default Loader;
