// From openai
const { Configuration, OpenAIApi } = require("openai");
// with config() method any var is available
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

// openai is the const used to do actions, new img, etc
const openai = new OpenAIApi(configuration);

module.exports = openai;
