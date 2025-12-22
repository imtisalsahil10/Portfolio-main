import { motion } from "motion/react";
import { useState } from "react";

const BASE_URL = import.meta.env.BASE_URL || "/";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  images,
  tags,
  href,
  liveLink,
  closeModal,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayImages = images || [image];

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 transition-colors rounded-full top-3 right-3 bg-gray-700/80 hover:bg-gray-600 backdrop-blur-sm"
          aria-label="Close"
        >
          <img src={`${BASE_URL}assets/close.svg`} className="w-6 h-6 invert" />
        </button>

        {/* Image Gallery */}
        <div className="relative">
          <img src={displayImages[currentImageIndex]} alt={title} className="w-full rounded-t-2xl" />

          {/* Image Navigation */}
          {displayImages.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
                }
                className="absolute p-2 transition-colors transform -translate-y-1/2 bg-gray-800/80 rounded-full left-3 top-1/2 hover:bg-gray-700 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === displayImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute p-2 transition-colors transform -translate-y-1/2 bg-gray-800/80 rounded-full right-3 top-1/2 hover:bg-gray-700 backdrop-blur-sm"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-3 left-1/2">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(90%) sepia(8%) saturate(318%) hue-rotate(201deg) brightness(100%) contrast(95%)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-4">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-green-400 hover:text-green-300"
                >
                  Live Demo {" "}
                  <img src={`${BASE_URL}assets/arrow-up.svg`} className="size-4" />
                </a>
              )}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-blue-400 hover:text-blue-300"
              >
                View Project {" "}
                <img src={`${BASE_URL}assets/arrow-up.svg`} className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
