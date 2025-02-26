import { useEffect, useState } from "react";
import { AuthContext, supabase } from "./client";
import { Session } from "@supabase/supabase-js";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Session['user'] | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Track loading state
  
    useEffect(() => {
      // Fetch the initial session
      const fetchSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setUser(session.user);
        }
        setIsLoading(false); // Set loading to false after fetching the session
      };
  
      fetchSession();
  
      // Subscribe to auth state changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
          setUser(session.user);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
      });
  
      // Cleanup function to unsubscribe when the component unmounts
      return () => {
        if (subscription) {
          subscription.unsubscribe();
        }
      };
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, isLoading }}>
        {children}
      </AuthContext.Provider>
    //   <AuthContext
    );
  };
  