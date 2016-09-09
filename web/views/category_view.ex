defmodule NewsletterPhoenix.CategoryView do
  use NewsletterPhoenix.Web, :view

  def render("index.json", %{categories: categories}) do
    %{data: render_many(categories, NewsletterPhoenix.CategoryView, "category.json")}
  end

  def render("category.json", %{category: category}) do
    %{id: category.id,
      name: category.name}
  end
end
