
const fs = require('fs');

function readData() {
    try {
        const data = fs.readFileSync('./adnan.text', 'utf-8');
        console.log(data);
    } catch (error) {
        console.error("ফাইলটি পড়া যায়নি:", error);
    }
}

readData();