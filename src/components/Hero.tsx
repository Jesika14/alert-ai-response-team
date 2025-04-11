
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-light to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 opacity-10 animate-pulse">
          <MessageSquare size={120} className="text-primary" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <AlertCircle size={80} className="text-alert-red" />
        </div>
        <div className="absolute bottom-1/4 left-2/3 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          <AlertTriangle size={100} className="text-primary" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-dark mb-4">
            Real-Time Disaster Detection with <span className="text-primary">Lovable AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-dark mb-8">
            Using BERT and NLP to help agencies respond to emergencies faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" size="lg">
              Try Live Demo
            </Button>
            <Button variant="outline" className="btn-secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
