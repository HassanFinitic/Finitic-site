import React from 'react';
import styles from './CustomGrid.module.css'; // Assuming you're using SCSS for styling

const CustomGrid = ({ cards }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={styles.card}
          style={{
            gridColumn:
              index % 4 === 0 // First card in every 4-card cycle (rows)
                ? 'span 2' // Double width
                : index % 4 === 1 // Second card in every 4-card cycle
                ? 'span 1' // Normal width
                : index % 4 === 2 // Third card in every 4-card cycle
                ? 'span 1' // Normal width
                : 'span 2', // Fourth card in every 4-card cycle (double width)
          }}
        >
            <div className={styles.heading}>
                <div className={styles.title}>{card.title}</div>
                <div className={styles.icon}></div>
            </div>
            <div className={styles.content}>
                {card.content}
            </div>
        </div>
      ))}
    </div>
  );
};

export default CustomGrid;