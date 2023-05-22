module.exports = function (app) {
    app.use("/users", require("./userRoute"))
    app.use("/posts", require("./postRoute"))
    app.use("/likes", require("./likeRoute"))
    app.use("/comments", require("./commentRoute"))
}