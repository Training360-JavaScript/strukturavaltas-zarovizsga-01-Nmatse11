function manipulateDom() {
    const quotes = document.querySelectorAll('.quote')
    for (let i = 0; i < quotes.length; i++) {
        quotes[i].style.border = '1px solid blue'
        quotes[i].style.backgroundColor  = 'lightblue'
        quotes[i].style.fontStyle = 'italic'
    }
};

export { manipulateDom };