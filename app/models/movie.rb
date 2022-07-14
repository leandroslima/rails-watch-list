class Movie < ApplicationRecord
  validates :title, presence: true
  validates :overview, presence: true
  has_many :bookmarks
  has_many :lists, :through => :bookmarks
end
