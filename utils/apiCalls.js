import axios from "axios";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${apiUrl}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addPost = async (newPost) => {
  try {
    const response = await axios.post(`${apiUrl}/posts`, newPost);
  } catch (error) {
    console.error(error);
  }
};

export const getPostComments = async (postId) => {
  try {
    const response = await axios.get(`${apiUrl}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addComment = async (postId, newComment) => {
  try {
    const response = await axios.post(
      `${apiUrl}/posts/${postId}/comments`,
      newComment
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${apiUrl}/projects`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (projectId) => {
  try {
    const response = await axios.get(`${apiUrl}/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addProject = async (newPost) => {
  try {
    const response = await axios.post(`${apiUrl}/projects`, newPost);
  } catch (error) {
    console.error(error);
  }
};

export const getFunding = async (projectId) => {
  try {
    const response = await axios.get(`${apiUrl}/projects/${projectId}/funding`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addFunding = async (projectId, newFunding) => {
  try {
    const response = await axios.post(
      `${apiUrl}/projects/${projectId}/funding`,
      newFunding
    );
  } catch (error) {
    console.error(error);
  }
};

export const updateFunding = async (projectId, fundId, updatedFunding) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/projects/${projectId}/funding/${fundId}`,
      updatedFunding
    );
  } catch (error) {
    console.error(error);
  }
};

export const getProjectFunding = async (projectId) => {
  try {
    const response = await axios.get(`${apiUrl}/projects/${projectId}/funding`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
