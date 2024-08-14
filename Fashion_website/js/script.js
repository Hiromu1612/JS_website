const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

//ローディング中(グレースクリーン)
window.addEventListener("load", () => {
    loadingAreaGrey.animate(
    {
        opacity: [1, 0],
        visibility: "hidden", //アニメーション終了後に非表示にする
    }, 
    {
        duration: 2000,
        delay: 1200,
        easing: "ease", //easeは最初から最後まで一定の速度で変化
        fill: "forwards", //アニメーション終了後のスタイルを保持
    }
    );


    //ローディング中(グリーンスクリーン)
    loadingAreaGreen.animate(
    {
        translate:["0 100vh","0 0", "0 -100vh"], //最初下に隠れてる、途中から上に出てきて、最後は上に隠れる
    },
    {   
        duration: 2000,
        delay: 800,
        easing: "ease",
        fill: "forwards",
    }
    );

    //ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: 0.8, //80%
            },
            {
                opacity: 0,
                offset: 1, //100%
            },
        ],
        {
            duration: 1200,
            easing: "ease",
            fill: "forwards",
        }
    )
    }
); 

//画像ギャラリー
const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll(".gallery-thumbnails img");

// for (let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener("mouseover", (event) => {
//         // console.log(event.target.src);
//         mainImage.src = event.target.src;
//         mainImage.animate(
//             {
//                 opacity: [0, 1],
//             },
//             {
//                 duration: 1000,
//             }
//         )
//     });
// }

// forEachを使って書き換え
thumbImages.forEach((thumbImage)=>{
    thumbImage.addEventListener("mouseover", (event)=>{
        mainImage.src = event.target.src;
        mainImage.animate(
            {
                opacity: [0, 1],
            },
            {
                duration: 1000,
            }
        )
    })
})

//メニューボタンの開閉
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");

const menuOptions = {
    duration: 700,
    easing: "ease", //easeは最初から最後まで一定の速度で変化
    fill: "forwards",
};

//メニューを開く
menuOpen.addEventListener("click", ()=>{
    menuPanel.animate(
        {
            translate: ["100vw", 0], //右から左に移動
        },
        menuOptions
    );

    //メニューのリストを順番に表示
    menuItems.forEach((menuItem, index)=>{
        menuItem.animate(
            {
                opacity: [0,1],
                translate: ["3rem", 0]
            },
            {
                duration: 1000,
                easing: "ease",
                delay: 200 * index,
                fill: "forwards",
            }
        );
});

//メニューを閉じる
menuClose.addEventListener("click", ()=>{
    menuPanel.animate(
        {
            translate: [0, "100vw"], //左から右に移動
        },
        menuOptions
    );
    menuItems.forEach((menuItem) => {
        menuItem.animate(
            {
                opacity: [1, 0],
            },
            menuOptions
        )
    })
});
})


//スクロールで要素をフェードイン
//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) =>  {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0,1],
                    filter : ["blur(.4rem)", "blur(0)"], //.4remから0に変化し、ぼかしがなくなる
                    translate: ["0 4rem", 0], //上に4rem移動
                },
                {
                    duration: 2000,
                    easing: "ease",
                    fill: "forwards",
                }
            );
        //一度ふわっと表示されたら監視をやめる
        obs.unobserve(entry.target);
        }
    })
}

//監視設定
const fadeObserver = new IntersectionObserver(animateFade);

//監視指示
const fadeElements = document.querySelectorAll(".fadein");
// fadeObserver.observe(fadeElements); querySelectorAllで取得した要素は配列なので、forEachで一つずつ監視する
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
})