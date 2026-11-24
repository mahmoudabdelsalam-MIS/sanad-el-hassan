import React, { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Mail,
  Pencil,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";
import Button from "../../shared/button/Button";
import SectionHeading from "../../shared/heading/SectionHeading";
import CustomSelect from "../../shared/select/CustomSelect";

const SERVICE_OPTIONS = [
  "الاستشارات القانونية",
  "إعداد ومراجعة العقود",
  "المنازعات التجارية والتحكيم",
  "القضايا العقارية",
  "قضايا الأحوال الشخصية",
  "القضايا الجنائية",
  "تأسيس الشركات والحوكمة",
  "خدمات التوثيق",
];

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  serviceType: "",
  email: "",
  message: "",
};

const INPUT_BASE =
  "w-full rounded-xl bg-brand-cream/75 border border-brand-border px-4 pr-10 py-3 text-sm text-brand-ink placeholder:text-[#7A8884] focus:outline-none focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200";

export default function ContactForm({ className = "" }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(INITIAL_FORM);
  };

  return (
    <div
      className={`rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 shadow-[0_12px_32px_-16px_rgba(11,53,46,0.12)] flex flex-col justify-between ${className}`}
    >
      <div>
        <SectionHeading
          title="أرسل لنا رسالة"
          lineWidth="w-14 sm:w-16"
          className="mb-6"
        />

        {submitted && (
          <div
            role="status"
            className="mb-5 flex items-center gap-3 rounded-xl bg-brand-green/10 border border-brand-green/25 px-4 py-3 text-sm font-medium text-brand-green"
          >
            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
            <span>
              تم استلام رسالتك بنجاح، سيتواصل معك فريقنا القانوني في أقرب وقت.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="الاسم الكامل *"
                aria-label="الاسم الكامل"
                className={INPUT_BASE}
              />
            </div>

            <div className="relative">
              <Phone className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="رقم الجوال *"
                aria-label="رقم الجوال"
                className={INPUT_BASE}
              />
            </div>
          </div>

          {/* Row 2: Custom Service Dropdown & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomSelect
              options={SERVICE_OPTIONS}
              value={formData.serviceType}
              onChange={handleServiceChange}
              placeholder="نوع الخدمة المطلوبة *"
              icon={Briefcase}
              shape="box"
              ariaLabel="نوع الخدمة المطلوبة"
              required
            />

            <div className="relative">
              <Mail className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                aria-label="البريد الإلكتروني"
                className={INPUT_BASE}
              />
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div className="relative">
            <Pencil className="pointer-events-none absolute right-3.5 top-3.5 w-4 h-4 text-brand-gold" />
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="تفاصيل الاستفسار أو الطلب *"
              aria-label="تفاصيل الاستفسار أو الطلب"
              className={`${INPUT_BASE} resize-none`}
            />
          </div>

          {/* Bottom Row: Privacy Note & Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-brand-muted">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 stroke-[1.7]" />
              <span className="leading-snug">
                نلتزم بسرية معلوماتكم وخصوصيتها التامة.
              </span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              className="sm:min-w-[165px] shrink-0"
            >
              إرسال الطلب
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
