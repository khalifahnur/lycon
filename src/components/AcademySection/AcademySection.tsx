import React from 'react';

const AcademySection = () => {
  return (
    <div className="playfair min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#1a1a1a]"></div>
        <div className="absolute top-20 right-0 w-1 h-40 bg-gray-800"></div>
        <div className="absolute bottom-40 left-0 w-60 h-1 bg-gray-400"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rotate-45"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gray-600 rotate-45"></div>
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-0 px-8 py-12 max-w-6xl mx-auto">
        <div className="border-b-4 border-black pb-8 mb-12">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-4">
              East Africa&apos;s Premier Sports Institution
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-black leading-none tracking-tighter">
              ST. SEBASTIAN
            </h1>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-light text-gray-700 tracking-wide -mt-2">
                SPORTS ACADEMY
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black"></div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic border-l-4 border-gray-400 pl-6 text-left">
              Pioneering residential institution transforming youth development through elite football training, 
              accredited Cambridge academics, and comprehensive wellness programs.
            </p>
          </div>
          <div className="flex justify-center space-x-12 mt-8 pt-6 border-t border-gray-300">
            <div className="text-center">
              <div className="text-4xl font-black text-black">400</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Student Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-black">11+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Starting Age</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-black">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Supervision</div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-black text-white p-6">
                  <div className="text-6xl font-black mb-2">01</div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">
                    Full-Time Academy
                  </h3>
                </div>
                <div className="bg-gray-100 p-6 -mt-1">
                  <p className="text-gray-700 font-medium">
                    Comprehensive residential program combining elite athletics with academic excellence
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border-l-4 border-black pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">RESIDENTIAL LIFE</h4>
                  <p className="text-gray-700 text-sm">Year-round boarding for students aged 11+</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">ACADEMICS</h4>
                  <p className="text-gray-700 text-sm">Cambridge Curriculum instruction</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-400 pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">ATHLETICS</h4>
                  <p className="text-gray-700 text-sm">Elite football training & development</p>
                </div>
                <div className="bg-white border-l-4 border-black pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">WELLNESS</h4>
                  <p className="text-gray-700 text-sm">Life skills, nutrition & mental health</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 md:order-2">
              <div className="sticky top-8">
                <div className="bg-gray-800 text-white p-6">
                  <div className="text-6xl font-black mb-2">02</div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">
                    Coaching Camps
                  </h3>
                </div>
                <div className="bg-gray-100 p-6 -mt-1">
                  <p className="text-gray-700 font-medium">
                    Intensive short-term programs during school holidays
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="text-gray-900 font-medium">4-5 day intensive training programs</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 border border-gray-200">
                  <div className="w-3 h-3 bg-gray-600"></div>
                  <span className="text-gray-900 font-medium">Professional coaches and technical development</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white border border-gray-200">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="text-gray-900 font-medium">Academy methodology exposure</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="bg-black text-white p-6">
                  <div className="text-6xl font-black mb-2">03</div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">
                    Player Pathway
                  </h3>
                </div>
                <div className="bg-gray-100 p-6 -mt-1">
                  <p className="text-gray-700 font-medium">
                    Professional development and transfer opportunities
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-gray-100 p-8 border-2 border-gray-300">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide">TRACKING</h4>
                    <p className="text-gray-700">Long-term performance monitoring</p>
                    <h4 className="font-black text-gray-900 uppercase tracking-wide">PLACEMENT</h4>
                    <p className="text-gray-700">Professional club opportunities</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide">INTEGRATION</h4>
                    <p className="text-gray-700">FIFA Connect system</p>
                    <h4 className="font-black text-gray-900 uppercase tracking-wide">REVENUE</h4>
                    <p className="text-gray-700">10% sell-on fee structure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t-2 border-black">
          <h2 className="text-5xl font-black text-center mb-12 uppercase tracking-wider">FACILITIES</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-black text-white p-6">
                <h3 className="text-3xl font-bold uppercase tracking-wide mb-2">Academic Campus</h3>
                <div className="w-16 h-1 bg-white"></div>
              </div>
              <div className="bg-gray-50 p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Cambridge International Standards</h4>
                    <p className="text-gray-700 text-sm">World-class academic facilities and curriculum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Science & Computer Labs</h4>
                    <p className="text-gray-700 text-sm">State-of-the-art laboratory facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Study Lounges</h4>
                    <p className="text-gray-700 text-sm">Dedicated learning and collaboration spaces</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Residential */}
            <div className="space-y-6">
              <div className="bg-gray-800 text-white p-6">
                <h3 className="text-3xl font-bold uppercase tracking-wide mb-2">Residential Life</h3>
                <div className="w-16 h-1 bg-white"></div>
              </div>
              <div className="bg-gray-50 p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-800 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">400 Student Capacity</h4>
                    <p className="text-gray-700 text-sm">Separate boarding houses with modern amenities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-800 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Staff Accommodation</h4>
                    <p className="text-gray-700 text-sm">30 dedicated units for residential staff</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-800 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Pastoral Care</h4>
                    <p className="text-gray-700 text-sm">Comprehensive supervision and student support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-gray-400">
          <div className="text-center space-y-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
                EXCELLENCE
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-gray-700 tracking-wide -mt-2">
                IN EVERY DETAIL
              </h3>
              <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
            </div>
            
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed italic">
              Where athletic prowess meets academic achievement, creating tomorrow&apos;s leaders through discipline, innovation, and unwavering commitment to excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="px-12 py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
                Apply Now
              </button>
              <button className="px-12 py-4 border-2 border-black text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademySection;