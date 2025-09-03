import { useEffect, useState } from 'react';

const CyberBackground = () => {
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([]);
  const [binaryChars, setBinaryChars] = useState<Array<{ id: number; char: string; top: number; delay: number }>>([]);

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
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
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