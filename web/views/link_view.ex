defmodule NewsletterPhoenix.LinkView do
  use NewsletterPhoenix.Web, :view

  def render("index.json", %{links: links}) do
    %{data: render_many(links, NewsletterPhoenix.LinkView, "link.json")}
  end

  def render("show.json", %{link: link}) do
    %{data: render_one(link, NewsletterPhoenix.LinkView, "link.json")}
  end

  def render("link.json", %{link: link}) do
    %{id: link.id,
      title: link.title,
      url: link.url,
      comment: link.comment,
      category: render_one(link.category, NewsletterPhoenix.CategoryView, "category.json"),
      user_id: link.user_id,
      newsletter_id: link.newsletter_id}
  end
end
