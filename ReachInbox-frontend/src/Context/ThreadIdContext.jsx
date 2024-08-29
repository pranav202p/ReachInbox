import React, { createContext, useState, useContext } from 'react';

const ThreadIdContext = createContext();

export const useThreadId = () => useContext(ThreadIdContext);

export function ThreadIdProvider({ children }) {
  const [threadId, setThreadId] = useState(null);

  return (
    <ThreadIdContext.Provider value={{ threadId, setThreadId }}>
      {children}
    </ThreadIdContext.Provider>
  );
}
