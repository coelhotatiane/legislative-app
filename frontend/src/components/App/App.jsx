import { useEffect, useState } from 'react';
import Homepage from '../Homepage/Homepage.jsx';

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetching data error:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
      <Homepage billsInfo={data.data.bills} legislatorsInfo={data.data.legislators} />
  );
}
