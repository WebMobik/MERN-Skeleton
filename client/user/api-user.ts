const headers = (credentials?) => {
  const basicHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (credentials) {
    return { ...basicHeaders, Authorization: 'Bearer ' + credentials.t }
  }

  return basicHeaders
}

const create = async (user) => {
  try {
    const response = await fetch('/api/users/', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const list = async (signal) => {
  try {
    const response = await fetch('/api/users/', {
      method: 'GET',
      signal: signal,
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const update = async (params, credentials, user) => {
  try {
    const response = await fetch('/api/users/' + params.userId, {
      method: 'PUT',
      headers: headers(credentials),
      body: JSON.stringify(user),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const read = async (params, credentials, signal) => {
  try {
    const response = await fetch('/api/users/' + params.userId, {
      method: 'GET',
      signal,
      headers: headers(credentials),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    const response = await fetch('/api/users/' + params.userId, {
      method: 'DELETE',
      headers: headers(credentials),
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export { create, list, update, read, remove }
