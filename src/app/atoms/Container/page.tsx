import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; 
  subClasses?: string; 
}

const Container: React.FC<ContainerProps> = ({ children, className ,subClasses }) => {
  return (
    <div className={`${className || ''}`}>
        <div className={`max-w-[1200px] lg:px-0 px-10 m-auto w-screen ${subClasses || ""}`}>
          {children}
        </div>
    </div>
  );
};

export default Container;
