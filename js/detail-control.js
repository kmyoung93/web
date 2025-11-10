document.addEventListener("DOMContentLoaded",()=>{
    let productId = getQueryParam("cid")
    const result = product.find(item=>item.id == productId)
    const detail1 = document.querySelector(".detail-1")
    let thumbSmallListContents = ""
    result.pthumbArray.forEach((thumb,index)=>{
        thumbSmallListContents+=`<li><img src="./img/detail/${thumb}" alt="${result.pnameKo} ${index+1}번 사진"></li>`
    })

    detail1.innerHTML = 
    `<section class="detail-thumb">
        <figure class="thumbBig">
            <img src="./img/product_list/product/${result.thumb}" alt="${result.pnameKo} 사진">
        </figure>
        <div class="thumb-slider slider-container">
            <ul class="thumbSmall-list">
                ${thumbSmallListContents}
            </ul>
        </div>
    </section>
    <section class="detail-desc">
        <h3>${result.pnameKo}</h3>
        <h4><em>${result.pnameEn}</em></h4>
        <p class="desc">${result.pdesc}</p>
        <p class="sale"><span class="per-sale">${result.salePer}%</span> <span class="price-origin">${result.pprice.toLocaleString('ko-KR')}원</span></p>
        <p class="price"><em>${(Math.round(result.pprice*(1-(result.salePer*0.01)))).toLocaleString('ko-KR')}원</em></p>
        <div class="buy">
            <a href="#">장바구니</a>
            <a href="#" class="btn-buy">구매하기</a>
        </div>
    </section>`

})