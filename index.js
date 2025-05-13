// 1)Task reminder
const taskReminder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Reminder sent to user!")
    }, 3000)
});
async function remindUser() {
    try {
        const reminderMessage = await taskReminder;
        console.log(reminderMessage);
    } catch (error) {
        console.log("Failed")
    };

};
remindUser();


// 2) check server 
async function checkServer() {
    return Math.random() > 0.3
        ? Promise.resolve("Server is running")
        : Promise.reject("Server down");
}
const intervalId = setInterval(() => {
    checkServer()
        .then((msg) => console.log(msg))
        .catch((err) => console.error(err));
}, 5000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped checking server.");
}, 30000);


//3) show notifications

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sendNotifications(notifications) {
    for (let message of notifications) {
        await delay(1000);
        console.log(message);
    }
    console.log("All notifications sent");
}
sendNotifications(["Hello!", "Meeting at 3 PM", "Don't forget to submit report"]);


//4) API integration
function mockAPI() {
    return Math.random() > 0.7
        ? Promise.resolve("Data fetched")
        : Promise.reject("Fetch failed");
}
function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
}
async function fetchDataWithRetry() {
    let attempts = 0;

    while (attempts < 3) {
        try {
            const data = await mockAPI();
            console.log(data);
            return;
        } catch (err) {
            console.error(err);
            attempts++;
            if (attempts < 3) {
                await delay(2000);
            }
        }
    }
    console.log("Failed after 3 attempts");
}
fetchDataWithRetry();


//5) Launch Countdown Timer
function launchProduct() {
    return Promise.resolve("Product Launched!");
  }
  
  function startCountdown(n) {
    const timer = setInterval(async () => {
      console.log(n);
      if (n === 0) {
        clearInterval(timer);
        const result = await launchProduct();
        console.log(result);
      }
      n--;
    }, 1000);
  };
  startCountdown(5);
  
  
