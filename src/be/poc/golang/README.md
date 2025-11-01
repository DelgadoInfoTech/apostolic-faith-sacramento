# PoC - Go - Fiber

## Important Non-Functional Requirements
1. Performance
   1. [ ] Metrics Measurement Tools
2. Security
   1. [ ] Authentication
   2. [ ] Authorization
3. Scalability
   1. [ ] Kubernetes? 
   2. [ ] Docker?
4. Maintainability
   1. Logging
      1. "log" package
5. Usability
   1. [ ] Easy to use?

## Running the below 
- The PoC is done already, so run the application as follows:

1. Follow the steps to install golang noted in #installation.
2. Download the dependencies
```go
go mod download
``` 
3. Run the app
```go
go run .
```


# Overview

Subject
What is Fiber?
https://gofiber.io/
Fiber is a Go web framework built on top of Fasthttp, the fastest HTTP engine for Go. It's designed to ease development with performance in mind.

# Installation:
Prerequisites:
Golang
https://go.dev/dl/
Windows:
Chocolatey
https://chocolatey.org/install
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(‘https://community.chocolatey.org/install.ps1'))
https://community.chocolatey.org/packages/golang
choco install golang -y
Mac:
HomeBrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”
brew install go

Confirm your golang installation works:
1. Run Version command
```bash
$ go version
```
2. Expected Output: (Mac)
```bash
go version go1.24.1 darwin/arm64
```

## Golang Environment Setup

https://go.dev/doc/tutorial/getting-started
- From this directory, run the following commands in a terminal window:
1. Module Initialization command (creates a module )
```bash
go mod init afcsac/hello
```
2. Create a golang file with a main method (see hello.go)
3. Run it!
```
go run hello
```
4. You should see `Hello test, world!` printed to the terminal.
5. Stop the program by typing `ctrl + c`.

## Installing Fiber:
https://docs.gofiber.io/
Requirements:
Golang 1.17 
1. Run the command to retrieve the Fiber module:
```bash
go get github.com/gofiber/fiber/v2
```
2. Run it to see the web server start:
```bash
go run .
```
3. Expected output:
```bash
 ┌───────────────────────────────────────────────────┐ 
 │                   Fiber v2.52.9                   │ 
 │               http://127.0.0.1:3000               │ 
 │       (bound on host 0.0.0.0 and port 3000)       │ 
 │                                                   │ 
 │ Handlers ............. 2  Processes ........... 1 │ 
 │ Prefork ....... Disabled  PID ............. 13467 │ 
 └───────────────────────────────────────────────────┘ 
```
4. Navigate to `http://localhost:3000/` to see the expected output:

```html
Hello, world!
```

### Routing
- To route requests in Go, each route follows the folling format:
```go
app.Method(path string, ...func(*fiber.Ctx) error)
```
Example:
```go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
})
```

- Passing parameters:
```go
// GET http://localhost:8080/hello%20world

app.Get("/:value", func(c *fiber.Ctx) error {
	return c.SendString("value: " + c.Params("value"))
	// => Get request with value: hello world
})
```
- Optional Parameters:
```go
// GET http://localhost:3000/john

app.Get("/:name?", func(c *fiber.Ctx) error {
	if c.Params("name") != "" {
		return c.SendString("Hello " + c.Params("name"))
		// => Hello john
	}
	return c.SendString("Where is john?")
})
```
- Wildcard routes (matching any route that follows a certain pattern)
```go
// GET http://localhost:3000/api/user/john
//This will match whatever text is at /user/{text}
// So in this case, "john" is matched
app.Get("/api/*", func(c *fiber.Ctx) error {
	return c.SendString("API path: " + c.Params("*"))
	// => API path: user/john
})
```
- Serving static assets (.js, .css, .img, etc.)
  - Takes the format as follows:
```go
app.Static(prefix, root string, config ...Static)
```
  - Serve assets from a directory named "public," which is a common convention for SPAs.
```go
app := fiber.New()

app.Static("/", "./public") 

app.Listen(":3000")
```
  - Now assets can be loaded from that directory!




