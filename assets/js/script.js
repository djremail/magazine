let container = $('#item_container')
let basket = $('#magaz_basket');
let newJson = 'https://dummyjson.com/products';
let product  ;
function getItems (){
    $.getJSON(newJson, function (result) {

        for (let key in result) {
            if(result.hasOwnProperty(key)){
                product = (result[key])
                console.log(product)
                $.each(product, function (key, value){
                    showItem(value)
                })
            }
        }
    });
}

getItems();

function showItem(item){
    this.mark = `
        <div class="col-md-4">
            <!--begin::Hot sales post-->
            <div class="card-xl-stretch mx-md-3">
                <!--begin::Overlay-->
                <a class="d-block overlay" data-fslightbox="lightbox-hot-sales" href="${item.thumbnail}">
                    <!--begin::Image-->
                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" id="card_wrapper" style="background-image:url(${item.thumbnail})">
                        <div class="card_procent">${'-'+ ' ' + item.discountPercentage + ' ' + '%'}</div>
                    </div>
                    <!--end::Image-->
                    <!--begin::Action-->
                    <div class="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i class="bi bi-eye-fill fs-2x text-white"></i>
                    </div>
                    <!--end::Action-->
                </a>
                <!--end::Overlay-->
                <!--begin::Body-->
                <div class="mt-5">
                    <!--begin::Title-->
                    <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">${item.title}</a>
                    <!--end::Title-->
                    <!--begin::Text-->
                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3">${item.description}</div>
                    <!--end::Text-->
                    <!--begin::Text-->
                    <div class="fs-6 fw-bolder mt-5 d-flex flex-stack">
                        <!--begin::Label-->
                        <span class="badge border border-dashed fs-2 fw-bolder text-dark p-2">
                         <span class="fs-6 fw-bold text-gray-400 new_price"><p>new price</p></span>$<span></span>${item.price}</span>
                        <!--end::Label-->
                        <!--begin::Action-->
                         <button type="button" id="${item.id}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${item.id}" >Buy now</button>
                         <svg data-title="${item.title}" data-category = "${item.category}" data-description="${item.description}" data-id="${item.id}" data-price="${item.price}" data-thumbnail="${item.thumbnail}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill addCard" viewBox="0 0 16 16">
                           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                         </svg>
                        <!--end::Action-->
                    </div>
                    <!--end::Text-->
                </div>
                <!--end::Body-->
            </div>
            <!--end::Hot sales post-->
        </div>

        
        <!--Modal-->
            <div class="modal fade" id="modal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabelZ">${item.title}</h5>
                            <button type="button" class="btn-close modal_close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img class="modal_image" src="${item.thumbnail}">
                            <p class="mb-5 modal_descr">${item.description}</p>
                            <div class="modal_price_wrapper">
                                <div class="old_price_wrapper">
                                    <p>Old price</p>
                                    <s class="modal_stock">${item.price + Math.ceil(item.price * item.discountPercentage / 100)}</s>
                                </div>
                                <p class="modal_price">${'New price' + ' ' + item.price}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLose</button>
                        </div>
                    </div>
                </div>
            </div>
        <!--Modal-->
        
        
        
    `;
    container.append(mark);
}

let card = [];
let result;
let products ;



function addCard(itemId, itemTitle,itemThumbnail, itemPrice, itemCategory, itemDescription){
    let item ={itemId, itemTitle,itemThumbnail, itemPrice, itemCategory, itemDescription}
    card.push(item);
};

$(document).on('click', '.addCard', function (){
    let itemId = $(this).data('id');
    let itemTitle = $(this).data('title');
    let itemThumbnail = $(this).data('thumbnail');
    let itemPrice = $(this).data('price');
    let itemCategory = $(this).data('category');
    let itemDescription = $(this).data('description');

    // console.log(itemTitle);
    addCard(itemId, itemTitle,itemThumbnail,itemPrice,itemCategory,itemDescription);

    for (let key in card) {
            products = (card[key]);
            // alert(products.itemPrice);

            createDesc(products);
        }
});



function createBtn(){

    let product2 = `
    <div class="container py-5 text-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
          Открыть модальное окно
        </button>
    </div>
        `
    basket.append(product2);
}

createBtn();

function createDesc(item){
    let product3 = `
    <!-- Modal -->
      <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Заголовок</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="mb-5">${item.itemTitle}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    `
    basket.append(product3);
}




