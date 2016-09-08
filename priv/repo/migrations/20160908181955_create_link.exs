defmodule NewsletterPhoenix.Repo.Migrations.CreateLink do
  use Ecto.Migration

  def change do
    create table(:links) do
      add :title, :string, null: false
      add :url, :string, null: false
      add :comment, :string, null: false
      add :category_id, references(:categories, on_delete: :nothing), null: false
      add :user_id, references(:users, on_delete: :nothing), null: false
      add :newsletter_id, references(:newsletters, on_delete: :nothing)

      timestamps()
    end
    create index(:links, [:category_id])
    create index(:links, [:user_id])
    create index(:links, [:newsletter_id])

  end
end
