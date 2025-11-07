package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/healthcheck"
)

func main() {
	hello()
	startFiber()
}

// // handler function
// func handler() func(*fiber.Ctx) {
// 	return func(c *fiber.Ctx) {
// 		c.Send()
// 	}
// }

func startFiber() {
	app := fiber.New()

	registerRoutes(app)
	addMiddleware(app)

	app.Listen(":3000")
}

func addMiddleware(app *fiber.App) {
	// app.Get("/demo", handler())
	addHealthChecks(app)

	// Last middleware to match anything
	// app.Use(func(c *fiber.Ctx) {
	// 	c.SendStatus(404) // => 404 "Not Found"
	// })
}

func addHealthChecks(app *fiber.App) {
	// Provide a minimal config
	app.Use(healthcheck.New())

	// Or extend your config for customization
	app.Use(healthcheck.New(healthcheck.Config{
		LivenessProbe: func(c *fiber.Ctx) bool {
			return true
		},
		LivenessEndpoint: "/live",
		ReadinessProbe: func(c *fiber.Ctx) bool {
			return true
			// return serviceA.Ready()
		},
		ReadinessEndpoint: "/ready",
	}))
}

func registerRoutes(app *fiber.App) {
	app.Static("/static", "./public")

	app.Get("/api/hello", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Get("/api/goodbye", func(c *fiber.Ctx) error {
		return c.SendString("Goodbye, World!")
	})

	app.Get("/api/files", func(c *fiber.Ctx) error {
		return c.SendString("file placeholder")
	})

	app.Get("/api/db", func(c *fiber.Ctx) error {
		return c.SendString("db Placeholder")
	})
}
