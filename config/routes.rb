Rails.application.routes.draw do
  resources :attentions
  get "/404", :to => "errors#error_404"
  get "/422", :to => "errors#error_404"
  get "/500", :to => "errors#error_500"
  get "/505", :to => "errors#error_505"
  get 'users/medicals', to: 'users#index_medicals', as: :index_medicals
  get 'users/recepcionists', to: 'users#index_recepcionists', as: :index_recepcionists
  get 'employees/fmo' => 'employees#fmo'
  get 'employees/roadmap' => 'employees#roadmap'
  get 'exam/:id', to: 'exams#create_pdf_exam', as: :create_pdf_exam
  get 'attention/:id/exams', to: 'attentions#exams', as: :attention_exams
  get 'exam/:id/edit', to: 'attentions#edit_exams', as: :exam_edit
  get 'attention/:id/new_exams', to: 'attentions#new_exams', as: :attention_new_exams
  post 'attention/:employee_id/create', to: 'attentions#create', as: :attention_create
  post 'particular_attention', to: 'attentions#particular_attention', as: :particular_attention
  patch 'attention/:id/update_general', to: 'attentions#update_general', as: :attention_update_general
  match '/exams/save', to: 'exams#save_exam', via: [:post, :patch], as: :save_exam
  resources :employees
  resources :areas, except: [:show]
  resources :enterprises, except: [:show]
  get 'type_exams', to: 'type_exams#index', as: :type_exams
  devise_for :users, controllers: { registrations: 'users/registrations' }
  get '/users', to: 'users#index', as: :users
  post '/users/create/:id', to: 'users#create_user', as: :users_create
  patch '/users/change_rol/:id', to: 'users#change_rol', as: :change_rol
  resources :users do
    collection do
      get 'new_user'
    end
  end
  root 'home#index'
end
