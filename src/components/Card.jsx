import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef, skillName, colorClass = "bg-blue-500/20" }) => {
  return image && !text ? (
    <motion.div
      className={`absolute flex flex-col items-center justify-center gap-1 p-3 ${colorClass} rounded-full cursor-grab backdrop-blur-sm ring-1 ring-white/20`}
      style={style}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
      dragTransition={{ power: 0.4, timeConstant: 200 }}
    >
      <img
        className="w-10 h-10 pointer-events-none"
        src={image}
        style={{ filter: "brightness(0) saturate(100%) invert(88%) sepia(8%) saturate(318%) hue-rotate(201deg) brightness(95%) contrast(89%)" }}
        alt={skillName}
      />
      {skillName && (
        <span className="text-xs font-medium text-gray-300 whitespace-nowrap pointer-events-none">
          {skillName}
        </span>
      )}
    </motion.div>
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
