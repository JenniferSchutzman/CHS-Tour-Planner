//first create array of the results
//then make tags of the results for each position (max 9)
var resultOptions = []
const chosenInterest = find(i => i.selected, stateTracker.interests)

return (resultOptions = concat([chosenInterest.name], resultOptions))
const chosenExp = find(e => e.selected, chosenInterest.experienceTypes)

return (resultOptions = concat([chosenExp.name], resultOptions))
const chosenDays = find(d => d.selected, stateTracker.dow)
return (resultOptions = concat([chosenDays.name], resultOptions))

const tag1 = resultOptions[0]
const tag2 = resultOptions[1]
const tag3 = resultOptions[2]
const tag4 = resultOptions[3]
const tag5 = resultOptions[4]
const tag6 = resultOptions[5]
const tag7 = resultOptions[6]
const tag8 = resultOptions[7]
const tag9 = resultOptions[8]
//now we compare it against the api
compose(
  map(y => y.tourName),
  filter(x => contains(toLower(tag2), x.options)),
  filter(x => contains(toLower(tag1), x.options))
)(api)
