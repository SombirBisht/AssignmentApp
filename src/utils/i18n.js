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
      en: {
        translation: {
          "Hello": "Hello",
          "Welcome": "Welcome",
          "Choose Language": "Choose Language",
          "login_form": "Login Form",
          "email": "Email",
          "please_enter_valid_email_address.": "Please enter a valid email address.",
          "password": "Password",
          "password_validation": 'Password must be 8-15 characters, include at least 1 uppercase letter, and 1 special character.',
          "submit": "Submit",
          "logout": "Logout",
          "avatarss": "Avatarss: The Way of Water",
          "maverick": "Top Gun: Maverick",
          "spider_man": "Spider-Man: No Way Home",
          "batman": "The Batman",
          "logout":"Logout"
        }
      },
      ar: {
        translation: {
          "Hello": "مرحبًا",
          "Welcome": "أهلاً وسهلاً",
          "Choose Language": "اختر اللغة",
          "login_form": "نموذج تسجيل الدخول",
          "email": "البريد الإلكتروني",
          "please_enter_valid_email_address.": "يرجى إدخال عنوان بريد إلكتروني صالح.",
          "password": "كلمة المرور",
          "password_validation": "يجب أن تتكون كلمة المرور من 8 إلى 15 حرفًا، وتحتوي على حرف كبير واحد على الأقل وحرف خاص واحد.",
          "submit": "إرسال",
          "logout": "تسجيل الخروج",
          "avatarss": "أفاتار: طريق الماء",
          "maverick": "توب غن: مافريك",
          "spider_man": "سبايدر مان: لا عودة إلى الوطن",
          "batman": "باتمان",
          "logout": "تسجيل الخروج"
        }
      },
    },
  });

export default i18n;