import { ImageResponse } from 'next/og';

export const alt = 'LUMINA Creative Group';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// To embed Plus Jakarta Sans without a network call:
// 1. Download PlusJakartaSans-ExtraBold.ttf from fonts.google.com
// 2. Place it at public/fonts/PlusJakartaSans-ExtraBold.ttf
// 3. Uncomment the font loading block below and the fonts option in ImageResponse

// import { readFileSync } from 'fs';
// import { join } from 'path';
// const font = readFileSync(join(process.cwd(), 'public/fonts/PlusJakartaSans-ExtraBold.ttf'));

export default function Image() {
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
        }}
      >
        {/* Top-left: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              background: '#0F172A',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: 800 }}>L</span>
          </div>
          <span style={{ fontSize: '26px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>
            LUMINA Creative Group
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: 1.05 }}>
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
        <span style={{ fontSize: '26px', color: '#64748B', fontWeight: 500, letterSpacing: '0.01em' }}>
          lumina-cg.com · Paris · Brazzaville
        </span>
      </div>
    ),
    {
      ...size,
      // fonts: [{ name: 'PlusJakartaSans', data: font, weight: 800, style: 'normal' }],
    },
  );
}
