import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [ getUsersList, setUsersList ] = useState([]);

	const addUserHandler = (username, age) => {
		setUsersList((prevUsersList) => {
			return [ ...prevUsersList, { username, age, id: Math.random().toString() } ];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={getUsersList} />
		</div>
	);
}

export default App;
