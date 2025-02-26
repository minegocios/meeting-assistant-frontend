import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transcriptions = () => {
  const [transcriptions, setTranscriptions] = useState([]);

  useEffect(() => {
    // Chama a API do backend para buscar transcrições
    axios.get('https://api.meeting.luvia.app.br/api/transcriptions')
      .then(response => setTranscriptions(response.data))
      .catch(error => console.error('Erro ao buscar transcrições:', error));
  }, []);

  return (
    <div>
      <h1>Transcrições</h1>
      <ul>
        {transcriptions.map((transcription, index) => (
          <li key={index}>
            <strong>{transcription.title}</strong>: {transcription.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transcriptions;