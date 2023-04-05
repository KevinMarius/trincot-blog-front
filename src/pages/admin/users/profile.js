import React, { useEffect, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../../components/UiElement/button";
import AuthContext from "../../../context/Auth";
import LoadingSpinner from "../../../components/UiElement/loadingSpinner";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import Input from "../../../components/Form/input";
import { VALIDATOR_PASSWORD, VALIDATOR_REQUIRE } from "../../../utils/validators";
import ErrorModal from "../../../components/UiElement/ErrorModal";

function UserProfile() {
	const [currentUser, setCurrentUser] = useContext(AuthContext);
	const { isLoading, sendRequest, error, clearError } = useHttpClient();
	const [user, setUser] = useState();

	const [formState, inputHandle] = useForm({
		currentPassword: {
			value: '',
			isValid: false
		},
		password1: {
			value: '',
			isValid: false
		},
		password2: {
			value: '',
			isValid: false
		}
	},
		false
	);

	const handleChangePassword = async (e) => {
		e.preventDefault();

		const passwords = {
			currentPassword: formState.inputs.currentPassword.value,
			password1: formState.inputs.password1.value,
			password2: formState.inputs.password2.value
		}

		const token = currentUser.userData.token;

		try {
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/password/update`, 'post', passwords, {
				"Authorization": "Bearer " + token
			});
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const getUserData = async () => {
			const token = currentUser.userData.token;
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/user/me`, 'get', null, {
				"Authorization": "Bearer " + token
			})
			.then((response) => {
				setUser(response.user);
			}).catch((err) => {})
		}

		getUserData()
	}, [sendRequest]);

	return (
		<React.Fragment>
			<ErrorModal error={error} onClear={clearError} />
			<div className="container mt-5">
				<div className="text-align-center mb-4">
					<h1>Your profile</h1>
				</div>
				<div className="main-body">
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
										<div className="mt-3">
											<h4>{user && user.name}</h4>
											<p className="text-secondary mb-1">{user && user.role.title}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card mb-3">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Full Name</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											{user && user.name} {user && user.surname}
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Email</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											{user && user.email}
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Phone</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											{user && user.phone}
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Birthday</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											{user && user.dateBorn}
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-12">
											<a className="btn btn-info" href={`/dashboard/user/update`}>Edit</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row gutters-sm justify-content-center align-items-center">
						<div className="col-md-10">
							<p className="text-center">
								<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									<i className="fa fa-pencil"></i> Change your password
								</button>
							</p>
							<div className="collapse" id="collapseExample">
								<div className="card card-body">
									<Form onSubmit={handleChangePassword}>
										<Input
											element="input"
											type="password"
											label="Old Password"
											placeholder="Old Password"
											id="currentPassword"
											errorText="Your password should have more of 7 character the Uppercase, lowercase and the number."
											validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
											onInput={inputHandle}
										/>
										<Input
											element="input"
											type="password"
											label="New Password"
											placeholder="New Password"
											id="password1"
											errorText="Your password should have more of 7 character the Uppercase, lowercase and the number."
											validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
											onInput={inputHandle}
										/>
										<Input
											element="input"
											type="password"
											label="Repeat this Password"
											placeholder="Repeat this Password"
											id="password2"
											errorText="Your password should have more of 7 character the Uppercase, lowercase and the number."
											validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
											onInput={inputHandle}
										/>
										{isLoading ?
											<button className="btn btn-primary" type="button" disabled>
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
												Loading...
											</button>
											:
											<Button
												type="submit"
												primary
												disabled={!formState.isValid}
											>Saved</Button>
										}
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default UserProfile;