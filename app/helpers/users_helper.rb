module UsersHelper
  def user_role_for_select
    [
      ['Admin','admin'],
      ['Médico','medical'],
      ['Recepcionista','recepcionist']
    ]
  end

  def areas_for_select
    Area.all.pluck(:name, :id)
  end
end
