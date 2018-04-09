import { compose, contains, toLower, map, compose } from 'ramda'

//now we compare it against the api

export const filterResults = (options, tours) => {
  compose(
    map(y => y.tourName),
    filter(x => contains(toLower(tag3), x.options)),
    filter(x => contains(toLower(tag2), x.options)),
    filter(x => contains(toLower(tag1), x.options))
  )(tours)
}
