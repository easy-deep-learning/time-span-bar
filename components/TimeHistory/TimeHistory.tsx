import { TimeSpanBarProps, TimeSpanBar } from "../TimeSpanBar/TimeSpanBar";

import styles from "./TimeHistory.module.css";

export interface TimeHistoryProps {
  historyItems: TimeSpanBarProps[];
  range: {
    start: Date;
    end: Date;
  };
}

const TimeHistory = ({ historyItems, range }: TimeHistoryProps) => {
  return (
    <div className={styles.component}>
      {historyItems.map((item) => (
        <TimeSpanBar {...item} />
      ))}
    </div>
  );
};

export default TimeHistory;
