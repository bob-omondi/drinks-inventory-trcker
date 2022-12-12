class DrinksController < ApplicationController
    # skip_before_action :authorize, only: :index
  
      def index
          render json: Drink.all
        end
      
        def create
          user = User.find_by(id: session[:user_id])
          drink = user.drinks.create!(drink_params)
          render json: drink, status: :created
        end
      
        def update
          drink = find_drink
          drink.update(drink_params)
          render json: drink
        end
      
        def destroy
          drink = find_drink
          drink.destroy
          head :no_content
        end
      
        private
        
        def drink_params
          params.permit(:brand, :style, :country, :quantity)
        end
        def find_drink
          Drink.find_by(id: params[:id])
        end
  end
  