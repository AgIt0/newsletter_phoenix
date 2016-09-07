defmodule NewsletterPhoenix.User do
  use NewsletterPhoenix.Web, :model

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :encrypted_password, :string
    field :password, :string, virtual: true


    timestamps()
  end

  @derive {Poison.Encoder, only: [:id, :first_name, :last_name, :email]}

  @required_fields ~w(first_name last_name email password)
  @optional_fields ~w(encrypted_password)

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 6)
    |> unique_constraint(:email)
    |> add_pass_hash
  end

  defp add_pass_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
      _ ->
        changeset
    end
  end

end
