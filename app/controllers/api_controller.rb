class ApiController < ApplicationController
  def subscribe
    email = whitelisted_params[:email]
    render json: {}, status: 200
  end

  private def whitelisted_params
    params.permit(:email)
  end
end
