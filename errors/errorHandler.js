const handleErrorResponse = (res, err) => {
  let statusCode = err.status || 500;

  switch (statusCode) {
    case 400:
      res.status(400).json({
        error:
          "Bad Request. Invalid input. Please check your request and try again.",
      });
      break;
    case 401:
      res.status(401).json({
        error:
          "Unauthorized access. Please provide valid authentication credentials.",
      });
      break;
    case 403:
      res.status(403).json({
        error: "Forbidden. You do not have permission to access this resource.",
      });
      break;
    case 404:
      res.status(404).json({
        error: "Book not found. The requested book does not exist.",
      });
      break;
    case 409:
      res.status(409).json({
        error:
          "Conflict. The request could not be completed due to a conflict with the current state of the resource.",
      });
      break;
    case 500:
      res
        .status(500)
        .json({ error: "Internal Server Error. Please try again later." });
      break;
    default:
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again later." });
      break;
  }
};

export default handleErrorResponse;
