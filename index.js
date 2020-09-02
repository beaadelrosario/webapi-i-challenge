// implement your API here
// require the express npm module, needs to be added to the project using "npm install express"
const express = require("express");

// creates an express application using the express module
const server = express();

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get("/", (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send("Hello World");
});

server.get("/hobbits", (req, res) => {
  // route handler code here
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee",
    },
    {
      id: 2,
      name: "Frodo Baggins",
    },
  ];
  // The .status() method of the response object can be used to send any valid HTTP status code.
  //  We are also chaining the .json() method of the response object to clearly communicate to both the client making the request and to the next developer working with this code, that we intend to send the data in JSON format.
  res.status(200).json(hobbits);
});

// this request handler executes when making a GET request to /about
server.get("/about", (req, res) => {
  res.status(200).send("<h1>About Us</h1>");
});

// this request handler executes when making a GET request to /contact
server.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact Form</h1>");
});

// this request handler executes when making a POST request to /hobbits
server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
});

// this request handler executes when making a PUT request to /hobbits
server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
});

// this request handler executes when making a DELETE request to /hobbits

// This route handler will execute every DELETE for a URL that begins with /hobbits/ followed by any value, so DELETE requests to /hobbits/123 and /hobbits/frodo will both trigger this request handler. The value passed after /hobbits/ will end up as the id property on req.params.
server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    // or we could destructure it like so: const { id } = req.params;
    res.status(200).json({
      url: `/hobbits/${id}`,
      operation: `DELETE for hobbit with id ${id}`,
    });
  });

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log("API running on port 8000"));
