import React from 'react';
import PropTypes from 'prop-types';

const LeagueSelect = ({ activeLeagueId, leaguesArray, changeActiveLeague }) => (
    <div className='leagueSelect'>
        <select className='select' value={activeLeagueId} onChange={changeActiveLeague} >
            {leaguesArray.map(league => (
                <option key={league.id} value={league.id}>
                    {league.name}
                </option>))}
        </select>
    </div>
);

LeagueSelect.propTypes = {
    leaguesArray: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
};

export default LeagueSelect;
