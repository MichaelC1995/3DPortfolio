import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a
                        href="/documents/Michael%20Chatellier%20-%20Frontend%20Developer%20Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                    >
                        My Resume
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a
                            key={index}
                            href={socialImg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img src={socialImg.imgPath} alt={socialImg.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Michael Chatellier. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;