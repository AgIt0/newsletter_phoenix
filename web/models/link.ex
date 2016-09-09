defmodule NewsletterPhoenix.Link do
  use NewsletterPhoenix.Web, :model

  schema "links" do
    field :title, :string
    field :url, :string
    field :comment, :string
    belongs_to :category, NewsletterPhoenix.Category
    belongs_to :user, NewsletterPhoenix.User
    belongs_to :newsletter, NewsletterPhoenix.Newsletter

    timestamps()
  end

  @required_fields ~w(url title user_id category_id)
  @optional_fields ~w(comment)

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @required_fields, @optional_fields)
    |> validate_required([:url, :comment])
  end
end
