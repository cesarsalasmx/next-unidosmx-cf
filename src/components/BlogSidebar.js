import React from "react";

const BlogSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Participa en este proyecto</h3>
        <div className="sidebar__post-wrap">
          <div className="sidebar__post__single">
            <a href="#none" className="thm-btn">
              <span>Ser voluntario</span>
            </a>
          </div>
          <div className="sidebar__post__single">
          <a href="#none" className="thm-btn">
              <span>Ser donante</span>
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categorías </h3>
        <ul className="sidebar__category-list">
          <li className="sidebar__category-list-item">
            <a href="#none">Voluntariado</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Empresa Cool</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Playeras Soy Futuro</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Donante</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
