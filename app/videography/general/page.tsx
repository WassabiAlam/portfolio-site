import VideographySubPage from "../components/VideographySubPage";
import VideoGallery from "../components/VideoGallery";

export default function General() {
  const videos = [
    { src: "/assets/videography/general/video-1.mp4" },
    { src: "/assets/videography/general/video-2.mp4" },
    { src: "/assets/videography/general/video-3.mp4" },
    { src: "/assets/videography/general/video-4.mp4" },
    { src: "/assets/videography/general/video-5.mp4" },
    { src: "/assets/videography/general/video-6.mp4" },
    { src: "/assets/videography/general/video-7.mp4" },
  ];

  return (
    <VideographySubPage title="General">
      <VideoGallery videos={videos} />
    </VideographySubPage>
  );
}
