const team = {
    _players: [
      {
        firstName: 'Kylian',
        lastName: 'Mbappe',
        age: 22
      },
      {
        firstName: 'Sergio',
        lastName: 'Ramos',
        age: 35
      },
      {
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 34
      },
    ],
    
    _games: [
      {
        opponent: 'Montpellier',
        teamPoints: 24,
        opponentPoints: 10,
      },
      {
        opponent: 'Metz',
        teamPoints: 24,
        opponentPoints: 6,
      },
      {
        opponent: 'Lyon',
        teamPoints: 24,
        opponentPoints: 13,
      },
    ],
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    //function to add player objects to the players list
    addPlayer (firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age
      }
      //adding an instance object to the players list
      this._players.push(player);
    },
  
    //Method for recording game results
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      //adding to the games array
      this._games.push(game);
    },
  };
  
  //testing the addPlayer function with some values
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
  //displaying the players list in team object to console
  console.log(team.players);
  
  //checking the addGame function on three games
  team.addGame('Clermont Foot', 24, 10);
  team.addGame('Reims', 15, 7);
  team.addGame('Strasbourg', 24, 11);
  
  //displaying the games list in team object to console
  console.log(team.games);
  
  