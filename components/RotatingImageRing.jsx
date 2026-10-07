'use client';
import { m as motion, useTransform } from 'framer-motion';
import { hero } from '@/data/site';

const ease = [0.22, 1, 0.36, 1];

/**
 * A huge ring of tilted photos, centred below the banner and turning slowly.
 * Only its top arc is visible; each card is tangent to the ring so the row
 * fans out like the reference. Ring size and card size are CSS variables so
 * mobile gets a bigger, sparser ring.
 */
export default function RotatingImageRing({ scroll, reduce }) {
  const { count, secondsPerTurn } = hero.ring;
  const y = useTransform(scroll, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <div
      className="relative mt-5 h-[clamp(170px,48vw,300px)] w-full overflow-hidden md:mt-4 md:h-[clamp(300px,31vw,640px)]"
    >
      <style>{`@media (min-width:768px){ .ring-stage{--ring:130vw !important;--card:min(14.5vw,300px) !important;--top:7.5vw !important;} }`}</style>
      <div className="ring-stage absolute inset-0" style={{ '--ring': '104vw', '--card': '15.5vw', '--top': '9vw' }}>
        <motion.div
          className="absolute left-1/2"
          style={{
            width: 'var(--ring)',
            height: 'var(--ring)',
            marginLeft: 'calc(var(--ring) / -2)',
            top: 'calc(var(--top) - var(--card) / 2)',
            y,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
        >
          <div className="ring-spin absolute inset-0" style={{ '--turn': `${secondsPerTurn}s` }}>
            {Array.from({ length: count }, (_, i) => {
              const img = hero.images[i % hero.images.length];
              const dup = i >= hero.images.length;
              return (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${(360 / count) * i}deg)` }}
                >
                  <div
                    className="group absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden rounded-[clamp(18px,2.2vw,32px)] transition-[transform,box-shadow] duration-500 hover:scale-[1.04] hover:shadow-[0_28px_50px_-20px_rgba(0,0,0,0.45)]"
                    style={{ width: 'var(--card)', aspectRatio: '1 / 1.08' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={dup ? '' : img.alt}
                      aria-hidden={dup || undefined}
                      width={500}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
