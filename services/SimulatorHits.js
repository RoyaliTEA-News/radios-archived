const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "SimulatorHits",
    "logo": "https://resizeimg.shirkalab.io/r/400x400/f/jpg/ext/skill/images/I/610mYG1EScL.png",
    "aliases": ["SimulatorHits", "sh"],
    "id": "3eb3df1b-6ad7-440e-8858-d201c9a07390",
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
