const {onRequest} = require("firebase-functions/v2/https");
const fetch = require("node-fetch");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

exports.fetchInstagramData = onRequest(async (request, response) => {
  const accessToken = functions.config().instagram.access_token;
  const baseUrl = "https://graph.instagram.com/me/media";
  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "children{media_type,media_url}",
  ].join(",");
  const queryParams = `fields=${fields}&access_token=${accessToken}`;
  const url = `${baseUrl}?${queryParams}`;

  try {
    const instagramResponse = await fetch(url);

    // Check if the response was ok (status 200-299)
    if (!instagramResponse.ok) {
      throw new Error("Instagram API HTTP status " + instagramResponse.status);
    }

    const instagramData = await instagramResponse.json();
    if (instagramData.error) {
      throw new Error(instagramData.error.message);
    }
    response.send(instagramData);
  } catch (error) {
    logger.error(`Error fetching Instagram posts: ${error}`);
    response.status(500).send({message: error.toString(), error: true});
  }
});
