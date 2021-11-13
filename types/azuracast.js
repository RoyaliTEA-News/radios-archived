import axios from 'axios'

module.exports = async (radio) => {
  const { data: stats } = await axios(radio.api.endpoint)
  return {
    radio,
    stats
  }
}
