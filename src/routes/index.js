const { mainRequest } = require("../controllers/main");
const { notFound } = require("../controllers/notFound");

module.exports = (app) => {
    app.get("/", mainRequest);

    // main route

    app.get("/*", notFound);
};
