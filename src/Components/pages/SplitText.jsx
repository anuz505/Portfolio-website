import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ text, className = "", duration = 0.8, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !text) return;

    const el = ref.current;

    // Simple fade in animation
    gsap.set(el, { opacity: 0, y: 30 });

    const animation = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [text, duration, delay]);

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
};

export default SplitText;
