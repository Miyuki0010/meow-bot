const axios = require('axios');
const config = require('./config');

async function postMeow(){
    const meows = [
        'Meow!',
        'Meow meow!',
        'Purr...',
        'Prrrr...',
        'Mowwwwwww',
        'Mreeeeeow',
        'meow!!!!',
        'rrrrawrrrr',
        'meow',
        'mew',
        'nya',
        'rawr',
        'hiss',
        'yowl',
        'growl', 
        'snarl', 
        'chirp'
    ];

    const rndIndex = Math.floor(Math.random() * meows.length);
    const rndMeow = meows[rndIndex];

    await axios.post('https://YOUR-INSTANCE-HERE/api/v1/statuses', {
        status: rndMeow,
        visibility: 'public'
    },{
        headers: {
            'Authorization': `Bearer ${config.bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log("I meowed");
    })
    .catch((error)=>{
        console.error(error);
    });

    const rndInterval = Math.floor(Math.random() * 3540000) + 60000;

    console.log(rndInterval);

    setTimeout(postMeow, rndInterval);
}

postMeow();
