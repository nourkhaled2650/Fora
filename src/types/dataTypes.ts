interface Venue {
  name: string;
  country_logo: string;
  country_name: string;
}

interface Teams {
  home: Team_info;
  away: Team_info;
}

interface Team_info {
  id: number;
  name: string;
  logo: string;
  goals: number;
}
export interface IFixtures {
  id: number;
  venue: Venue;
  teams: Teams;
}
// interface ITeams {
//   id: number;
//   name: string;
//   logo: string;
//   goals: number;
// }
// interface IVenue {
//   name: string;
//   country_logo: string;
// }
// export interface Fixtures {
//   id: number;
//   venue: IVenue;
//   teams: ITeams[];
// }
