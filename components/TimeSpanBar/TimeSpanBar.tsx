import React from "react";

import classes from "./TimeSpanBar.module.css";

type TimeSpanBarProps = {
  startDate: Date;
  endDate?: Date;
  events: {
    name: string;
    date: Date;
  }[];
  header: string;
  image: string;
};

const TimeSpanBar = ({
  startDate,
  endDate,
  events,
  header,
  image,
}: TimeSpanBarProps) => {
  return (
    <div className={classes.component}>
      <div className={classes.header}>{header}</div>
      <div className={classes.content}>
        <div className={classes.start}>
          <div className={classes.label}>Дата рождения</div>
          <div className={classes.date}>{startDate.toLocaleDateString()}</div>
        </div>
        <img width={64} src={image} alt={header} className={classes.image} />
        <div className={classes.events}>
          {events.map((event) => (
            <div className={classes.event}>{event.name}</div>
          ))}
        </div>
        {endDate && (
          <div className={classes.end}>
            <div className={classes.label}>Дата смерти</div>
            <div className={classes.date}>{endDate.toLocaleDateString()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TimeSpanBar };
