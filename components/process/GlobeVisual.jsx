'use client';
import { useEffect, useRef, useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import createGlobe from 'cobe';
import Frame from './Frame';

const ease = [0.22, 1, 0.36, 1];
const REST_THETA = 0.28;

/**
 * Dotted globe (COBE, WebGL). Auto-rotates slowly; grab and drag to spin it a
 * full 360° (and tilt it a little). Rendering only runs while it is on screen.
 */
export default function GlobeVisual() {
  const box = useRef(null);
  const canvas = useRef(null);
  const reduce = useReducedMotion();
  const [grabbing, setGrabbing] = useState(false);
  const state = useRef({ phi: 1.9, theta: REST_THETA, vPhi: 0, dragging: false, x: 0, y: 0 });

  useEffect(() => {
    const cv = canvas.current;
    let globe = null;
    let raf = 0;
    let visible = false;

    const stop = () => {
      cancelAnimationFrame(raf);
      globe?.destroy();
      globe = null;
    };

    const start = () => {
      stop();
      const size = cv.clientWidth;
      if (!size || !visible) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      globe = createGlobe(cv, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: state.current.phi,
        theta: state.current.theta,
        dark: 1,
        diffuse: 1.15,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.9, 0.9, 0.9],
        markerColor: [1, 0.29, 0],
        glowColor: [1, 0.42, 0.18],
        markers: [],
      });
      const tick = () => {
        const st = state.current;
        if (!st.dragging) {
          // inertia from a fling, then the slow idle spin (about one turn / 40s)
          st.phi += st.vPhi;
          st.vPhi *= 0.95;
          if (!reduce) st.phi += 0.0026;
          st.theta += (REST_THETA - st.theta) * 0.02;
        }
        globe.update({ phi: st.phi, theta: st.theta });
        raf = requestAnimationFrame(tick);
      };
      tick();
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(box.current);

    let t;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(start, 150);
    });
    ro.observe(cv);

    return () => {
      clearTimeout(t);
      io.disconnect();
      ro.disconnect();
      stop();
    };
  }, [reduce]);

  const down = (e) => {
    const st = state.current;
    st.dragging = true;
    st.x = e.clientX;
    st.y = e.clientY;
    st.vPhi = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
    setGrabbing(true);
  };
  const move = (e) => {
    const st = state.current;
    if (!st.dragging) return;
    const dx = e.clientX - st.x;
    const dy = e.clientY - st.y;
    st.x = e.clientX;
    st.y = e.clientY;
    st.phi += dx / 140;
    st.vPhi = dx / 140 / 4;
    st.theta = Math.max(-0.7, Math.min(0.9, st.theta + dy / 220));
  };
  const up = (e) => {
    state.current.dragging = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setGrabbing(false);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: reduce ? 0.2 : 1.2, ease }}
    >
      <Frame className="relative h-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[8%] aspect-square w-[90%] -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,74,0,0.14), transparent 62%)' }}
        />
        <div ref={box} className="absolute left-1/2 top-[10%] aspect-square w-[88%] -translate-x-1/2 sm:top-[6%] sm:w-[78%]">
          <canvas
            ref={canvas}
            role="img"
            aria-label="Interactive dotted globe — drag to rotate"
            className={`h-full w-full select-none ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ touchAction: 'pan-y' }}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
          />
        </div>
      </Frame>
    </motion.div>
  );
}
