const nextTranslate = require("next-translate");

// next.config.js
module.exports = nextTranslate({ 
  images: {
    domains: ['damansdak.s3.eu-central-1.amazonaws.com'],
  },
});
