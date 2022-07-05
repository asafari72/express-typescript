module.exports = {
    apps: [{
      name: "project_name",
      script: "./server.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }