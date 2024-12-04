Ticket 3 - Type mismatches

Great job on fixing those syntax errors. You and your team have now been tasked with debugging and fixing the code in `index.js` within the `ticket-3` folder.

The table below shows how the `countNumberOfNinesInNumber` should work:

| Function call                            | Expected output |
| ---------------------------------------- | --------------- |
| countNumberOfNinesInNumber(99.999)       | 5               |
| countNumberOfNinesInNumber(9)            | 1               |
| countNumberOfNinesInNumber(989)          | 2               |
| countNumberOfNinesInNumber(1115.1257846) | 0               |

Unfortunately, it doesn't currently seem to work.


PLAN
1. See if any error messages in Devtool console
2. Run the code in DevTools console to see what's outputted - error msg or incorrect output. No errors. Output is '0' in all instances
    - This went well as helped us to identify that the issue was related to the difference between inputting strings and numbers.
2. Check the link between the documents - done
4. Inspect the js code for syntax errors
5. Check the logic of the code
