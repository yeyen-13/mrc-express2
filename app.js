const express = require("express")
const allRouterUser = require("./routes")
const app = express()
const PORT = 3000

app.use(express.json())
app.use(allRouterUser)
app.listen(PORT, () => {
  console.log("server running on post " + PORT);
});