
import { DesignTheme, DesignVibe, LandingContent } from './types';

export const DEFAULT_THEME: DesignTheme = {
  primaryColor: '#4f7c7b', // Sage Green
  backgroundColor: '#fdfbf9', // Creamy white
  cardBackground: '#ffffff',
  textColor: '#2d3748',
  accentColor: '#8fb4b3',
  borderRadius: 'rounded-3xl',
  fontFamily: 'font-sans',
  buttonClasses: 'bg-[#4f7c7b] hover:bg-[#3d605f] text-white shadow-xl shadow-sage-200',
  heroGradient: 'from-[#f3efea] to-[#fdfbf9]',
  vibe: DesignVibe.DEFAULT
};

export const TUINA_CONTENT: LandingContent = {
  brand: {
    name: "כפיר בן גליל",
    title: "טווינא עד המשרד",
    phone: "054-7768474"
  },
  sections: {
    what: {
      title: "מה זו טווינא?",
      content: [
        "טווינא היא שיטת עיסוי רפואי-ספורטיבי המבוצעת על מיטת טיפולים <span style='color: #dc2626;'>בלבוש מלא</span>."
      ],
      content2: [
        "הטיפול משחרר ביעילות שרירים תפוסים, מזרים דם וחמצן לרקמות <span style='color: #dc2626;'>ומשפר משמעותית</span> את רמת האנרגיה והתפקוד במהלך יום העבודה."
      ]
    },
    about: {
      title: "מי אני?",
      content: [
        "שמי כפיר, בוגר מכללת רידמן ומכללת ווינגייט, מטפל ברפואה משלימה ומאמן כושר עם <span style='color: #dc2626;'>ניסיון של למעלה מ 20 שנה</span>. אני מגיע למשרדי חברות עם מיטת הטיפולים ומעביר סדרות של טיפולים קצרים לעובדים בין אם זה טיפול כללי לגוף ונפש ובין אם טיפול ממוקד לפי בקשת העובד."
      ]
    },
    benefits: {
      title: "באילו מקרים הטיפול מסייע?",
      items: [
        { title: "כאבי גב, שכמות וצוואר", description: "אידיאלי לעובדים בישיבה ממושכת מול מחשב" },
        { title: "כאבי ראש על רקע מתח", description: "שחרור שרירים כואבים והורדת מתח נפשי" },
        { title: "דלקות בגידים ובמפרקים", description: "טיפול יעיל בכאבים בעקבות עבודה קשה" }
      ]
    },
    service: {
      title: "השירות לחברות וארגונים",
      description: "אני מגיע עד למשרדי החברה עם מיטת טיפולים וציוד מקצועי מלא",
      features: [
        "<strong>פורמט הטיפול:</strong> מפגשים ממוקדים של כ-15 דקות לעובד",
        "<strong>התאמה אישית:</strong> הטיפול מותאם לבקשת המטופל",
        "<strong>ניידות מלאה:</strong> ציוד קל ונייד המותאם לסביבת משרד",
        "<strong>זמינות גמישה:</strong> התאמה ללוח הזמנים של החברה"
      ],
      clients: ["Sony", "DriveNets"]
    }
  }
};
