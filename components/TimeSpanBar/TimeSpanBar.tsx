import React from "react";

import classes from "./TimeSpanBar.module.css";

type Location = {
  name: string;
  latitude: number;
  longitude: number;
};

export interface TimeSpanBarProps {
  start: {
    date: Date;
    location?: Location;
  };
  end?: {
    date: Date;
    location?: Location;
  };
  events: {
    name: string;
    info: {
      date: Date;
      image?: string;
      location?: Location;
    };
  }[];
  header: string;
  image: string;
}

const TimeSpanBar = ({
  start,
  end,
  events,
  header,
  image,
}: TimeSpanBarProps) => {
  return (
    <div className={classes.component}>
      <h3 className={classes.header}>{header}</h3>
      <div className={classes.start}>
        <div className={classes.label}>Дата рождения</div>
        <div className={classes.date}>{start.date.toLocaleDateString()}</div>
      </div>
      <div className={classes.events}>
        {events.map((event, index) => (
          <div className={classes.event} key={index}>
            <div className={classes.eventDate}>
              {event.info.date.toLocaleDateString()}
            </div>
            <div className={classes.eventName}>{event.name}</div>
            <div className={classes.eventLocation}>
              {event.info.location?.name}
            </div>
            <img width={64} src={event.info.image} alt={event.name} />
          </div>
        ))}
      </div>
      {end && (
        <div className={classes.end}>
          <div className={classes.label}>Дата смерти</div>
          <div className={classes.date}>{end.date.toLocaleDateString()}</div>
        </div>
      )}
    </div>
  );
};

export { TimeSpanBar };
