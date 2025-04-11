
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Loader2, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TryItYourself = () => {
  const [message, setMessage] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<null | { isDanger: boolean; message: string }>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate analysis with setTimeout
    setTimeout(() => {
      // Simple keyword-based analysis for demo purposes
      const dangerKeywords = ['fire', 'flood', 'earthquake', 'tsunami', 'hurricane', 'emergency', 'evacuate', 'disaster'];
      
      let inputText = message.toLowerCase();
      if (keyword) {
        inputText += ' ' + keyword.toLowerCase();
      }
      
      const containsDangerWord = dangerKeywords.some(word => inputText.includes(word));
      const isDisaster = containsDangerWord && 
        !inputText.includes('my heart') && 
        !inputText.includes('movie') && 
        !inputText.includes('love');
      
      setResult({
        isDanger: isDisaster,
        message: isDisaster 
          ? "Your request is accepted. This appears to be a potential emergency." 
          : "This does not appear to be an emergency."
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="try-it" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Check If It's an Emergency
          </h2>
          <p className="text-lg text-gray-dark">
            Try our AI prediction model with your own message to see how it classifies potential emergencies.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-md">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-gray-dark font-medium mb-2">
                  Message Text*
                </label>
                <Input
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a message to analyze..."
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="keyword" className="block text-gray-dark font-medium mb-2">
                  Optional Keyword
                </label>
                <Input
                  id="keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Add additional keyword (e.g., flood, fire)"
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!message || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : 'Analyze'}
              </Button>
            </form>

            {result && (
              <div className={`mt-8 p-4 rounded-md ${
                result.isDanger ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
              }`}>
                <div className="flex items-start">
                  {result.isDanger ? (
                    <AlertTriangle className="h-6 w-6 text-alert-red mr-3 mt-0.5" />
                  ) : (
                    <Check className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  )}
                  <div>
                    <h3 className={`font-semibold ${
                      result.isDanger ? 'text-alert-red' : 'text-green-600'
                    }`}>
                      {result.isDanger ? 'Potential Emergency Detected' : 'Not an Emergency'}
                    </h3>
                    <p className="text-gray-dark mt-1">{result.message}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TryItYourself;
