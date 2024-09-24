import { useState, useEffect } from 'react';
import { fetchProjects, createProject } from '../services/apiService';

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  
  useEffect(() => {
    const loadProjects = async () => {
      const projectData = await fetchProjects();
      setProjects(projectData);
    };
    loadProjects();
  }, []);

  const handleCreateProject = async () => {
    const newProject = { name: newProjectName, status: 'In Progress', progress: 0 };
    const createdProject = await createProject(newProject);
    setProjects([...projects, createdProject]);
    setNewProjectName('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Project Dashboard</h1>

      {/* Create New Project */}
      <div className="flex mb-6">
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="New Project Name"
          className="border rounded px-4 py-2 mr-2 flex-grow"
        />
        <button onClick={handleCreateProject} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Project
        </button>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p>Status: {project.status}</p>
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">{project.progress}% Complete</p>
            </div>
            <div className="flex mt-4">
              <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
