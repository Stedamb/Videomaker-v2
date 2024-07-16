import React from 'react';

const NavSection = () => {
    return (
        <div className="NavSection container-xl pb-20">
            <div className="relative flex items-start justify-center gap-4 lg:gap-20">
                <div className="Staggered relative flex flex-col lg:w-1/2 p-4 lg:p-8 bg-background border border-text">
                    <h4 className="">Portfolio</h4>
                    <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos beatae unde saepe voluptate tempore facilis dicta dolore consequatur temporibus! Doloribus beatae rem fugit amet harum quia, officiis ad veritatis?</p>
                    <a className="Link inline-flex items-center justify-center p-0.5 ml-auto" href="/portfolio">
                        <span className="p-2">
                            Vedi tutti
                        </span>
                        <img className="Arrow" src="/arrow.svg" width="32px"></img>
                    </a>
                </div>
                <div className="Staggered relative flex flex-col lg:w-1/2 p-4 lg:p-8 bg-background border border-text">
                    <h4 className="">Portfolio</h4>
                    <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos beatae unde saepe voluptate tempore facilis dicta dolore consequatur temporibus! Doloribus beatae rem fugit amet harum quia, officiis ad veritatis?</p>
                    <a className="Link inline-flex items-center justify-center p-0.5 ml-auto">
                        <span className="p-2">
                            Vedi tutti
                        </span>
                        <img className="Arrow" src="/arrow.svg" width="32px"></img>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default NavSection;
