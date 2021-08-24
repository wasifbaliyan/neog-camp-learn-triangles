import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="list-item">
          <a href="https://twitter.com/wasifbaliyan" className="list-link">
            Twitter
          </a>
        </li>
        <li className="list-item">
          <a href="https://linkedin.com/in/wasifbaliyan" className="list-link">
            LinkedIn
          </a>
        </li>
        <li className="list-item">
          <a href="https://github.com/wasifbaliyan" className="list-link">
            Github
          </a>
        </li>
        <li className="list-item">
          <a href="https://instagram.com/wasifbaliyan" className="list-link">
            Instagram
          </a>
        </li>
        <li className="list-item">
          <a href="https://wasifbaliyan.netlify.app" className="list-link">
            Portfolio
          </a>
        </li>
      </ul>
      <div className="footer-text">
        &copy;wasifbaliyan {new Date().getFullYear()}{" "}
      </div>
    </footer>
  );
}
