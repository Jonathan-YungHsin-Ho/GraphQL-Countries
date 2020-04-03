import React from 'react';
import { Column, Button } from '../styled-components';

export default function Countries({
	continent,
	countriesLoading,
	countriesError,
	countriesData,
	country,
	setCountry,
	getCountry,
}) {
	return (
		<Column>
			<h2>
				Countries {continent.name && 'of'} {continent.name}
			</h2>
			{countriesLoading && <p>Loading...</p>}
			{countriesError && <p>Error! {countriesError}</p>}
			<div>
				{countriesData &&
					countriesData.continent.countries.map((param) => (
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
	);
}
