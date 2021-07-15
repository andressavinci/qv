const colors = {
    white: '#fff',
    blue: '#25bfe7',
    green: '#49e295',
    lightestgrey: '#f8f8f8',
    lightgrey: '#edf0ef',
    grey: '#6f7974',
    darkgrey: '#1F2D27',
    black: '#000',
  };
  
  const fonts = {
    family: 'Open Sans',
    lineHeight: '1.4em',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
  };
  
  const sizes = {
    largeDesktop: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576,
  };
  
  const zIndex = {};
  
  const theme = {
    main: {
      colors,
      fonts,
      sizes,
      zIndex,
    },
  };
  
  export default theme;