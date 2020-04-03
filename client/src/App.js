import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GlobalStyle, Header, Wrapper } from './styled-components';
import { GET_CONTINENT, GET_COUNTRY } from './Queries';
import { Continents, Countries, Country } from './components';

export default function App() {
	const [continent, setContinent] = useState({});
	const [country, setCountry] = useState({});

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
				<Continents
					continent={continent}
					setContinent={setContinent}
					getCountries={getCountries}
				/>
				<Countries
					continent={continent}
					countriesLoading={countriesLoading}
					countriesError={countriesError}
					countriesData={countriesData}
					country={country}
					setCountry={setCountry}
					getCountry={getCountry}
				/>
				<Country
					country={country}
					countryLoading={countryLoading}
					countryError={countryError}
					countryData={countryData}
				/>
			</Wrapper>
		</div>
	);
}
