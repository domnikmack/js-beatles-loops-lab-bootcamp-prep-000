function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for ( var i = 0; i <4; i++) {
    whoPlaysWhat.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (facts[i]) {
  facts[i] = facts[i]+'!!!';
  i++;
  }
  return facts;
}
