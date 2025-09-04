"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function CEOReport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
      >
        <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </span>
        <span className="text-sm font-medium text-gray-700">
          Hear From Our CEO
        </span>
        <ArrowRight
          size={16}
          className="text-emerald-500 group-hover:text-gray-700 animate-pulse group-hover:translate-x-1 transition-all duration-200"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl mx-4 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Video */}
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with CEO video
                title="CEO Market Report"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Caption */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                CEO Lycan
              </h3>
              <p className="text-sm text-gray-600">
                Hear directly from our CEO about Lycan’s vision, growth, and
                upcoming opportunities.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
