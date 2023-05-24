exports.notFound = (req, res, next) => {
    res
      .status(404)?.json({
        error: {
          status: 404,
          name: 'notFound',
          message: 'Not found',
        },
      });
  };
  
  exports.error = (error, req, res, next) => {
    const codes = {
      badRequest: 400,
      validationError: 400,
      authError: 401,
    };
    const status = codes[error?.name] || error?.status || 500;
  
    res?.status(status)
      .json({
        error: {
          status,
          name: error.name || 'error',
          message: error.message || 'error',
        },
      });
      // console.log(error);
  };