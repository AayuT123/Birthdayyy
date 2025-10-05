// ...existing code...

const COLORS = ['#FF6B6B', '#FFD700', '#4ECDC4', '#0a192f'];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Confetti: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {Array.from({ length: 20 }).map((_, i) => {
        const color = COLORS[i % COLORS.length];
        const left = `${randomInt(5, 95)}%`;
        const delay = `${randomInt(0, 2000)}ms`;
        const duration = `${randomInt(2500, 4000)}ms`;
        const size = randomInt(8, 16);
        return (
          <span
            key={i}
            className="absolute top-0"
            style={{
              left,
              width: size,
              height: size,
              background: color,
              borderRadius: '50%',
              animation: `confetti-fall ${duration} linear infinite`,
              animationDelay: delay,
              opacity: 0.85,
            }}
          />
        );
      })}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) scale(1) rotate(0deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh) scale(0.8) rotate(360deg); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};
