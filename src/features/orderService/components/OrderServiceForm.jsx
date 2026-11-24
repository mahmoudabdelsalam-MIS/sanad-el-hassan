import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Mail,
  MapPin,
  Paperclip,
  Pencil,
  Phone,
  Send,
  User,
  X,
} from "lucide-react";
import Button from "../../shared/button/Button";
import SectionHeading from "../../shared/heading/SectionHeading";
import CustomSelect from "../../shared/select/CustomSelect";

const SERVICE_OPTIONS = [
  "الاستشارات القانونية",
  "إعداد ومراجعة العقود",
  "فض المنازعات والدعاوى",
  "الترافع أمام الجهات القضائية",
  "الخدمات القانونية للشركات",
  "القضايا الشخصية والأحوال",
  "القضايا العقارية",
  "المطالبات المالية",
  "تأسيس الشركات",
  "العمل ونظام العمل",
  "الامتثال والحوكمة",
  "التصفية وإعادة الهيكلة",
  "القضايا الجنائية",
  "خدمات التوثيق",
];

const CITY_OPTIONS = [
  "الرياض",
  "جدة",
  "الدمام",
  "الخبر",
  "مكة المكرمة",
  "المدينة المنورة",
  "أبها",
  "تبوك",
  "القصيم",
  "الأحساء",
  "مدينة أخرى",
];

const APPLICANT_TYPES = [
  { value: "individual", label: "فرد" },
  { value: "company", label: "شركة / منشأة" },
];

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

const INITIAL_FORM = {
  serviceType: "",
  applicantType: "individual",
  fullName: "",
  phone: "",
  email: "",
  city: "",
  details: "",
};

const LABEL_CLASS = "block text-xs sm:text-[13px] font-bold text-brand-green mb-2";

const INPUT_CLASS =
  "w-full rounded-xl bg-brand-cream/75 border border-brand-border pr-10 pl-4 py-3 text-sm text-brand-ink placeholder:text-[#7A8884] focus:outline-none focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200";

export default function OrderServiceForm({
  selectedService,
  onServiceChange,
}) {
  const [formData, setFormData] = useState({
    ...INITIAL_FORM,
    serviceType: selectedService || "",
  });
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  const [submittedRef, setSubmittedRef] = useState("");
  const fileInputRef = useRef(null);

  // Sync when user clicks a service from the sidebar or arrives with ?service=
  useEffect(() => {
    if (selectedService && selectedService !== formData.serviceType) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submittedRef) setSubmittedRef("");
  };

  const handleServiceSelect = (value) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
    onServiceChange?.(value);
    if (submittedRef) setSubmittedRef("");
  };

  const handleCitySelect = (value) => {
    setFormData((prev) => ({ ...prev, city: value }));
    if (submittedRef) setSubmittedRef("");
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    setFileError("");

    const validFiles = [];
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        setFileError(`الملف "${file.name}" يتجاوز الحد الأقصى المسموح به (10 ميجابايت).`);
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      setAttachedFiles((prev) => [...prev, ...validFiles]);
    }
    event.target.value = "";
  };

  const handleRemoveFile = (indexToRemove) => {
    setAttachedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const refNumber = `SH-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refNumber);
    setFormData(INITIAL_FORM);
    setAttachedFiles([]);
    setFileError("");
    onServiceChange?.("");
  };

  return (
    <div className="rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-8 shadow-[0_12px_32px_-16px_rgba(11,53,46,0.12)]">
      <SectionHeading
        title="بيانات طلب الخدمة"
        lineWidth="w-12 sm:w-16"
        className="mb-6"
      />

      {submittedRef && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-xl bg-brand-green/10 border border-brand-green/25 px-4 py-3.5 text-sm text-brand-green"
        >
          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold">
              تم استلام طلبك بنجاح (رقم المرجع:{" "}
              <span dir="ltr">{submittedRef}</span>)
            </p>
            <p className="text-xs sm:text-sm text-[#354642]">
              سيقوم فريقنا القانوني بمراجعة تفاصيل طلبك والتواصل معك خلال أقرب
              وقت ممكن.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Service Type & Applicant Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={LABEL_CLASS}>
              نوع الخدمة القانونية <span className="text-brand-gold">*</span>
            </label>
            <CustomSelect
              options={SERVICE_OPTIONS}
              value={formData.serviceType}
              onChange={handleServiceSelect}
              placeholder="اختر نوع الخدمة"
              icon={Briefcase}
              shape="box"
              ariaLabel="نوع الخدمة القانونية"
              required
            />
          </div>

          <div>
            <span className={LABEL_CLASS}>
              صفة مقدم الطلب <span className="text-brand-gold">*</span>
            </span>
            <div className="grid grid-cols-2 gap-3">
              {APPLICANT_TYPES.map((type) => {
                const isSelected = formData.applicantType === type.value;
                return (
                  <label
                    key={type.value}
                    className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isSelected
                        ? "bg-white border-brand-gold text-brand-green shadow-[0_4px_12px_-6px_rgba(166,124,82,0.3)]"
                        : "bg-brand-cream/75 border-brand-border text-[#4A5B57] hover:bg-white hover:border-brand-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="applicantType"
                      value={type.value}
                      checked={isSelected}
                      onChange={handleFieldChange}
                      className="sr-only"
                    />
                    <span
                      className={`inline-flex items-center justify-center w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${
                        isSelected
                          ? "border-brand-gold"
                          : "border-[#9AA7A3]"
                      }`}
                    >
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      )}
                    </span>
                    <span className="truncate">{type.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 2: Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="order-fullName" className={LABEL_CLASS}>
              {formData.applicantType === "company"
                ? "اسم المنشأة أو المفوض"
                : "الاسم الكامل"}{" "}
              <span className="text-brand-gold">*</span>
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                id="order-fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleFieldChange}
                required
                placeholder={
                  formData.applicantType === "company"
                    ? "أدخل اسم الشركة أو المفوض"
                    : "أدخل الاسم الكامل"
                }
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label htmlFor="order-phone" className={LABEL_CLASS}>
              رقم الجوال <span className="text-brand-gold">*</span>
            </label>
            <div className="relative">
              <Phone className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                id="order-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFieldChange}
                required
                placeholder="05XXXXXXXX"
                className={INPUT_CLASS}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Email & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="order-email" className={LABEL_CLASS}>
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input
                id="order-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFieldChange}
                placeholder="example@domain.com"
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label className={LABEL_CLASS}>المدينة</label>
            <CustomSelect
              options={CITY_OPTIONS}
              value={formData.city}
              onChange={handleCitySelect}
              placeholder="اختر المدينة"
              icon={MapPin}
              shape="box"
              ariaLabel="المدينة"
            />
          </div>
        </div>

        {/* Row 4: Request Details */}
        <div>
          <label htmlFor="order-details" className={LABEL_CLASS}>
            تفاصيل الطلب <span className="text-brand-gold">*</span>
          </label>
          <div className="relative">
            <Pencil className="pointer-events-none absolute right-3.5 top-3.5 w-4 h-4 text-brand-gold" />
            <textarea
              id="order-details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleFieldChange}
              required
              placeholder="اشرح موضوعك أو الخدمة المطلوبة بإيجاز..."
              className={`${INPUT_CLASS} resize-none`}
            />
          </div>
        </div>

        {/* Row 5: Optional Document Attachment + Submit Button */}
        <div className="pt-2 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* File Attachment Trigger + Hint */}
            <div className="flex flex-wrap items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="sr-only"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cream border border-brand-border text-xs sm:text-sm font-semibold text-brand-green hover:bg-brand-sand hover:border-brand-gold/55 hover:text-brand-gold transition-all duration-200 cursor-pointer"
              >
                <Paperclip className="w-4 h-4 text-brand-gold shrink-0" />
                <span>إرفاق مستندات (اختياري)</span>
              </button>
              <span className="text-[11px] sm:text-xs text-brand-muted">
                PDF, JPG, PNG (بحد أقصى 10 ميجابايت)
              </span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              className="w-full sm:w-auto sm:min-w-[180px]"
            >
              إرسال الطلب
            </Button>
          </div>

          {fileError && (
            <p className="text-xs font-medium text-red-700">{fileError}</p>
          )}

          {attachedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {attachedFiles.map((file, idx) => (
                <span
                  key={`${file.name}-${idx}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-sand/85 border border-brand-border text-xs font-medium text-brand-green"
                >
                  <Paperclip className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="max-w-[180px] truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(idx)}
                    aria-label={`إزالة ${file.name}`}
                    className="text-brand-muted hover:text-red-700 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
