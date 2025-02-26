import React, { useEffect, useState } from 'react';
// import { supabase } from './supabaseClient'; // Adjust the import path
import { Session } from '@supabase/supabase-js'; // Import Session type
import { createClient } from '@/utils/supabase/client';

export const AuthListenerComponent: React.FC = () => {
  const [user, setUser] = useState<Session['user'] | null>(null);
  const supabase = createClient()

  useEffect(() => {
    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        console.log('User signed in:', session.user);
        alert('User signed in')
        setUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out');
        alert('User signed out')
        setUser(null);
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <></>
  );
};

export default AuthListenerComponent;