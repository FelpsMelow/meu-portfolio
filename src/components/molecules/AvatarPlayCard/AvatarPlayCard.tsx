import { useTheme } from "../../../hooks/usetheme";
import "./AvatarPlayCard.scss";

type AvatarPlayCardProps = {
  perfilImg: string;
};

export const AvatarPlayCard = ({ perfilImg }: AvatarPlayCardProps) => {
  const theme = useTheme();

  return (
    <div className="avatar-play-card-wrapper">
      <div className="background-avatar-play-card-wrapper">
        <svg
          viewBox="0 0 1200 1266"
          fill="none"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <path
            d="M1123.5 555.833C1157.5 575.463 1157.5 624.537 1123.5 644.167L376.5 1075.45C342.5 1095.08 300 1070.54 300 1031.28L300 168.719C300 129.46 342.5 104.922 376.5 124.552L1123.5 555.833Z"
            fill={theme.theme.primary}
          />
        </svg>
      </div>
      <div className="avatar-play-card">
        <img src={perfilImg} alt="Avatar" />
      </div>
    </div>
  );
};
