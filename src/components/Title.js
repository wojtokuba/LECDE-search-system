import React, { memo } from 'react'
import styled from 'styled-components';

const SearchTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 1.5em;
`;

export const Title = memo(() => {
	return (
		<SearchTitle>
			Users list
		</SearchTitle>
	);
});
