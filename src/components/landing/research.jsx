"use client";

import ResearchName from "./researchName";
import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import CountUp from "react-countup";
import { ProjectCard } from "./projectCard";
import { PublicationCard } from "./publicationCard";

function Research() {
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPublications, setRecentPublications] = useState([]);
  const [counterOn, setCounterOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollingPublications,setScrollingPublications]=useState(true);
  const [scrollingProjects,setScrollingProjects]=useState(true);
  const publicationRef=useRef(null);
  const projectsRef=useRef(null);
  const [data, setData] = useState({
    patents: 0,
    books: 0,
    journals: 0,
    conferences: 0,
    articles: 0,
    projectCount: 0,
  });

  const fetchData = async () => {
    try {
      const [publicationsResponse, projectResponse, patentResponse] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=count`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/patent?type=count`),
      ]);

      const publications = publicationsResponse.data;
      const projectCount = projectResponse.data.projectCount || 0;
      const patentCount = patentResponse.data.patentCount || 0;

      const publicationCounts = publications.reduce(
        (acc, publication) => {
          if (publication.conference_name) acc.conferences += 1;
          if (publication.publisher || publication.isbn) acc.books += 1;
          if (publication.journal_name || publication.doi_url) acc.articles += 1;
          return acc;
        },
        { books: 0, conferences: 0, articles: 0 }
      );

      setData({ ...publicationCounts, projectCount, patents: patentCount });
      setIsLoading(false);
      setCounterOn(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecentPublications = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`);
        const publications = response.data.filter(
          (paper) => paper.journal_quartile === "Q1" && (paper.publication_year === 2024 || paper.publication_year === 2025)
        );
        setRecentPublications(publications);
      } catch (error) {
        console.error("Error fetching recent publications:", error);
      }
    };

    fetchRecentPublications();
  }, []);

  useEffect(()=>{
    const publicationObserver= new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          setScrollingPublications(entry.isIntersecting);
        });
      },
      {threshold:0.1}
    );
    const projectObserver= new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          setScrollingProjects(entry.isIntersecting);
        });
      },
      {threshold:0.1}
    );
    if(publicationRef.current){
      publicationObserver.observe(publicationRef.current);
    }
    if(projectsRef.current){
      projectObserver.observe(projectsRef.current);
    }

    return ()=>{
      if(projectsRef.current){
        projectObserver.unobserve(projectsRef.current);
      }
      if(publicationRef.current){
        publicationObserver.unobserve(publicationRef.current);
      }
    }
  },[publicationRef,projectsRef]);

  useEffect(()=>{
    const scrollSection = (ref, scrolling) => {
      if (!ref.current) return;

      const scroll = () => {
        if (scrolling && ref.current) {
          ref.current.scrollTop += 1;
          if (
            ref.current.scrollTop >=
            ref.current.scrollHeight - ref.current.clientHeight
          ) {
            ref.current.scrollTop = 0;
          }
        }
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    };
    const publicationScroll=scrollSection(publicationRef,scrollingPublications);
    const projectScroll=scrollSection(projectsRef,scrollingProjects);

    return ()=>{
      publicationScroll();
      projectScroll();
    }
  },[scrollingProjects,scrollingPublications]);

  const handleMouseEnterPublications=()=>setScrollingPublications(false);
  const handleMouseLeavePublications=()=>setScrollingPublications(true);

  const handleMouseEnterProjects=()=>setScrollingProjects(false);
  const handleMouseLeaveProjects=()=>setScrollingProjects(true);


  useEffect(() => {
    const fetchRecentProjects = async () => {
      try {
        const projectResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=all`);
        setRecentProjects(projectResponse.data);
      } catch (error) {
        console.error("Error fetching recent projects:", error);
      }
    };

    fetchRecentProjects();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <ResearchName />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <>
            <StatCard title="Patents" icon={<ActivityIcon />} value={data.patents} counterOn={counterOn} />
            <StatCard title="Books" icon={<ClipboardIcon />} value={data.books} counterOn={counterOn} />
            <StatCard title="Projects" icon={<BriefcaseIcon />} value={data.projectCount} counterOn={counterOn} />
            <StatCard title="Articles" icon={<UsersIcon />} value={data.articles} counterOn={counterOn} />
            <StatCard title="Conferences" icon={<CpuIcon />} value={data.conferences} counterOn={counterOn} />
          </>
        {/* {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <StatCard title="Patents" icon={<ActivityIcon />} value={data.patents} counterOn={counterOn} />
            <StatCard title="Books" icon={<ClipboardIcon />} value={data.books} counterOn={counterOn} />
            <StatCard title="Projects" icon={<BriefcaseIcon />} value={data.projectCount} counterOn={counterOn} />
            <StatCard title="Articles" icon={<UsersIcon />} value={data.articles} counterOn={counterOn} />
            <StatCard title="Conferences" icon={<CpuIcon />} value={data.conferences} counterOn={counterOn} />
          </>
        )} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80vw] mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl font-bold text-[#421010] mb-4">Recent Publications</h2>
          <div className="h-[55vh] overflow-y-auto space-y-4" ref={publicationRef} onMouseEnter={handleMouseEnterPublications} onMouseLeave={handleMouseLeavePublications}>
            {recentPublications.length > 0 ? (
              recentPublications.map((publication, index) => (
                <PublicationCard
                  key={index}
                  year={publication.publication_year}
                  authors={publication.authors}
                  journalName={publication.journal_name}
                  title={publication.title}
                  journalQuartile={publication.journal_quartile}
                  volume={publication.volume}
                />
              ))
            ) : (
              <p className="text-gray-500">No recent publications found.</p>
            )}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl font-bold text-[#421010] mb-4">Recent Projects</h2>
          <div className="h-[55vh] overflow-y-auto grid gap-4" ref={projectsRef} onMouseLeave={handleMouseLeaveProjects} onMouseEnter={handleMouseEnterProjects}>
            {recentProjects.length > 0 ? (
              recentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project_title={project.project_title}
                  facultyName={project.investigators}
                  sponsor={project.funding_agency}
                  amount={project.financial_outlay}
                  start={project.start_date}
                  end={project.end_date}
                />
              ))
            ) : (
              <p className="text-gray-500">No recent projects found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Research;

function StatCard({ title, icon, value, counterOn }) {
  return (
    <div className="bg-red-700 rounded-lg p-4 flex flex-col items-center border border-red-700 shadow-md hover:shadow-lg transition-all">
      {icon}
      <h3 className="text-sm font-semibold mt-1.5 text-white">{title}</h3>
      <span className="text-lg font-bold text-white md:text-xl">
        {counterOn ? <CountUp end={value} duration={3} delay={0.5} /> : value}
      </span>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}


function ActivityIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
    );
  }
  
  function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    );
  }
  
  function ClipboardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    );
  }
  
  function CpuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    );
  }
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }