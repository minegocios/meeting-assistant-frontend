import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('https://api.meeting.luvia.app.br/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Arquivo enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
      alert('Erro ao enviar arquivo.');
    }
  };

  return (
    <div>
      <h1>Upload de Áudio</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Upload;