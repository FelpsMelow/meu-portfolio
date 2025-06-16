import { smoothScrollTo } from "./smoothScrollTo";

export function scrollToSection(id: string) {
    const element = document.getElementById(id);
    console.log(id)
    console.log(element)
    if (element) {
        const offsetTop = element.offsetTop;
        smoothScrollTo(offsetTop, 800);
    }
}
