import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

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
			<h1>Countries GraphQL API</h1>
			<Wrapper>
				<Column>
					<h2>Continents</h2>
					{loading && <p>Loading...</p>}
					{error && <p>Error! {error}</p>}
					<div>
						{data &&
							data.continents.map(continent => (
								<Button
									key={continent.code}
									onClick={() => {
										setContinent(continent);
										getCountries();
									}}>
									{continent.name}
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
							countriesData.continent.countries.map(country => (
								<Button
									key={country.code}
									onClick={() => {
										setCountry(country);
										getCountry();
									}}>
									{country.name}
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
							<p>Native: {countryData.country.native}</p>
							<p>Phone: {countryData.country.phone}</p>
							<p>Currency: {countryData.country.currency}</p>
							<p>Languages: </p>{' '}
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

const Button = styled.div`
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Column = styled.div`
	flex-grow: 1;
	border: 1px solid black;
`;
