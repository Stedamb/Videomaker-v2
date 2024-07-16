import ContentSection from "./sections/ContentSection";
import NavSection from "./sections/NavSection";

const Homepage = () => {
  const videoSources = ["/supernova.mp4", "/supernova.mp4", "/supernova.mp4"];

  return (
    <div>
      {videoSources.map((source, index) => (
        <ContentSection
          key={index}
          isRight={index % 2 !== 0}
          videoSrc={source}
        />
      ))}
      <NavSection />
    </div>
  );
};

export default Homepage;
