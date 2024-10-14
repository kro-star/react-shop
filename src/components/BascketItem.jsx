function BascketItem(props){
    const { mainId, displayName,  price, displayAssets, quantity, removeGood=Function.prototype, decrementGood=Function.prototype, incrementGood=Function.prototype  } = props;
    
    const delSrc = require('../img/del1.png');

    return <div className="row pt-3 pb-3 bascket-item" id={mainId}>
        <div className="col-2 d-none d-md-block text-center ">
        { displayAssets[0].full_background.length > 0 ?  <img src={displayAssets[0].full_background} className="bascketImg w-100" alt={displayName}/> : {displayName}
                }
        </div>
        <div className="col-8 col-sm-6 col-md-5 mb-3 mb-sm-0"> {displayName} </div>
        <div className="col-sm-2 col-4 mb-3 mb-sm-0 text-left">{price.finalPrice} руб</div>
        <div className="col-8 col-sm-3 col-md-2 d-flex justify-content-center align-items-center">
            <button className='fs-3 fw-medium text-violet bg-white btn border-violete  h-50 pb-3 pt-2 lh-05 rounded-1 pe-3 ps-3' onClick={() => decrementGood(mainId)}>-</button>
            <div className='ms-3 me-3 lh-lg '>{quantity}</div> 
            <button className='fs-3 fw-medium btn text-violet bg-white  border-violete  h-50 pb-3 pt-2 lh-05 rounded-1' onClick={() => incrementGood(mainId)}>+</button>
            </div>
        <div className="col-4 col-sm-1 text-center cursor-pointer">
            <img src={delSrc} alt=""  onClick={() => removeGood(mainId)}/>
        </div>
    </div>
}
export {BascketItem}