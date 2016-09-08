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

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:url, :comment])
    |> validate_required([:url, :comment])
  end
end
