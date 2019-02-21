const toArray = elements => {
    if (elements.length === 1)
        return elements[0]
    
    return [ ...elements]
}

const sdom = (selector, root = document) => {
    if (!selector)
        throw new Error('sdom: provide selector')

    // complex selector
    if (selector.match(/ |>|~+|~/))
        return toArray(root.querySelectorAll(selector));

    const selectorType = selector.slice(0, 1);
    const nakedSelector = selector.slice(1);
    
    // head
    if (selector === 'head')
        return document.head

    //body    
    if (selector === 'body')
        return document.body

    // id
    if (selectorType === '#')
        return document.getElementById(nakedSelector)

    // class
    if (selectorType === '.')
        return toArray(root.getElementsByClassName(nakedSelector))
    
    // data-attribute
    if (selectorType === '[')
        return toArray(root.querySelectorAll(selector))
    
    // tag name
    if (selector === selector.toLowerCase() && selector !== selector.toUpperCase())
        return toArray(root.getElementsByTagName(selector))

    throw new Error('sdom: not supported selector')
}

export default sdom
