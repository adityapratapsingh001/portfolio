'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {currentYear} <span>Aditya Pratap Singh</span>. Built with Next.js & ❤️
                </p>
                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/adityaps01"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/adityapratapsingh001"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a href="mailto:adityathakur6100@gmail.com.com">Email</a>
                </div>
            </div>
        </footer>
    );
}
