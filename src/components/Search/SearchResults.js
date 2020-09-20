import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
	display:block;
`;
const ResultsPage = styled.div`
	display:flex;
	flex-direction: column;
	margin-top:2em;
	font-weight: 400;
	font-size: 0.7em;
	text-align: left;
	width: 500px;
	background: #fbfbfb;
	padding:20px;
`;
const TextLight = styled.span`
	color: #aaa;
	font-weight: 300;
`;

export const SearchResults = ({results}) => {

	return (
		<ResultsPage>
			{
				results.map((result, idx) =>
					<Row key={`idx-${idx}`}>
						<TextLight>{idx+1}.</TextLight> {result.name} <TextLight>@{result.username}</TextLight>
					</Row>
				)
			}
		</ResultsPage>
	);
};

SearchResults.propTypes = {
	results: PropTypes.array.isRequired,
};
