const regex = {
  email: /\S+@\S+\.\S+/,
  contactNumber: /^[1-9]{1}\d{5,15}$/,

  password: {
    isUpper: /[A-Z]/,
    isLower: /[a-z]/,
    isNum: /\d/,
    isSymbol: /[^\p{L}\d\s]/u,
  },
};

export default regex;
