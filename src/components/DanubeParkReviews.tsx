'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function DanubeParkReviews() {
  const t = useTranslations('danubePark.reviews');
  const messages = useMessages() as any;
  const items = (messages?.danubePark?.reviews?.items || []) as Array<{
    name: string;
    date: string;
    rating: number;
    text: string;
  }>;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? '#f0b429' : 'none'}
        stroke="#f0b429"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 mx-auto" style={{ background: 'var(--accent)' }} />
        
        <p 
          className="text-center text-sm mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('declaration')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                      {item.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {item.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {renderStars(item.rating)}
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://maps.app.goo.gl/qdYkYweFBppxG6SM9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            {t('moreReviews')}
          </a>
        </div>
      </div>
    </section>
  );
}
