import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    // Use columns to create a masonry-like effect where images maintain their aspect ratio
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="relative border-8 border-black rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer mb-8 break-inside-avoid"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={800}
            height={600}
            // Use object-contain to ensure the full image is visible
            // The container (`div`) will wrap the image based on its aspect ratio
            className="w-full h-auto block"
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
