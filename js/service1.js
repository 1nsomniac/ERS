angular.module("app").service("service1", function($http) {

  this.grabDecks = function(numberOfDecks) {
    return $http.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count="+numberOfDecks)
      // deck_id =
      // console.log(response['data']['deck_id'] + 'ID log')
    // );
  }

  this.drawCardFromDeck = function(deck_id, numberOfCards) {
    // console.log(deck_id);
    return $http.get("https://deckofcardsapi.com/api/deck/"+deck_id+"/draw/?count="+numberOfCards).then(function (results) {
      // console.log('ran', results);
      return results.data.cards;
    });
  }
  this.drawCardFromPile = function(deck_id, playerNumber){
      return $http.get('https://deckofcardsapi.com/api/deck/' + deck_id + '/pile/' + playerNumber + '/draw/').then(function(results){
        console.log('runned', results)
        return results;
      })

      // var split = $http.get('https://deckofcardsapi.com/api/deck/' + deck_id + '/pile/player' + numberOfPlayersToDeal + '/add/?cards=' + piles).then(function (response) { console.log(response) })
      // console.log(split)

  }

  this.splitDeck = function (deck_id, numberOfPlayers) {
    var numberOfPlayersToDeal = numberOfPlayers
    var pileNumber = numberOfPlayers
    var piles = []
    for (numberOfPlayersToDeal; numberOfPlayersToDeal > 0; numberOfPlayersToDeal--) {
      // console.log ('again ', numberOfPlayersToDeal)
      this.drawCardFromDeck(deck_id, Math.floor(-(-52 / numberOfPlayers))).then(function (response) {
        // console.log(response);
        var pileData = response;
        var pileHolder = pileData[0].code
          for (var j = 1; j < pileData.length; j++) {
          pileHolder +=  ',' + pileData[j].code
        }
      // console.log('my piles', piles)
        // var pileData = response
        // if (piles === undefined) var piles = []
        piles[pileNumber] = pileHolder
              pileNumber--
              // console.log('my piles', pileNumber, piles)
              console.log(piles)
        // for (var j = 1; j < 26; j++){
        //   piles[numberOfPlayers] +=  ',' + pileData.data[j].code
        // }
        // console.log('Me piles', piles)


        // for (var i = 0; i < arrOfPiles; i++){
        var split = $http.get('https://deckofcardsapi.com/api/deck/' + deck_id + '/pile/' + numberOfPlayersToDeal + '/add/?cards=' + piles).then(function (response) { console.log(response) })
        console.log (split)
        // }

      })
    }
  };

  this.addToLoot = function () {

  }

  this.takeLoot = function () {

  }

});
