import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'LUMINA Creative Group';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function loadWoff(filename: string): ArrayBuffer {
  const buf = readFileSync(
    join(process.cwd(), 'node_modules/@fontsource/plus-jakarta-sans/files', filename),
  );
  // Slice to own ArrayBuffer — Node Buffer may share an underlying pool
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export default function Image() {
  const pjs600 = loadWoff('plus-jakarta-sans-latin-600-normal.woff');
  const pjs800 = loadWoff('plus-jakarta-sans-latin-800-normal.woff');

  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 80px',
          justifyContent: 'space-between',
          fontFamily: '"Plus Jakarta Sans"',
        }}
      >
        {/* Top-left: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* LUMINA signe — exact app icon */}
          <svg width="56" height="56" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
            <rect width="48" height="48" rx="12" fill="#0F172A"/>
            <path d="M14.5 11v22.2h19" fill="none" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.6 17.6v-4.2M33.6 20.2l3-3M30.8 26.4h4.8" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '26px', fontWeight: 600, color: '#0F172A', letterSpacing: '-0.02em' }}>
            LUMINA Creative Group
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ fontSize: '96px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
            NOUS
          </span>
          <span style={{ fontSize: '96px', fontWeight: 800, color: '#2563EB', letterSpacing: '-0.03em' }}>
            CONSTRUISONS
          </span>
          <span style={{ fontSize: '72px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em' }}>
            VOS OUTILS NUMÉRIQUES
          </span>
        </div>

        {/* Bottom: URL + locations */}
        <span style={{ fontSize: '26px', color: '#64748B', fontWeight: 600, letterSpacing: '0.01em' }}>
          lumina-cg.com · Paris · Brazzaville
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Plus Jakarta Sans', data: pjs600, weight: 600, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: pjs800, weight: 800, style: 'normal' },
      ],
    },
  );
}
