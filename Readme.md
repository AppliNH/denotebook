# Deno

Deno is an alternative to Node, which also uses JavaScript and TypeScript.

Just as Node, it's a Javascript Runtime based on Chrome's V8. However, the Deno executable is also able to execute uncompiled TypeScript code, because it has its own TypeScript compiler embedded.

Deno is "secured by default", it means it requires explicit execution permissions.


## Why ?

In short, Ryan Dahl, the creator of Node came out with Deno because he was unhappy of the mistakes he made with his first runtime project.

It's a chance to "make Node better".

The main enhancements compared to Node are:
- TypeScript native support
- Modern JS features
- URL imports
- Script permissions


[Install Deno](https://github.com/denoland/deno_install)

# Execute code

`deno run app.ts`

=> Compiles the TS code to JS and executes it
=> The compiled code is cached.



## Permissions


A Deno app has no permissions by default, unlike NodeJS which has unlimited permissions by default.

With deno, this will compile but won't run with the regular `deno run` command:

```TS
const text = "My text should be stored in a file";

const encoder = new TextEncoder();

Deno.writeFile("text.txt", encoder.encode(text)).then(() => {
    console.log("Wrote to file :)");
});
```

You need to use security specific flags on your `deno run` command.

The above code will work with:

`deno run --allow-write=text.txt app.ts`

## Deno Features


- Deno Namepace APIs (built-in utilities)
    - No imports or installations are needed
    - Stable
- Standard library (maintained by Deno team)
    - Needs to be imported into scripts to be used
    - Might be unstable
    - Builds up on core, low-level functionalities
- 3rd party libraries
    - Needs to be imported into scripts to be used
    - Stability differs
    - Builds up on core, low-level functionalities

