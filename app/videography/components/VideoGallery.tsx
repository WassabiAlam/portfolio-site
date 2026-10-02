export default function VideoGallery({ videos }: { videos: { src: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      {videos.map((video, i) => (
        <div
          key={i}
          className={`relative border-8 border-black rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
            video.src.includes("video-3.mp4") ? "aspect-video" : ""
          }`}
        >
          <video
            src={video.src}
            controls
            className={`w-full block ${
              video.src.includes("video-3.mp4") ? "h-full object-cover" : "h-auto"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
