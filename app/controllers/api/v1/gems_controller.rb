class Api::V1::GemsController < ApplicationController

  def index
    @gem = { "gems": "these are the gems!!"}
    render json: @gem
  end

  def show
    @gem = {"gems": "these are the gems!!"}
    render json: @gem
  end

end
