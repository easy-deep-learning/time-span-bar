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
  end: {
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

const formatDate = (date: Date) => {
  return date
    .toLocaleDateString("en-CA", {
      year: "numeric",
    })
    .replace(/-/g, ".");
};

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
        <div className={classes.label}></div>
        <div className={classes.date}>{formatDate(start.date)}</div>
      </div>
      <div className={classes.events}>
        {events.map((event, index) => (
          <div className={classes.event} key={index}>
            <div className={classes.eventDate}>
              {formatDate(event.info.date)}
            </div>
            <div className={classes.eventName}>{event.name}</div>
            <div className={classes.eventLocation}>
              {event.info.location?.name}
            </div>
            <img
              className={classes.eventImage}
              width={64}
              src={event.info.image}
              alt={event.name}
            />
          </div>
        ))}
      </div>
      {end && (
        <div className={classes.end}>
          <div className={classes.label}></div>
          <div className={classes.date}>{formatDate(end.date)}</div>
        </div>
      )}
    </div>
  );
};

export { TimeSpanBar };
