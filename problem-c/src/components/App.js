import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  const [team, setTeam] = useState('')
  const [runner_up, setRunner_up] = useState(false);

  const applyFilter = (selectedTeam, isRunnerUp) => {
    setTeam(selectedTeam);
    setRunner_up(isRunnerUp);
  };


  //get sorted list of unique teamNames. reduce array of objects into array of strings,
  //convert to Set to get uniques, spread back into array, and sort
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  let displayedData = props.gameData.filter((game) => {
    if (team === '') {
      return game;
    } else if (runner_up) {
      return (game.winner === team || game.runner_up === team);
    }
    return game.winner === team;
  });

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>

      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter}/>
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
