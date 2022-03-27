import {useNavigate, Outlet, Link} from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/");
  };
    return (
      <div> 
        <Outlet/>
        <h1> Dashboard </h1>
        <button onClick={handleClick}>
          Logout
        </button>
        <br/>
        <Link to='welcome'>
          Say welcome
        </Link>
        <br/>
        <Link to='goodbye'>
          Say goodbye
        </Link>
      </div >

    )
}