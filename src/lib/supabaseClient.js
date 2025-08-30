import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdhiqwamalvsctklugmm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaGlxd2FtYWx2c2N0a2x1Z21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NTcyMjMsImV4cCI6MjA3MjEzMzIyM30.a0RJXF-tJOtOKEuJiFJ16qtz9EMnkIq4gxvOIW8sFmU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
