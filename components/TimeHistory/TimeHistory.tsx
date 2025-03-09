import { TimeSpanBarProps, TimeSpanBar } from "../TimeSpanBar/TimeSpanBar";
import { useState, useCallback, useEffect } from "react";
import classes from "./TimeHistory.module.css";

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
    start: new Date("1961-01-01"),
    end: new Date("1991-01-01"),
    // Наша эра :)
  },
  stepInYears = 1,
}: TimeHistoryProps) => {
  const [visibleRange, setVisibleRange] = useState(initialVisibleRange);

  const endYear = visibleRange.end.getFullYear();
  const startYear = visibleRange.start.getFullYear();
  const yearWidth = 50; // px

  const rangeStep = 5; // years

  return (
    <div className={classes.component}>
      <div className={classes.controls}>
        <button onClick={() => setVisibleRange(initialVisibleRange)}>
          Reset
        </button>
        <button
          onClick={() =>
            setVisibleRange((prev) => ({
              start: new Date(
                prev.start.setFullYear(prev.start.getFullYear() - rangeStep)
              ),
              end: new Date(
                prev.end.setFullYear(prev.end.getFullYear() - rangeStep)
              ),
            }))
          }
        >
          {"<"} Back
        </button>
        <button
          onClick={() =>
            setVisibleRange((prev) => ({
              start: new Date(
                prev.start.setFullYear(prev.start.getFullYear() + rangeStep)
              ),
              end: new Date(
                prev.end.setFullYear(prev.end.getFullYear() + rangeStep)
              ),
            }))
          }
        >
          Forward {">"}
        </button>
      </div>
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
      <div className={classes.currentFrame}>
        <div className={classes.items}>
          {historyItems.map((item, index) => (
            <div
              className={classes.item}
              key={index}
              style={{
                left: `${
                  (item.start.date.getFullYear() - startYear) * yearWidth
                }px`,
                width: `${
                  (item.end?.date?.getFullYear() -
                    item.start.date.getFullYear()) *
                  yearWidth
                }px`,
              }}
            >
              <TimeSpanBar {...item} yearWidth={yearWidth} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeHistory;
