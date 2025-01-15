// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Heart, Globe, Target, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

function About() {
  const stats = [
    { id: 1, name: 'Active Users', value: '10,000+' },
    { id: 2, name: 'Countries', value: '50+' },
    { id: 3, name: 'Community Groups', value: '500+' },
    { id: 4, name: 'Chapters Read', value: '1M+' }
  ];

  const values = [
    {
      title: "Scripture First",
      description: "We believe in the transformative power of God's Word and prioritize biblical accuracy in everything we do.",
      icon: <Book className="w-6 h-6" />
    },
    {
      title: "Community Focused",
      description: "Building meaningful connections between believers to encourage and support each other in their faith journey.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Global Impact",
      description: "Making Bible reading accessible to believers worldwide through technology and innovation.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Purposeful Innovation",
      description: "Using technology thoughtfully to enhance, not replace, the personal experience of reading Scripture.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://placehold.co/400x400/indigo/white/png?text=JD",
      bio: "Leading with vision and purpose to make Bible reading accessible to all."
    },
    {
      name: "Sarah Johnson",
      role: "Community Lead",
      image: "https://placehold.co/400x400/indigo/white/png?text=SJ",
      bio: "Building and nurturing our growing community of believers."
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      image: "https://placehold.co/400x400/indigo/white/png?text=MC",
      bio: "Driving innovation in our platform's development."
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At BibleConnect, we're dedicated to making Bible reading a daily habit through community engagement and innovative technology. Our goal is to help believers grow deeper in their faith through consistent Scripture reading.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Drives Us Forward
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                      {value.icon}
                    </div>
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Dedicated individuals working to make Bible reading more accessible and engaging.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm leading-6 text-indigo-600">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600 text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative isolate mt-12 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions or want to learn more about BibleConnect? We'd love to hear from you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View FAQ <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;