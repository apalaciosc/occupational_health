Rails.application.routes.draw do
  resources :medicals
  resources :attentions
  get "/404", :to => "errors#error_404"
  get "/422", :to => "errors#error_404"
  get "/500", :to => "errors#error_500"
  get "/505", :to => "errors#error_505"
  get 'medicals/fmo' => 'medicals#fmo'
  get 'employees/fmo' => 'employees#fmo'
  get 'employees/roadmap' => 'employees#roadmap'
  get 'attention/:id/exams', to: 'attentions#exams', as: :attention_exams
  get 'exam/:id/edit', to: 'attentions#edit_exams', as: :exam_edit
  get 'attention/:id/new_exams', to: 'attentions#new_exams', as: :attention_new_exams
  post 'attention/:employee_id/create', to: 'attentions#create', as: :attention_create
  patch 'attention/:id/update_general', to: 'attentions#update_general', as: :attention_update_general
  match '/exams/save', to: 'exams#save_exam', via: [:post, :patch], as: :save_exam
  resources :employees
  resources :areas, except: [:show]
  resources :enterprises, except: [:show]
  get 'type_exams', to: 'type_exams#index', as: :type_exams
  devise_for :users
  patch '/users/:id', to: 'users#update_profile'
  get '/users', to: 'users#index', as: :users
  resources :users do
    collection do
      get 'edit_profile'
    end
  end
  root 'home#index'
end
