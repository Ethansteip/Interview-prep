/*
/
/ Asynchronous practice
/
*/


/*
/
/ Fetch - The Fetch API provides a JavaScript interface for accessing
/ and manipulating parts of the protocol, such as requests and responses.
/ It also provides a global fetch() method that provides an easy,
/ logical way to fetch resources asynchronously across the network.
/
*/

fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));



