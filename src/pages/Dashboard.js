import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Chama a API do backend para buscar reuniões
    axios.get('https://api.meeting.luvia.app.br/api/calendar')
      .then(response => setMeetings(response.data))
      .catch(error => console.error('Erro ao buscar reuniões:', error));
  }, []);

  return (
    <div>
      <h1>Reuniões Agendadas</h1>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>{meeting.summary} - {new Date(meeting.start.dateTime).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;