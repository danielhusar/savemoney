Rails.application.routes.draw do
  constraints(host: /^(?!www\.)/i) do
    match "(*any)" => redirect { |params, request|
      URI.parse(request.url).tap { |uri| uri.host = "www.#{uri.host}" }.to_s
    },  via: [:get, :post, :put, :delete]
  end if Rails.env.production?

  root to: "site#homepage"
  get "/api/subscribe", to: "api#subscribe"
end
