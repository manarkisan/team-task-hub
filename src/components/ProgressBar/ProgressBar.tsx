import { Card } from "../ui/card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar() {
  return (
    <div style={{ width: '80px', height: '80px' }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}