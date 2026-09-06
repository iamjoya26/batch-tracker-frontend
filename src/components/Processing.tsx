import { useState, useEffect } from "react";

function Processing() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setResult("Sample processed successfully!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
}

export default Processing;
