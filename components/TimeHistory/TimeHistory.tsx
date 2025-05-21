import { TimeSpanBarProps, TimeSpanBar } from "../TimeSpanBar/TimeSpanBar";
import { useState, useCallback, useEffect } from "react";
import classes from "./TimeHistory.module.css";

/**
 * Props for the TimeHistory component
 * @param historyItems Array of TimeSpanBarProps objects representing timeline items to display
 * @param visibleRange Optional date range to show initially. Defaults to 1961-1991
 * @param stepInYears Optional step size in years for scrolling. Defaults to 1
 */
export interface TimeHistoryProps {
  historyItems: TimeSpanBarProps[];
  visibleRange?: {
    start: Date;
    end: Date;
  };
  stepInYears?: number;
}

const TimeHistory = ({
  historyItems,
  visibleRange: initialVisibleRange = {
    start: new Date("1881-01-01"),
    end: new Date("1991-01-01"),
    // Наша эра :)
  },
  stepInYears = 1,
}: TimeHistoryProps) => {
  const [visibleRange, setVisibleRange] = useState(initialVisibleRange);

  const endYear = visibleRange.end.getFullYear();
  const startYear = visibleRange.start.getFullYear();
  const yearWidth = 50; // px

  return (
    <div className={classes.component}>
      <div className={classes.years}>
        {Array.from(
          {
            length: endYear - startYear,
          },
          (_, index) => (
            <div
              tabIndex={index}
              className={classes.year}
              style={{ width: yearWidth }}
              key={startYear + index}
            >
              {startYear + index}
            </div>
          )
        )}
        <div
          tabIndex={endYear}
          className={classes.year}
          style={{ width: yearWidth }}
          key={endYear}
        >
          {endYear}
        </div>
      </div>

      <div className={classes.items}>
        {historyItems.map((item, index) => (
          <div
            className={classes.item}
            key={index}
            style={{
              left: (item.start.date.getFullYear() - startYear) * yearWidth,
            }}
          >
            <TimeSpanBar {...item} yearWidth={yearWidth} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeHistory;
