use Mix.Config

# Configure your database
config :cv_website, CvWebsite.Repo,
  username: "postgres",
  password: "postgres",
  database: "cv_website_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :cv_website, CvWebsiteWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
