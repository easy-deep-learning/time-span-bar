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
  yearWidth: number;
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
  yearWidth,
}: TimeSpanBarProps) => {
  const duration = end.date.getFullYear() - start.date.getFullYear();

  return (
    <div className={classes.component}>
      <h3 className={classes.header}>
        <div className={classes.start}>
          <div className={classes.label}></div>
          <div className={classes.date}>{formatDate(start.date)}</div>
        </div>
        {header}
      </h3>
      <div className={classes.events} style={{ width: duration * yearWidth }}>
        {events.map((event, index) => (
          <div
            className={classes.event}
            key={index}
            style={{
              left:
                (event.info.date.getFullYear() - start.date.getFullYear()) *
                yearWidth,
            }}
          >
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
