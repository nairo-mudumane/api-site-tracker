const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}"`);
});
