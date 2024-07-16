const Navbar = () => {
    return (
      <div className="w-100 flex justify-between container-min py-4">
        <h5><a href="/">Vladimir Bertozzi</a></h5>
        <div className="flex gap-8">
            <h5><a href="/portfolio">Work</a></h5>
            <h5><a href="/info">Info</a></h5>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  