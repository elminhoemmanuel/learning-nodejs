// const path = require("node:path")

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))

// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute(__dirname))

// console.log(path.join("folder", "folder2", "index.html"))

// function greet(name = "") {
//     console.log(`Hello ${name}`)
// }

// function greetOmale(greetFn) {
//     const name = "Omale"
//     greetFn(name)
// }

// greetOmale(greet)
// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} Pizza with ${topping}`)
// })

// emitter.emit("order-pizza", "large", "mushrooms")

// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on("order", (size, topping)=>{
//     console.log(`Order received! Baking a ${size} Pizza with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large", "mushrooms");
// pizzaShop.displayOrderNumber()

// const buffer = new Buffer.from("Omale")
// buffer.write("aguythatcodes")
// console.log(buffer.toJSON())
// console.log(buffer.toString())
// const fs = require("node:fs")

// const fileContent = fs.readFileSync("./file.txt", "utf8")
// console.log(fileContent)

// fs.readFile("./file.txt", "utf-8", (error, data) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// fs.writeFileSync("./greet.txt", "Hey Omale")

// fs.writeFile("greet.txt", "Hola Amigo, que pasa", {flag: "a"}, (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file written successfully")
//     }
// })

// const fs = require("node:fs/promises")

// fs.readFile("file.txt", "utf-8")
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))

// const readFile = async () =>{
//     try {
//         const data = await fs.readFile("file.txt", "utf-8")
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile()

// const fs = require("node:fs")
// const zlib = require("node:zlib")

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2
// })

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

// readableStream.pipe(writeableStream)

// const http = require('node:http');
// const fs = require('node:fs');

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: 'Bruce',
//     lastName: 'Wayne',
//   };

//   res.writeHead(200, {
//     'Content-Type': 'application/json',
//   });
//   res.end(JSON.stringify(superHero));
// });

// server.listen(3000, () => {
//   console.log('server running on port 3000');
// });
// const server = http.createServer((req, res) => {
//   const name = 'Omale';
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//   });
//   // fs.createReadStream(`${__dirname}/index.html`).pipe(res);
//   let html = fs.readFileSync('./index.html', 'utf-8');
//   html = html.replace('{{name}}', name);
//   res.end(html);
// });

// server.   listen(3000, () => {
//   console.log('server running on port 3000');
// });

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(200, {
//       'Content-Type': 'text/plain',
//     });
//     res.end('Home page');
//   } else if (req.url === '/about') {
//     res.writeHead(200, {
//       'Content-Type': 'text/plain',
//     });
//     res.end('About page');
//   } else if (req.url === '/api') {
//     res.writeHead(200, {
//       'Content-Type': 'application/json',
//     });
//     res.end(
//       JSON.stringify({
//         firstName: 'Emmanuel',
//         lastName: 'Omale',
//       })
//     );
//   } else {
//     res.writeHead(404);
//     res.end('Page not found');
//   }
// });

// server.listen(3000, () => {
//   console.log('server running on port 3000');
// });

// const fs = require('node:fs');

// console.log('First');

// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//   console.log('File contents');
// });

// console.log('Last');

// const crypto = require('node:crypto');

// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5;

// const start = Date.now();

// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
//     console.log(`Hash: ${i + 1}`, Date.now() - start);
//   });
// }

// Simple HTTP server

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('Server is running on port 3000'));
