import { useEffect, useRef } from 'react';

const useVanta = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScripts = () => {
      return new Promise<void>((resolve, reject) => {
        // Load Three.js
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        threeScript.onload = () => {
          // Load Vanta.js
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.birds.min.js';
          vantaScript.onload = () => resolve();
          vantaScript.onerror = reject;
          document.body.appendChild(vantaScript);
        };
        threeScript.onerror = reject;
        document.body.appendChild(threeScript);
      });
    };

    const initializeVanta = async () => {
      try {
        await loadScripts();

        if (vantaRef.current) {
          const vantaEffect = (window as any).VANTA.BIRDS({
            el: vantaRef.current,
            THREE: (window as any).THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x000000,
            color1: 0x150bde,
            color2: 0x140409,
            birdSize: 0.60,
            wingSpan: 35.00,
            separation: 34.00,
            quantity: 4.00
          });

          return vantaEffect;
        }
      } catch (error) {
        console.error('Error loading Vanta.js or Three.js:', error);
      }
    };

    let vantaEffect: any;
    initializeVanta().then(effect => vantaEffect = effect);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return vantaRef;
};

export default useVanta;
