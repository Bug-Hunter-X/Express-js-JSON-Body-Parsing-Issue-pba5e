# Express.js JSON Body Parsing Bug

This repository demonstrates a common bug in Express.js applications where the JSON body of a POST request is not parsed correctly, resulting in `req.body` being undefined or empty.  The issue often arises due to incorrect middleware configuration or unexpected request handling.

## Bug Description

The provided `bug.js` file contains an Express.js application that attempts to parse a JSON POST request. Despite using `app.use(express.json())`, the application fails to parse the JSON body, resulting in an empty `req.body` object. This leads to unexpected behavior and potential errors when attempting to access the request data.

## Solution

The `bugSolution.js` file provides a corrected version of the application. The solution addresses the issue by ensuring the `express.json()` middleware is correctly placed and handles the request before the route handler.