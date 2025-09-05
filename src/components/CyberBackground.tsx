import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface SecurityNode {
  id: number;
  x: number;
  y: number;
  scale: number;
  glow: number;
}

const CyberBackground = () => {
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([]);
  const [binaryChars, setBinaryChars] = useState<Array<{ id: number; char: string; top: number; delay: number }>>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [securityNodes, setSecurityNodes] = useState<SecurityNode[]>([]);
  const [digitalTrail, setDigitalTrail] = useState<Array<{ x: number; y: number; id: number; opacity: number }>>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });

    // Create digital trail
    setDigitalTrail(prev => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        opacity: 1
      };
      return [...prev.slice(-8), newTrail];
    });

    // Create cursor particles
    if (Math.random() > 0.7) {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 60,
        maxLife: 60
      };
      setParticles(prev => [...prev.slice(-30), newParticle]);
    }
  }, []);

  useEffect(() => {
    // Matrix rain characters
    const matrixCharSet = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newMatrixChars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      char: matrixCharSet[Math.floor(Math.random() * matrixCharSet.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setMatrixChars(newMatrixChars);

    // Binary characters
    const newBinaryChars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      char: Math.random() > 0.5 ? '1' : '0',
      top: Math.random() * 100,
      delay: Math.random() * 8
    }));
    setBinaryChars(newBinaryChars);

    // Security nodes
    const newSecurityNodes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 1,
      glow: 0.5
    }));
    setSecurityNodes(newSecurityNodes);

    // Mouse event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // Animate particles and trails
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1
        })).filter(p => p.life > 0)
      );

      setDigitalTrail(prev => 
        prev.map(t => ({
          ...t,
          opacity: t.opacity - 0.1
        })).filter(t => t.opacity > 0)
      );

      // Update security nodes based on mouse proximity
      setSecurityNodes(prev => 
        prev.map(node => {
          const distance = Math.sqrt(
            Math.pow(node.x - mousePos.x, 2) + Math.pow(node.y - mousePos.y, 2)
          );
          const proximity = Math.max(0, 30 - distance) / 30;
          return {
            ...node,
            scale: 1 + proximity * 0.5,
            glow: 0.5 + proximity * 0.5
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Interactive Cursor Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle-interactive"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.life / particle.maxLife,
            transform: `scale(${particle.life / particle.maxLife})`
          }}
        />
      ))}

      {/* Digital Trail */}
      {digitalTrail.map((trail, index) => (
        <div
          key={trail.id}
          className="digital-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity,
            transform: `scale(${trail.opacity})`
          }}
        >
          {['◆', '●', '▲'][index % 3]}
        </div>
      ))}

      {/* Security Nodes */}
      {securityNodes.map((node) => (
        <div
          key={node.id}
          className="security-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `scale(${node.scale})`,
            opacity: node.glow,
            boxShadow: `0 0 ${20 * node.glow}px hsl(195 100% 50% / ${node.glow * 0.8})`
          }}
        >
          🛡️
        </div>
      ))}

      {/* Mouse Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`
        }}
      />

      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="matrix-char"
            style={{
              left: `${char.left}%`,
              animationDelay: `${char.delay}s`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Binary Background */}
      <div className="binary-bg">
        {binaryChars.map((char) => (
          <div
            key={char.id}
            className="binary-char"
            style={{
              top: `${char.top}%`,
              animationDelay: `${char.delay}s`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Scanning Line */}
      <div className="scan-line"></div>
      
      {/* Additional Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
    </div>
  );
};

export default CyberBackground;