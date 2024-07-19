const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-100 flex justify-between border-t-[1px] px-4 py-2">
      <h5 className="lg-max:hidden">
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
