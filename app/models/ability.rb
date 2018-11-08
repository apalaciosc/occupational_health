class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    user ||= User.new # guest user (not logged in)

    alias_action :tree, to: :read
    alias_action :create, :read, :update, to: :cru
    alias_action :create, :update, :delete, to: :cud
    alias_action :create, :read, :update, :delete, to: :crud

    if user.role_id == 'superadmin' || user.role_id == 'admin'
      can :manage, :all
    elsif user.role_id == 'recepcionist'
      can [:crud, :particular_attention, :exams, :update_general], Attention
      can [:index], Area
      can :crud, Employee
      can :crud, Enterprise
      can :cru, Exam
      can :cru, TypeExam
      can [:edit_profile], User
    elsif user.role_id == 'medical'
      can :read, Employee
      can [:read,:new_exams, :edit_exams, :exams], Attention
      can [:crud], Exam
      can :cru, TypeExam
    end
  end
end
