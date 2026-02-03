import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * images: Array of objects:
 *  {
 *    src: string,
 *    pos?: string (object-position for desktop, ex: "center 30%"),
 *    mobilePos?: string (object-position for mobile),
 *    zoom?: number (ex: 1.1),
 *    motion?: { from:{x,y,scale}, to:{x,y,scale} }  // optional
 *  }
 *
 * overlayOpacityClass: ex "bg-fcPurple/60" or "bg-sjMaroon/55"
 */
export default function HeroSlideshow({
  images = [],
  interval = 6500,
  overlayOpacityClass = "bg-fcPurple/60",
  className = "",
  children,
}) {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = useMemo(
    () => (Array.isArray(images) ? images.filter((x) => x?.src) : []),
    [images]
  );

  // Mobile detection
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Preload
  useEffect(() => {
    slides.forEach((s) => {
      const i = new Image();
      i.src = s.src;
    });
  }, [slides]);

  // Rotate
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  // Default motion directions (rotating)
  const defaultMotions = useMemo(
    () => [
      // left -> right
      { from: { x: -18, y: 0, scale: 1.08 }, to: { x: 18, y: 0, scale: 1.14 } },
      // bottom -> top
      { from: { x: 0, y: 16, scale: 1.08 }, to: { x: 0, y: -16, scale: 1.14 } },
      // right -> left
      { from: { x: 18, y: 0, scale: 1.08 }, to: { x: -18, y: 0, scale: 1.14 } },
      // top -> bottom
      { from: { x: 0, y: -16, scale: 1.08 }, to: { x: 0, y: 16, scale: 1.14 } },
      // slight diagonal
      { from: { x: -14, y: 10, scale: 1.08 }, to: { x: 14, y: -10, scale: 1.14 } },
      // reverse diagonal
      { from: { x: 14, y: -10, scale: 1.08 }, to: { x: -14, y: 10, scale: 1.14 } },
    ],
    []
  );

  const seconds = Math.max(3.5, interval / 1000);

  return (
    <section className={`relative text-white overflow-hidden ${className}`}>
      {/* Slides layer */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => {
          const objectPosition = isMobile ? s.mobilePos || s.pos || "center" : s.pos || "center";
          const zoom = typeof s.zoom === "number" ? s.zoom : 1;

          // Use custom motion if provided, otherwise rotate defaults by index
          const motionPlan = s.motion || defaultMotions[i % defaultMotions.length];

          // Respect prefers-reduced-motion automatically (Framer does this well),
          // but we’ll keep movement gentle regardless.
          const from = {
            x: motionPlan.from.x,
            y: motionPlan.from.y,
            scale: motionPlan.from.scale * zoom,
          };
          const to = {
            x: motionPlan.to.x,
            y: motionPlan.to.y,
            scale: motionPlan.to.scale * zoom,
          };

          return (
            <motion.img
              key={`${s.src}-${i}`}
              src={s.src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectPosition,
                transition: "opacity 900ms ease-in-out",
                willChange: "transform, opacity",
                transformOrigin: "center",
              }}
              // Motion only needs to run on the active slide
              initial={false}
              animate={i === idx ? to : from}
              transition={
                i === idx
                  ? { duration: seconds, ease: "linear" }
                  : { duration: 0.6, ease: "easeOut" }
              }
            />
          );
        })}

        {/* Glaze overlay (kept on top of images, but behind text) */}
        <div className={`absolute inset-0 ${overlayOpacityClass}`} />

        {/* Optional contrast film */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content layer (always above images + glaze) */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
