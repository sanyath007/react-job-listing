import React, { useState, useEffect } from 'react';
import JobBoard from './components/JobBoard';
import data from './assets/data.json';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div className="App">
      <JobBoard />
    </div>
  );
}

export default App;
