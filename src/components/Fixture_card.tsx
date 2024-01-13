import { useEffect, useState } from 'react';
import { IFixtures } from '../types/dataTypes';
import { getFixturesData } from '../network/Api_handler';
import Team_details from './Team_details';

const Fixture_card = () => {
  const [fixtures, setFixtures] = useState<IFixtures[]>([]);
  useEffect(() => {
    getFixturesData().then((res) => {
      setFixtures(res);
    });
  }, []);

  return fixtures.map((fixture) => (
    <div className='my-3 inline-flex  w-[90%] flex-col items-center border-b-2 p-4'>
      <img className='w-10 rounded-full ' src={fixture.venue.country_logo} alt={fixture.venue.country_name} />
      <h1>{fixture.venue.name}</h1>
      <div key={fixture.id} className='flex items-center '>
        <Team_details
          position={true}
          name={fixture.teams.home.name}
          img={fixture.teams.home.logo}
          goals={fixture.teams.home.goals}
        />
        <p className='mx-10'>-</p>
        <Team_details
          position={false}
          name={fixture.teams.away.name}
          img={fixture.teams.away.logo}
          goals={fixture.teams.away.goals}
        />
      </div>
    </div>
  ));
};

export default Fixture_card;
