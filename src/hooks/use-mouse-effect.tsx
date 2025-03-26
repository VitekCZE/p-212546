
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
    cursor.style.width = '80px';
    cursor.style.height = '80px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid var(--purple)';
    cursor.style.opacity = '0';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.15s ease-out, width 0.2s ease, height 0.2s ease, opacity 0.3s ease-out';
    
    // Track mouse velocity for dynamic cursor size
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let velocity = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate velocity (distance moved since last frame)
      const deltaX = x - lastX;
      const deltaY = y - lastY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Update position with smoothing
      mouseX = x;
      mouseY = y;
      
      // Update velocity with smoothing
      velocity = Math.min(distance, 50);
      
      // Dynamic cursor size based on velocity
      const size = Math.max(60, 60 + velocity * 0.6);
      
      cursor.style.opacity = '1';
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.transform = `translate(${x - size/2}px, ${y - size/2}px)`;
      
      // Store current position for next frame
      lastX = x;
      lastY = y;
    };
    
    // Enhance interaction with interactive elements
    const onElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || 
          target.closest('button') || target.closest('a')) {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.backgroundColor = 'rgba(175, 127, 227, 0.1)';
        cursor.style.mixBlendMode = 'normal';
      } else {
        cursor.style.backgroundColor = 'transparent';
        cursor.style.mixBlendMode = 'difference';
      }
    };
    
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
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
