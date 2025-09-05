"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  TrendingUp,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  MapPin,
  X,
} from "lucide-react";
import teamData from "./TeamData";
import Image from "next/image";

const OrgChart = () => {
  const [activeTab, setActiveTab] = useState("founders");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  // Animate cards sequentially
  useEffect(() => {
    const ids = ["gordon", "robert", "christine", "bernard", "tom"];
    ids.forEach((id, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, id]);
      }, index * 300);
    });
  }, []);

  const allTeamMembers = [...teamData.founders, ...teamData.management];

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const MinimalCard = ({ person, onClick }: any) => {
    const isVisible = visibleCards.includes(person.id);

    const IconComponent = person.role.includes("Founder")
      ? Award
      : person.role.includes("CEO")
      ? TrendingUp
      : person.role.includes("CFO")
      ? Briefcase
      : Users;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        onClick={onClick}
        className="cursor-pointer relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto container "
      >
        <div className={`relative h-24 bg-[#e1e1e1] overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="absolute top-3 right-3">
            <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
              <MapPin className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        <div className="relative px-4 pb-4">
          <div className="flex justify-center -mt-10 mb-2">
            <div className="relative">
              <Image
                src={person.image}
                alt={`${person.name}'s profile`}
                className="w-22 h-25 rounded-full object-cover border-3 border-white shadow-md"
                loading="lazy"
                width={22}
                height={25}
              />
              <div
                className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center shadow-sm ring-2 ring-white`}
              >
                <IconComponent className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Name & Role */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {person.name}
            </h3>
            <p
              className={`text-sm font-medium bg-gradient-to-r ${person.gradient} bg-clip-text text-transparent`}
            >
              {person.role}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const DetailModal = ({ person, onClose }: any) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const IconComponent = person.role.includes("Founder")
      ? Award
      : person.role.includes("CEO")
      ? TrendingUp
      : person.role.includes("CFO")
      ? Briefcase
      : Users;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full grid md:grid-cols-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`relative bg-gradient-to-br ${person.gradient}`}>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative flex flex-col items-center justify-center h-full p-6">
              <div className="relative mb-4">
                <Image
                  src={person.image}
                  alt={`${person.name}'s profile`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  loading="lazy"
                  width={32}
                  height={32}
                />
                <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center shadow-lg ring-4 ring-white`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              {/* Name & Role */}
              <h3 className="text-xl font-bold text-white mb-1">
                {person.name}
              </h3>
              <p className="font-semibold text-white/90 text-sm mb-2">
                {person.role}
              </p>
              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/90" />
                <span className="text-white/90 text-sm font-medium">
                  {person.location}
                </span>
              </div>
            </div>
          </div>

          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {
              /* eslint-disable @typescript-eslint/no-explicit-any */
              person.highlights.map(({ highlight, i }: any) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 bg-gradient-to-r ${person.gradient}/10 text-xs font-medium text-gray-700 rounded-full border border-gray-200`}
                >
                  {highlight}
                </span>
              ))}
            </div>
            <motion.p
              initial={{ height: "auto" }}
              animate={{ height: isExpanded ? "auto" : "2.5rem" }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden"
            >
              {isExpanded ? person.fullBio : person.shortBio}
            </motion.p>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex gap-2">
                <a
                  href={`mailto:${person.name
                    .toLowerCase()
                    .replace(" ", ".")}@lycaninternational.com`}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition duration-200"
                  aria-label={`Email ${person.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition duration-200"
                  aria-label={`${person.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={toggleExpand}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-xs bg-gradient-to-r ${person.gradient} text-white hover:shadow-lg transition duration-200`}
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show Less" : "Learn More"}
                {isExpanded ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="min-h-screen relative">
        <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-3 bg-gray-300"></div>
      </div>
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <div className="border-b-4 border-black pb-12 mb-16">
              <div className="text-center space-y-6">
                <div className="inline-block px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest">
                  Corporate Leadership Structure
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                  LYCAN
                  <br />
                  <span className="text-5xl md:text-7xl text-gray-700 font-light">
                    INTERNATIONAL
                  </span>
                </h1>
                <div className="w-48 h-2 bg-black mx-auto"></div>

                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic max-w-4xl mx-auto border-l-4 border-gray-400 pl-8">
                  &quot;Building excellence through strategic leadership, operational
                  expertise, and unwavering commitment to transformational
                  growth across East Africa&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full shadow-md p-1">
              <button
                onClick={() => setActiveTab("founders")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === "founders"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Founders
              </button>
              <button
                onClick={() => setActiveTab("management")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === "management"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Management
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(activeTab === "founders"
              ? teamData.founders
              : teamData.management
            ).map((person) => (
              <MinimalCard
                key={person.id}
                person={person}
                onClick={() => setSelectedPerson(person.id)}
              />
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedPerson && (
              <DetailModal
                person={allTeamMembers.find((p) => p.id === selectedPerson)}
                onClose={() => setSelectedPerson("")}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="mt-20 pt-12 mb-10 border-t-4 border-black">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none">
              LEADERSHIP
              <br />
              <span className="text-gray-600 font-light">EXCELLENCE</span>
            </h2>
            <div className="w-32 h-2 bg-black mx-auto"></div>

            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed italic">
              Combining decades of international experience with deep local
              expertise to drive transformational growth and operational
              excellence across East Africa&apos;s sports and education sectors.
            </p>

            {/* <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="px-12 py-4 bg-black text-white font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300">
                Contact Leadership
              </button>
              <button className="px-12 py-4 border-2 border-black text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                View Full Profiles
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgChart;
