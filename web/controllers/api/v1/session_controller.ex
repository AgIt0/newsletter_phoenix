defmodule NewsletterPhoenix.SessionController do
  use NewsletterPhoenix.Web, :controller

  plug :scrub_params, "session" when action in [:create]

  def create(conn, %{"session" => session_params}) do
    case NewsletterPhoenix.Session.authenticate(session_params) do
      {:ok, user} ->
        {:ok, jwt, _} = user |> Guardian.encode_and_sign(:token)

        conn
        |> put_status(:created)
        |> render("show.json", jwt: jwt, user: user)

      :error ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json")
    end
  end

  def delete(conn, _) do
    {:ok, claims} = Guardian.Plug.claims(conn)

    conn
    |> Guardian.Plug.current_token
    |> Guardian.revoke!(claims)

    conn
    |> render("delete.json")
  end

  def unauthenticated(conn, _params) do
    conn
    |> put_status(:forbidden)
    |> render(NewsletterPhoenix.SessionView, "forbidden.json",
              error: "Not Authenticated")
  end
end
