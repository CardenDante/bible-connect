// src/pages/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Users, 
  Trophy, 
  Calendar, 
  ChevronRight, 
  Crown, 
  Clock, 
  Star,
  CheckCircle,
  Bookmark,
  Target,
  MessageSquare
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

function Landing() {
  const features = [
    {
      icon: <Book className="h-6 w-6 text-indigo-600" />,
      title: "Track Your Bible Reading",
      description: "Keep track of your daily reading progress, set goals, and maintain your reading streaks."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Join a Community",
      description: "Connect with fellow readers, share insights, and participate in group discussions."
    },
    {
      icon: <Trophy className="h-6 w-6 text-indigo-600" />,
      title: "Achievement System",
      description: "Earn badges and rewards as you progress through your reading journey."
    },
    {
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      title: "Reading Plans",
      description: "Access curated reading plans that guide you through different themes and topics."
    }
  ];

  const topReaders = [
    {
      id: 1,
      name: "Sarah Johnson",
      chaptersRead: 156,
      streak: 45,
      badge: "Gold",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Michael Chen",
      chaptersRead: 142,
      streak: 30,
      badge: "Silver",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Emma Davis",
      chaptersRead: 128,
      streak: 28,
      badge: "Bronze",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const testimonials = [
    {
      id: 1,
      content: "BibleConnect has transformed my daily Bible reading habit. The community features make it so engaging!",
      author: "David Wilson",
      role: "Active Member",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      content: "The progress tracking and achievements make reading the Bible more engaging than ever.",
      author: "Rachel Thompson",
      role: "Community Leader",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      content: "I love how I can connect with others and share insights about what I'm reading.",
      author: "Mark Anderson",
      role: "Bible Study Group Leader",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const stats = [
    { id: 1, name: 'Active Users', value: '10,000+' },
    { id: 2, name: 'Chapters Read', value: '1M+' },
    { id: 3, name: 'Reading Groups', value: '500+' },
    { id: 4, name: 'Countries', value: '50+' }
  ];

  return (
    <div className="bg-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 lg:pt-24 overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 pb-16 md:pb-20 lg:pb-28">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex">
                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                  Latest Updates
                </span>
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Transform Your Bible Reading Journey
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Track your progress, connect with a community of believers, and deepen your understanding of Scripture.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/register"
                  className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 w-full sm:w-auto text-center"
                >
                  Get Started
                </Link>
                <Link 
                  to="/about"
                  className="rounded-md px-4 py-2.5 text-sm font-semibold text-gray-900 w-full sm:w-auto text-center flex items-center justify-center"
                >
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://placehold.co/800x600/indigo/white/png?text=Bible+Connect+App"
                alt="App screenshot"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by readers worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our growing community of believers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-lg text-center">
                <dt className="text-sm font-semibold text-gray-600">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600">Everything You Need</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Features That Enhance Your Reading</p>
            <p className="mt-4 text-lg text-gray-600">
              All the tools you need for consistent Bible reading
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600">Top Readers</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Our Community Leaders</p>
            <p className="mt-4 text-lg text-gray-600">
              Join and climb the leaderboard
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {topReaders.map((reader, index) => (
                <div key={reader.id} className="flex items-center p-4 md:p-6 hover:bg-gray-50 border-b last:border-b-0">
                  <div className="flex-shrink-0 w-8 text-xl font-bold text-gray-400">
                    #{index + 1}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <img
                      src={`https://placehold.co/100x100/indigo/white/png?text=${reader.name[0]}`}
                      alt={reader.name}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium text-gray-900">{reader.name}</h3>
                      <Crown className={`h-4 w-4 ml-2 ${
                        index === 0 ? 'text-yellow-500' :
                        index === 1 ? 'text-gray-400' :
                        'text-amber-600'
                      }`} />
                    </div>
                    <div className="flex items-center mt-1 text-xs text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Book className="h-3 w-3 mr-1" />
                        {reader.chaptersRead} chapters
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {reader.streak} day streak
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">Hear from Our Community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://placehold.co/100x100/indigo/white/png?text=${testimonial.author[0]}`}
                    alt={testimonial.author}
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 md:py-16 lg:py-20 text-center rounded-3xl">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white">
              Start Your Bible Reading Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
              Join thousands of believers who are growing in their faith
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Get started for free
              </Link>
              <Link 
                to="/about" 
                className="rounded-md px-4 py-2.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10"
              >
                Learn more
              </Link>
            </div>
            
            {/* Background effect */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-800 to-purple-800 opacity-90" />
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),transparent)]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;