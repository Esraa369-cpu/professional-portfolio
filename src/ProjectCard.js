export default function ProjectCard({ title, image, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </a>
  );
}

