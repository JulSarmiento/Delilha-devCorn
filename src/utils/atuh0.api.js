const url = `${process.env.MANAGMENT_API_URL}oauth/token`;

// get token
const options = {
  method: 'POST',
  url,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    client_id: `${process.env.MANAGMENT_API_CLIENT_ID}`,
    client_secret: `${process.env.MANAGMENT_API_CLIENT_SECRET}`,
    audience: `${process.env.MANAGMENT_API_AUDIENCE}`,
    grant_type: 'client_credentials',
  }),
};

export default () => { 
  return fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('Error:', error);
    return error;
  })
};


