class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_defaults

  private def set_defaults
    @title = "Save Budget — Your money in Color"
    @description = "Plan, track, and manage your budget like never before."
    @keywords = "Save, Money, Budget, App, Finance"
    @social_image = nil
  end
end
