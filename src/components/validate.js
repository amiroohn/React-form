export const validate = (data,type) => {
  const errors = {};



  if (!data.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email address is required";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password required";
  } else if (data.password.length < 6) {
    errors.password = "password must be at least 6 characters or more";
  } else {
    delete errors.password;
  }

 

  if(type === "signup"){

    if (!data.name.trim()) {
      errors.name = "username required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "confirmPassword required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password do not match ";
    } else {
      delete errors.confirmPassword;
    }
  
    if (data.isAccept) {
      delete errors.isAccept;
    } else {
      errors.isAccept = "Accept our regulatations";
    }
  }

  return errors;
};
