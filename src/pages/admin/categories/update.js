import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/Auth";
import LoadingSpinner from "../../../components/UiElement/loadingSpinner";

import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useHttpClient } from "../../../hooks/http-hook";

export default function Update() {
  const [category, setCategory] = useState("");
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const categoryId = useParams().categoryId;

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
    const getCategoryData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/get/${categoryId}`)
        .then((response) => {
          setCategory(response.category)
          setFormData({
            title: {
              value: response.category.title,
              isValid: true
            },
            description: {
              value: response.category.description,
              isValid: true
            }
          }, true);
        });
    }

    getCategoryData()
  }, [sendRequest, setFormData, categoryId]);

  const handleSubmit = async () => {
    const formData = {
      title: formState.inputs.title.value,
      description: formState.inputs.description.value
    }

    const token = currentUser.userData.token;
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/update/${categoryId}`, 'put',
      formData, 
      {
        "content-type": "application/json",
        "Authorization": "Bearer " + token
      }
    );
  }

  return (
    <Container className="mt-3">
      <div className="text-align-center">
        <h1>Update category</h1>
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
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Input
            element="textarea"
            label="Description"
            id="description"
            errorText="please enter the content with min 5 character."
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            onInput={inputHandle}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
          />
          <Button type="submit" inverse disabled={!formState.isValid}>Saved</Button>
        </Form>
      }
    </Container>
  )
}