defmodule NewsletterPhoenix.Newsletter do
  use NewsletterPhoenix.Web, :model

  alias NewsletterPhoenix.{Newsletter, Link}
  schema "newsletters" do
    field :name, :string
    has_many :links, Link

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

  def insert_newsletter do
    links = Repo.all(from u in Link, where: is_nil(u.newsletter_id))
    Repo.insert!(%Newsletter{name: Enum.join(Tuple.to_list(:calendar.iso_week_number), "-"), links: links})
  end
end
