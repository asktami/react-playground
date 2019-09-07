import React, { useState } from 'react';
import ValidationError from './ValidationError';
import './registrationForm.css';

const RegistrationForm = props => {
	// using state
	// const [nameObj, setName] = useState({ name: { value: '', touched: false } });
	// const [passwordObj, setPassword] = useState({
	// 	password: { value: '', touched: false }
	// });
	// const [repeatPasswordObj, setRepeatPassword] = useState({
	// 	repeatPassword: {
	// 		value: '',
	// 		touched: false
	// 	}
	// });

	// using a state object with multiple properties
	const [values, setValues] = useState({
		name: { value: '', touched: false },
		password: { value: '', touched: false },
		repeatPassword: {
			value: '',
			touched: false
		}
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		console.log('---- in registrationForm, handleInputChange ----');
		console.log('--------e = ', e.target);
		console.log('--------e name = ', name);
		console.log('--------e value = ', value);
		setValues({ ...values, [name]: { value: value.trim(), touched: true } });
	};

	// const updateName = name => {
	// 	setValues({ ...values, name: { value: name.trim(), touched: true } });
	// };
	// const updatePassword = password => {
	// 	setValues({
	// 		...values,
	// 		password: { value: password.trim(), touched: true }
	// 	});
	// };
	// const updateRepeatPassword = repeatPassword => {
	// 	setValues({
	// 		...values,
	// 		repeatPassword: { value: repeatPassword.trim(), touched: true }
	// 	});
	// };

	const handleSubmit = event => {
		event.preventDefault();
		const { name, password, repeatPassword } = values;

		console.log('---- in registrationForm, handleSubmit ----');
		console.log('Name: ', name.value);
		console.log('Password: ', password.value);
		console.log('Repeat Password: ', repeatPassword.value);

		//potentially submit these values to the server here
	};

	const validateName = () => {
		const name = values.name.value;

		if (name.length === 0) {
			return 'Name is required';
		} else if (name.length < 3) {
			return 'Name must be at least 3 characters long';
		}
	};

	const validatePassword = () => {
		const password = values.password.value;
		if (password.length === 0) {
			return 'Password is required';
		} else if (password.length < 6 || password.length > 72) {
			return 'Password must be between 6 and 72 characters long';
		} else if (!password.match(/[0-9]/)) {
			return 'Password must contain at least one number';
		}
	};

	const validateRepeatPassword = () => {
		const password = values.password.value;
		const repeatPassword = values.repeatPassword.value;

		if (repeatPassword !== password) {
			return 'Passwords do not match';
		}
	};

	/*
	// using refs
	const nameInputRef = React.createRef();

	const handleSubmit = event => {
		event.preventDefault();
		const nameVal = nameInputRef.current.value;
		console.log('---- in registrationForm ----');
		console.log('Name: ', nameVal);
	};
	*/

	const nameError = validateName();
	const passwordError = validatePassword();
	const repeatPasswordError = validateRepeatPassword();

	return (
		<form className="registrationForm" onSubmit={e => handleSubmit(e)}>
			<h2>Register</h2>
			<div className="registration__hint">* required field</div>
			<div className="form-group">
				<label htmlFor="name">Name *</label>
				<input
					type="text"
					className="registration__control"
					name="name"
					id="name"
					value={values.name.value}
					onChange={handleInputChange}

					// ref={nameInputRef}
					// defaultValue="Frank"
					//onChange={e => updateName(e.target.value)}
				/>
				{values.name.touched && <ValidationError message={nameError} />}
			</div>
			<div className="form-group">
				<label htmlFor="password">Password *</label>
				<input
					type="password"
					className="registration__control"
					name="password"
					id="password"
					value={values.password.value}
					onChange={handleInputChange}
					// onChange={e => updatePassword(e.target.value)}
				/>
				<div className="registration__hint">
					6 to 72 characters, must include a number
				</div>
				{values.password.touched && <ValidationError message={passwordError} />}
			</div>
			<div className="form-group">
				<label htmlFor="repeatPassword">Repeat Password *</label>
				<input
					type="password"
					className="registration__control"
					name="repeatPassword"
					id="repeatPassword"
					value={values.repeatPassword.value}
					onChange={handleInputChange}
					// onChange={e => updateRepeatPassword(e.target.value)}
				/>
				{values.repeatPassword.touched && (
					<ValidationError message={repeatPasswordError} />
				)}
			</div>

			<div className="registration__button__group">
				<button type="reset" className="registration__button">
					Cancel
				</button>
				<button type="submit" className="registration__button">
					Save
				</button>
			</div>
		</form>
	);
};

export default RegistrationForm;
