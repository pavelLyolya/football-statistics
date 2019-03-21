import { connect } from 'react-redux';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import { addCurrentTeam, deleteCurrentTeam } from '../actions/currentTeam';
import fetchTeam from '../actions/fetchTeam';
import togglePlayersFixtures from '../actions/togglePlayersFixtures';
import Team from '../components/Team/Team';
import { clearPagination } from '../actions/pagination';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    isPlayersActive: state.isPlayersActive,
    favoriteTeams: state.favoriteTeams,
    currentTeam: state.currentTeam.team,
    entities: state.pagination.entities,
    fixtureDetails: state.fixtureDetails,
});

const mapDispatchToProps = dispatch => ({
    fetchTeam: id => dispatch(fetchTeam(id)),
    togglePlayersFixtures: () => dispatch(togglePlayersFixtures()),
    addFavoriteTeam: (team, idLeague) => dispatch(addFavoriteTeam(team, idLeague)),
    deleteFavoriteTeam: teamId => dispatch(deleteFavoriteTeam(teamId)),
    addCurrentTeam: team => dispatch(addCurrentTeam(team)),
    deleteCurrentTeam: () => dispatch(deleteCurrentTeam()),
    clearPagination: () => dispatch(clearPagination()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
