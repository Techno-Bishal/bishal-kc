import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';


export function Hero() {
  const roles = [
    "MERN Developer",
    "SelfLearner",
    "Problem Solver",
    "CS Student",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
              Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Bishal Kc.
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="absolute w-24 h-24 bg-blue-600 top-0 left-0 rounded-full animate-floating flex items-center justify-center">
              <img src="/next.png" alt="Next.js" className="w-24 h-24" />
            </div>
            <div className="absolute w-24 h-24 bg-purple-600 bottom-0 right-0 rounded-full animate-floating delay-150 flex items-center justify-center">
              <img src="/postgres.png" alt="React" className="w-24 rounded-full h-24" />
            </div>
            <div className="absolute w-20 h-20 bg-white top-4 right-4 rounded-full animate-floating delay-300 flex items-center justify-center">
              <img src="/react.png" alt="TypeScript" className="w-20 h-20" />
            </div>
            <div className="absolute w-20 h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450 flex items-center justify-center">
              <img src="/mongo.png" alt="Sass" className="w-20 h-20" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/profile-pic.png"
              alt="Bishal Kc"
              className="w-55 h-55 rounded-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
