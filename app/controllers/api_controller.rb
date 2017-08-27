class ApiController < ApplicationController
  def subscribe
    email = whitelisted_params[:email]
    return render json: {}, status: 422 unless email.match(/^.+@.+$/)

    return render json: {}, status: 200

    Gibbon::Request.new.lists("04ddd22a98")
      .members(Digest::MD5.hexdigest(email))
      .upsert(body: { email_address: email, status: "subscribed" })
    render json: {}, status: 200
  end

  private def whitelisted_params
    params.permit(:email)
  end
end
