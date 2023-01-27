import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SidebarMenu.module.css';

const menuItemsConfig = [
  {
    id: 1,
    text: 'Search recipes',
    path: '/recipes',
  },
  {
    id: 2,
    text: 'Bookmarked recipes',
    path: '/recipes?bookmarked=true',
  },
];

const SidebarMenu = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.sidebar}>
      {menuItemsConfig.map(({ id, text, path }) => (
        <p
          className={styles.sidebarItem}
          onClick={() => {
            navigate(path);
          }}
          key={id}
        >
          {text}
        </p>
      ))}
    </nav>
  );
};

export default SidebarMenu;
