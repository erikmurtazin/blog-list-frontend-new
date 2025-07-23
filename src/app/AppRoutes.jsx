import { Routes, Route, Link } from 'react-router-dom';
import Login from '../features/auth/Login';
import BlogList from '../pages/BlogList';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = {
    id: useSelector(state => state.userReducer),
  };
  console.log(user);
  const logout = () => {
    localStorage.removeItem('access_token');
    dispatch(logoutUser());
  };
  return (
    <>
      <nav>
        <Link to='/'>blogs</Link>
        {user.id ? (
          <>
            <Link to='/create'>createne new</Link>
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <Link to='/login'>login</Link>
        )}
      </nav>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<BlogList />}></Route>
      </Routes>
    </>
  );
};
