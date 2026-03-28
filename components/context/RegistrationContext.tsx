"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface RegistrationContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <RegistrationContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </RegistrationContext.Provider>
    );
}

export function useRegistration() {
    const context = useContext(RegistrationContext);
    if (context === undefined) {
        throw new Error("useRegistration must be used within a RegistrationProvider");
    }
    return context;
}
