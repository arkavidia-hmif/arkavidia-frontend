const dotenv = require('dotenv');

const { parsed } = dotenv.config({
  path: `./.env.${process.env.DOTENV_FILE || 'development'}`
});

module.exports = {
  env: {
    API_BASE_URL: parsed.API_BASE_URL
  },
  basePath: parsed.BASE_PATH || ''
}