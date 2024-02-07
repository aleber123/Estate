const functions = require("firebase-functions");
const fetch = require("node-fetch");
const cors = require("cors")({origin: true}); // Require CORS middleware
const logger = require("firebase-functions/logger");

exports.fetchInstagramData = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    // Access the Instagram access token from environment variables
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
      const responseBody = await instagramResponse.text();

      if (!instagramResponse.ok) {
        logger.error(
            `Instagram API HTTP status: ${instagramResponse.status}, ` +
            `Response Body: ${responseBody}`,
        );
        throw new Error(`Instagram API Error ${instagramResponse.status}`);
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
});
