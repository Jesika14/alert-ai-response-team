
import React from 'react';
import { Code, Database, LineChart, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const techCards = [
  {
    title: 'BERT Embeddings',
    description: 'State-of-the-art language representation model that understands context in text data.',
    icon: Terminal,
    color: 'text-blue-600'
  },
  {
    title: 'XGBoost Classifier',
    description: 'High-performance gradient boosting algorithm used for classification tasks.',
    icon: LineChart,
    color: 'text-green-600'
  },
  {
    title: 'Python Ecosystem',
    description: 'Scikit-learn, Transformers, NLTK, and other libraries for advanced NLP processing.',
    icon: Code,
    color: 'text-yellow-600'
  },
  {
    title: 'Real-time Interface',
    description: 'A fast and responsive system for immediate disaster detection and classification.',
    icon: Database,
    color: 'text-purple-600'
  }
];

const BehindTheTech = () => {
  return (
    <section id="behind-tech" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Built with Powerful AI Tools
          </h2>
          <p className="text-lg text-gray-dark">
            Our technology stack leverages the latest advancements in machine learning and natural language processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techCards.map((card, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className={`${card.color} mb-2`}>
                  <card.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-dark">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-dark/80">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gray-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-dark mb-4 text-center">Real-time Prediction Console</h3>
          <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg overflow-x-auto">
            <div className="animate-pulse">
              <p className="py-1">{'>'} Loading BERT model...</p>
              <p className="py-1">{'>'} Model loaded successfully</p>
              <p className="py-1">{'>'} Processing tweet: "Wildfire spreading near San Diego, people evacuating #emergency"</p>
              <p className="py-1">{'>'} Running classification...</p>
              <p className="py-1">{'>'} RESULT: DISASTER (Confidence: 0.94)</p>
              <p className="py-1">{'>'} Alert sent to emergency services</p>
              <p className="py-1 text-white">{'>'} _</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheTech;
