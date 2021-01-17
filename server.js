const express = require("express");
const path = require("path");

const app = express();
const apiRouter = require("./api/router")


app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/test", (req, res) => {
    res.send("this is test");
})

app.use("/api", apiRouter)

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
}
);

app.listen(
    8080,
    () => {
        console.log("Server running...")
    }
);
