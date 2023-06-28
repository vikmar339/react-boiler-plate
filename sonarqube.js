const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://138.197.70.44:9000/",
    login: "admin",
    password: "admin",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
