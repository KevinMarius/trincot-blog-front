//============================ import react setting =========================== 
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//================================= import utils =====================================
import { VALIDATOR_EMAIL, VALIDATOR_PASSWORD, VALIDATOR_REQUIRE } from "../utils/validators";
import { login } from '../utils/Auth/AuthService';

//=============================== import Hook ======================================
import { useHttpClient } from "../hooks/http-hook";
import { useForm } from "../hooks/form-hook";

//=========================== import Form component ==================================
import Input from "../components/Form/input";

//=========================== import UiElement component ===================================
import LoadingSpinner from "../components/UiElement/loadingSpinner";
import ErrorModal from "../components/UiElement/ErrorModal";
import Button from "../components/UiElement/button"

function Login() {
  const navigate = useNavigate();
  const location = useLocation()
  const redirectPath = location.state?.path || '/dashboard/home';
  const { isLoading, sendRequest, error, clearError } = useHttpClient();

  const [formState, inputHandle] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  },
    false
  );

  const loginSubmitHandle = async (e) => {
    e.preventDefault();

    const user = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value
    }
    console.log(process.env.REACT_APP_BACKEND_URL)
    const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/login`, 'post', user);

    login(response);
    navigate(redirectPath, { replace: true });

  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <div className='w-[100%] flex justify-center items-center h-screen bg-zinc-200'>
          <div className='relative flex flex-col bg-zinc-50 p-6 shadow-xl rounded-xl w-[90%] md:w-[50%]'>
            <a className='mx-auto w-[20%]' href='/'><img className='my-2' src={process.env.PUBLIC_URL + 'output-onlinepngtools.png'} alt='572-768x591' /></a>
            <h2 className='text-black text-2xl font-bold font-alata'>Login</h2>
            <h6 className='text-black font-semibold text-sm font-sans my-2'>log in to access your account</h6>
            <div className='my-3 border-b border-b-gray-300'></div>
            <form onSubmit={loginSubmitHandle}>
              <Input
                element="input"
                type="email"
                label="Email"
                placeholder='Enter your email address'
                id="email"
                errorText="please enter the valid email."
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                onInput={inputHandle}
              />
              <Input
                element="input"
                type="password"
                label="Password"
                placeholder="Enter your Password"
                id="password"
                errorText="Your password should have more of 7 character the Uppercase, lowercase and the number."
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
                onInput={inputHandle}
              />
              <Button bgColor="bg-purple-400" type="submit" bgColorHover="bg-purple-500" primary disabled={!formState.isValid} pointer={formState.isValid ? 'cursor-pointer' : 'cursor-not-allowed'}>Login</Button>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Login;
