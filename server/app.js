if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// ?needed when trying port connection for the first time
// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

// ?running the application route
app.use(cors()); // for deployment purpose
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // don't forget to invoke the express.json()

/* turn this off if running the testing, put the app.listen in bin folder then www.js file
just copy the app.listen() above and paste it

** for not testing purpose only **
run the port in terminal ( npx nodemon app.js )

** for testing purpose **
run the port in terminal ( npx nodemon <folder_name>/<file_name>.js )
example: npx nodemon bin/www.js
*/
app.listen(port, () => {
	console.log(`SERVER RUNNING IN PORT ${port}`);
});

// export the app (used for testing)
module.exports = app;
