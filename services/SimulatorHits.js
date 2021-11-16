const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "SimulatorHits",
    "logo": "https://i.imgur.com/rVAJCGu.jpg",
    "aliases": ["SimulatorHits", "sh"],
    "id": "c83980b4-b94b-4ae0-88ce-530becee3b02",
    "tagline": "SimulatorHits is a community-run, non-profit station, being supported mainly by the community of Farming Simulator 2019.",
    "tags": [tags.simulation, tags.gaming, tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://simulatorhits.com/",
    "premid": "SimulatorHits",
    "sources": [{
      "name": "SimulatorHits",
      "url": "https://radio.simulatorhits.com/radio/8000/stream",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://radio.simulatorhits.com/api/nowplaying/1"
    }
  }
}
