import { useState, useEffect } from 'react';

function Processing() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('done');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {status === 'loading' && (
        <p>Loading...</p>
      )}

      {status === 'done' && (
        <div>
          <p>Result:</p>
          <ul>
            <li>Grade A: 76%</li>
            <li>Grade B: 16%</li>
            <li>Damaged: 8%</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Processing;
