import base64 from 'base-64'
export const errorCodes = {
  unknown: 'ERR_UNKNOWN',
  offline: 'ERR_OFFLINE',
}

// const baseUrl = 'https://xdreams.herokuapp.com'
const baseUrl = '/api'

const makeApiCall = (path, args, additionalHeaders = {}) => {
  const usr = process.env.REACT_APP_USERNAME|| ''
  const psw = process.env.REACT_APP_PASSWORD || ''
  const authbasic = 'Basic ' + base64.encode(usr + ":" + psw);
  const headers = {
    ...additionalHeaders,
    'content-type': 'application/json',
    "Authorization": authbasic
  }

  return fetch(path, {
      headers,
      ...args,
    }
  )
    .then(response => Promise.all([ response.ok, response.status, response.json() ]))
    .then(([ ok, status, body ]) => ({
      ok,
      status,
      body,
    }))
    .catch(error => {
      if (error.message === 'Failed to fetch') {
        return {
          ok: false,
          status: 503,
          body: {
            code: errorCodes.offline,
            message: 'Offline',
          },
        }
      } else {
        return {
          ok: false,
          body: {
            code: errorCodes.unknown,
            message: 'Unknown Error',
          },
        }
      }
    })
}

export const apiClient = (baseUrl, additionalHeaders = {}) => {
  const makeApiPostCall = (path, body, headers = {}) =>
    makeApiCall(
      baseUrl + path,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      {
        ...additionalHeaders,
        ...headers,
      }
    )

  const makeApiGetCall = (path, headers) =>
    makeApiCall(
      baseUrl + path,
      {
        method: 'GET',
      },
      {
        ...additionalHeaders,
        ...headers,
      }
    )

  return {
    postSymbols: (body, headers = {}) => makeApiPostCall('/dreams/dream', body, headers),
    getSymbolsForCategory: (category, headers = {}) => makeApiGetCall(`/dreams/symbols?category=${category}`, headers),
    getDream: (dreamId, headers = {}) => makeApiGetCall(`/dreams/dream/${dreamId}`, headers),
  }
}

export const fakeApiClient = () => ({
  ...apiClient(baseUrl),
  postSymbols: (body, headers = {}) => Promise.resolve({
    ok: true,
    status: 201,
    body: {
      id: Math.random(),
      xValue: (Math.random() * 4) - 2,
      yValue: (Math.random() * 4) - 2,
      symbol: 'id123',
      meaning: 'Not believing in Someone',
      spotifyLink: 'https://open.spotify.com/track/72Z17vmmeQKAg8bptWvpVG?si=-JeVTAUYQdmhwnfBDwp1_w',
      artLink: 'https://metmuseum.org/art/collection/search/489307'
    }
  })
})

export const api = apiClient(baseUrl)
// export const api = fakeApiClient()
