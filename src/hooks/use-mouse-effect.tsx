
import { useEffect } from 'react';

export function useMouseEffect() {
  useEffect(() => {
    // Create cursor element if it doesn't exist
    let cursor = document.querySelector('.mouse-cursor') as HTMLElement;
    
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.classList.add('mouse-cursor');
      document.body.appendChild(cursor);
    }
    
    // Initialize cursor styles
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'var(--purple)';
    cursor.style.opacity = '0.7';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.3s ease-out';
    
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update cursor position
      cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
    };
    
    // Enhance interaction with interactive elements
    const onElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'IMG' || target.closest('img')) {
        // Add pulsing effect on image hover
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'var(--purple)';
        cursor.style.opacity = '0.8';
        cursor.style.animation = 'pulse-cursor 1.5s infinite';
      } else if (target.tagName === 'BUTTON' || target.tagName === 'A' || 
          target.closest('button') || target.closest('a')) {
        cursor.style.width = '25px';
        cursor.style.height = '25px';
        cursor.style.opacity = '0.8';
        cursor.style.animation = 'none';
      } else {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.opacity = '0.7';
        cursor.style.animation = 'none';
      }
    };
    
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    
    const onMouseEnter = () => {
      cursor.style.opacity = '0.7';
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', onElementHover);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', onElementHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);
}
