import { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [recentLogins, setRecentLogins] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get('/api/user');
        setUser(userRes.data);


        const loginsRes = await axios.get('/api/user/recent-logins');
        setRecentLogins(loginsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Recent Logins:</h2>
        <ul>
          {recentLogins.map((login, index) => (
            <li key={index}>
              <p>IP Address: {login.ip}</p>
              <p>Last Login: {new Date(login.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Dashboard;
