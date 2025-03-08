import { TimeSpanBarProps, TimeSpanBar } from "../TimeSpanBar/TimeSpanBar";

import classes from "./TimeHistory.module.css";

export interface TimeHistoryProps {
  historyItems: TimeSpanBarProps[];
  range?: {
    start: Date;
    end: Date;
  };
  stepInYears?: number;
}

const TimeHistory = ({
  historyItems,
  range = {
    start: new Date("1890-01-01"),
    end: new Date(Date.now()),
  },
  stepInYears = 5,
}: TimeHistoryProps) => {
  const endYear = range.end.getFullYear();
  const startYear = range.start.getFullYear();
  const columnCount = Math.ceil((endYear - startYear) / stepInYears);
  const columnWidth = 100 / columnCount;
  const yearWidth = columnWidth / stepInYears;

  return (
    <div className={classes.component}>
      <div className={classes.years}>
        {Array.from({ length: columnCount }, (_, index) => (
          <div
            tabIndex={index}
            className={classes.year}
            style={{ width: `${columnWidth}%` }}
            key={index}
          >
            {startYear + index * stepInYears}
          </div>
        ))}
      </div>
      <div className={classes.items}>
        {historyItems.map((item, index) => (
          <div
            className={classes.item}
            key={index}
            style={{
              left: `${
                (item.start.date.getFullYear() - startYear) * yearWidth
              }%`,
              width: `${
                yearWidth *
                (item.end?.date?.getFullYear() - item.start.date.getFullYear())
              }%`,
            }}
          >
            <TimeSpanBar {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeHistory;
