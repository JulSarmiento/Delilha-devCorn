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

export default async () => {
  try{
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    };
    return await response.json();

  }
  catch (error){
    console.error('Error:', error);
    return error;
  };
}




