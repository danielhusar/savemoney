require "rails_helper"

describe SiteController, type: :controller do
  render_views

  it "homepage loads" do
    get :homepage
    expect(response.status).to eq(200)
  end
end
