let btn = document.querySelector('.btn');
let emojiName = document.querySelector('.emoji-name')

const emoji = [];

async function getEmoji() {
    let response = await fetch('https://emoji-api.com/emojis?access_key=aba38e55be6fd225fcc0d32e70c20f2430ec06da')

    let data = await response.json()
    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }
    btn.addEventListener('click', () => {
        const randomNum = Math.floor(Math.random() * emoji.length);
        btn.innerHTML = emoji[randomNum].emojiName

        emojiName.innerHTML = emoji[randomNum].emojiCode.toUpperCase()
    })
}
getEmoji()

