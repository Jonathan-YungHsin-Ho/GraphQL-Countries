import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Column, Button } from '../styled-components';
import { GET_CONTINENTS } from '../Queries';

export default function Continents({ continent, setContinent, getCountries }) {
	const { loading, error, data } = useQuery(GET_CONTINENTS);

	return (
		<Column>
			<h2>Continents</h2>
			{loading && <p>Loading...</p>}
			{error && <p>Error! {error}</p>}
			<div>
				{data &&
					data.continents.map((param) => (
						<Button
							key={param.code}
							style={{
								textDecoration: param.name === continent.name && 'underline',
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
	);
}
