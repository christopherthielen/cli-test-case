# Demonstrate AoT issue

There is a `.concat()` function call in  `src/app/app.states.ts`.
The AoT compiler should complain that it cannot analyze the INITIAL_STATES symbol, but it does not.

Run `ng serve --aot` to test.
Check console.