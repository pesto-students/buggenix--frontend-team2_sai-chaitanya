import React from 'react';
import styles from './Card.module.css';
import { Avatar, Card, Skeleton, Switch } from 'antd';


const CardComponent = () => {
  return (
    <div className={styles.card}>
        <Card
            style={{
                width: 300,
                height:95
            }}
        >
            <p className={styles.cardHeading}>Customer engagement</p>
            <div className={styles.cardContent}>
                <span className={styles.ellipse}></span>
                <span className={styles.itemStatus}>1 item,1 open</span>
                <p className={styles.hoverCard}>
                    <span className={styles.avatar}>AV</span>
                    <span>Aditya</span>
                    <span>Oct 17, 2022</span>
                </p>
            </div>
        </Card>
    </div>
  )
}

export default CardComponent