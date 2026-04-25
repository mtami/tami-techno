import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      letsTalk: "Let's talk",
    },
    hero: {
      badge: "Available for new opportunities",
      title: "Mohammad Tami",
      subtitle: "Software Developer · Web Development",
      description:
        "Specialized in scalable systems, multi-tenant architectures, and AI-powered applications.",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    about: {
      label: "About",
      heading: "Building software that scales.",
      bodyPre: "I'm a software developer focused on building scalable web applications using ",
      techStack: "Python, JavaScript, React, PostgreSQL, MongoDB, Redis, and AWS",
      bodyPost:
        ". I work across the full stack — from system design and architecture to production deployment — with a focus on reliability, performance, and developer experience.",
    },
    skills: {
      label: "Skills",
      heading: "Tools & Technologies",
    },
    projects: {
      label: "Projects",
      heading: "Selected Work",
      subheading: "A look at the systems I've designed and shipped.",
      problem: "Problem",
      solution: "Solution",
      impact: "Impact",
      items: [
        {
          title: "Multi-Tenant E-Learning Platform",
          tag: "Full-Stack · AWS · Architecture",
          problem:
            "International clients needed a scalable e-learning solution with strict data isolation across organizations.",
          solution:
            "Designed a multi-tenant architecture with isolated tenant data within a shared database, full-stack implementation, and AWS deployment.",
          impact: "Reached 100,000 monthly active users in the first year.",
        },
        {
          title: "AI-Powered Fundraising Platform",
          tag: "GenAI · Semantic Search · Caching",
          problem:
            "Entrepreneurs and VCs needed a smarter way to discover relevant matches at scale, while AI inference costs ballooned.",
          solution:
            "Co-developed the platform, integrated GenAI-powered semantic search, and built a caching layer to optimize inference cost.",
          impact: "Reduced AI inference cost by 40%.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's build something together.",
      subheading: "Got a project in mind or just want to say hi? My inbox is open.",
      email: "Email",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React & TanStack Start.",
    },
  },
  ar: {
    nav: {
      about: "عن",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "التواصل",
      letsTalk: "تواصل معي",
    },
    hero: {
      badge: "متاح لفرص جديدة",
      title: "محمد تميّ",
      subtitle: "مطور برمجيات · تطوير الويب",
      description:
        "متخصص في الأنظمة القابلة للتوسع، والمعمارية متعددة المستأجرين، والتطبيقات المدعومة بالذكاء الاصطناعي.",
      viewProjects: "عرض المشاريع",
      contact: "تواصل",
    },
    about: {
      label: "عن",
      heading: "بناء برمجيات قابلة للتوسع.",
      bodyPre: "أنا مطور برمجيات متخصص في بناء تطبيقات ويب قابلة للتوسع باستخدام ",
      techStack: "Python وJavaScript وReact وPostgreSQL وMongoDB وRedis وAWS",
      bodyPost:
        ". أعمل عبر كامل المكدس — من تصميم الأنظمة والمعمارية إلى النشر في بيئة الإنتاج — مع التركيز على الموثوقية والأداء وتجربة المطور.",
    },
    skills: {
      label: "المهارات",
      heading: "الأدوات والتقنيات",
    },
    projects: {
      label: "المشاريع",
      heading: "أعمال مختارة",
      subheading: "نظرة على الأنظمة التي صممتها وأطلقتها.",
      problem: "المشكلة",
      solution: "الحل",
      impact: "الأثر",
      items: [
        {
          title: "منصة تعليم إلكتروني متعددة المستأجرين",
          tag: "فل ستاك · AWS · هندسة البرمجيات",
          problem:
            "احتاج العملاء الدوليون إلى حل تعليمي إلكتروني قابل للتوسع مع عزل صارم للبيانات عبر المؤسسات.",
          solution:
            "صممت معمارية متعددة المستأجرين مع عزل بيانات المستأجرين داخل قاعدة بيانات مشتركة، وتطبيق كامل المكدس، ونشر على AWS.",
          impact: "وصلت إلى 100,000 مستخدم نشط شهرياً في السنة الأولى.",
        },
        {
          title: "منصة جمع التبرعات المدعومة بالذكاء الاصطناعي",
          tag: "ذكاء اصطناعي توليدي · بحث دلالي · تخزين مؤقت",
          problem:
            "احتاج رواد الأعمال والمستثمرون إلى طريقة أذكى لاكتشاف التطابقات ذات الصلة على نطاق واسع، بينما كانت تكاليف استنتاج الذكاء الاصطناعي تتضخم.",
          solution:
            "شاركت في تطوير المنصة، ودمجت البحث الدلالي المدعوم بالذكاء الاصطناعي التوليدي، وبنيت طبقة تخزين مؤقت لتحسين تكلفة الاستنتاج.",
          impact: "خفضت تكلفة استنتاج الذكاء الاصطناعي بنسبة 40٪.",
        },
      ],
    },
    contact: {
      label: "التواصل",
      heading: "لنبني شيئاً معاً.",
      subheading: "لديك مشروع في ذهنك أو تريد فقط قول مرحبا؟ بريدي الإلكتروني مفتوح.",
      email: "البريد الإلكتروني",
      linkedin: "لينكدإن",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      builtWith: "مبني بـ React و TanStack Start.",
    },
  },
} as const;

type Translations = typeof translations.en;

interface LangContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as Translations, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
