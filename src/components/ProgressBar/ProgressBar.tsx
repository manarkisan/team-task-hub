import { Card } from "../ui/card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar() {
    const percentage = 10;
    return(
        
        <>
        <div className="max-w-500">
        <Card>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </Card>
        </div>
        </>
    )
}