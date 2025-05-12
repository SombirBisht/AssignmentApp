import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en', // Default language (e.g., English)
    fallbackLng: 'en', // Fallback language if translation is missing
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    resources: {
      en: { // English translations
        translation: {
          "login_form": "Login Form",
          "email": "Email",
          "please_enter_valid_email_address.": "Please enter a valid email address.",
          "password": "Password",
          "password_validation": "Password must be 8-15 characters, include at least 1 uppercase letter, and 1 special character.",
          "submit": "Submit",
          "avatarss": "Avatarss: The Way of Water",
          "maverick": "Top Gun: Maverick",
          "spider_man": "Spider-Man: No Way Home",
          "batman": "The Batman",
          "description_text": "The description text",
          "logout": "Logout",
          "cancel": "Cancel",
          "sure_to_logout": "Are you sure to logout the application?",
          "login": "Login",
          "about_screen": "About description",
          "notification_screen": "Notification description",
          "change_language_screen": "Change Language description",
          "home": "Home",
          "notification": "Notification",
          "change_language": "Change Language",
          "about": "About"
        }
      },
      ar: { // Arabic translations
        translation: {
          "login_form": "نموذج تسجيل الدخول",
          "email": "البريد الإلكتروني",
          "please_enter_valid_email_address.": "يرجى إدخال عنوان بريد إلكتروني صالح.",
          "password": "كلمة المرور",
          "password_validation": "يجب أن تتكون كلمة المرور من 8 إلى 15 حرفًا، وتحتوي على حرف كبير واحد على الأقل، وحرف خاص واحد على الأقل.",
          "submit": "إرسال",
          "avatarss": "أفاتار: طريق المياه",
          "maverick": "توب غان: مافريك",
          "spider_man": "سبايدر مان: لا طريق للمنزل",
          "batman": "باتمان",
          "description_text": "نص الوصف",
          "logout": "تسجيل الخروج",
          "cancel": "إلغاء",
          "sure_to_logout": "هل أنت متأكد أنك تريد تسجيل الخروج من التطبيق؟",
          "login": "تسجيل الدخول",
          "about_screen": "وصف الشاشة",
          "notification_screen": "وصف الإشعارات",
          "change_language_screen": "وصف تغيير اللغة",
          "home": "الصفحة الرئيسية",
          "notification": "الإشعارات",
          "change_language": "تغيير اللغة",
          "about": "حول"
        },
      },
    },
  });

export default i18n;