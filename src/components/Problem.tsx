
import React from 'react';
import { AlertCircle, ThumbsDown, ThumbsUp, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Problem = () => {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Why Monitor Twitter for Disasters?
          </h2>
          <p className="text-lg text-gray-dark">
            Twitter plays a vital role in emergency communication. Our system identifies real disasters by distinguishing between literal and metaphorical language using AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover border-green-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ThumbsUp className="text-green-600 h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-dark">Real Disaster</h3>
                  <div className="flex items-center mt-1">
                    <Twitter className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm text-gray-dark/70">@emergency_alert</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-dark border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-md">
                "Forest fire near LA, authorities evacuating residents #emergency"
              </p>
              <div className="mt-4 text-sm text-green-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                Detected as real disaster
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-gray-medium/20">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <ThumbsDown className="text-gray-dark h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-dark">Non-Disaster</h3>
                  <div className="flex items-center mt-1">
                    <Twitter className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm text-gray-dark/70">@user_example</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-dark border-l-4 border-gray-medium pl-4 py-2 bg-gray-50 rounded-r-md">
                "My heart is on fire after seeing that movie #emotional"
              </p>
              <div className="mt-4 text-sm text-gray-dark flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                Detected as non-disaster
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problem;
