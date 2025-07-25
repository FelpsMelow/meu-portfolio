import { useTheme } from "../../../hooks/usetheme"

type ConfigIconProps = {
    onClick?: () => void;
};

export const ConfigIcon = ({ onClick }: ConfigIconProps) => {

    const { paletaSelecionada } = useTheme()

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="2" stroke={paletaSelecionada.primary.hex.value} stroke-width="2"/>
            <path d="M5.39855 5.87919C4.46882 6.88128 3.7937 8.0705 3.4006 9.34458L4.99991 10.2679C6.33324 11.0377 6.33324 12.9622 4.99991 13.732L3.39889 14.6564C3.5941 15.2864 3.86206 15.9047 4.20576 16.5C4.54945 17.0953 4.95088 17.6364 5.39888 18.1205L6.99994 17.1961C8.33327 16.4263 9.99994 17.3886 9.99994 18.9282L9.99994 20.775C11.2999 21.0716 12.6673 21.0815 14 20.7774L14 18.9283C14 17.3887 15.6667 16.4264 17 17.1962L18.6014 18.1208C19.5312 17.1187 20.2063 15.9295 20.5994 14.6554L19 13.732C17.6667 12.9622 17.6667 11.0377 19 10.2679L20.6011 9.34352C20.4059 8.7135 20.1379 8.09527 19.7942 7.49998C19.4505 6.90468 19.0491 6.36349 18.6011 5.87941L17 6.80377C15.6667 7.57357 14 6.61132 14 5.07172L14 3.22499C12.7001 2.92838 11.3326 2.91844 9.99994 3.22257L9.99994 5.0717C9.99994 6.6113 8.33327 7.57355 6.99994 6.80375L5.39855 5.87919Z" stroke={paletaSelecionada.primary.hex.value} stroke-width="2" stroke-linejoin="round"/>
        </svg>
    )
}