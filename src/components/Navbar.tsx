const Navbar = () => {
    return (
      <div className="w-100 flex justify-between container-min py-4">
        <h5><a className="Link-Alt" href="/">Vladimir Bertozzi</a></h5>
        <div className="flex gap-8">
            <h5><a className="Link-Alt" href="/portfolio">Work</a></h5>
            <h5><a className="Link-Alt" href="/info">Info</a></h5>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  