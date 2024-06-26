import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from '../utils/env';

const SUPABASE_URL: string = env.SUPABASE_URL;
const SUPABASE_KEY: string = env.SUPABASE_KEY;
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase;
