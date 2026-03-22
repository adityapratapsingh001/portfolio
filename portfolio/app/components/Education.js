'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
    {
        icon: '🎓',
        title: 'Lovely Professional University',
        degree: 'B.Tech — Computer Science & Engineering',
        location: 'Phagwara, Punjab',
        duration: "Aug '23 — Present",
        grade: 'CGPA: 7',
    },
    {
        icon: '🏫',
        title: 'Gyan Sthali Academy',
        degree: 'Intermediate (12th)',
        location: 'Auraiya, Uttar Pradesh',
        duration: "Apr '22 — Jun '23",
        grade: '72%',
    },
    {
        icon: '📖',
        title: "Gyan Sthali Academy",
        degree: 'Matriculation (10th)',
        location: 'Auraiya, Uttar Pradesh',
        duration: "Apr '20 — Jun '21",
        grade: '75%',
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section education-section" id="education" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">Education</p>
                    <h2 className="section-title">Academic Background</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="education-grid">
                    {educationData.map((edu, i) => (
                        <motion.div
                            key={edu.title}
                            className="education-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="education-icon">{edu.icon}</div>
                            <h3>{edu.title}</h3>
                            <h4>{edu.degree}</h4>
                            <p>{edu.location}</p>
                            <div className="education-meta">
                                <span>{edu.duration}</span>
                                <span className="edu-grade">{edu.grade}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
