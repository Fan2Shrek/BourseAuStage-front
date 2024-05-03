const setProperty = (label, value) => {
    const root = document.documentElement.style;
    root.setProperty(label, value);
}

export default setProperty;
