alias NewsletterPhoenix.{Repo, User}

[
  %{
    first_name: "John",
    last_name: "Doe",
    email: "example@example.com",
    password: "exampleOFC"
  },
]
|> Enum.map(&User.changeset(%User{}, &1))
|> Enum.each(&Repo.insert!(&1))
