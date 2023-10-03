import React from 'react';
import { Link } from 'react-router-dom';

const CityTabs = () => {
  const [activeTab, setActiveTab] = React.useState('Tiruchirappalli');

  const handleTabClick = (city) => {
    setActiveTab(city);
  };

  return (
    <ul className="city-tabs">
      <li>
        <Link to="/property" onClick={() => handleTabClick('Tiruchirappalli')}>Tiruchirappalli</Link>
      </li>
      <li>
        <Link to="/property/2" onClick={() => handleTabClick('Chennai')}>Chennai</Link>
      </li>
      <li>
        <Link to="/property/3" onClick={() => handleTabClick('Bangalore')}>Bangalore</Link>
      </li>
      <li>
        <Link to="/property/4" onClick={() => handleTabClick('Hyderabad')}>Hyderabad</Link>
      </li>
    </ul>
  );
};

export default CityTabs;