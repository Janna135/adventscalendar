require("dotenv").config();
const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_.CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT)
    );
};
