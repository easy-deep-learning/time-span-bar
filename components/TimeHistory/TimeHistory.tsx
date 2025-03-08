import { TimeSpanBarProps, TimeSpanBar } from "../TimeSpanBar/TimeSpanBar";
import { useState, useCallback, useEffect } from "react";
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
  range: initialRange = {
    start: new Date("1890-01-01"),
    end: new Date(Date.now()),
  },
  stepInYears: initialStepInYears = 5,
}: TimeHistoryProps) => {
  const [stepInYears, setStepInYears] = useState(initialStepInYears);
  const [range, setRange] = useState(initialRange);

  const handleZoom = useCallback(
    (zoomIn: boolean) => {
      // Adjust step size
      const delta = zoomIn ? -1 : 1;
      setStepInYears((prev) => Math.max(1, Math.min(20, prev + delta)));

      // Adjust range by changing start date only
      const currentSpan = range.end.getFullYear() - range.start.getFullYear();
      const scaleFactor = zoomIn ? 0.9 : 1.1; // 10% change
      const newSpan = Math.max(10, Math.min(200, currentSpan * scaleFactor));

      // Calculate new start date based on fixed end date
      const newStart = new Date(
        Math.floor(range.end.getFullYear() - newSpan),
        0,
        1
      );

      setRange({ start: newStart, end: range.end });
    },
    [range]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.metaKey || e.ctrlKey) {
        e.preventDefault();
        handleZoom(e.deltaY < 0);
      }
    },
    [handleZoom]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          handleZoom(e.key === "ArrowUp");
        }
      }
    },
    [handleZoom]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const endYear = range.end.getFullYear();
  const startYear = range.start.getFullYear();
  const columnCount = Math.ceil((endYear - startYear) / stepInYears);
  const columnWidth = 100 / columnCount;
  const yearWidth = columnWidth / stepInYears;

  return (
    <div className={classes.component} onWheel={handleWheel}>
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
                ((item?.end?.date.getFullYear() ?? new Date().getFullYear()) -
                  item.start.date.getFullYear())
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
