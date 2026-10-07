export const examples={factorial:`static int factorial(int n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}`,fibonacci:`static int fibonacci(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}`,suma:`static int suma(int[] v, int i) {
  if (i >= v.length) {
    return 0;
  } else {
    return v[i] + suma(v, i + 1);
  }
}`};
