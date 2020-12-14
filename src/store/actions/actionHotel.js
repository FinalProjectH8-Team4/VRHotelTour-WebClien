const baseUrl = 'http://localhost:3001'

export function fetchHotelById(id) {
  return (dispatch) => {
    fetch(`${baseUrl}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json()
        }
      })
      .then(payload => {
        dispatch({ type: 'SET_HOTEL_BY_ID', payload })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function fetchHotels() {
  return (dispatch) => {
    fetch(`${baseUrl}/`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json()
        }
      })
      .then(payload => {
        dispatch({ type: 'SET_HOTELS', payload })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function bookRoom(email) {
  return (dispatch) => {
    fetch(`${baseUrl}/bookroom`, {
      method: 'POST',
      body: JSON.stringify({
        emailAddress: email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json()
        }
      })
      .then(payload => {
        console.log(payload);
      })
      .catch(err => {
        console.log(err)
      })
  }
}