function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for ( var i = 0; i <4; i++) {
    theBeatlesPlay.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return theBeatlesPlay;
}
