# Questions on Hoisting

1. What is the output of this snippet of code?
    ```
    function foo() {
        x = 1;
        function x() { }
        var x = '2';
        return x;
    }
    alert( typeof foo() ); // Output: 'string'
    ```
    Output: 'string'
    
    Explanation: Inside the `foo` function, the variable `x` is first assigned the value `1`, then a function named `x` is declared (but not assigned), and finally, the variable `x` is re-assigned the value `'2'`. When the function returns `x`, it returns the string `'2'`.

2. What is the output of this snippet of code?
    ```
    function foo() {
        return x;
        x = 1;
        
        function x() { }
        
        var x = '2';
    }
    console.log( typeof foo() ); // Output: 'function'
    ```
    Output: 'function'
    
    Explanation: Inside the `foo` function, the variable `x` is initially the function `x() { }` due to hoisting of function declarations. The `return x;` statement returns this function reference. The subsequent variable assignment `var x = '2';` is ignored as the function has already returned.

3. What is the output of this snippet of code?
    ```
    var x = 1;
    function foo() {
        x = 10;
        return;
        function x() {}
    }
    foo();
    console.log( x ); // Output: 1
    ```
    Output: 1
    
    Explanation: Inside the `foo` function, the variable `x` is assigned the value `10`, but this assignment does not affect the global `x` variable. The function declaration `function x() {}` is hoisted but never executed. After calling `foo()`, the global `x` variable remains with its initial value `1`, which is what gets printed.