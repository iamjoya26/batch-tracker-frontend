import { useState } from "react";

function Processing() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");

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
