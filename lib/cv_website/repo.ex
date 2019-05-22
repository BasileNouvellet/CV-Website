defmodule CvWebsite.Repo do
  use Ecto.Repo,
    otp_app: :cv_website,
    adapter: Ecto.Adapters.Postgres
end
