defmodule NewsletterPhoenix.CurrentUserView do
  use NewsletterPhoenix.Web, :view

  def render("show.json", %{user: user}) do
    user
  end
end
