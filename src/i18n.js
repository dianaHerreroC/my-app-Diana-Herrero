import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enAboutMe from "./data/english/aboutMe.json"
import enSkills from "./data/english/skills.json"
import enContact from "./data/english/contact.json"
import enEducation from "./data/english/education.json"
import enWorkHistory from "./data/english/workHistory.json"
import enPageText from "./data/english/pageText.json"
import esAboutMe from "./data/spanish/aboutMe.json"
import esSkills from "./data/spanish/skills.json"
import esContact from "./data/spanish/contact.json"
import esEducation from "./data/spanish/education.json"
import esWorkHistory from "./data/spanish/workHistory.json"
import esPageText from "./data/spanish/pageText.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        aboutMe: enAboutMe,
        skills: enSkills,
        contact: enContact,
        education: enEducation,
        workHistory: enWorkHistory,
        pageText: enPageText
      },
      es: {
        aboutMe: esAboutMe,
        skills: esSkills,
        contact: esContact,
        education: esEducation,
        workHistory: esWorkHistory,
        pageText: esPageText
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["aboutMe", "skills", "contact", "education", "workHistory", "pageText"],
    defaultNS: "aboutMe",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;