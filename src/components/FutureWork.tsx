
import React from 'react';
import { Check, Globe, BarChart, Twitter } from 'lucide-react';

const futureItems = [
  {
    title: 'Integrate Twitter API for Live Monitoring',
    description: 'Connect directly to Twitter\'s API for real-time data processing and alerting.',
    icon: Twitter
  },
  {
    title: 'Add Multilingual Support',
    description: 'Expand disaster detection capabilities to multiple languages for global coverage.',
    icon: Globe
  },
  {
    title: 'Improve Model Accuracy',
    description: 'Continually refine our algorithms to reduce false positives and negatives.',
    icon: BarChart
  }
];

const FutureWork = () => {
  return (
    <section id="future" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            What's Next?
          </h2>
          <p className="text-lg text-gray-dark">
            Our roadmap for enhancing disaster detection capabilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-light rounded-xl p-8">
          <ul className="space-y-6">
            {futureItems.map((item, index) => (
              <li key={index} className="flex">
                <div className="mr-4 bg-primary/10 rounded-full p-2">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-dark">
                    {item.title}
                  </h3>
                  <p className="text-gray-dark/80 mt-1">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-dark mb-2">Want to contribute?</h4>
            <p className="text-gray-dark/80">
              We're looking for collaborators interested in AI for social good. 
              Our project is open to researchers and developers who want to make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureWork;
