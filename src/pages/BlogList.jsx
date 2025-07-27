import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getAllBlogs } from '../api/blogsApi';

const BlogList = () => {
  const user = {
    id: useSelector(state => state.userReducer),
  };
  const token = localStorage.getItem('access_token');
  const result = useQuery({
    queryKey: ['blogs', token],
    queryFn: getAllBlogs,
    enabled: !!user.id,
  });
  if (!user.id) {
    return <div>Login to see blogs</div>;
  }
  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  if (result.error) {
    return <div>Unable to fetch blogs</div>;
  }

  const handleDelete = () => {
    console.log('Button pressed');
  };
  const data = result.data.map(blog => {
    return (
      <div key={blog.id}>
        {blog.title}{' '}
        {user.id === blog.user.id ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}
      </div>
    );
  });
  return <div>{data}</div>;
};

export default BlogList;
