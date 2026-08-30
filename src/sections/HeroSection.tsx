"use client";

import { motion } from "framer-motion";
import {
  FileCheck2,
  ArrowLeft,
  HelpCircle,
  Lock,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  return (
    <section
      aria-label="الرئيسية - تقديم الشكوى"
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32 border-b border-border/50"
    >
      {/* 1. خلفية الصورة مع طبقة الشفافية الداكنة لزيادة التباين */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/88.jpg"
          alt="خلفية منصة تجاوب"
          className="h-full w-full object-cover object-center"
        />
        
        {/* تغشية سوداء ناعمة بنسبة 60% لإبراز النصوص الفاتحة بالكامل */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        
        {/* تدرج عمودي يضمن وضوح المركز ويدمج أسفل الهيرو بسلاسة مع خلفية الموقع */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30" />
      </div>

      <div className="container-page relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* صورة اللوجو مع تحسين الأحجام والتمركز */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 flex justify-center items-center"
        >
          <img
            src="/hk.png"
            alt="احمِ حقوقك ووثّق شكواك"
            className="w-full max-w-[280px] sm:max-w-[450px] md:max-w-[580px] lg:max-w-[250px] h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* النص الوصفي مع تباين عالي */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-xl text-white leading-relaxed font-medium drop-shadow-md"
        >
          منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد.
        </motion.p>

        {/* الأزرار CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-xl bg-[#709a63] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-[#5f8d52] active:scale-[0.98]"
          >
            <FileCheck2 className="h-5 w-5 text-[#E6CA85]" />
            <span>تقديم شكوى الآن</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-white/40 bg-black/40 backdrop-blur-md px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-black/70 active:scale-[0.98]"
          >
            <HelpCircle className="h-4 w-4 text-white/90" />
            <span>كيف نعمل؟</span>
          </a>
        </motion.div>

        {/* شريط الضمانات بتباين واضح ومقروء */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/25 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-white drop-shadow-md"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#E6CA85]" />
            <span>خدمة مجانية بالكامل</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#E6CA85]" />
            <span>بدء المعالجة خلال 24 ساعة</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#E6CA85]" />
            <span>بيانات مشفّرة وآمنة</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}