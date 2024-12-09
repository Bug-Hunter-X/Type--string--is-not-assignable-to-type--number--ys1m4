# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number'. This error arises when a function expecting a numerical argument is provided a string instead.  The example showcases this issue and its solution. 

## Problem

The `bug.ts` file contains TypeScript functions designed to perform addition and subtraction. However, attempts to use these functions with string arguments will produce the type error.

## Solution

The `bugSolution.ts` file provides a solution by implementing input validation to ensure that the provided arguments are indeed numbers. This prevents the error by explicitly checking and handling potential string inputs before performing the mathematical operations.