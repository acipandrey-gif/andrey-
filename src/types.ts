import React from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "Language" | "Framework" | "Tool" | "Other";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}
