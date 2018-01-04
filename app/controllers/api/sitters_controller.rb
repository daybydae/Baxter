class Api::SittersController < ApplicationController

  def show
    @sitter = Sitter.find(params[:id])
  end

  def index
    @sitters = Sitter.all
  end

  def create
    @sitter = Sitter.new(sitter_params)

    if @sitter.save!
      render :show
    else
      render json: @sitter.errors.full_messages, status: 422
    end

  end

  def sitter_params
    params.require(:sitter).permit(:sittername, :location, :rates, :lat, :lng)
  end
end
