import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Database } from './types';
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://gmshdcvfdpyqtbjtlyrc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtc2hkY3ZmZHB5cXRianRseXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzODkyNjEsImV4cCI6MjA3ODk2NTI2MX0.VoIAK6EgGNq1ba8Wqiojr4nNCGs6gHLAUeV_OZ9F_IA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
