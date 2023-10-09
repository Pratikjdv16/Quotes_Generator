let l = `&ldquo;`
let r = `&rdquo;`
let arr = [
    {
        quotes: `${l}When you have a dream, you have got to grab it and never let go.${r}`,
        author: '~Carol Burnett'
    },
    {
        quotes: `${l}Nothing is impossible the world itself says 'I'm possible!${r}`,
        author: '~Audrey Hepburn'
    },
    {
        quotes: `${l}There is nothing impossible to they who will try.${r}`,
        author: '~Alexander the Great'
    },
    {
        quotes: `${l}The bad news is time files. The good news is you're the pilot${r}`,
        author: '~Michael Altshuler'
    },
    {
        quotes: `${l}Life has got all those twists and turns. You've got to hold on tight and off you go.${r}`,
        author: "~Nicole kidman"
    },
    {
        quotes: `${l}Keep your face always toward sunshine, and shadows will fall behind you.${r}`,
        author: "~Walt Whitman"
    },
    {
        quotes: `${l}Success is not final, failure is not fatal: it is the courage to continue that counts.${r}`,
        author: "~Winston Churchill"
    },
    {
        quotes: `${l}You define your own life. Don't let other people write your script.${r}`,
        author: "~Oprah Winfrey"
    },
    {
        quotes: `${l}You are never to old to set another goal or dream a new dream.${r}`,
        author: "~Mala Yousafzai"
    },
    {
        quotes: `${l}Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.${r}`,
        author: "~Lady Gaga"
    },
    {
        quotes: `${l}You  don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.${r}`,
        author: "~Mandy Hale"
    },
    {
        quotes: `${l}You can be everything. You can be the infinite amount of things that people are.${r}`,
        author: "~Kesha"
    },
    {
        quotes: `${l}What lies behind you and what lies in front of you, pales in comparison to what lines inside to you.${r}`,
        author: "~Ralph Waldo Emerson"
    },
    {
        quotes: `${l}No matter what people tell you, words and ideas can change the world.${r}`,
        author: "~Robin Williams"
    },
    {
        quotes: `${l}Iam not going to continue knocking that old door that does'nt open for me. I'm going to create my own door and walk through that.${r}`,
        author: "~Ava DuVernay"
    },
    {
        quotes: `${l}It is during our darkest moments that we must focus to see the light.${r}`,
        author: "~Aristole"
    },
    {
        quotes: `${l}Not having best situation, but seeing the best in your situation is the key to happiness.${r}`,
        author: "~Marie Forleo"
    },
    {
        quotes: `${l}Just don't give up trying to do what to you really want to do. Where there is love and inspiration, I don't think you can go wrong.${r}`,
        author: "~Ella Fitzgerald"
    },
    {
        quotes: `${l}Learning how to be still, to really be still and let life happen--that stillness becomes a radiance.${r}`,
        author: "~Morgan Freeman"
    },
    {
        quotes: `${l}All you need is the plan, the road map, and the courage to press on to your destination.${r}`,
        author: "~Earl Nightingale"
    }
]
// console.log(arr.length);
// console.log(arr[0]);

let btn = document.getElementById('next'); // after click 
let quote = arr.length;
let printInPara = document.getElementById('para'); // print in #para
let printInSpan = document.getElementById('span'); // print in #span

btn.addEventListener('click', () => {
    printInPara.innerHTML = arr[Math.round(quote * Math.random())].quotes;
    printInSpan.innerHTML = arr[Math.round(quote * Math.random())].author;
});
