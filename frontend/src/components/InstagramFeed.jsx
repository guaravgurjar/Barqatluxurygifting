import React, { useEffect, useState } from "react";
import { Instagram, ExternalLink } from "lucide-react";

const INSTAGRAM_HANDLE = "barqatluxurygifting";

/**
 * To activate the live Instagram feed:
 * 1. Go to https://elfsight.com
 * 2. Sign up free → search "Instagram Feed" → click "Use Free"
 * 3. Connect your @barqatluxurygifting Instagram account
 * 4. Customize the grid (3 columns, 6-9 posts looks great)
 * 5. Click "Add to website" → copy the App ID from the embed code
 *    e.g. if embed says: <div class="elfsight-app-abc12345-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
 *    your WIDGET_ID = "abc12345-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
 * 6. Replace the WIDGET_ID value below with your actual ID
 */
const WIDGET_ID = ""; // ← Paste your Elfsight widget ID here

const InstagramFeed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!WIDGET_ID) return;
    if (document.querySelector('script[src*="elfsight"]')) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  return (
    <section
      data-testid="instagram-section"
      className="py-20 lg:py-28 bg-[#1B1B1B] border-t border-[#3A3843]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
            Follow Our Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
            We're on Instagram
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
          >
            <Instagram size={16} />
            @{INSTAGRAM_HANDLE}
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Live Feed or Placeholder */}
        {WIDGET_ID ? (
          <div className="w-full">
            <div className={`elfsight-app-${WIDGET_ID}`} data-elfsight-app-lazy />
          </div>
        ) : (
          /* ── Setup Placeholder ──────────────────────────────── */
          <div className="border border-dashed border-[#3A3843] p-10 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center">
              <Instagram size={28} className="text-white" />
            </div>
            <h3 className="font-serif text-xl text-white mb-2">
              Activate Your Instagram Feed
            </h3>
            <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Follow these 3 quick steps to display your latest Instagram posts live on this page:
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto text-left">
              {[
                {
                  step: "01",
                  title: "Create free account",
                  desc: 'Go to elfsight.com → Sign up free → Search "Instagram Feed" → click Use Free',
                },
                {
                  step: "02",
                  title: "Connect Instagram",
                  desc: "Connect @barqatluxurygifting → choose grid layout → customize to your liking",
                },
                {
                  step: "03",
                  title: "Paste Widget ID",
                  desc: 'Click "Add to website" → copy the App ID from the embed code → share it with us',
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#2C2A33] border border-[#3A3843] p-5">
                  <div className="w-8 h-8 bg-[#D4AF37] text-[#1B1B1B] text-xs font-bold flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-white text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://elfsight.com/instagram-feed-widget/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] to-[#dc2743] text-white px-7 py-3.5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <Instagram size={16} />
              Set Up on Elfsight.com
              <ExternalLink size={13} />
            </a>
          </div>
        )}

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-follow-btn"
            className="inline-flex items-center gap-2 border border-[#3A3843] text-gray-300 px-7 py-3 text-sm uppercase tracking-widest font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            <Instagram size={15} />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
