class Api::SittersController < ApplicationController

  def show
    @bench = Bench.find(params[:id])
  end

  def index
    render :index
  end

end
