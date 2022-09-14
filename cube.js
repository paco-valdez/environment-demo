// Cube.js configuration options: https://cube.dev/docs/config

// NOTE: third-party dependencies and the use of require(...) are disabled for
// CubeCloud users by default.  Please contact support if you need them
// enabled for your account.  You are still allowed to require
// @cubejs-backend/*-driver packages.

const environment = process.env.CUBE_ENVIRONMENT_NAME;

if (environment === `staging`) {
  module.exports = {
    checkAuth: (req, auth) => {},
  };
} else {
  module.exports = {
  };
}
