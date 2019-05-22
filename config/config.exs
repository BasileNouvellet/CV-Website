# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :cv_website,
  ecto_repos: [CvWebsite.Repo]

# Configures the endpoint
config :cv_website, CvWebsiteWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "h9SaqZHajy+anp8vDgNyte0IIZH5gSlue6ECrO0AyhZtNSO7+0EIjWs4eiBjV1yh",
  render_errors: [view: CvWebsiteWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: CvWebsite.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
