import ProjectCard from "./ProjectCard";

const projects = [
  { id: 1, title: "Mangata & Gallo", image: "/images/mangata-gallo.jpg", link: "https://esraa369-cpu.github.io/mangata-gallo/" },
  { id: 2, title: "Calculator App", image: "/images/calculator.jpg", link: "https://esraa369-cpu.github.io/Calculator-App/" },
  { id: 3, title: "My Portfolio", image: "/images/my-portfolio.jpg", link: "https://esraa369-cpu.github.io/My-Portfolio/" },
  { id: 4, title: "React App", image: "/images/my-app.jpg", link: "https://esraa369-cpu.github.io/my-app/" },
];

export default function PortfolioGrid() {
  return (
    <section id="projects" className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

