import React from "react";

import "./TimeSpanBar.css";

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
    <div className="time-span-bar">
      <div className="time-span-bar__header">{header}</div>
      <div className="time-span-bar__content">
        <div className="time-span-bar__start-date">
          <div className="time-span-bar__label">Дата рождения</div>
          <div className="time-span-bar__date">
            {startDate.toLocaleDateString()}
          </div>
        </div>
        <img
          width={64}
          src={image}
          alt={header}
          className="time-span-bar__image"
        />
        <div className="time-span-bar__events">
          {events.map((event) => (
            <div className="time-span-bar__event">{event.name}</div>
          ))}
        </div>
        {endDate && (
          <div className="time-span-bar__end-date">
            <div className="time-span-bar__label">Дата смерти</div>
            <div className="time-span-bar__date">
              {endDate.toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TimeSpanBar };
