defmodule NewsletterPhoenix.Newsletter do
  use NewsletterPhoenix.Web, :model

  schema "newsletters" do
    field :name, :string
    has_many :links, NewsletterPhoenix.Link

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end
