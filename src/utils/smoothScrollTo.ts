export function smoothScrollTo(targetY: number, duration = 600) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function easeInOutQuad(t: number): number {
        return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;
        }

        function scroll(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, startY + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
}
