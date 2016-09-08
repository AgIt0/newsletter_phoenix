defmodule NewsletterPhoenix.LinkView do
  use NewsletterPhoenix.Web, :view

  def render("show.json", %{link: link}) do
    %{data: render_one(link, NewsletterPhoenix.LinkView, "link.json")}
  end

  def render("link.json", %{link: link}) do
    %{id: link.id,
      title: link.title,
      url: link.url,
      comment: link.comment,
      category_id: link.category_id,
      user_id: link.user_id,
      newsletter_id: link.newsletter_id}
  end
end
