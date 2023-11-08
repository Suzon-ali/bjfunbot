// // webhook.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = process.env.PORT || 3000; // Use the port specified by Render.com or a default one

// app.use(bodyParser.json());

// app.post("/your-webhook-endpoint", (req, res) => {
//   const update = req.body;
//   // Process the incoming update (message, command, etc.) here
//   // Implement your bot logic based on the incoming data
//   // ...
//   res.sendStatus(200); // Respond with a 200 OK to acknowledge receipt
// });

// app.listen(port, () => {
//   console.log(`Webhook server is running on port ${port}`);
// });
