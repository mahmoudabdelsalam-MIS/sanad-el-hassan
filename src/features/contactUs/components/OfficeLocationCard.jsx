import React from "react";
import { Map, MapPin } from "lucide-react";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=King+Fahd+Rd,+Al+Olaya,+Riyadh,+Saudi+Arabia";

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=46.6680%2C24.6950%2C46.6980%2C24.7180&layer=mapnik&marker=24.7065%2C46.6830";

export default function OfficeLocationCard({ className = "" }) {
  return (
    <article
      aria-label="موقع المكتب"
      className={`rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-6 shadow-[0_10px_28px_-16px_rgba(11,53,46,0.12)] flex flex-col justify-between ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch h-full">
        {/* Right side (RTL start): Office Address & Map Button */}
        <div className="sm:col-span-5 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0 stroke-[1.8]" />
              <h3 className="text-lg sm:text-xl font-bold text-brand-green">
                موقع المكتب
              </h3>
            </div>

            <address className="not-italic space-y-1.5 text-sm text-[#3F504C] leading-relaxed">
              <p className="font-semibold text-brand-ink">الرياض، حي العليا</p>
              <p>طريق الملك فهد، برج الأعمال</p>
              <p>الدور 15، مكتب رقم 1503</p>
            </address>
          </div>

          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-brand-cream border border-brand-border text-xs sm:text-sm font-semibold text-brand-green hover:bg-brand-sand hover:border-brand-gold/55 hover:text-brand-gold transition-all duration-300"
          >
            <Map className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
            <span>عرض الموقع على الخريطة</span>
          </a>
        </div>

        {/* Left side (RTL end): Styled Interactive Map Preview */}
        <div className="sm:col-span-7 relative min-h-[210px] sm:min-h-[235px] rounded-xl overflow-hidden border border-brand-border bg-[#EFEAE2]">
          <iframe
            title="موقع مكتب سند الحسن - الرياض حي العليا"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[210px] sm:min-h-[235px] border-0 sepia-[0.28] saturate-[0.75] contrast-[0.96] brightness-[1.03]"
          />

          {/* Subtle warm border sheen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand-green/10 rounded-xl"
          />
        </div>
      </div>
    </article>
  );
}
