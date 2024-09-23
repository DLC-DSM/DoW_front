export const Colors = {
    Black: "#000000",
    Gray900: "#111111",
    Gray800: "#222222",
    Gray700: "#444444",
    Gray600: "#666666",
    Gray500: "#888888",
    Gray400: "#AAAAAA",
    Gray300: "#cccccc",
    Gray200: "#d9d9d9",
    Gray100: "#eeeeee",
    Gray50: "#f6f6f6",
    White: "#ffffff",
    GrayHover: "#aaaaaa80",
    CriticalMain: "#db2c36",
    CriticalBackground: "#ffe6d8",
    Blue: "#1263FF",
} as const

export type colorsKeyOfType = keyof typeof Colors
