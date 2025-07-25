import React from 'react';

export default function Videos() {
  const videoThumbnails = [
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Commercial video thumbnail",
      duration: "1:30",
      instagramUrl: "https://instagram.com/p/example-commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Fitness video thumbnail",
      duration: "0:45",
      instagramUrl: "https://instagram.com/p/example-fitness"
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Behind the scenes video thumbnail",
      duration: "2:15",
      instagramUrl: "https://instagram.com/p/example-bts"
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Lifestyle video thumbnail",
      duration: "1:00",
      instagramUrl: "https://instagram.com/p/example-lifestyle"
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Travel video thumbnail",
      duration: "1:45",
      instagramUrl: "https://instagram.com/p/example-travel"
    },
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Fashion styling video thumbnail",
      duration: "0:30",
      instagramUrl: "https://instagram.com/p/example-fashion"
    },
  ];

  const openInstagramVideo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Videos</h2>
          <p className="text-lg text-gray-600">Watch my latest work and behind-the-scenes content</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videoThumbnails.map((video, index) => (
            <div
              key={index}
              className="video-thumbnail relative cursor-pointer group"
              onClick={() => openInstagramVideo(video.instagramUrl)}
              style={{ position: 'relative' }}
            >
              <img
                src={video.src}
                alt={video.alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-center justify-center" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', color: 'white', opacity: 0.8 }}>▶️</span>
              </div>
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1" style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '0.8rem', borderRadius: 4, padding: '2px 6px' }}>
                <span>🔗</span>
                {video.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 