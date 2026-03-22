'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
    {
        icon: '💻',
        title: 'Languages',
        skills: ['Java', 'JavaScript'],
    },
    {
        icon: '⚙️',
        title: 'Frameworks',
        skills: ['React', 'Node.js', 'Spring Boot', 'Next.js'],
    },
    {
        icon: '🛠️',
        title: 'Tools & Platforms',
        skills: ['Linux', 'Git', 'Docker', 'Nginx', 'CI/CD', 'AWS (EC2, S3, CloudFront)'],
    },
    {
        icon: '🗄️',
        title: 'Databases & ORM',
        skills: ['PostgreSQL', 'MongoDB'],
    },
    {
        icon: '📚',
        title: 'CS Fundamentals',
        skills: ['DSA', 'DBMS', 'OOP', 'Operating Systems', 'Computer Networks'],
    }
    // {
    //     icon: '🧠',
    //     title: 'AI / ML',
    //     skills: ['Gen-AI', 'RAG', 'LLMs', 'OpenAI Embeddings', 'OCR'],
    // },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section skills-section" id="skills" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">My Skills</p>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
