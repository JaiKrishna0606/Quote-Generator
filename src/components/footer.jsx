import React, { useState, useEffect } from 'react';
import './footer.css';

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-left">{time}</div>
      <div className="footer-right">{date}</div>
    </footer>
  );
}

export default Footer;