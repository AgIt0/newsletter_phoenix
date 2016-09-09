alias NewsletterPhoenix.{Repo, User, Category, Newsletter, Link}
import Ecto.Query

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

test_newsletter = Repo.get_by(Newsletter, name: "test") ||
                    Repo.insert(%Newsletter{name: "test"})
first_user = User |> first |> Repo.one
first_category = Category |> first |> Repo.one

for i <- 1..5 do
    title = "Google#{i}"
    Repo.get_by(Link, title: title) ||
      Repo.insert!(
        %Link{
          user_id: first_user.id,
          url: "http://google.com",
          title: title,
          newsletter_id: test_newsletter.id,
          comment: "Hello Google",
          category_id: first_category.id
        })
end
