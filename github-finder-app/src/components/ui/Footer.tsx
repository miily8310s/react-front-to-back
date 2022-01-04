export const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-3 bg-info text-primary-content footer-center">
      <p data-cy="footer">Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
};
