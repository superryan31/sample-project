class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    user = User.find_by_email(login_params[:email])
    if(user && user.valid_password?(login_params[:password]))
      @current_user = user
    else
      render json: {errors: {'email or password' => ['is invalid']}}, status: :unprocessable_entity
    end

  end

  private

  def respond_with(resource, _opts = {})
    render json: resource
  end

  def respond_to_on_destroy
    head :no_content
  end

  def login_params
    params.permit(:email, :password)
  end

end
