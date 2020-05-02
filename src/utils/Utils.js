
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

export const throttle = function (func, delay) {
    let wait = false;
    return function () {
        let context = this;
        let args = arguments;
        // since initially wait is false, so the below block of code will execute
        if (!wait) {
            func.apply(context, args);
            // we set the wait to true. So that this block is not executed until the wait is again
            // made false.
            wait = true;
            setTimeout(function () {
                // we made it true after waiting for the delay amount of time.
                wait = false;
            }, delay);
        }
    }
}