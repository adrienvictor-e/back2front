import React, { useEffect, useState } from 'react';

function ThemeCard({ title, subtitle, htmlFile, pdfFile, downloadName, accentColor, accentBg, glowColor }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const baseWidth = 794;
  const baseHeight = 1123;

  useEffect(() => {
    const onResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const previewMaxWidth = 380;
  const previewVisibleBaseHeight = 430;
  const previewMaxHeight = 300;
  const previewScale = Math.min(previewMaxWidth / baseWidth, previewMaxHeight / previewVisibleBaseHeight);
  const previewWidth = Math.round(baseWidth * previewScale);
  const previewHeight = Math.round(previewVisibleBaseHeight * previewScale);

  const fullscreenScale = Math.min(
    (viewport.width * 0.94) / baseWidth,
    (viewport.height * 0.9) / baseHeight
  );
  const fullscreenWidth = Math.round(baseWidth * fullscreenScale);
  const fullscreenHeight = Math.round(baseHeight * fullscreenScale);

  return (
    <>
      <div
        style={{
          flex: '1 1 400px',
          maxWidth: '480px',
          boxSizing: 'border-box',
          borderRadius: '16px',
          padding: '14px',
          background: accentBg,
          boxShadow: isHover
            ? `0 24px 48px ${glowColor}`
            : '0 14px 26px rgba(0,0,0,0.35)',
          transition: 'all 0.22s ease'
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <div style={{
            color: accentColor,
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            {title}
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            marginTop: '2px'
          }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <a
            href={`${process.env.PUBLIC_URL}/${pdfFile}`}
            download={downloadName}
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              textDecoration: 'none',
              border: `1px solid ${accentColor}44`,
              borderRadius: '999px',
              padding: '6px 16px',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.03em',
              cursor: 'pointer'
            }}
          >
            Download PDF
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            border: `1px solid ${accentColor}55`,
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            padding: '10px',
            width: '100%',
            height: `${previewHeight + 20}px`,
            margin: '0 auto',
            transform: isHover ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.01)' : 'none',
            transition: 'transform 0.22s ease'
          }}
        >
          <div
            style={{
              width: `${previewWidth}px`,
              height: `${previewHeight}px`,
              overflow: 'hidden',
              position: 'relative',
              margin: '0 auto'
            }}
          >
            <iframe
              title={`${title} Preview`}
              src={`${process.env.PUBLIC_URL}/${htmlFile}`}
              style={{
                width: `${baseWidth}px`,
                height: `${baseHeight}px`,
                border: '0',
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `scale(${previewScale})`,
                transformOrigin: 'top left'
              }}
            />
          </div>
        </button>
      </div>

      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: `${fullscreenWidth}px`,
              height: `${fullscreenHeight}px`,
              position: 'relative'
            }}
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                border: '0',
                borderRadius: '6px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Close
            </button>
            <iframe
              title={`${title} Fullscreen`}
              src={`${process.env.PUBLIC_URL}/${htmlFile}`}
              style={{
                width: `${baseWidth}px`,
                height: `${baseHeight}px`,
                border: '0',
                borderRadius: '10px',
                backgroundColor: '#fff',
                transform: `scale(${fullscreenScale})`,
                transformOrigin: 'top left'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function CvThemes() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#0f1117' }}>
      <h1 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '6px', fontSize: '28px', letterSpacing: '0.02em' }}>
        CV Themes
      </h1>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', marginBottom: '10px', fontSize: '14px' }}>
        Click a preview to open fullscreen
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        padding: '0 24px 48px'
      }}>
        <ThemeCard
          title="Spy-Fi Lounge"
          subtitle="Cormorant Garamond + DM Sans / Gold accent"
          htmlFile="cv-lounge.html"
          pdfFile="cv-lounge-2026.pdf"
          downloadName="adrien-victor-cv-lounge-2026.pdf"
          accentColor="rgb(95, 255, 89)"
          accentBg="linear-gradient(135deg, rgba(1,51,170,0.7), rgba(0,0,0,0.2))"
          glowColor="rgba(1, 51, 170, 0.45)"
        />
        <ThemeCard
          title="Infograph"
          subtitle="Space Grotesk + Inter / Radar chart, timeline, domains"
          htmlFile="cv-infograph.html"
          pdfFile="cv-infograph-2026.pdf"
          downloadName="adrien-victor-cv-infograph-2026.pdf"
          accentColor="#ee6c4d"
          accentBg="linear-gradient(135deg, rgba(61,90,128,0.7), rgba(0,0,0,0.2))"
          glowColor="rgba(238, 108, 77, 0.25)"
        />
      </div>
    </div>
  );
}

export default CvThemes;
