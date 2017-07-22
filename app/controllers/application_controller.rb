class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_defaults

  private def set_defaults
    @title = "Save"
    @description = "Save"
    @keywords = "save"
    @social_image = nil
  end
end
