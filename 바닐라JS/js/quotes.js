const quotes = [
    {
    quote: ' 📒 인생은 짧고 예술은 길다. 기회는 사라지기 쉽고 경험은 의심스럽고 판단은 어렵다.',
    author: ' - 히포크라테스'
    },
    {
    quote: ' 📒 우리는 이 세상에서 위대한 일을 할 수는 없다. 단지 위대한 사랑을 갖고 작은 일들을 할 수 있을 뿐이다',
    author: ' - 마더 테레사 '
    },
    {
    quote: '📒 역사적 성공의 반은 죽을지도 모를 위기에서 비롯되었다. 역사적 실패의 반은, 찬란했던 시절에 대한 기억에서 비롯되었다.',
    author: ' - 토인비'
    },
    {
    quote: ' 📒 생각이 바뀌면 행동이 바뀌고, 행동이 바뀌면 습관이 바뀌고, 습관이 바뀌면 인격이 바뀌고, 인격이 바뀌면 운명까지도 바뀐다',
    author: '- 윌리엄 제임스'
    },
    {
    quote: '📒 오래 살기를 바라기 보다 잘 살기를 바라라. ',
    author: '- 벤자민 프랭클린'
    },
    {
    quote: '📒 성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다. ',
    author: '- 프리츠 쿤켈 '
    },
    {
    quote: '📒 길을 떠나기 전, 여행자는 여행에서 달성할 목적과 동기를 가지고 있어야 한다. ',
    author: '- 조지 산티야나'
    },
    {
    quote: '📒 낙관주의는 성공으로 인도하는 믿음이다. 희망과 자신감이 없으면 아무것도 이루어질 수 없다. ',
    author: '- 헬렌 켈러 '
    }, 
    {
    quote: '📒 낙관주의자란 봄이 인간으로 태어난 것이다. ',
    author: '- 수잔 비소네트 '
    },       
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;