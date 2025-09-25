import React from "react";

export default function FloatingSpheres() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bottom-left sphere */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-45 blur-2xl shadow-lg animate-drift-diagonal"></div>
      {/* Top-left sphere */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-40 blur-xl shadow-lg animate-drift-diagonal animation-delay-5000"></div>
      {/* Bottom-right sphere */}
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-35 blur-2xl shadow-lg animate-drift-diagonal animation-delay-10000"></div>
    </div>
  );
}
