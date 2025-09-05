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

interface GlowingStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
}

interface ScanLine {
  id: number;
  x: number;
  y: number;
  width: number;
  progress: number;
}

interface Shield {
  id: number;
  x: number;
  y: number;
  rotation: number;
  pulse: number;
}

const CyberBackground = () => {
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([]);
  const [binaryChars, setBinaryChars] = useState<Array<{ id: number; char: string; top: number; delay: number }>>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [securityNodes, setSecurityNodes] = useState<SecurityNode[]>([]);
  const [digitalTrail, setDigitalTrail] = useState<Array<{ x: number; y: number; id: number; opacity: number }>>([]);
  const [glowingStars, setGlowingStars] = useState<GlowingStar[]>([]);
  const [scanLines, setScanLines] = useState<ScanLine[]>([]);
  const [shields, setShields] = useState<Shield[]>([]);
  const [cloudNodes, setCloudNodes] = useState<Array<{ id: number; x: number; y: number; scale: number; opacity: number }>>([]);
  const [containerNodes, setContainerNodes] = useState<Array<{ id: number; x: number; y: number; rotation: number; glow: number }>>([]);

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

    // Create glowing stars that follow cursor
    const newStar: GlowingStar = {
      id: Date.now() + Math.random(),
      x: e.clientX + (Math.random() - 0.5) * 100,
      y: e.clientY + (Math.random() - 0.5) * 100,
      size: Math.random() * 6 + 2,
      opacity: 1,
      life: 120
    };
    setGlowingStars(prev => [...prev.slice(-20), newStar]);
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

    // Initialize shields
    const newShields = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: 0,
      pulse: Math.random() * Math.PI * 2
    }));
    setShields(newShields);

    // Initialize cloud nodes
    const newCloudNodes = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.8 + Math.random() * 0.4,
      opacity: 0.6 + Math.random() * 0.4
    }));
    setCloudNodes(newCloudNodes);

    // Initialize container nodes
    const newContainerNodes = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: 0,
      glow: 0.5
    }));
    setContainerNodes(newContainerNodes);

    // Initialize scan lines
    const newScanLines = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      width: 50 + Math.random() * 200,
      progress: 0
    }));
    setScanLines(newScanLines);

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

      // Update glowing stars
      setGlowingStars(prev => 
        prev.map(star => ({
          ...star,
          life: star.life - 1,
          opacity: star.life / 120,
          x: star.x + (Math.random() - 0.5) * 2,
          y: star.y + (Math.random() - 0.5) * 2
        })).filter(star => star.life > 0)
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

      // Update shields
      setShields(prev => 
        prev.map(shield => ({
          ...shield,
          rotation: shield.rotation + 1,
          pulse: shield.pulse + 0.1
        }))
      );

      // Update scan lines
      setScanLines(prev => 
        prev.map(line => ({
          ...line,
          progress: (line.progress + 2) % 100
        }))
      );

      // Update cloud nodes
      setCloudNodes(prev => 
        prev.map(node => ({
          ...node,
          scale: node.scale + Math.sin(Date.now() * 0.001 + node.id) * 0.02,
          opacity: 0.6 + Math.sin(Date.now() * 0.002 + node.id) * 0.2
        }))
      );

      // Update container nodes
      setContainerNodes(prev => 
        prev.map(node => ({
          ...node,
          rotation: node.rotation + 0.5,
          glow: 0.5 + Math.sin(Date.now() * 0.003 + node.id) * 0.3
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Glowing Stars Following Cursor */}
      {glowingStars.map((star) => (
        <div
          key={star.id}
          className="glowing-star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `scale(${star.opacity})`
          }}
        />
      ))}

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

      {/* Security Shields */}
      {shields.map((shield) => (
        <div
          key={shield.id}
          className="security-shield"
          style={{
            left: `${shield.x}%`,
            top: `${shield.y}%`,
            transform: `rotate(${shield.rotation}deg) scale(${1 + Math.sin(shield.pulse) * 0.3})`,
            opacity: 0.6 + Math.sin(shield.pulse) * 0.2
          }}
        >
          🛡️
        </div>
      ))}

      {/* Cloud Security Nodes */}
      {cloudNodes.map((node) => (
        <div
          key={node.id}
          className="cloud-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `scale(${node.scale})`,
            opacity: node.opacity
          }}
        >
          ☁️
        </div>
      ))}

      {/* Container Security Nodes */}
      {containerNodes.map((node) => (
        <div
          key={node.id}
          className="container-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `rotate(${node.rotation}deg)`,
            filter: `drop-shadow(0 0 ${10 * node.glow}px hsl(142 100% 50% / ${node.glow}))`
          }}
        >
          📦
        </div>
      ))}

      {/* Security Scan Lines */}
      {scanLines.map((line) => (
        <div
          key={line.id}
          className="scan-line-animated"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            width: `${line.width}px`,
            background: `linear-gradient(90deg, transparent 0%, hsl(195 100% 50% / 0.8) ${line.progress}%, transparent 100%)`
          }}
        />
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
          🔒
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
      
      {/* Detection Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Threat Detection Pulses */}
      <div className="threat-pulse threat-pulse-1"></div>
      <div className="threat-pulse threat-pulse-2"></div>
      <div className="threat-pulse threat-pulse-3"></div>
    </div>
  );
};

export default CyberBackground;