export const API_BASE_URL = process.env.REACT_APP_BASE_URL

export const API_URLS = {
  SHORTEN: '/shorten?url=',
  URL_INFO: '/info',
}

export const REGEXS = {
  URL: new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ),
}
