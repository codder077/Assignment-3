import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/projects', {
        headers: { Authorization: token }
      });
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-4">Your Projects</h2>
      <ul className="space-y-4">
        {projects.map(project => (
          <li key={project._id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
