# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :newsletter_phoenix,
  ecto_repos: [NewsletterPhoenix.Repo]

# Configures the endpoint
config :newsletter_phoenix, NewsletterPhoenix.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "mMwAZFVsin+6ndWw/TQn7p+ZG8jVo4+RNl2Xj/BzqefpoH85GOnKXEj5ZT7DVtZ6",
  render_errors: [view: NewsletterPhoenix.ErrorView, accepts: ~w(html json)],
  pubsub: [name: NewsletterPhoenix.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
