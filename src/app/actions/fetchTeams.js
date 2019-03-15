import { leagues } from './actionTypes';
import { getAllTeams } from '../services/api';
import { mapTeamsArray } from '../services/validation';

const fetchingTeams = idLeague => ({
    type: leagues.FETCHING_TEAMS,
    idLeague,
});

const teamsFetched = (idLeague, data) => ({
    type: leagues.TEAMS_FETCHED,
    idLeague,
    data,
});

const shouldFetchTeams = (state, idLeague) => {
    const foundLeague = state.leagues.find(league => league.id === idLeague);
    return !foundLeague || (foundLeague && !foundLeague.teams.items);
};

const fetchTeams = id => async (dispatch, getState) => {
    if (shouldFetchTeams(getState(), id)) {
        dispatch(fetchingTeams(id));
        const data = await getAllTeams(id);
        const teamsArray = mapTeamsArray(data.teams);
        dispatch(teamsFetched(id, teamsArray));
    }
};

export default fetchTeams;
