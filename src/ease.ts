/**
 * conventional easing functions
 * credit https://easings.net/
 */

type tEaseFunction = (x: number) => number;

// sine
export const easeInSine: tEaseFunction = (x: number) => {
    return 1 - Math.cos((x * Math.PI) / 2);
};

export const easeOutSine: tEaseFunction = (x: number) => {
    return Math.sin((x * Math.PI) / 2);
};

export const easeInOutSine: tEaseFunction = (x: number) => {
    return -(Math.cos(Math.PI * x) - 1) / 2;
};

// quad
export const easeInQuad: tEaseFunction = (x: number) => {
    return x * x;
};

export const easeOutQuad: tEaseFunction = (x: number) => {
    return 1 - (1 - x) * (1 - x);
};

export const easeInOutQuad: tEaseFunction = (x: number) => {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};

// cubic
export const easeInCubic: tEaseFunction = (x: number) => {
    return x * x * x;
};

export const easeOutCubic: tEaseFunction = (x: number) => {
    return 1 - Math.pow(1 - x, 3);
};

export const easeInOutCubic: tEaseFunction = (x: number) => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

// quart
export const easeInQuart: tEaseFunction = (x: number) => {
    return x * x * x * x;
};

export const easeOutQuart: tEaseFunction = (x: number) => {
    return 1 - Math.pow(1 - x, 4);
};

export const easeInOutQuart: tEaseFunction = (x: number) => {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
};

// quint
export const easeInQuint: tEaseFunction = (x: number) => {
    return x * x * x * x * x;
};

export const easeOutQuint: tEaseFunction = (x: number) => {
    return 1 - Math.pow(1 - x, 5);
};

export const easeInOutQuint: tEaseFunction = (x: number) => {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
};

// expo
export const easeInExpo: tEaseFunction = (x: number) => {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
};

export const easeOutExpo: tEaseFunction = (x: number) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};

export const easeInOutExpo: tEaseFunction = (x: number) => {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2;
};

// circ
export const easeInCirc: tEaseFunction = (x: number) => {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
};

export const easeOutCirc: tEaseFunction = (x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
};

export const easeInOutCirc: tEaseFunction = (x: number) => {
    return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
};

// back
export const easeInBack: tEaseFunction = (x: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * x * x * x - c1 * x * x;
};

export const easeOutBack: tEaseFunction = (x: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

export const easeInOutBack: tEaseFunction = (x: number) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};

// elastic
export const easeInElastic: tEaseFunction = (x: number) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
};

export const easeOutElastic: tEaseFunction = (x: number) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

export const easeInOutElastic: tEaseFunction = (x: number) => {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};

// bounce
export const easeInBounce: tEaseFunction = (x: number) => {
    return 1 - easeOutBounce(1 - x);
};

export const easeOutBounce: tEaseFunction = (x: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
};

export const easeInOutBounce: tEaseFunction = (x: number) => {
    return x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2;
};
