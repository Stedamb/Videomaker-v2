const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-100 flex justify-between  p-4">
      <h5>
        Vladimir Bertozzi
      </h5>
      <h5>
        Copyright © {currentYear} 
      </h5>
      <h5>
        Site design by SD
      </h5>
    </div>
  );
};

export default Footer;
