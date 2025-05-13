import React from 'react';
import { performances } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

const PerformanceCard: React.FC<{
  title: string;
  description: string;
  videoId: string;
  date: string;
}> = ({ title, description, videoId, date }) => (
  <Card className="overflow-hidden">
    <YouTubeEmbed videoId={videoId} title={title} />
    <CardContent className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-display font-bold">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Performances: React.FC = () => {
  return (
    <section id="performances" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-4">Recent Performances</h2>
          <p className="text-lg text-gray-600">
            Watch recordings of John's recent live shows, student showcases, and special events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((performance) => (
            <PerformanceCard
              key={performance.id}
              title={performance.title}
              description={performance.description}
              videoId={performance.videoId}
              date={performance.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;