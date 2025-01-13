import React from 'react';
import styles from '../styles/MissionaryPage.module.css';

const missionaries = [
  {
    name: "Jim Elliot",
    location: "Ecuador, South America",
    description: "A missionary who gave his life to bring the Gospel to the Waorani people of Ecuador. His courage and faith continue to inspire generations.",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FpKbsbyEPPQ?si=0WVg4rka3HvTcyx-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    name: "Samuel Morris",
    location: "Liberia, West Africa & Indiana, USA",
    description: "The inspiring story of a tribal prince who escaped captivity, found Christ, and shared the Gospel in America. ",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lnTE_pKV3gg?si=m1kym2yKNZNRS00I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  
  },
  {
    name: "John Bunyan",
    location: "England, United Kingdom",
    description: "The author of 'The Pilgrim's Progress,' a Christian allegory that has guided millions in their spiritual journey.",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nK6ZCJLq8Wc?si=_TioGzlYzrbPkybX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    name: "The Pilgrim's Progress",
    location: "England, United Kingdom",
    description: "The author of 'The Pilgrim's Progress,' a powerful allegory guiding Christians through life's spiritual journey to eternal salvation.",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XPB_GDg9qnk?si=721vgZNNRP_y2ylY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    name: "Martin Luther",
    location: "Wittenberg, Germany",
    description: "Known as the Father of the Reformation, Martin Luther challenged the Catholic Church's practices, sparking a religious revolution. ",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hcpoRT4WZSs?si=lU9Y-pULEVP4Pge4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    name: "Perpetua",
    location: "Carthage, Roman North Africa",
    description: "A noblewoman who faced martyrdom for her Christian faith, Perpetua's courage and visions steadfast in their faith despite persecution.",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cFMbuTbNDvc?si=xgHrxhUwtYvwkvDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  // Add more missionaries...
];

export default function MissionaryPage() {
  return (
    <section className={styles.missionarySection}>
      <h2 className={styles.heading}>Missionary Work</h2>
      <p className={styles.tagline}>
        Discover the impactful stories of our missionaries spreading love and faith globally.
      </p>
      <div className={styles.missionaryGrid}>
        {missionaries.map((missionary, index) => (
          <div key={index} className={styles.card}>
            <div dangerouslySetInnerHTML={{ __html: missionary.embedCode }}></div>
            <h3>{missionary.name}</h3>
            <p>{missionary.location}</p>
            <p>{missionary.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
