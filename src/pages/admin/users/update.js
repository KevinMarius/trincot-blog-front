import React, { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

//==================== import context =============================
import AuthContext from "../../../context/Auth";

//==================== import Form component ========================
import Input from "../../../components/Form/input";
import Button from "../../../components/UiElement/button";
import ImageUpload from "../../../components/Form/imageUpload";

//==================== import UiElement component =====================
import LoadingSpinner from "../../../components/UiElement/loadingSpinner";
import ErrorModal from "../../../components/UiElement/ErrorModal";

//================ import Utils =====================
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_FILE } from "../../../utils/validators";

//================ import hook ======================
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";

export default function Update() {
    const [roles, setRoles] = useState([])
    const [currentUser, setCurrentUser] = useContext(AuthContext);
    const [getUser, setUser] = useState([]);
    const { isLoading, sendRequest, error, clearError } = useHttpClient();
    const userId = useParams().userId;
    const token = currentUser.userData.token;

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
        picture: {
            value: '',
            isValid: false
        },
        phone: {
            value: '',
            isValid: false
        }
    },
        false
    );

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = currentUser.userData.token;
                await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, 'get', null, {
                    "Authorization": "Bearer " + token
                }).then((responseData) => {
                    setUser(responseData.user);
                    setFormData({
                        name: {
                            value: responseData.user.name,
                            isValid: true
                        },
                        surname: {
                            value: responseData.user.surname,
                            isValid: true
                        },
                        dateBorn: {
                            value: responseData.user.dateBorn,
                            isValid: true
                        },
                        picture: {
                            value: responseData.user.picture,
                            isValid: true
                        },
                        phone: {
                            value: responseData.user.phone,
                            isValid: true
                        }
                    }, true);
                });

            } catch (err) {
                console.log(err);
            }
        }
        getUserData();
    }, [sendRequest, userId, setFormData]);

    useEffect(() => {
        const getRolesData = async () => {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/role/get`, 'get', null, {
                "Authorization": "Bearer " + token
            })
            .then((response) => {
                setRoles(response.roles);
            });
        }
        getRolesData();

    }, [sendRequest]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState.inputs.picture.value)
        const formData = new FormData;
        /* formData.append('name', formState.inputs.name.value);
        formData.append('surname', formState.inputs.surname.value);
        formData.append('dateBorn', formState.inputs.dateBorn.value);
        formData.append('picture', formState.inputs.picture.value);
        formData.append('phone', formState.inputs.phone.value);

        await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/update/${userId}`, 'put',
            formData,
            {
                "content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        ); */
    }

    if (getUser.length == 0) {
        return (
            <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empty !!</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Cannot find user.</p>
                <Button to="/dashboard/post/add">Share Post</Button>
            </div>
        );
    }


    return <Container className="p-5">
        {<ErrorModal error={error} clearError={clearError} />}
        <div className="text-align-center">
            <h1>Update user</h1>
        </div>
        {isLoading ? <LoadingSpinner /> : <Form onSubmit={handleSubmit}>
            <Input
                element="input"
                type="text"
                label="Name"
                placeholder="Name"
                id="name"
                errorText="please enter the valid name."
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
                onInput={inputHandle}
                initialValue={getUser.name}
                initialValid={true}
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
                initialValue={getUser.surname}
                initialValid={true}
            />
            <Input
                element="input"
                type="date"
                label="Birthday"
                placeholder="Birthday"
                id="birthday"
                errorText="please enter the valid birthday."
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandle}
                initialValue={getUser.dateBorn}
                initialValid={true}
            />
            <div className="my-3">
                <ImageUpload
                    center
                    id="picture"
                    initialValue={getUser.picture}
                    onInput={inputHandle}
                    validators={[VALIDATOR_FILE()]}
                    initialValid={true}
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
                initialValue={getUser.phone}
                initialValid={true}
            />
            <Button type="submit" primary disabled={!formState.isValid}>Update</Button>
        </Form>
        }
    </Container>
}