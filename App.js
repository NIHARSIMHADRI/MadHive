// App.js

import React, { useState } from 'react';
import './styles.css'; // Import the stylesheet
import './App.css';
import { ScheduleComponent , Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'

const TabList = ({ activeTab, onTabClick }) => {
const tabs = ['profile', 'dashboard', 'messages'];

return (
<div className="tab-list-container">
{tabs.map((tab) => (
<div
key={tab}
className={`tab ${activeTab === tab ? 'active' : ''}`}
onClick={() => onTabClick(tab)}
>
{tab.charAt(0).toUpperCase() + tab.slice(1)}
</div>
))}
</div>
);
};

const App = () => {
const [activeTab, setActiveTab] = useState('profile');

const handleTabClick = (tab) => {
setActiveTab(tab);
};

const getContentForTab = () => {
switch (activeTab) {
case 'profile':
return <div className="tab-content">Profile content goes here
</div>;
case 'dashboard':

return <div className="tab-content">Dashboard content goes here
<ScheduleComponent width = '100%' height = '500px'>
<Inject services = {[Day, Week, WorkWeek, Month, Agenda]}></Inject>
</ScheduleComponent>
</div>;

case 'messages':
return <div className="tab-content">Messages content goes here</div>;
default:
return null;
}
};

return (
<div className="app-container">
<TabList activeTab={activeTab} onTabClick={handleTabClick} />
<div className="content-container">{getContentForTab()}</div>
</div>
);
};

export default App;
