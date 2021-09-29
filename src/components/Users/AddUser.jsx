import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [ getUsername, setUsername ] = useState('');
	const [ getAge, setAge ] = useState('');

	const addUserHandler = (e) => {
		e.preventDefault();
		console.log(getUsername, getAge);
	};

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" onChange={usernameChangeHandler} />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
