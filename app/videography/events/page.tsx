import VideographySubPage from "../components/VideographySubPage";
import VideoGallery from "../components/VideoGallery";

export default function Events() {
  const videos = [{ src: "/assets/videography/events/FCF_MERCH_POPUP.mp4" }];
  return (
    <VideographySubPage title="Events">
      <VideoGallery videos={videos} />
    </VideographySubPage>
  );
}
