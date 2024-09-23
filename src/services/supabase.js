import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dbugystvatbaqlwcnnef.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRidWd5c3R2YXRiYXFsd2NubmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMzQyMDksImV4cCI6MjAzODgxMDIwOX0.IgdD0Di5HxTXMx0M-VHlN6y5Q9Xp-b2Gsug95bxHYH4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
