import { DotRow } from "../dotRow/DotRow"
import './DotMatrixPattern.scss'

type DotMatrixPatternProps = {
    rows: number,
    columns: number
}

export const DotMatrixPattern = ({rows, columns} : DotMatrixPatternProps) => {
    return (
        <div className="dot-matrix-pattern">
            {
                Array.from({ length: rows}).map((_, index) => (
                    <DotRow dotsCount={columns} key={index}/>
                ))
            }
        </div>
    )
}