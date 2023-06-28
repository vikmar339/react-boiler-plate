const errorMessage = {
  required: "This is a required field",
  invalidEmail: "Please enter a valid email address",
  unregisteredEMail: "Please enter a registered email address",
  emailExist: "Email already exist",
  digitRequired: (num: number) =>
    `This needs to be total of ${num} digit number`,

  fileUpload: {
    requiredFiles: "Please attach the required files",
    maxFileSize: "Max Limit 10 MB",
    invalidFileType: "Please dont attach executable files",
    alreadyExist: "File already exist",
    fileLimitExceed: "Please attach only 2 files",
  },
  unknownErr: "Some error occurred",
  inValidCredentials: "Invalid credentials. Please try again.",
  invalidPassword: "Passwords do not match. Please try again.",
};

export default errorMessage;
