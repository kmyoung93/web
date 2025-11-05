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
                        <p class="price">${item.pprice}원</p>
                    </a>
                </li>`
    })
    list.innerHTML = res
})