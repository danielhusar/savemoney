Rails.application.routes.draw do
  constraints(host: /^(?!www\.)/i) do
    match "(*any)" => redirect { |params, request|
      URI.parse(request.url).tap { |uri| uri.host = "www.#{uri.host}" }.to_s
    }
  end

  root to: "site#homepage"
  # get "/:locale", to: "main#homepage"
end
