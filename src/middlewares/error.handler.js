import httpStatus from "http-status";

const errors = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  res.status( httpStatus.INTERNAL_SERVER_ERROR).send({
    status: statusCode,
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message,
  });
};

const pageNotFound = (req, res, _next) => {
  res.status( httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    code: httpStatus.NOT_FOUND,
    message: `The route ${req.originalUrl} does not exist!`,
  });
}

export {errors, pageNotFound};