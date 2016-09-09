defmodule NewsletterPhoenix.NewsletterView do
  use NewsletterPhoenix.Web, :view

  def render("index.json", %{newsletters: newsletters}) do
    %{data: render_many(newsletters, NewsletterPhoenix.NewsletterView, "newsletter.json")}
  end

  def render("show.json", %{newsletter: newsletter}) do
    %{data: render_one(newsletter, NewsletterPhoenix.NewsletterView, "newsletter.json")}
  end

  def render("newsletter.json", %{newsletter: newsletter}) do
    %{id: newsletter.id,
      name: newsletter.name,
      links: render_many(newsletter.links, NewsletterPhoenix.LinkView, "link.json")
    }
  end
end
