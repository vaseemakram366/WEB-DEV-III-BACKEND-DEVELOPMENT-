function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Named exports object
const exported = { add, subtract };

// Ensure module.exports contains the named exports even if it was accidentally overwritten.
if (typeof module !== 'undefined') {
    if (module.exports && typeof module.exports === 'object') {
        // Merge into existing exports (preserve other properties if any)
        Object.assign(module.exports, exported);
    } else {
        // Replace non-object exports (e.g. a string) with the correct object
        module.exports = exported;
    }
}