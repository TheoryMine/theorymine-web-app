export const errorCodes = {
  unknown: 'ERR_UNKNOWN',
  offline: 'ERR_OFFLINE',
}

const baseUrl = '/api'

const makeApiCall = (path, args, additionalHeaders = {}) => {
  const headers = {
    ...additionalHeaders,
    'content-type': 'application/json',
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
          status: 500,
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
    register: (headers = {}, body) => makeApiPostCall('/auth/users', body, headers),
    login: (headers = {}, body) => makeApiPostCall('/auth/session', body, headers),
    orderTheorem: (headers = {}, body) => makeApiPostCall('/registry/orders', body, headers),
    getOrders: (headers = {}, body) => makeApiGetCall('/registry/orders', headers),
  }
}

export const fakeApiClient = () => ({
  ...apiClient(baseUrl),
  register: (headers = {}, body) => Promise.resolve({
    ok: true,
    status: 201,
    body: {
      user_id: '123',
    },
  })
})

export const api = apiClient(baseUrl)
// export const api = fakeApiClient()
