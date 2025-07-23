import { useSelector } from 'react-redux';

const BlogList = () => {
  const user = {
    id: useSelector(state => state.userReducer),
  };
  console.log(user);
  return <div>Blogs</div>;
};

export default BlogList;
