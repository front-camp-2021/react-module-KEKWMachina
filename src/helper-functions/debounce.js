export const debounce = (fn, delay = 2000) => {
  let timeout;

  return function () {
    const functionCall = () => {
      fn.apply(this, arguments);
    };
    
    clearTimeout(timeout);

    timeout = setTimeout(functionCall, delay);
  };
};
