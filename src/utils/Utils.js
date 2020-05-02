
export const debounce = function (func, delay) {
    let timer;
    return function () {
         // reference the context and args for the setTimeout function
        let context = this;
        let args = arguments;
        // Clear the timer and start a fresh new timer each time debounce is called.
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            //defining the 'this' for the function. So that the scope does not change.
            func.apply(context, args);
        }, delay);
    }
}