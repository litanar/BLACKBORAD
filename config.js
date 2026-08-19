// ============================================
// فایل تنظیمات امن - رمز به صورت هش شده ذخیره می‌شود
// ============================================

const CONFIG = {
   
    ADMIN_PASSWORD_HASH: '3300ca67e0e7b51506f878aa36c6ea51100830158f3236b69c57805792d7dff5',
    
    // سایر تنظیمات امنیتی
    ADMIN_TITLE: 'مدیر داروخانه',
    SESSION_TIMEOUT: 30, // دقیقه - بعد از این مدت بی‌حرکتی، خارج می‌شود
    MAX_LOGIN_ATTEMPTS: 5, // حداکثر تلاش برای ورود
    LOCKOUT_DURATION: 5, // دقیقه قفل شدن بعد از تلاش‌های ناموفق

    // ===== تنظیمات فایربیس (Firebase Realtime Database) =====
    firebaseConfig: {
        apiKey: "AIzaSyBBrdeSQOpTVCUWXXmibAvlkDZfXVNlNF8",
        authDomain: "pharmacy-board-e264f.firebaseapp.com",
        databaseURL: "https://pharmacy-board-e264f-default-rtdb.firebaseio.com",
        projectId: "pharmacy-board-e264f",
        storageBucket: "pharmacy-board-e264f.firebasestorage.app",
        messagingSenderId: "579675769857",
        appId: "1:579675769857:web:3bdb5c333bb401ee860400"
    }
};
