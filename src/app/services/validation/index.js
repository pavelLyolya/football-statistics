const mapObjectsToArrays = objectsArray => objectsArray.map(teamStanding => [
    teamStanding.position,
    teamStanding.team.name,
    teamStanding.playedGames,
    teamStanding.won,
    teamStanding.draw,
    teamStanding.lost,
    teamStanding.goalsFor,
    teamStanding.goalsAgainst,
    teamStanding.points,
]);

export default mapObjectsToArrays;
