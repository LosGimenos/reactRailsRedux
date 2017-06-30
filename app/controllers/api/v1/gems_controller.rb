class Api::V1::GemsController < ApplicationController

  def index
    query_name = params[:query]

    @gem = Gems.info "#{query_name}"

    render json: @gem
  end

end
