angular.module("app").controller("controller", function($scope, service1) {
  $scope.thisAppIsBroken = "This angular app is working!"
  $scope.deck_id = 'potato';

  service1.grabDecks(1).then(function(response) {
    console.log(response);
    $scope.deck_id = response.data.deck_id;
    // $scope.topCard = response.data.image;
    // console.log(response['data'])

    service1.splitDeck($scope.deck_id, 2)
    setTimeout(function () {
      service1.drawCardFromPile($scope.deck_id, 0).then(function(cardDrawn){
        console.log(cardDrawn)
    }, 1000);
    })
  })
  setTimeout(function () {
    console.log('hello', $scope.deck_id)
    service1.drawCardFromPile($scope.deck_id, 0).then(function(cardDrawn){
      console.log(cardDrawn)
    })
  }, 1000);

  service1.drawCardFromDeck($scope.deck_id, 0).then(function(cardDrawn){
    console.log(cardDrawn)
  })
$scope.topCard
$scope.pile = []
  $scope.draw = function(){
    service1.drawCardFromDeck($scope.deck_id).then(function (cardInfo) {
    console.log('drawn card data', cardInfo)
    // $scope.deck_id = cardInfo;
    $scope.topCard = cardInfo[0]
    $scope.pile.push(cardInfo[0])
    console.log($scope.pile);
  })
}
})
