import React, { useCallback, useEffect, useState } from 'react';
import { Title } from './components/Title';
import urls from './urls/urls';
import Loader from './components/Loader';
import styled from 'styled-components';
import './App.scss';
import { Search } from './components/Search/Search';

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin:0;
  padding:0;
`;

export const App = () => {
	const [users, setUsers] = useState(null);

	const loadUsers = useCallback(() => {
		const { GET, BASE_URL } = urls;
		fetch(BASE_URL + GET.getUsers)
		.then(response => response.json())
		.then(data => {
			data.length && setUsers(data.sort((a, b) => { //Sort alphabetically
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			}));
		})
		.catch(error => console.log(error));
	}, []);

	useEffect(() => {
		if (!users) {
			loadUsers();
		}
	}, [loadUsers, users]);

	return (
		<>
			<Title/>
			<CenteredContent>
				{
					Array.isArray(users) && users.length ?
						<Search users={users}/>
						: <Loader/>
				}
			</CenteredContent>
		</>
	)
};
