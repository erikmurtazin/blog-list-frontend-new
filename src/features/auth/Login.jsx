import { useMutation } from '@tanstack/react-query';
import useForm from '../../hooks/useForm';
import { checkUser } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { checkUserLogin } from '../user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const username = useForm();
  const password = useForm();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: checkUser,
    onSuccess: data => {
      localStorage.setItem('access_token', data.token);
      console.log(data);
      navigate('/');
      dispatch(checkUserLogin(data.id));
    },
    onError: err => {
      console.log(err.message);
    },
  });

  const handelLogin = e => {
    e.preventDefault();
    mutation.mutate({ username: username.value, password: password.value });
  };
  return (
    <form onSubmit={handelLogin}>
      <input {...username}></input>
      <input {...password}></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
