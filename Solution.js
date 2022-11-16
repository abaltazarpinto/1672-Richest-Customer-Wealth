var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a,b) => a + b);

        if (sum > maxWealth) {
            maxWealth = sum
        }
    }
    return maxWealth;
}

/*
--- COMMENTS-----

In the 3rd code section, you can reduce it further and decrease the number of steps in the reduce method by one.
In the 4th line, instead of,
let sum = accounts[i].reduce((a, b) => a + b, 0);
You can write
let sum = accounts[i].reduce((a, b) => a + b);

This way, instead of "a" being initialized by 0, it will be initialized by the value of accounts[0], and "b" will take the value of accounts[1].*/