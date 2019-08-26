const getTeams = () => {
    function fetch('https://www.thebluealliance.com/api/v3/events/{2015}')
        .then(res => res.json())
        .then(teams => console.log(teams))
}