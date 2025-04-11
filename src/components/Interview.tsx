
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileAudio, ExternalLink } from 'lucide-react';

const interviewLinks = [
  { 
    title: 'Team Interview on Model Development', 
    description: 'Discussion about developing the machine learning model for disaster detection',
    url: '#interview-1' 
  },
  { 
    title: 'Technical Deep Dive on BERT', 
    description: 'Explanation of how BERT embeddings enhance disaster prediction accuracy',
    url: '#interview-2' 
  },
  { 
    title: 'Case Studies of Successful Implementations', 
    description: 'Real-world examples of how our system detected actual disasters',
    url: '#interview-3' 
  }
];

const Interview = () => {
  return (
    <section id="media" className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            From Research to Reality
          </h2>
          <p className="text-lg text-gray-dark">
            Listen to our team discuss the journey from concept to implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {interviewLinks.map((interview, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileAudio className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark text-center mb-2">
                  {interview.title}
                </h3>
                <p className="text-gray-dark/70 text-center mb-4">
                  {interview.description}
                </p>
                <a 
                  href={interview.url} 
                  className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                >
                  Listen Now
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interview;
