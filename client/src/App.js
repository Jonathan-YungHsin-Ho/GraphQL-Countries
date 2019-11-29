import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { GlobalStyle } from './GlobalStyle';

import { GET_CONTINENTS, GET_CONTINENT, GET_COUNTRY } from './Queries';

export default function App() {
	const [continent, setContinent] = useState({});
	const [country, setCountry] = useState({});

	const { loading, error, data } = useQuery(GET_CONTINENTS);

	const [
		getCountries,
		{ loading: countriesLoading, data: countriesData, error: countriesError },
	] = useLazyQuery(GET_CONTINENT, {
		variables: { code: continent.code },
	});

	const [
		getCountry,
		{ loading: countryLoading, data: countryData, error: countryError },
	] = useLazyQuery(GET_COUNTRY, {
		variables: { code: country.code },
	});

	return (
		<div>
			<GlobalStyle />
			<Header>Countries of the World</Header>
			<Wrapper>
				<Column>
					<h2>Continents</h2>
					{loading && <p>Loading...</p>}
					{error && <p>Error! {error}</p>}
					<div>
						{data &&
							data.continents.map(param => (
								<Button
									key={param.code}
									style={{
										textDecoration:
											param.name === continent.name && 'underline',
									}}
									onClick={() => {
										setContinent(param);
										getCountries();
									}}>
									{param.name}
								</Button>
							))}
					</div>
				</Column>
				<Column>
					<h2>
						Countries {continent.name && 'of'} {continent.name}
					</h2>
					{countriesLoading && <p>Loading...</p>}
					{countriesError && <p>Error! {countriesError}</p>}
					<div>
						{countriesData &&
							countriesData.continent.countries.map(param => (
								<Button
									key={param.code}
									style={{
										textDecoration: param.name === country.name && 'underline',
									}}
									onClick={() => {
										setCountry(param);
										getCountry();
									}}>
									{param.name}
								</Button>
							))}
					</div>
				</Column>
				<Column>
					<h2>
						Country {country.name && 'of'} {country.name}
					</h2>
					{countryLoading && <p>Loading...</p>}
					{countryError && <p>Error! {countryError}</p>}
					{countryData && (
						<div>
							<p>
								<span className='bold'>Native Name:</span>{' '}
								{countryData.country.native}
							</p>
							<p>
								<span className='bold'>Country Calling Code:</span> +
								{countryData.country.phone}
							</p>
							<p>
								<span className='bold'>Currency:</span>{' '}
								{countryData.country.currency}
							</p>
							<p>
								<span className='bold'>Languages:</span>
							</p>
							<ul>
								{countryData.country.languages.map(lang => (
									<li key={lang.name}>{lang.name}</li>
								))}
							</ul>
						</div>
					)}
				</Column>
			</Wrapper>
		</div>
	);
}

const Header = styled.h1`
	padding: 0.5rem 1rem;
	border-bottom: 1px solid silver;
	color: silver;
`;

const Button = styled.div`
	cursor: pointer;
	font-size: 1.4rem;
	margin: 0.5rem 0;

	&:hover {
		text-decoration: underline;
	}
`;

const Wrapper = styled.div`
	width: 98%;
	margin: 1rem auto 0;
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 410px) {
		flex-direction: column;
	}
`;

const Column = styled.div`
	flex-grow: 1;
	max-height: 90vh;
	overflow-y: auto;
	margin: 1rem 1%;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	background-color: rgba(255, 255, 255, 0.6);

	@media screen and (max-width: 680px) {
		max-height: 48vh;
	}

	@media screen and (max-width: 410px) {
		max-height: 26vh;
	}

	ul {
		list-style-type: square;
		list-style-position: inside;
	}

	p,
	li {
		margin: 0.5rem 0;
	}

	.bold {
		font-weight: bold;
	}
`;
