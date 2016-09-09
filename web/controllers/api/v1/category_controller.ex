defmodule NewsletterPhoenix.CategoryController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.Category

  plug Guardian.Plug.EnsureAuthenticated, handler: NewsletterPhoenix.SessionController

  def index(conn, _params) do
    categories = Repo.all(Category)
    render(conn, "index.json", categories: categories)
  end
end
