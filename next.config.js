const dotenv = require('dotenv');

const { parsed } = dotenv.config({
  path: `./.env.${process.env.DOTENV_FILE || 'development'}`
});

module.exports = {
  env: {
    API_BASE_URL: parsed.API_BASE_URL,
    LOCAL_STORAGE_AUTHENTICATED: parsed.LOCAL_STORAGE_AUTHENTICATED,
    LOCAL_STORAGE_AUTH: parsed.LOCAL_STORAGE_AUTH,
    GA_ID: parsed.GA_ID || ''
  },
  basePath: parsed.BASE_PATH || '',
  exportPathMap: (defaultPathMap) => {

    const filteredPathMap = {};
    for (const key in defaultPathMap) {
      if (!key.startsWith('/dashboard') && !key.startsWith('/email')) {
        filteredPathMap[key] = defaultPathMap[key];
      }
    }

    return filteredPathMap;
  }
}