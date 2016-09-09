defmodule NewsletterPhoenix.LinkController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.Link

  def index(conn, _params) do
    links = Repo.all(Link)
    render(conn, "index.json", links: links)
  end

  def create(conn, %{"link" => link_params}) do
    changeset = Link.changeset(%Link{}, link_params)

    case Repo.insert(changeset) do
      {:ok, link} ->
        conn
        |> put_status(:created)
        |> render("show.json", link: link)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(NewsletterPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
