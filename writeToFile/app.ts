const text = "My text should be stored in a file";

const encoder = new TextEncoder();

Deno.writeFile("text.txt", encoder.encode(text)).then(() => {
    console.log("Wrote to file :)");
});