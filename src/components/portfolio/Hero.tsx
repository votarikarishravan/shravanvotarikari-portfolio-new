
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900">
                  Hello
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  — It's Shravan, an Integration Developer & Java Backend Specialist
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  size="lg" 
                  onClick={scrollToAbout} 
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3"
                >
                  Explore My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              {/* Scroll indicator */}
              <div className="pt-12">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  Scroll down 
                  <ArrowDown className="h-3 w-3" />
                </p>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Shravan.png"
                    alt="Shravan Votarikari - Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Book A Call</div>
                    <ArrowDown className="h-3 w-3 mx-auto mt-1 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
