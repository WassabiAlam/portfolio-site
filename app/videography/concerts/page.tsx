import VideographySubPage from "../components/VideographySubPage";
import VideoGallery from "../components/VideoGallery";

export default function Concerts() {
  const videos = [
    { src: "/assets/videography/concerts/concert-highlight-01.mp4" },
  ];

  return (
    <VideographySubPage title="Concerts">
      <VideoGallery videos={videos} />
    </VideographySubPage>
  );
}
