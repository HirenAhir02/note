const errorHandler = (statusCode, message) => {
  const error = new Error(message); // attach message directly
  error.statusCode = statusCode;
  return error;
};

export default errorHandler;
