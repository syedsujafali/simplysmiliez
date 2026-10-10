'use client';
import { useState, createContext, useContext } from 'react';
import UnifiedHeader from './UnifiedHeader';
import Footer from './Footer';
import MobileBottomBar from './MobileBottomBar';
import ServicesModal from './ServicesModal';
import AppointmentModal from './AppointmentModal';

export const UIContext = createContext({
  openAppointment: () => {},
  openServices: () => {}
});

export const useUI = () => useContext(UIContext);

export default function LayoutWrapper({ children }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  const openServices = () => setServicesOpen(true);
  const closeServices = () => setServicesOpen(false);

  return (
    <UIContext.Provider value={{ openAppointment, openServices }}>
      <div className="has-mobile-bar" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <UnifiedHeader onOpenAppointment={openAppointment} />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
        <MobileBottomBar onOpenServices={openServices} />
        <ServicesModal isOpen={servicesOpen} onClose={closeServices} />
        <AppointmentModal isOpen={appointmentOpen} onClose={closeAppointment} />
      </div>
    </UIContext.Provider>
  );
}
