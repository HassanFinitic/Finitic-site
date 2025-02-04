import React from 'react';
import cn from 'classnames';
import styles from './Grid.module.css'; 

const Grid = ({ children, colsLarge = 4, colsMedium = 3, colsSmall = 1, gap = '20px', className }) => {
  return (
    <div
      className={cn(styles.grid, className)}
      style={{
        '--cols-large': colsLarge,
        '--cols-medium': colsMedium,
        '--cols-small': colsSmall,
        '--gap': gap,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;