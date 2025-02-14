import React from 'react';
import styles from './CustomGrid.module.css'; 
import Flex from '../flex/Flex';
import Image from 'next/image';

const CustomGrid = ({ cards }) => {

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <div
          data-aos="zoom-in-up"
          key={card.id}
          className={styles.card}
          style={{
            gridColumn:
              index % 4 === 0 // First card in every 4-card cycle (rows)
                ? 'span 3' // Double width
                : index % 4 === 1 // Second card in every 4-card cycle
                ? 'span 2' // Normal width
                : index % 4 === 2 // Third card in every 4-card cycle
                ? 'span 2' // Normal width
                : 'span 3', // Fourth card in every 4-card cycle (double width)
          }}
        >
          <Flex direction="column" gap="50px">
            <div className={styles.heading}>
              <Flex direction="row" justify="space-between" align="center">
                <div className={styles.title}>{card.title}</div>
                <div className={styles.icon}>
                <Image src={card.icon} width={30} height={30} alt='icon'></Image>
                </div>

              </Flex>
            </div>
            <div className={styles.content}>
                {card.content}
            </div>
        </Flex>
        </div>
      ))}
    </div>
  );
};

export default CustomGrid;