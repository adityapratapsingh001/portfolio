'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
    {
        icon: '🏆',
        title: '100+ Problems Solved',
        description:
            'Solved over 100 coding problems across LeetCode, GeeksForGeeks & CodeForces, strengthening DSA fundamentals.',
    },
    {
        icon: '🥇',
        title: 'Bajaj HackRx 6.0 — Top 90',
        description:
            'Ranked 90th out of 10,000 teams in the Bajaj HackRx 6.0 Agentic AI Hackathon (Aug 2025).',
    },
    {
        icon: '⭐',
        title: '5 Stars on HackerRank',
        description:
            'Achieved 6 Stars in Problem Solving on HackerRank, demonstrating strong algorithmic thinking.',
    },
];

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="achievements" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Achievements</p>
                    <h2 className="section-title">Milestones & Recognitions</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={ach.title}
                            className="achievement-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="achievement-icon">{ach.icon}</div>
                            <h3>{ach.title}</h3>
                            <p>{ach.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
