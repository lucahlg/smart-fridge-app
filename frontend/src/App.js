import React, { useEffect, useState } from 'react';
import { getHomeMessage } from './services/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHomeMessage().then(data => setMessage(data.message));
  }, []);

  return <div>{message}</div>;
}

export default App;
