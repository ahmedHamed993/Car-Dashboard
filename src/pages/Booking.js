import React from 'react'
import BookingFilter from "../components/BookingFilter";
import {bookingCars } from "../data/carsData";
import BookingCarCard from "../components/BookingCarCard";
const Booking = () => {
  return (
    <div className='w-full h-[calc(100%-72px)] overflow-auto py-4 px-8  bg-gray-50 dark:bg-gray-800 scrollbar-hide'>
      <div className="container mx-auto max-w-[1400px]">
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold text-gray-900 dark:text-gray-50'>Booking</h1>
          <BookingFilter />
          <div className="flex justify-center  items-center flex-wrap gap-3">
            {
              bookingCars.map(item => <BookingCarCard item={item} ke={item.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking