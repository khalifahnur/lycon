import React from 'react';

const StSebastianParkSection = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#1a1a1a]"></div>
        <div className="absolute top-32 right-0 w-2 h-64 bg-gray-800"></div>
        <div className="absolute bottom-10 left-0 w-96 h-2 bg-gray-400"></div>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-black transform rotate-45"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gray-600 transform rotate-45"></div>
        
      </div>

      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-0 px-8 py-12 max-w-7xl mx-auto">
        <div className="border-b-4 border-black pb-12 mb-16">
          <div className="grid md:grid-cols-3 gap-12 items-end">
            <div className="md:col-span-2">
              <div className="space-y-4">
                <div className="inline-block px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest">
                  East Africa&apos;s Premier Sports Destination
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                  ST. SEBASTIAN
                </h1>
                <div className="relative -mt-4">
                  <h2 className="text-4xl md:text-6xl font-light text-gray-700 tracking-wider">
                    PARK
                  </h2>
                  <div className="absolute -bottom-3 left-0 w-40 h-2 bg-black"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center bg-gray-100 p-6 border-2 border-gray-300">
                <div className="text-5xl font-black text-black">9,000</div>
                <div className="text-sm text-gray-700 uppercase tracking-wider font-semibold">Stadium Capacity</div>
              </div>
              <div className="text-center bg-black p-6 text-white">
                <div className="text-5xl font-black">100</div>
                <div className="text-sm uppercase tracking-wider font-semibold">Room Complex</div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-5xl">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic border-l-4 border-gray-400 pl-8">
              &aquot; A premier hospitality and conference center within a world-class stadium complex, 
              unlocking East Africa&apos;s sports tourism and events market potential. &aquot;
            </p>
          </div>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-4xl font-black text-black uppercase tracking-wider mb-4">
                  WELCOME
                </h3>
                <div className="w-full h-1 bg-gray-800 mb-6"></div>
                <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">
                  Sports • Business • Entertainment
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-gray-50 p-8 border-l-4 border-black">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  St. Sebastian Park is a dynamic destination combining sports, business, and entertainment. 
                  Integrated within a 9,000-seat stadium complex, the Park features a 100-room hospitality 
                  and conference center, positioning it as a regional hub for sports tourism and multi-purpose events.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  This facility drives year-round revenue through diversified, high-margin income streams, 
                  catering to athletes, businesses, and event organizers across East Africa.
                </p>
              </div>
              
              {/* Key Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white border-2 border-gray-200">
                  <div className="text-3xl font-black text-black mb-2">SPORTS</div>
                  <p className="text-gray-700 text-sm">World-class facilities</p>
                </div>
                <div className="text-center p-6 bg-gray-100 border-2 border-gray-300">
                  <div className="text-3xl font-black text-black mb-2">BUSINESS</div>
                  <p className="text-gray-700 text-sm">Conference & events</p>
                </div>
                <div className="text-center p-6 bg-white border-2 border-gray-200">
                  <div className="text-3xl font-black text-black mb-2">TOURISM</div>
                  <p className="text-gray-700 text-sm">Regional destination</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 pt-16">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-black uppercase tracking-wider mb-4">
                FACILITIES
              </h2>
              <div className="w-32 h-2 bg-black mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="bg-black text-white p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold uppercase tracking-wide">
                      Sports Infrastructure
                    </h3>
                    <div className="text-5xl font-black opacity-50">01</div>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-black p-6 shadow-sm">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Professional Stadium
                    </h4>
                    <p className="text-gray-700 mb-3">9,000-seater capacity with modern amenities</p>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 inline-block">
                      FIFA STANDARD
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Training Grounds
                    </h4>
                    <p className="text-gray-700 mb-3">Multiple natural and synthetic turf pitches</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-black p-6 shadow-sm">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Technology Hub
                    </h4>
                    <p className="text-gray-700 mb-3">Performance analysis and state-of-the-art equipment</p>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 inline-block">
                      ADVANCED ANALYTICS
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800 text-white p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold uppercase tracking-wide">
                      Commercial Hub
                    </h3>
                    <div className="text-5xl font-black opacity-50">02</div>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-gray-800 p-6 shadow-sm">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Hospitality Complex
                    </h4>
                    <p className="text-gray-700 mb-3">100-room accommodation facility</p>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 inline-block">
                      PREMIUM STANDARD
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-gray-400 p-6">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Conference Center
                    </h4>
                    <p className="text-gray-700 mb-3">Multi-purpose spaces for events and retreats</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-gray-800 p-6 shadow-sm">
                    <h4 className="font-black text-gray-900 text-lg mb-2 uppercase tracking-wide">
                      Medical & Retail
                    </h4>
                    <p className="text-gray-700 mb-3">Sports medicine clinic and merchandise outlets</p>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 inline-block">
                      COMPREHENSIVE SERVICES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-black pt-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-black text-black leading-tight tracking-tighter">
                  THE FUTURE
                  <br />
                  <span className="text-gray-600 font-light">OF SPORTS</span>
                </h2>
                <div className="w-24 h-2 bg-black"></div>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Where world-class athletics meets premium hospitality, creating an unparalleled 
                  destination for sports tourism, business events, and elite competition in East Africa.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-100 p-8 border-2 border-gray-300">
                  <h3 className="font-black text-gray-900 text-2xl mb-4 uppercase tracking-wide">
                    Revenue Streams
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900">• Stadium Events</div>
                      <div className="font-bold text-gray-900">• Hospitality Services</div>
                      <div className="font-bold text-gray-900">• Conference Hosting</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900">• Training Camps</div>
                      <div className="font-bold text-gray-900">• Medical Services</div>
                      <div className="font-bold text-gray-900">• Retail Operations</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <button className="w-full py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
                    Book Event Space
                  </button>
                  <button className="w-full py-4 border-2 border-black text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StSebastianParkSection;