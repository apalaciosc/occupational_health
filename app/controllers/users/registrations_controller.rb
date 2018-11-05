# frozen_string_literal: true
class Users::RegistrationsController < Devise::RegistrationsController
  #GET /resource/sign_up
  def new
    super
  end

  #POST /resource
  def create
    super
  end

  #GET /resource/edit
  def edit
    super
  end

  #PUT /resource
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    if params[:user] && params[:user][:current_password].present? and params[:user][:password].present? and params[:user][:password_confirmation].present?
      updated = resource.update_with_password(user_params)
    else
      self.resource.skip_password_validation = true
      self.resource.skip_password_confirmation_validation = true
      updated = update_resource(resource, user_params) if user_params
    end
    respond_to do |format|
      if updated
        format.js { render action: 'update', statuts: :updated }
        format.html {
          redirect_to root_path
        }
      else
        format.js { render json: resource.errors, status: :unprocessable_entity }
        format.html {
          redirect_to root_path
        }
      end
    end
  end

  def update_resource(resource, params)
    params.delete("current_password")
    resource.update_without_password(params)
  end

  #DELETE /resource
  def destroy
    super
  end

  #GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  def cancel
    super
  end

  def user_params
    params.required(:user).permit(:email, :dni, :name, :lastname, :avatar, :phone, :position, :department, :address, :birthday, :aptitude, :interests, :role_id)
  end
end
