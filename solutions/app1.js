const setCookie = (string) => {
    const dateExpires = new Date();
    dateExpires.setTime(dateExpires.getTime + (1000 * 60 * 15));
    document.cookie = `token=${string}; expires=${dateExpires}`;
}

export default setCookie;