class Api::SittersController < ApplicationController

  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @booking = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save!
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end

  private

  def booking_params
    params.require(:booking).permit(:sitter_id, :user_id, :start_date, :end_date)
  end
end
