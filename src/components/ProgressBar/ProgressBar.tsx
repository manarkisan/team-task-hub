import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div style={{ width: '80px', height: '80px' }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}