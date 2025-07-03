import './TechCarousel.scss'

type TechCarouselProps = {
    techIcons: { [key: string]: string }
}

export const TechCarousel = ({ techIcons }: TechCarouselProps) => {
    const techEntries = Object.entries(techIcons)
    const marqueeList = [...techEntries, ...techEntries]

    return (
        <div className="tech-carousel-marquee">
            <ul className="tech-carousel">
                {marqueeList.map(([techName, iconSrc], idx) => (
                    <li className="tech-carousel-item" key={techName + idx}>
                        <img src={iconSrc} alt={techName} title={techName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}