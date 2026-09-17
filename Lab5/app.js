import expresss from "express";

const app = expresss();

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => {
    console.log("Server is running ");
});