import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import PropTypes from 'prop-types';
import { SearchResults } from './SearchResults';
import styled from 'styled-components';

const NoResults = styled.div`
	margin-top:2em;
	font-size:1em;
`;

export const Search = ({ users }) => {
	const [results, setResults] = useState([]);
	return (
		<>
			<SearchInput
				setResults={setResults}
				users={users}
			/>
			{results.length > 0 ? <SearchResults results={results} /> : <NoResults>No results found.</NoResults> }
		</>
	);
};

Search.propTypes = {
	users: PropTypes.array.isRequired,
};
