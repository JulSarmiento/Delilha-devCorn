import httpStatus from "http-status";
import getToken from '../utils/atuh0.api.js'

export const getAllUsers = async (req, res, next) => {
  console.log('getAllUsers');
  try {
    const token = await getToken();
    const apiUrl = `${process.env.MANAGMENT_API_URL}api/v2/users`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      },
    };
  
    const response = await fetch(apiUrl, options);
    res.status(httpStatus.OK).json({
      succes: true,
      data: await response.json(),
    });

  } catch (error){
    next(error);
  };
};


export const getUserById = async (req, res, next) => {
  const { user_id } = req.params;

  try {
    const token = await getToken();
    const apiUrl = `${process.env.MANAGMENT_API_URL}api/v2/users/${user_id}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      },
    };
  
    const response = await fetch(apiUrl, options);
    res.status(httpStatus.OK).json({
      succes: true,
      data: await response.json(),
    });

  } catch (error){
    next(error);
  };
}

