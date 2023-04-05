import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import { useEffect, useState, useContext } from "react";
import LoadingSpinner from "../../../components/UiElement/loadingSpinner";
import AuthContext from "../../../context/Auth";

import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useHttpClient } from "../../../hooks/http-hook";
import ErrorModal from "../../../components/UiElement/ErrorModal";

export default function Create() {
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandle, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  },
    false
  );

  useEffect(() => {
    setFormData({
      ...formState.inputs,
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    }, false);
  }, [setFormData]);

  const handleSubmit = async () => {
    const token = currentUser.userData.token;
    const category = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value
    }
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/category/create`,
        'post',  
        category,
        {
          "content-type": "application/json",
          "Authorization": "Bearer " + token
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return <Container className="mt-3">
    <ErrorModal error={error} onClear={clearError} />
    <div className="text-align-center">
      <h1>New category</h1>
    </div>
    {isLoading ? <LoadingSpinner /> :
    <Form onSubmit={handleSubmit}>
      
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder="Title"
        id="title"
        errorText="please enter the valid title."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
        onInput={inputHandle}
      />
      <Input
        element="textarea"
        label="Description"
        placeholder="Description"
        id="description"
        errorText="please enter the content with min 5 character."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandle}
      />
      <Button type="submit" primary disabled={!formState.isValid}>Saved</Button>
    </Form>
  }
  </Container>
}