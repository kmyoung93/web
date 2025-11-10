document.addEventListener("DOMContentLoaded",()=>{
    const list = document.querySelector(".list-product")
    let res = ""
    product.forEach(item=>{
        res+=`<li>
                    <a href="./detail.html?cid=${item.id}">
                        <figure>
                            <img src="./img/product_list/product/${item.thumb}" alt="${item.pnameKo}">
                            <span class="heart">
                                <img src="./img/product_list/heart_empty.svg" alt="좋아요 선택 안함">
                            </span>
                        </figure>
                        <h3>${item.pnameKo}</h3>
                        <h4><em>${item.pnameEn}</em></h4>
                        <p class="ln3">${item.pdesc}</p>
                        <p class="price"><em>${item.pprice.toLocaleString('ko-KR')}원</em></p>
                    </a>
                </li>`
    })
    list.innerHTML = res

    // 하트 아이콘 클릭 이벤트
    list.querySelectorAll(".heart").forEach(heart=>{
        heart.addEventListener("click",(e)=>{
            e.preventDefault()
            e.stopPropagation()
            const heartImg = heart.querySelector("img")
            if(heartImg.src.includes("heart_empty")){
                heartImg.src = "./img/product_list/heart_full.svg"
                heartImg.alt = "좋아요 선택함"
            }else{
                heartImg.src = "./img/product_list/heart_empty.svg"
                heartImg.alt = "좋아요 선택안함"
            }
        })
    })
})