'use client';
import { motion, useTransform } from 'framer-motion';
import { ProjectArticle } from './ProjectCard';

const ease = [0.22, 1, 0.36, 1];

/**
 * One stacking card, using the Work page project card UI. On large screens it sticks while the next cards slide over it
 * and shrinks slightly (transform-origin top) as the cards after it arrive.
 */
export default function WorkCard({ project, index, total, progress, reduce }) {
  const target = 1 - (total - 1 - index) * 0.045;
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : target]);

  return (
    <div className="work-slot" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{ scale, transformOrigin: '50% 0%' }}
        initial={{ opacity: 0, y: reduce ? 0 : 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.8, ease }}
      >
        <ProjectArticle p={project} />
      </motion.div>
    </div>
  );
}
