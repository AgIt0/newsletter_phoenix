defmodule NewsletterPhoenix.Repo.Migrations.CreateNewsletter do
  use Ecto.Migration

  def change do
    create table(:newsletters) do
      add :name, :string, null: false

      timestamps()
    end

  create unique_index(:newsletters, [:name])
  end
end
