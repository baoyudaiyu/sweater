// 校验京东时间
let jdTime = 0;
fetch("https://a.jd.com/ajax/queryServerData.html", {
    body: "",
    headers: {
        "content-type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    credentials: "include",
})
    .then(res => res.json())
    .then(
        res => function () {
            console.log(new Date().getTime()-res.serverTime)
        }
    )
