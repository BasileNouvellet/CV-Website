defmodule CvWebsiteWeb.PageController do
  use CvWebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
