// Performance monitoring utilities for Core Web Vitals
export interface PerformanceMetrics {
  fcp?: number;  // First Contentful Paint
  lcp?: number;  // Largest Contentful Paint
  fid?: number;  // First Input Delay
  cls?: number;  // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

// Extend PerformanceEntry for specific entry types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Simplified Web Vitals tracking
export const trackWebVitals = (onPerfEntry?: (metric: PerformanceMetrics) => void) => {
  if (!onPerfEntry || typeof window === 'undefined') return;

  // Track FCP (First Contentful Paint)
  const trackFCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          onPerfEntry({ fcp: entry.startTime });
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });
  };

  // Track LCP (Largest Contentful Paint)
  const trackLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      onPerfEntry({ lcp: lastEntry.startTime });
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  };

  // Track FID (First Input Delay)
  const trackFID = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const eventEntry = entry as PerformanceEventTiming;
        const fid = eventEntry.processingStart - eventEntry.startTime;
        onPerfEntry({ fid });
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
  };

  // Track CLS (Cumulative Layout Shift)
  const trackCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutEntry = entry as LayoutShiftEntry;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
          onPerfEntry({ cls: clsValue });
        }
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  };

  // Track TTFB (Time to First Byte)
  const trackTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      onPerfEntry({ ttfb });
    }
  };

  // Initialize tracking
  if ('PerformanceObserver' in window) {
    try {
      trackFCP();
      trackLCP();
      trackFID();
      trackCLS();
      trackTTFB();
    } catch (error) {
      console.warn('Performance tracking error:', error);
    }
  }
};

// Image loading optimization
export const optimizeImageLoading = () => {
  // Add intersection observer for lazy loading if native loading="lazy" isn't supported
  if (!('loading' in HTMLImageElement.prototype)) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/hero-image.webp', as: 'image', type: 'image/webp' },
    { href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap', as: 'style' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    document.head.appendChild(link);
  });
};

// Resource hints for better performance
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Performance analytics (simple implementation)
export const sendPerformanceMetrics = (metrics: PerformanceMetrics) => {
  // In a real app, you'd send this to your analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metrics:', {
      FCP: metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A',
      LCP: metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A',
      FID: metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A',
      CLS: metrics.cls ? metrics.cls.toFixed(3) : 'N/A',
      TTFB: metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'
    });
  }

  // Example: Send to analytics service
  // analytics.track('web_vitals', metrics);
}; 