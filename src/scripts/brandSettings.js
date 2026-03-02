export const brandSettings = {
    logo: {
        src: "/Assets/logo.jpg", // Add logo image URL here (e.g., "/assets/logo.png")
        alt: "New York Times Cooking",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "/Assets/lightlogo.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "/Assets/white.png", // Add image path
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "/Assets/black.png", // Add image path
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "/Assets/white.png", // Add image path
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "/favicon.svg", // Add favicon URL here
    typography: {
        primaryFont: "Helvetica Neue",  // this will automatically get set as the page font
        secondaryFont: "Verdana", // dont be a bum, go find some google/adobe fonts you like. just make sure to load them in the stylesheet or Layout astro file 
        baseSize: "16px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "Cooking Red", hex: "#E33D26" },
        { name: "Black 1", hex: "#222222" },
        { name: "White", hex: "#ffffff" },
        { name: "Black 2 (Rich)", hex: "#1B1B1B" },
        { name: "Smoke Grey", hex: "#767676" },
        { name: "Cool Grey 1", hex: "#B3B3B3" },
        { name: "Cool Grey 2", hex: "#D8D8D8" },
        { name: "Warm Grey 1", hex: "#DEDDD5" },
        { name: "Warm Grey 2", hex: "#F2F3EF" },
        { name: "Warm Grey 3", hex: "#f8f9fa" },
        { name: "Green", hex: "#60BF76" },
        { name: "Red", hex: "#FF0000" },


    ]
};