import React, { useEffect, useState } from 'react';

function CvInfograph() {
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

  const previewMaxWidth = 460;
  const previewVisibleBaseHeight = 430;
  const previewMaxHeight = 340;
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
    <div style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#1a1f2e' }}>
      <h1 style={{ textAlign: 'center', color: '#ee6c4d', marginBottom: '12px' }}>
        CV Infograph Theme
      </h1>
      <p style={{ textAlign: 'center', color: '#8d99ae', marginBottom: '16px' }}>
        Click the preview to open fullscreen.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
        <a
          href={`${process.env.PUBLIC_URL}/cv-adrien-victor-2026.pdf`}
          download="adrien-victor-cv-2026.pdf"
          style={{
            display: 'inline-block',
            backgroundColor: '#3d5a80',
            color: '#ffffff',
            textDecoration: 'none',
            border: '1px solid rgba(238, 108, 77, 0.65)',
            borderRadius: '999px',
            padding: '10px 18px',
            fontWeight: 600,
            letterSpacing: '0.03em',
            cursor: 'pointer'
          }}
        >
          Download PDF
        </a>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 12px 32px' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '560px',
            boxSizing: 'border-box',
            borderRadius: '16px',
            padding: '14px',
            background: 'linear-gradient(135deg, rgba(61,90,128,0.7), rgba(0,0,0,0.2))',
            boxShadow: isHover ? '0 24px 48px rgba(238, 108, 77, 0.25)' : '0 14px 26px rgba(0,0,0,0.35)',
            transition: 'all 0.22s ease'
          }}
        >
          <div
            style={{
              textAlign: 'right',
              color: '#ee6c4d',
              marginBottom: '10px',
              fontSize: '13px',
              letterSpacing: '0.08em',
              opacity: 0.85
            }}
          >
            CLICK TO EXPAND
          </div>

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              border: '1px solid rgba(238, 108, 77, 0.6)',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              padding: '10px',
              width: '100%',
              height: `${previewHeight + 28}px`,
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
                title="CV Infograph Preview"
                src={`${process.env.PUBLIC_URL}/cv-infograph.html`}
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
                backgroundColor: '#3d5a80',
                color: '#fff',
                padding: '8px 12px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
            <iframe
              title="CV Infograph Fullscreen"
              src={`${process.env.PUBLIC_URL}/cv-infograph.html`}
              style={{
                width: `${baseWidth}px`,
                height: `${baseHeight}px`,
                border: '1px solid #3d5a80',
                borderRadius: '10px',
                backgroundColor: '#fff',
                transform: `scale(${fullscreenScale})`,
                transformOrigin: 'top left'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CvInfograph;
