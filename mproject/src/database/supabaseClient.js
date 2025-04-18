// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://orlysaskqothrdhuptkp.supabase.co'; // 너의 Supabase 프로젝트 URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybHlzYXNrcW90aHJkaHVwdGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwNDIsImV4cCI6MjA1NTAwMTA0Mn0.06kedjSaEYJqf2ocMGsXgmmEh_38CkFWL_8CmL8MBdU'; // Supabase에서 발급한 익명 키

export const supabase = createClient(supabaseUrl, supabaseKey);