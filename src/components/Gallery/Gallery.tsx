import { GalleryData } from './GalleryData';
import './Gallery.css'; // <--- Make sure this line is added!

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {GalleryData.map((project) => (
          <div key={project.title} className="gallery-item">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
