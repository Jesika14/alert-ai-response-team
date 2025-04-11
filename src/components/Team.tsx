
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const teamMembers = [
  { name: 'Jesika Rai', role: 'Team Member' },
  { name: 'Prachi Katare', role: 'Team Member' },
  { name: 'Ritu Badgoti', role: 'Team Member' },
  { name: 'Navneet Meena', role: 'Team Member' },
  { name: 'Saurabh Kumar Meena', role: 'Team Member' }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-dark">
            Our talented and dedicated professionals working to make the world safer with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-gray-dark" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark">{member.name}</h3>
                <p className="text-gray-dark/70">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-gray-dark">Course Instructor</h3>
              <div className="my-4 w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-12 w-12 text-gray-dark" />
              </div>
              <p className="text-xl font-medium text-primary">G. Venkat Ram Reddy</p>
              <p className="text-gray-dark/70 mt-1">Project Mentor & Guide</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
