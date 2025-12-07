
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// -------------------------
// Auto-play Image / Video
// -------------------------
const MediaItem = ({ item, className, onClick }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsInView(entry.isIntersecting)),
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => videoRef.current && observer.unobserve(videoRef.current);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
      setIsBuffering(false);
    } else video.pause();
  }, [isInView]);

  if (item.type === "video") {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="auto"
          onClick={onClick}
        >
          <source src={item.url} type="video/mp4" />
        </video>

        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={item.url}
      onClick={onClick}
      className={`${className} object-cover cursor-pointer`}
      alt="media"
      loading="lazy"
    />
  );
};

// -----------------------------
// Large Modal Viewer + Dock
// -----------------------------
const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }) => {
  if (!isOpen) return null;

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  return (
    <>
      {/* Fullscreen modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-3"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-xl"
        >
          <MediaItem item={selectedItem} className="w-full h-[60vh]" />

          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-lg font-semibold">{selectedItem.title}</h3>
            <p className="text-white/70 text-sm">{selectedItem.desc}</p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-gray-800 p-2 rounded-full shadow"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* Draggable dock */}
      <motion.div
        drag={isDesktop ? true : false}
        dragElastic={0.1}
        className="fixed bottom-5 w-full flex justify-center z-50"
      >
        <div className="flex gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/30">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`w-12 h-12 rounded-md overflow-hidden border ${
                selectedItem.id === item.id
                  ? "border-white shadow-lg scale-110"
                  : "border-transparent opacity-80"
              } transition`}
            >
              <MediaItem item={item} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

// -----------------------------
// Main Bento Grid Component
// -----------------------------
const InteractiveBentoGallery = ({ mediaItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hiw-title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hiw-subtitle"
        >
          {description}
        </motion.p>
      </div>

      {/* Grid */}
      {!selectedItem && (
        <motion.div
          layout
          className="
            grid gap-3
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
            auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[180px]
          "
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              drag={isDesktop ? "x" : false}
              dragElastic={1}
              onDragStart={(e) => e.pointerType !== "touch" && setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              onClick={() => !isDragging && setSelectedItem(item)}
              className={`relative rounded-xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-lg transition ${
                item.span || ""
              }`}
            >
              <MediaItem item={item} className="w-full h-full absolute inset-0" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            mediaItems={items}
            setSelectedItem={setSelectedItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
