defmodule NewsletterPhoenix.LinkController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.Link

  def index(conn, _params) do
    links = Repo.all(Link)
    render(conn, "index.json", links: links)
  end

  def create(conn, %{"link" => link_params}) do
    user = Guardian.Plug.current_resource(conn)

    changeset =
      user
      |> build_assoc(:links)
      |> Link.changeset(link_params)

    case Repo.insert(changeset) do
      {:ok, link} ->
        conn
        |> put_status(:created)
        |> render("show.json", link: Repo.preload(link, :category))
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(NewsletterPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
