'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        icon: '⚡',
        title: 'JanSetu',
        subtitle: 'Participatory Governance & Community Funding Platform',
        date: "Jan '26 — Present",
        description: [
            'Built a full-stack civic engagement platform connecting citizens, NGOs, and government bodies',
            'Developed scalable REST APIs and optimized MongoDB schemas for users, projects, and donations.',
            'Implemented JWT authentication and role-based access control for secure transactions.',
            'Integrated AI-based sentiment analysis to structure and analyze public feedback',
            'Engineered real-time funding tracking with dynamic React UI updates and multilingual support.'
        ],
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Rest APIs'],
        github: 'https://github.com/adityapratapsingh001',
    },
    {
        icon: '🤖',
        title: 'Fleetpro',
        subtitle: 'Web-based Logistics Platform',
        date: "Aug '25",
        description: [
            'Built a web-based fleet management platform to manage vehicles, drivers, routes, and fuel logs.',
            'Implemented secure authentication and role-based authorization using session management.',
            'Developed vehicle allocation and trip scheduling modules to optimize dispatch workflows.',
            'Engineered modular CRUD operations using PDO and prepared statements for secure data handling.',
            'Designed a normalized, indexed MySQL schema to ensure scalable and efficient data management.',
        ],
        tech: ['PHP', 'MySQL', 'JavaScript', 'Session Management',
                  'HTML5'],
        github: 'https://github.com/adityapratapsingh001',
    },
   
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="section-container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label">My Work</p>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my skills in full stack development, system
                        design, and AI integration.
                    </p>
                    <div className="section-divider" />
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="GitHub"
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3>{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle} • {project.date}</p>

                            <ul className="project-bullets">
                                {project.description.map((bullet, j) => (
                                    <li key={j}>{bullet}</li>
                                ))}
                            </ul>

                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
