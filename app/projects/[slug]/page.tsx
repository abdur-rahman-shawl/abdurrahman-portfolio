import { notFound } from "next/navigation";
import { getProjectBySlug, projectsData } from "../../../lib/projects";
import ProjectHero from "../../../components/ProjectHero";
import ProjectNarrative from "../../../components/ProjectNarrative";
import ProjectImpact from "../../../components/ProjectImpact";
import ProjectNav from "../../../components/ProjectNav";
import ContactFooter from "../../../components/ContactFooter";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Protocol Data`,
    description: project.problemStatement,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full flex-col flex bg-[var(--background)]">
      <ProjectHero project={project} />
      <ProjectNarrative project={project} />
      <ProjectImpact project={project} />
      <ProjectNav project={project} />
      <ContactFooter />
    </main>
  );
}
