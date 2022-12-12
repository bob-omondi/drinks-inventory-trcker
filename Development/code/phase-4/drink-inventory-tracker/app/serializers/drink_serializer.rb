class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :brand, :style, :country, :quantity, :user_id
  has_one :user
end
