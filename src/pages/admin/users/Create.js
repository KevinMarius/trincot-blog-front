import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import ImageUpload from "../../../components/Form/imageUpload";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/Auth";

import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_PASSWORD, VALIDATOR_DATE } from "../../../utils/validators";
import { useHttpClient } from "../../../hooks/http-hook";
import ErrorModal from "../../../components/UiElement/ErrorModal";

export default function Create() {
  const [roles, setRoles] = useState([])
  const [currentUser, setCurrentUser] = useContext(AuthContext)
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append('name', formState.inputs.name.value);
    formData.append('surname', formState.inputs.surname.value);
    formData.append('dateBorn', formState.inputs.dateBorn.value);
    formData.append('email', formState.inputs.email.value);
    formData.append('picture', formState.inputs.picture.value);
    formData.append('phone', formState.inputs.phone.value);
    formData.append('role', formState.inputs.role.value);
    formData.append('password1', formState.inputs.password1.value);
    formData.append('password', formState.inputs.password.value);
    const token = currentUser.userData.token;
    
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/create`, 'post', formData, {
        "Authorization": "Bearer " + token
      }
    );
  }

    const [formState, inputHandle, setFormData] = useForm({
    name: {
      value: '',
      isValid: false
    },
    surname: {
      value: '',
      isValid: false
    },
    dateBorn: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: null,
      isValid: false
    },
    password1: {
      value: null,
      isValid: false
    },
    picture: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    role: {
      value: '',
      isValid: false
    }
  },
    false
  );


  useEffect(() => {
    const getRolesData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/role/get`)
        .then((response) => {
          setRoles(response.roles)
        });
    }

    getRolesData()
  }, [sendRequest]);

  return <Container className="p-5">
    <ErrorModal error={error} onClear={clearError} />
    <div className="text-align-center">
      <h1>New user</h1>
    </div>
    <Form onSubmit={handleSubmit}>
      <Input
        element="input"
        type="text"
        label="Name"
        placeholder="Name"
        id="name"
        errorText="please enter the valid name."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
        onInput={inputHandle}
      />
      <Input
        element="input"
        type="text"
        label="Surname"
        placeholder="Surname"
        id="surname"
        errorText="please enter the valid surname."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
        onInput={inputHandle}
      />
      <Input
        element="input"
        type="date"
        label="Birthday"
        id="dateBorn"
        errorText="please enter the valid birthday."
        validators={[VALIDATOR_DATE(), VALIDATOR_REQUIRE()]}
        onInput={inputHandle}
      />
      <Input
        element="input"
        type="email"
        label="Email"
        placeholder="Email"
        id="email"
        errorText="please enter the valid email."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        onInput={inputHandle}
      />
      <Input
        element="input"
        type="password"
        label="Password"
        placeholder="Password"
        id="password"
        errorText="please enter the valid password."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
        onInput={inputHandle}
      />
      <Input
        element="input"
        type="password"
        label="Reenter this Password"
        placeholder="Password"
        id="password1"
        errorText="please enter the valid password."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
        onInput={inputHandle}
      />
      <div className="my-3">
        <ImageUpload 
          center 
          id="picture" 
          onInput={inputHandle} 
        />
      </div>
      <Input
        element="input"
        label="Phone"
        type="tel"
        placeholder="Phone"
        id="phone"
        errorText="please enter the valid phone number."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandle}
      />
      <Input
        element="select"
        label="Role"
        id="role"
        errorText="please choice the role"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandle}
        items={roles}
      />
      <Button type="submit" primary disabled={!formState.isValid}>Save</Button>
    </Form>
  </Container>
}