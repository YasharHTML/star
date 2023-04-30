for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        process["stdout"]["write"](
            i == 0 || j == 0 || i == 4 || j == 4 ? "*" : " "
        );
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        process["stdout"]["write"](5 - i - j - 1 <= 0 ? "*" : " ");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        process["stdout"]["write"](5 - i - j - 1 >= 0 ? "*" : " ");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 4; i >= 0; i--) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

for (let i = 4 - 1; i >= 0; i--) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"]("*");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"](j == 0 || j == 2 * i ? "*" : " ");
    }
    console["log"]();
}

for (let i = 4 - 1; i >= 0; i--) {
    for (let j = 0; j < 5 - i - 1; j++) {
        process["stdout"]["write"](" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        process["stdout"]["write"](j == 0 || j == 2 * i ? "*" : " ");
    }
    console["log"]();
}

console["log"]();
console["log"]();
console["log"]();

const arg = process.argv[2]

const func = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process["stdout"]["write"](" ");
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            process["stdout"]["write"](
                j == 0 || j == i || j == 2 * i || i == n - 1 ? "*" : " "
            );
        }
        console["log"]();
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < n - i - 1; j++) {
            process["stdout"]["write"](" ");
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            process["stdout"]["write"](
                j == 0 || j == i || j == 2 * i ? "*" : " "
            );
        }
        console["log"]();
    }
};

func(arg);