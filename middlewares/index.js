const urlLogger = (req, res, next) => {
    console.log(req.url);
    next();
  };
  
  const dateTimeLogger = (req, res, next) => {
    console.log(new Date().toLocaleString());
    next();
  };
  // user role: client, admin, vendor
  const authenticate = (req, res, next) => {
    const { role } = req.query;
    if (role === "admin") {
      console.log("Processing Admin login");
      next();
    } else if (role === "vendor") {
      console.log("Processing Vendor login");
      next();
    } else {
      console.log("Processing Client login");
      next();
    }
  };

  
module.exports = {urlLogger, dateTimeLogger, authenticate};