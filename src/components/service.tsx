'use client'
import { useState } from 'react';
import { Brain, Palette, Globe, Smartphone, Moon, Sun } from 'lucide-react';

interface Service {
  icon: any;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: 'AI / ML',
    description: 'Harness the power of Artificial Intelligence to automate, optimize, and accelerate your business growth with smart data-driven solutions.',
  },
  {
    icon: Palette,
    title: 'UI / UX',
    description: 'Designing intuitive, engaging, and visually stunning interfaces that create seamless user journeys and lasting impressions.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Building fast, secure, and scalable websites that not only look great but perform flawlessly across all devices.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Transforming bold ideas into high-performance mobile apps that deliver exceptional user experiences and real-world impact.',
  },
];

function Service() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="transition-colors duration-500" >
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <div>
            <h1 className={`text-5xl font-bold mb-3 transition-colors duration-300  ${
              isDark ? '' : 'text-[#d573ff]'
            }`}>
              Our Services
            </h1>
            <p className={`text-lg ${
              isDark ? 'text-white-400' : 'text-gray-600'
            }`}>
              Innovative solutions to transform your business
            </p>
          </div>
          {/* <button
            onClick={() => setIsDark(!isDark)}
            className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60'
                : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-2xl shadow-purple-400/40 hover:shadow-purple-400/60'
            } hover:scale-105`}
          >
            {isDark ? (
              <>
                <Sun className="w-5 h-5" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span>Dark Mode</span>
              </>
            )}
          </button> */}
        </div>

        {/* Services Grid - Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/60 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30'
                    : 'bg-grey/80 backdrop-blur-sm border border-gray-200/50 hover:border-purple-400/60 shadow-xl hover:shadow-2xl hover:shadow-purple-300/40'
                }`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  isDark
                    ? 'bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-transparent'
                    : 'bg-gradient-to-br from-purple-100/80 via-purple-50/50 to-transparent'
                }`} />

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-3xl opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 ${
                  isDark ? 'bg-purple-500' : 'bg-purple-400'
                }`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className={`inline-flex p-5 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isDark
                        ? 'bg-gradient-to-br from-purple-600 to-purple-800 shadow-2xl shadow-purple-500/40 group-hover:shadow-purple-500/60'
                        : 'bg-gradient-to-br from-purple-500 to-purple-700 shadow-2xl shadow-purple-400/40 group-hover:shadow-purple-400/60'
                    }`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    isDark
                      ? 'text-white group-hover:text-purple-300'
                      : 'text-white-900 group-hover:text-purple-600'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 flex-grow transition-colors duration-300 ${
                    isDark
                      ? 'text-white-400 group-hover:text-gray-300'
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}>
                    {service.description}
                  </p>

                  {/* Animated bottom bar */}
                  <div className="relative h-1 rounded-full overflow-hidden bg-gray-200/20">
                    <div className={`absolute inset-0 w-0 group-hover:w-full rounded-full transition-all duration-700 ease-out ${
                      isDark
                        ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400'
                        : 'bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300'
                    }`} />
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl ${
                    isDark
                      ? 'bg-gradient-to-r from-transparent via-purple-400/10 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
                  } translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none ${
          isDark ? 'bg-purple-600' : 'bg-purple-400'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
      </div>
    </div>
  );
}

export default Service;
