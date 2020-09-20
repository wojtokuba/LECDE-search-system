import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = styled.input`
	border: 1px solid #000;
	width: 200px;
	height: 22px;
	font-family: 'Lato', sans-serif;
	font-size:14px;
	padding:5px 10px;
`;

export const SearchInput = ({ setResults, users }) => {
	const [needle, setNeedle] = useState("");

	const findResults = useCallback((value) => {
		setNeedle(value);
		if (value.length === 0)
			setResults([]);
		else
			setResults(users.reduce((acc, current) => current.name.toLowerCase().includes(value.toLowerCase()) ? [...acc, current] : acc, []));
	}, [setNeedle, setResults, users]);

	useEffect(() => {
		if (needle.length === 0) {
			setResults(users);
		}
	}, [setResults, users, needle]);

	return (
		<TextInput
			type="text"
			name="needle"
			placeholder="Search by user name..."
			onChange={e => findResults(e.target.value)}
			value={needle}
		/>
	);
};

SearchInput.propTypes = {
	setResults: PropTypes.func,
	users: PropTypes.array
};
