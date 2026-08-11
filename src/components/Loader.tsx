import { useEffect, useRef } from 'react';

const Loader = () => {
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loader = loaderRef.current;
        if (!loader) return;

        const hideTimeout = setTimeout(() => {
            loader.classList.add('hide');
        }, 1500);

        const removeTimeout = setTimeout(() => {
            loader.classList.remove('flex');
            loader.classList.add('hidden');
        }, 2100);

        return () => {
            clearTimeout(hideTimeout);
            clearTimeout(removeTimeout);
        };
    }, []);

    return (
      <div ref={loaderRef} className="loader w-screen h-screen flex items-center justify-center z-50">
        <h3>
          LOADING
        </h3>
      </div>
    );
  };

  export default Loader;
