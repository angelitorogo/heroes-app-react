import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";


export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const { loginText, onInputChange} = useForm({
      loginText: ''
    });

    const onLogin = (event) => {

      event.preventDefault();

      const lastPath = localStorage.getItem('lastPath') || '/';

      login(loginText);

      navigate(lastPath, {replace:true});
    }

    return (
      <div className="container mt-5">
        <h1>LoginPage</h1>
        <hr />

        <form onSubmit={ onLogin }>
            <input type="text" placeholder="Username" className="form-control" name="loginText" autoComplete="off" value={loginText} onChange={onInputChange}/>
            <button className="btn btn-primary mt-2">Login</button>
        </form>

        
      </div>
      
    )
}
