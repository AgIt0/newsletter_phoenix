defmodule NewsletterPhoenix.NewsletterController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.Newsletter

  plug Guardian.Plug.EnsureAuthenticated, handler: NewsletterPhoenix.SessionController

  def index(conn, _params) do
    newsletters = Repo.all(Newsletter)
                    |> Repo.preload([links: [:category, :user]])
    render(conn, "index.json", newsletters: newsletters)
  end

  def show(conn, %{"id" => id}) do
    newsletter = Repo.get!(Newsletter, id)
                   |> Repo.preload([links: [:category, :user]])
    render(conn, "show.json", newsletter: newsletter)
  end
end
