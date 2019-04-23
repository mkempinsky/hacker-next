export const blue = shade => {
    const shades = {
        300: '#bee3ee',
        400: '#94d1e4',
        500: '#4eb3d3',
        600: '#2b8cbe',
        700: '#0c64c9',
        default: '#4eb3d3'
    };
    return shades[+shade] || shades.default;
};
export const gray = shade => {
    const shades = {
        300: '#fafafa',
        400: '#f5f5f5',
        500: '#eeeeee',
        600: '#e0e0e0',
        700: '#bdbdbd',
        800: '#848484',
        default: '#eeeeee'
    };
    return shades[+shade] || shades.default;
};

export const globalStyles = `
body {
	background: ${gray(300)};
	margin: 0;
	font-family: Work Sans, sans-serif;
	font-weight: bold;
}
a {
	text-decoration: none;
	color: ${blue(600)};
}
a:visited {
	color: ${blue(600)};

}
a:hover {
	color: ${blue(400)};
}
`;
