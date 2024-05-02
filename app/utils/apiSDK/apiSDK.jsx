import axios from 'axios';
// import { useQuery, useMutation } from 'react-query';

import { useQuery, useMutation } from '@tanstack/react-query';
// const baseURL = 'https://663114fbc92f351c03dc1f32.mockapi.io'; 
const baseURL = 'project.json'; 

const handleError = (error) => {
  console.error('API Error:', error);
  throw error; 
};

export const useGetProjects = () => {
  return  useQuery({
    queryKey: 'todos',
    queryFn: async () => {
    const response = await axios.get(`${baseURL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch Projects List');
    }
    return response.data.slice(0, 12); 
  }}, {
    onError: handleError,
  });
};

// export const useDeleteProject = (projectId) => {
//   return useMutation(async () => {
//     const response = await axios.delete(`${baseURL}/projects/${projectId}`);
//     if (!response.ok) {
//       throw new Error('Failed to delete project');
//     }
//     return response.data; 
//   }, {
//     onError: handleError,
//   });
// };


export default {
  useGetProjects,
  // useDeleteProject,
};