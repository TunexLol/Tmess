// app.js — общий клиент Supabase для TMessenger
const SUPABASE_URL = 'https://zisxarczdlmjpwjopvfx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_p93tUTNtCHgrPQrMvDGF0w_1w5y0svy';

window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Вход по юзеру: "вася" -> "вася@tmessenger.local"
window.usernameToEmail = (u) => u.trim().toLowerCase() + '@tmessenger.com';
