
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
        "טווינא (פיזיותרפיה סינית) היא שיטת עיסוי רפואי-ספורטיבי המבוצעת על מיטת טיפולים בלבוש מלא.",
        "הטיפול נועד לשחרר ביעילות שרירים תפוסים, להזרים דם וחמצן לרקמות ולשפר משמעותית את רמת האנרגיה והריכוז במהלך יום העבודה.",
        "בניגוד לעיסוי מערבי קלאסי, טווינא היא \"רפואית\" בטבעה – היא עובדת על עקרונות הרפואה הסינית המסורתית וזרימת האנרגיה בגוף."
      ]
    },
    about: {
      title: "אודות המטפל",
      content: [
        "נעים מאוד, אני מטפל ומאמן כושר אישי עם ניסיון של מעל 20 שנה.",
        "אני בוגר מכללת רידמן בחטיבה לרפואה סינית, ומשלב בעבודתי ידע עמוק באנטומיה יחד עם עקרונות הרפואה המסורתית.",
        "התמחות שלי מאפשרת לי להתאים כל טיפול באופן אישי לצרכי המטופל ולתוצאות מקסימליות."
      ]
    },
    benefits: {
      title: "באילו מקרים הטיפול מסייע?",
      items: [
        { title: "כאבי גב, שכמות וצוואר", description: "אידיאלי לעובדים בישיבה ממושכת מול מחשב" },
        { title: "כאבי ראש על רקע מתח", description: "שחרור שרירים תפוסים וצמצום מתחים" },
        { title: "דלקות בגידים ובשרירים", description: "טיפול יעיל בכאבים בעקבות עבודה קשה" },
        { title: "שדרוג הטיפול", description: "ניתן לשלב דיקור סיני כחלק מהטיפול להעצמת האפקט הטיפולי" }
      ]
    },
    service: {
      title: "השירות לחברות וארגונים",
      description: "אני מגיע עד למשרדי החברה עם מיטת טיפולים וציוד מקצועי מלא",
      features: [
        "פורמט הטיפול: מפגשים ממוקדים של כ-15 דקות לעובד",
        "התאמה אישית: הטיפול מותאם לבקשת המטופל",
        "ניידות מלאה: ציוד קל ונייד המותאם לסביבת משרד",
        "זמינות גמישה: התאמה ללוח הזמנים של החברה"
      ],
      clients: ["Sony", "DriveNets"]
    }
  }
};
