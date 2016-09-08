defmodule NewsletterPhoenix.LinkController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.Link

  def create(conn, %{"link" => link_params}) do
    changeset = Link.changeset(%Link{}, link_params)

    case Repo.insert(changeset) do
      {:ok, link} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", link_path(conn, :show, link))
        |> render("show.json", link: link)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(NewsletterPhoenix.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
