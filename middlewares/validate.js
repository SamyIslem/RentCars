const validate = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body);

  if (validation.error) {
    console.log(validation.error);
    res.status(400).json({
      success: "false",
      message: validation.error.details[0].message,
    });
    return;
  }

  next();
};

module.exports = validate;
