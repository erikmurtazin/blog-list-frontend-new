import { useSelector } from 'react-redux';

const Create = () => {
  const user = {
    id: useSelector(state => state.userReducer),
  };

  if (user.id) {
    return (
      <>
        <form>
          <label>title</label>
          <input></input>
        </form>
      </>
    );
  }
  return <div>Login to create a new</div>;
};
export default Create;
