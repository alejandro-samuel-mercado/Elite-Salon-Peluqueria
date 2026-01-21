"use client";
import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  selectedService: string;
  bookingData: { date: string; time: string };
  openBooking: (service?: string) => void;
  closeBooking: () => void;
  setDateTime: (date: string, time: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General");
  const [bookingData, setBookingData] = useState({ date: "", time: "" });

  const openBooking = (service: string = "General") => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const setDateTime = (date: string, time: string) =>
    setBookingData({ date, time });

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedService,
        bookingData,
        openBooking,
        closeBooking: () => setIsOpen(false),
        setDateTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking error");
  return context;
};
