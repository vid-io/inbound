const querystring = require('querystring')

module.exports = (href, referrer) => {
  if (
    referrer.host &&
    (referrer.host.indexOf('altavista.com') !== -1 ||
      referrer.host.indexOf('aliceadsl.fr') !== -1)
  ) {
    const description = { type: 'search', engine: 'altavista' }
    const query = querystring.parse(referrer.query).q
    if (query) description.query = query
    return description
  }
  return false
}
