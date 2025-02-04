import React from 'react';
import cn from 'classnames';
import styles from './Flex.module.css';

const Flex = ({
  children,
  direction = 'row',
  directionLarge = direction,
  directionMedium = direction,
  directionSmall = direction,
  justify = 'flex-start',
  align = 'stretch',
  gap = '0',
  wrap = 'nowrap',
  className,
}) => {
  return (
    <div
      className={cn(styles.flex, className)}
      style={{
        '--direction': direction,
        '--direction-large': directionLarge,
        '--direction-medium': directionMedium,
        '--direction-small': directionSmall,
        '--justify': justify,
        '--align': align,
        '--gap': gap,
        '--wrap': wrap,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;