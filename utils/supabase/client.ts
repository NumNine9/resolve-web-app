import { createBrowserClient } from '@supabase/ssr'
import React, { createContext, useContext, useEffect, useState } from 'react';
// import { supabase } from './supabaseClient'; // Adjust the import path
import { Session } from '@supabase/supabase-js';

// Define the shape of the context
type AuthContextType = {
  user: Session['user'] | null;
  isLoading: boolean;
};

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
export const supabase = createClient()

