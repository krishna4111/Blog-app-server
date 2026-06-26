//TODO: NOTE: this function is going to get the custom status code and error message
//NOTE: We are going to use this for custom error that we created like validating incoming requests
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
