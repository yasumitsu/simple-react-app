import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
	const [ getUsername, setUsername ] = useState('');
	const [ getAge, setAge ] = useState('');
	const [ getError, setError ] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();
		if (getUsername.trim().length === 0 || getAge.trim().length === 0) {
			setError({ title: 'Invalid input', message: 'Enter a valid name and age' });
			return;
		}
		if (+getAge < 0) {
			setError({ title: 'Invalid age', message: 'Age must be greater than 0' });
			return;
		}
		onAddUser(getUsername, getAge);
		setUsername('');
		setAge('');
	};

	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	const errorHandler = () => setError(null);

	return (
		<div>
			{getError && <ErrorModal title={getError.title} message={getError.message} onConfirm={errorHandler} />}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" onChange={usernameChangeHandler} value={getUsername} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" onChange={ageChangeHandler} value={getAge} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
