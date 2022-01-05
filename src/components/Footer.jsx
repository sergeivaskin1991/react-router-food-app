import React from "react";

function Footer() {
  return (
    <footer className="page-footer light-green lighten-1">
      <div className="footer-copyright">
        <div className="container white-text text-lighten-4">
          © {new Date().getFullYear()} by Sergei Vaskin
          <a className="white-text right" href="https://github.com/sergeivaskin1991/react-router-eat-app" target="_blank" rel="noreferrer">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };