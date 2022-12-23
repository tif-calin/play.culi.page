import React from 'react';

const ProjectBox = ({ children, className }: { children: React.ReactNode, className: string }) => {

  return (
    <li className={`island project ${className}`} >
      {children}
    </li>
  )
};

export default ProjectBox;
