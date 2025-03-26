
import { useEffect, useRef } from 'react';

interface SectionAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useSectionAnimation = (
  animationClass: string = 'section-fade-in',
  options: SectionAnimationOptions = {}
) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Add the animation class to the section
    section.classList.add(animationClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            
            // Also handle staggered items if they exist
            const staggerItems = section.querySelectorAll('.stagger-item');
            if (staggerItems.length) {
              staggerItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('is-visible');
                }, 150 * index);
              });
            }
            
            if (triggerOnce) {
              observer.unobserve(section);
            }
          } else if (!triggerOnce) {
            section.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [animationClass, threshold, rootMargin, triggerOnce]);

  return sectionRef;
};
