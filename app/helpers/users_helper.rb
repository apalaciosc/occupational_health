module UsersHelper
  def user_role_for_select
    [
      ['Admin','admin'],
      ['Médico','medical'],
      ['Recepcionista','recepcionist']
    ]
  end
end
