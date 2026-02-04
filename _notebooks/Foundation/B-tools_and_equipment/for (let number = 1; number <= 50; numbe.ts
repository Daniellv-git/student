for (let number = 1; number <= 50; number++) {
    console.log("Checking number: " + number);

    if (number % 1 === 0) {
        console.log(number + " is divisible by 1");

        if (number % 2 === 0) {
            console.log(number + " is divisible by 2");

            if (number % 5 === 0) {
                console.log(number + " is divisible by 5");

                if (number % 10 === 0) {
                    console.log(number + " is divisible by 10");

                    if (number % 25 === 0) {
                        console.log(number + " is divisible by 25");

                        if (number % 50 === 0) {
                            console.log(number + " is divisible by 50");
                        }
                    }
                }
            }
        }
    }
}
