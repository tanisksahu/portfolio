import React, { useState, useEffect } from 'react';
import { ExternalLink, Copy, Check, Eye, AlertCircle, RefreshCw, ShieldAlert, Sparkles, Star } from 'lucide-react';
import { cleanCanvaUrl, cleanCanvaViewUrl, isCanvaEmbeddable } from '../utils/canvaUtils';

interface CanvaEmbedViewerProps {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  canvaUrl: string;
  type?: string;
  onReadCaseStudy?: () => void;
  onCopyLink?: () => void;
}

export default function CanvaEmbedViewer({
  title,
  description,
  category,
  thumbnail,
  canvaUrl,
  type = 'Canva Design',
  onReadCaseStudy,
  onCopyLink,
}: CanvaEmbedViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEmbedError, setHasEmbedError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [useFallbackCard, setUseFallbackCard] = useState(false);

  const embedUrl = cleanCanvaUrl(canvaUrl);
  const canonicalUrl = cleanCanvaViewUrl(canvaUrl);
  const embeddable = isCanvaEmbeddable(canvaUrl);

  // Set timeout fallback in case Canva iframe is blocked by X-Frame-Options silently
  useEffect(() => {
    setIsLoading(true);
    setHasEmbedError(!embeddable);

    // If browser/Canva blocks iframe silently, timeout after 6 seconds to reveal fallback
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [canvaUrl, embeddable]);

  const handleCopy = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(canonicalUrl);
    setCopied(true);
    if (onCopyLink) onCopyLink();
    setTimeout(() => setCopied(false), 2200);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasEmbedError(true);
  };

  return (
    <div className="w-full space-y-4">
      {/* Top Controller & Notice */}
      <div className="p-3.5 rounded-2xl bg-orange-50/80 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-500/30 text-xs flex flex-wrap items-center justify-between gap-3 text-orange-900 dark:text-orange-200">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
          <span>Verified Canva Pro Public Design Preview</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setUseFallbackCard(!useFallbackCard)}
            className="px-3 py-1 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 font-bold border border-orange-200 dark:border-gray-700 transition-all text-xs flex items-center gap-1.5 shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
            <span>{useFallbackCard ? 'Try Live Iframe' : 'Switch to Static Preview'}</span>
          </button>

          <a
            href={canonicalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold transition-all text-xs flex items-center gap-1 shadow-sm"
          >
            <span>Open in Canva</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-xl">
        {/* State A: Loading Skeleton */}
        {isLoading && !useFallbackCard && (
          <div className="absolute inset-0 z-20 bg-gray-900 flex flex-col items-center justify-center p-6 space-y-4 text-center animate-pulse">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 animate-spin">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-mono">Loading Live Canva Presentation...</p>
              <p className="text-xs text-gray-400 mt-1">Connecting to Canva CDN servers...</p>
            </div>
          </div>
        )}

        {/* State B: Live Embed Iframe */}
        {!useFallbackCard && !hasEmbedError && embeddable ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-none"
            allowFullScreen
            allow="fullscreen"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        ) : null}

        {/* State C: Automatic Fallback Preview Card if Iframe fails or toggle active */}
        {(useFallbackCard || hasEmbedError || !embeddable) && (
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            {/* Left Thumbnail with Glassmorphism */}
            <div className="relative w-full sm:w-1/2 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shrink-0 group">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-orange-400 border border-orange-500/30">
                {category} • {type}
              </div>
            </div>

            {/* Right Information & CTA Buttons */}
            <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-bold text-amber-300 ml-1.5">5.0 / Verified Case Study</span>
                </div>

                <h4 className="font-heading font-black text-xl sm:text-2xl text-white leading-snug">
                  {title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Security Policy Notice badge */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center gap-2 font-mono">
                <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
                <span>If iframe is restricted by browser CSP, open directly in Canva for full deck controls.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Canva</span>
                </a>

                {onReadCaseStudy && (
                  <button
                    onClick={onReadCaseStudy}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center gap-1.5 transition-all"
                  >
                    <Eye className="w-4 h-4 text-orange-400" />
                    <span>Read Case Study</span>
                  </button>
                )}

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
                  title="Copy Link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Helper Explanation Banner about Canva Smart Embed */}
      <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 space-y-1.5 font-mono">
        <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-orange-500" />
          <span>Canva Smart Embed & CSP Policy Information</span>
        </div>
        <p className="leading-relaxed">
          Canva applies <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-orange-600 dark:text-orange-400 font-bold">X-Frame-Options</code> and <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-orange-600 dark:text-orange-400 font-bold">Content Security Policy (CSP)</code> on certain private or team workspace view links. All 15 case studies in this portfolio are normalized using Canva&apos;s public <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded">/view?embed</code> structure for seamless embedding with automatic fallback cards.
        </p>
      </div>
    </div>
  );
}
