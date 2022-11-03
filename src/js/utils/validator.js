export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;

      case "isEmail": {
        const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }

      case "isCapital": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }

      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }

      case "isMin": {
        const minRegExp = /^.{8,16}$/g;
        statusValidate = !minRegExp.test(data);
        break;
      }

      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
