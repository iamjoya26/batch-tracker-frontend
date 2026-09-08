import { useState, useEffect } from "react";

function Processing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI processing taking 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="processing-section">
          Loading...
        </div>
      ) : (
        <div className="result-section">
          <p>Grade A: 76%</p>
          <p>Damaged: 8%</p>
          <p>Grade B: 16%</p>
        </div>
      )}
    </div>
  );
}

export default Processing;