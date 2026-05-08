'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function DanubeParkPracticalInfo() {
  const t = useTranslations('danubePark.info');
  const messages = useMessages() as any;
  const sections = (messages?.danubePark?.info?.sections || []) as Array<{ id: string; title: string; content: string }>;

  if (sections.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="rounded-xl p-6 sm:p-8"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <h3
                className="font-display text-xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h3>
              <p
                className="text-base leading-relaxed whitespace-pre-wrap"
                style={{ color: 'var(--text-secondary)' }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
