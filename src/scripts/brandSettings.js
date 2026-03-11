export const brandSettings = {
    logo: {
        src: "/logo.jpg", // Add logo image URL here (e.g., "/logo.png")
        alt: "New York Times Cooking",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "/lightlogo.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "/white.png", // Add image path
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "/black.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "/white.png", // Add image path
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "/favicon.svg", // Add favicon URL here
    typography: {
        primaryFont: "Franklin",  // this will automatically get set as the page font
        secondaryFont: "Cheltenham", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        tertiaryFont: "Karnak",
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "Cooking Red (Primary)", hex: "#E33D26" },
        { name: "Black 1 (Primary)", hex: "#222222" },
        { name: "White (Primary)", hex: "#ffffff" },
        { name: "Smoke Grey (Secondary)", hex: "#767676" },
        { name: "Cool Grey 1 (Secondary)", hex: "#B3B3B3" },
        { name: "Cool Grey 2 (Secondary)", hex: "#D8D8D8" },
        { name: "Warm Grey 1 (Secondary)", hex: "#DEDDD5" },
        { name: "Warm Grey 2 (Secondary)", hex: "#F2F3EF" },
        { name: "Warm Grey 3 (Secondary)", hex: "#f8f9fa" },
        { name: "Green (Sucess States)", hex: "#60BF76" },
        { name: "Red (Error States)", hex: "#FF0000" },


    ]
};