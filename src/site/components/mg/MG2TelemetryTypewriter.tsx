import React, { useEffect, useState } from 'react';

const MESSAGES = [
  "Incoming inspection: recorded",
  "In-process check: verified",
  "Final packing: approved",
  "Delivery gate: inspection-ready"
];

const MG2TelemetryTypewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = MESSAGES[index % MESSAGES.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="glass-card rounded-2xl p-6 border-gold/20 h-24 flex items-center">
      <div className="flex items-center space-x-3 w-full">
        <div className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
        <span className="text-sm font-semibold tracking-tight text-ink">
          {text}<span className="animate-blink">|</span>
        </span>
      </div>
    </div>
  );
};

export default MG2TelemetryTypewriter;
