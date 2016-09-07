defmodule NewsletterPhoenix.RegistrationController do
  use NewsletterPhoenix.Web, :controller

  alias NewsletterPhoenix.{Repo, User}

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        {:ok, jwt, _} = Guardian.encode_and_sign(user, :token)

        conn
        |> put_status(:created)
        |> render(NewsletterPhoenix.SessionView, "show.json", jwt: jwt, user: user)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(NewsletterPhoenix.SessionView, "error.json", changeset: changeset)
    end
  end
end
