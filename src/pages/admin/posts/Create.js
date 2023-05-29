import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import ImageUpload from "../../../components/Form/imageUpload";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/Auth";

import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../utils/validators";
import { useHttpClient } from "../../../hooks/http-hook";

export default function Create() {
  const [categories, setCategories] = useState([])
  const [currentUser, setCurrentUser] = useContext(AuthContext)
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append('title', formState.inputs.title.value);
    formData.append('content', formState.inputs.content.value);
    formData.append('picture', formState.inputs.picture.value);
    formData.append('category', formState.inputs.category.value);
    const token = currentUser.userData.token;
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/create`, 'post',
      formData,
        {
          "Authorization": "Bearer " + token
        }
      );
    }

    const [formState, inputHandle, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    content: {
      value: '',
      isValid: false
    },
    picture: {
      value: null,
      isValid: false
    },
    category: {
      value: '',
      isValid: false
    }
  },
    false
  );

  

  useEffect(() => {
    const getCategoriesData = () => {
      sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/get`, 'get')
        .then((response) => {
          setCategories(response.categories)
        });
    }

    getCategoriesData()
  }, [sendRequest]);

  return <div className="bg-slate-50 w-full p-4 shadow-gray-400 rounded-md shadow-sm my-6">
    <div className="text-align-center">
      <h1 className="text-3xl font-bold font-sans">New post</h1>
    </div>
    <form onSubmit={handleSubmit}>
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
      <div className="my-3">
        <ImageUpload 
          center 
          id="picture" 
          onInput={inputHandle} 
        />
      </div>
      <Input
        element="textarea"
        label="Content"
        placeholder="Content"
        id="content"
        errorText="please enter the content with min 5 character."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandle}
      />
      <Input
        element="select"
        label="Category"
        id="category"
        errorText="please choice the category"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandle}
        items={categories}
      />
      <Button type="submit" bgColor="bg-purple-500" disabled={!formState.isValid}>Save</Button>
    </form>
  </div>
}