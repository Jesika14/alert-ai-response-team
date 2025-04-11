
import React from 'react';
import { Database, FileText, LineChart, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Data Cleaning & Preprocessing',
    description: 'Removing noise, handling missing values, and tokenizing text data from Twitter.',
    icon: FileText,
    color: 'bg-blue-50 text-primary'
  },
  {
    id: 2,
    title: 'Text Vectorization',
    description: 'Converting text to numerical form using TF-IDF and BERT embeddings.',
    icon: Database,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 3,
    title: 'Model Training',
    description: 'Training models from Logistic Regression to XGBoost for optimal performance.',
    icon: LineChart,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 4,
    title: 'Disaster Prediction',
    description: 'Classifying new messages as disaster or non-disaster in real-time.',
    icon: Zap,
    color: 'bg-red-50 text-alert-red'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-dark">
            Our AI-powered system uses sophisticated natural language processing to analyze social media posts.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 card-hover">
                  <div className={`${step.color} rounded-full w-14 h-14 flex items-center justify-center mb-4`}>
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-dark">
                    {step.description}
                  </p>
                  <div className="absolute top-6 right-6 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-dark font-medium">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-center">
              <div className="h-1 bg-primary flex-1 rounded-full max-w-[80%] mx-auto">
                <div className="h-full bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-dark">
              The entire process happens in milliseconds, allowing for real-time disaster detection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
