import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import ImageUpload from "../../../components/Form/imageUpload";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/Auth";
import LoadingSpinner from "../../../components/UiElement/loadingSpinner";
import ErrorModal from "../../../components/UiElement/ErrorModal";

import { useForm } from "../../../hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_FILE } from "../../../utils/validators";
import { useHttpClient } from "../../../hooks/http-hook";

export default function Update() {
  const [categories, setCategories] = useState([])
  const [currentUser, setCurrentUser] = useContext(AuthContext);
  const [getPost, setPost] = useState([]);
  const { isLoading, sendRequest, error, clearError } = useHttpClient();
  const postId = useParams().postId;

  const [formState, inputHandle, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    content: {
      value: '',
      isValid: false
    }
  },
    false
  );

  useEffect(() => {
    const getPostData = async () => {
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/get/${postId}`);
        
        setPost(responseData.post);
        setFormData({
          title: {
            value: responseData.post.title,
            isValid: true
          },
          content: {
            value: responseData.post.content,
            isValid: true
          },
          picture: {
            value: responseData.post.picture,
            isValid: true
          }
        }, true);
      } catch (err) {
        console.log(err);
      }
    }
    getPostData();
  }, [sendRequest, postId, setFormData]);

  useEffect(() => {
    const getCategoriesData = async () => {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/get`)
        .then((response) => {
          console.log(response.categories)
          setCategories(response.categories);
        });
    }
    getCategoriesData();

  }, [sendRequest]);

  const handleSubmit = async () => {
    const formData = new FormData;
    formData.append('title', formState.inputs.title.value);
    formData.append('content', formState.inputs.content.value);
    formData.append('picture', formState.inputs.picture.value);
    formData.append('category', formState.inputs.category.value);
    const token = currentUser.userData.token;
    await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/post/${postId}`, 'put',
      formData, {
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    }
    );
  }

  if (getPost.length == 0) {
    return (
        <Container className='mt-4'>
            <Card className="text-center">
                <Card.Header>Empty !!</Card.Header>
                <Card.Body>
                    <Card.Title>Cannot find place.</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
}


  return <Container className="mt-3">
    <ErrorModal error={error} onClear={clearError}/>
    <div className="text-align-center">
      <h1>Update post</h1>
    </div>
    {isLoading ? <LoadingSpinner /> : <Form onSubmit={handleSubmit}>
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder="Title"
        id="title"
        errorText="please enter the valid title."
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
        onInput={inputHandle}
        initialValue={getPost.title}
        initialValid={true}
      />
      <div className="my-3">
        <ImageUpload 
          center id="picture" 
          initialValue={getPost.picture} 
          onInput={inputHandle} 
          validators={[VALIDATOR_FILE()]} 
          initialValid={true}
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
        initialValue={getPost.content}
        initialValid={true}
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
      <Button type="submit" primary disabled={!formState.isValid}>Update</Button>
    </Form>
    }
  </Container>
}