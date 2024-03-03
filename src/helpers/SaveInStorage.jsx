export const SaveInStorage = (key, element) => {

    // Get current elements from local storage
    let elements = JSON.parse(localStorage.getItem(key));

    // Check if is an Array
    if(Array.isArray(elements)) {
        // Save new element in Array
        elements.push(element);
    } else {
        // Create Array with new Element
        elements = [element];
    }

    // Save in local storage
    localStorage.setItem(key, JSON.stringify(elements));

    // Return saved element
    return element;
}