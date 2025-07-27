import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/blogs';

export const getAllBlogs = async query => {
  const resp = await axios.get(baseUrl, {
    headers: { Authorization: `Bearer ${query.queryKey[1]}` },
  });
  return resp.data;
};

export const deleteBlog = async (query, id) => {
  const resp = await axios.delete(
    baseUrl,
    {
      headers: { Authorization: `Bearer ${query.queryKey[1]}` },
    },
    id
  );
  return resp.data;
};
