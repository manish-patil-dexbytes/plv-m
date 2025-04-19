import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date("2025-05-14T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <style jsx>{`
        .countdown-timer {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-top: 20px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding: 0 10px;
        }
        .countdown-timer span {
          font-size: 1.1em;
          font-weight: bold;
          color: wheat;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
                       0 0 10px rgba(212, 175, 55, 0.5);
          padding: 6px 10px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          min-width: 50px;
          text-align: center;
          display: inline-block;
          white-space: nowrap;
        }
        .countdown-timer span:hover {
          transform: scale(1.05);
        }
        @media (min-width: 768px) {
          .countdown-timer {
            gap: 20px;
          }
          .countdown-timer span {
            font-size: 1.8em;
            min-width: 80px;
            padding: 10px 15px;
          }
        }
      `}</style>
      <span>{timeLeft.days.toString().padStart(2, '0')}d</span>
      <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
      <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
      <span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
    </div>
  );
};

export default CountdownTimer;
