# bin2dec

Binary to Decimal Converter - [Demo](https://shoyo-22.github.io/bin2dec/)

bin2dec allows the user to enter strings of binary digits, 0's and 1's, in any sequence and then displays its decimal equivalent. And app will notify user if they enter other digits except of 0's and 1's.

## Code snippet

```js
function binToDecCalculate(binary) {
  let decimal = 0;
  const binaryLength = binary.length;

  for (let i = 0; i < binaryLength; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, binaryLength - (i + 1));
  }

  return decimal;
}
```

## Example

Find the decimal value of $111001_2$:
| binary number | power of 2 |
| ------------- | ---------- |
| 1 | $2^5$ |
| 1 | $2^4$ |
| 1 | $2^3$ |
| 0 | $2^2$ |
| 0 | $2^1$ |
| 1 | $2^0$ |

$111001_2 = 1\times2^5+1\times2^4+1\times2^3+0\times2^2+0\times2^1+1\times2^0=57_{10}$
