const app = require("./server/app")
require("dotenv").config()
require("./config/database/connection")

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(process.env.SERVER_URL)
})