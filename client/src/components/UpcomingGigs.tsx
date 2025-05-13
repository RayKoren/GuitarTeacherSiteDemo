import React from 'react';
import { upcomingGigs } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GigCard: React.FC<{
  venue: string;
  address: string;
  date: string;
  time: string;
  description: string;
  ticketLink: string;
}> = ({ venue, address, date, time, description, ticketLink }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="h-2 gradient-overlay"></div>
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-display font-bold">{venue}</h3>
          <p className="text-gray-500 text-sm">{address}</p>
        </div>
        <div className="flex items-center bg-[#8B4513]/10 rounded-lg px-4 py-2">
          <div className="mr-3 text-[#8B4513]">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div>
            <p className="font-semibold">{date}</p>
            <p className="text-sm text-gray-600">{time}</p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm">
          <i className="fas fa-map-marker-alt text-[#3D7B80] mr-2"></i>
          <span>Sheridan, WY</span>
        </div>
        
        <Button 
          variant="outline" 
          className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
          asChild
        >
          <a href={ticketLink}>
            <i className="fas fa-ticket-alt mr-2"></i>Details
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const UpcomingGigs: React.FC = () => {
  return (
    <section id="gigs" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-4">Upcoming Gigs</h2>
          <p className="text-lg text-gray-600">
            Catch John live at these upcoming performances around Sheridan and beyond.
          </p>
        </div>
        
        <div className="space-y-6">
          {upcomingGigs.map((gig) => (
            <GigCard
              key={gig.id}
              venue={gig.venue}
              address={gig.address}
              date={gig.date}
              time={gig.time}
              description={gig.description}
              ticketLink={gig.ticketLink}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-[#3D7B80] hover:bg-opacity-90 text-white">
            <i className="fas fa-calendar-alt mr-2"></i>View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGigs;