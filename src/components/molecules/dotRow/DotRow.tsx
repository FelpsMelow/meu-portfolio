import { Dot } from "../../atoms/dot/Dot";
import './DotRow.scss'

type DotRowProps = {
    dotsCount: number;
};

export const DotRow = ({ dotsCount }: DotRowProps) => {
    return (
        <div className="dot-row">
            {
                Array.from({ length: dotsCount }).map((_, index) => (
                    <Dot key={index}/>
                ))
            }
        </div>
    );
};
