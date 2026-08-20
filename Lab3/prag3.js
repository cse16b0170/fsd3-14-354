import http from 'http';

const server = http.createServer((req,res) => {
  if (http.url == "/") {  
    res.end("<h2>Welcome to Serverside</h2>")
    
});

server.listen(5000, () => {
    console.log("Server is running")
   
});
else {
    res statusCode =404;
    re.end(
           <h1>404, Not found<h1/>
           <p>Page not found<p/>
           
    )
}