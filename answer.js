//Question 1
function describeValue(value) {
    const type = typeof (value);

    if (value) {
        return `${type} | truthy`;
    } else {
        return `${type} | falsy`;
    }
}

//Question 2
function getDayType(day) {
    day = day.toLowerCase().trim();

    switch (day) {
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
            return "Working Day";

            break;
        case "monday":
            return "Working Day";

            break;
        case "tuesday":
            return "Working Day";

            break;
        case "wednesday":
            return "Working Day";

            break;
        case "thursday":
            return "Working Day";

            break;
        case "friday":
            return "Weekend";

            break;

        default:
            return "Invalid Day";
            break;
    }

}

//Question 3
function validateUsername(userName) {
    userName = userName.toLowerCase();
    if (userName.length < 4) {
        return "Too Short"
    } else if (userName.includes(" ")) {
        return "No Space Allowed";
    } else if (userName.includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }

}

//Question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let totalFare = 50 + 2 * waitingMinutes;
    if (distance > 2) {
        totalFare = totalFare + (distance - 2) * 15;
    }

    if (isNight) {
        totalFare = totalFare + (totalFare * 20 / 100);
    }

    return totalFare;

}

//Question 5

let getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }
    let requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    } else if (requiredRate > 12) {
        verdict = "Almost Impossible";

        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }


}