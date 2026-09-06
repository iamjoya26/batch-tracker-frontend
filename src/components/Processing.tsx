import { useState } from "react";

function Processing() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");

  return (
    <div>
      Processing component works
    </div>
  );
}

export default Processing;
