alias NewsletterPhoenix.{Repo, User, Category}

users = [
  %{
    first_name: "John",
    last_name: "Doe",
    email: "example@example.com",
    password: "exampleOFC"
  },
]

for user <- users do
  Repo.get_by(User, email: user.email) ||
  Repo.insert(User.changeset(%User{}, user))
end


for category <- ~w(Ruby C# JS Others) do
  Repo.get_by(Category, name: category) ||
  Repo.insert(%Category{name: category})
end
