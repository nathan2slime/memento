import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://eczedsktnfvnoixmrfec.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
