import { Link } from 'react-router-dom';

function GoodItem(props){
    const{ mainId, displayName, displayDescription, price, displayAssets, addGood = Function.prototype  } = props;
    
    //console.log(displayAssets[0].full_background );

    return(<> 
        {
        mainId ?

        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5" id={mainId} >
            <div className="card  h-100" >
                
                <Link key={mainId} to={`/product/${mainId}`}>
                    { displayAssets[0].full_background.length > 0 ?  <img src={displayAssets[0].full_background} className="card-img-top w-100 " alt={displayName}/> : {displayName}
                    }
                </Link>
                <div className="card-body d-flex flex-column ">
                    
                <Link key={mainId} to={`/product/${mainId}`}>
                    <div className="card-title">{displayName}</div>
                </Link>
                    <div className="card-text flex-grow-1">{displayDescription}</div>
                    <div className="fs-4 mb-3 text-center text-violet fw-medium ">{price.finalPrice} руб.</div>
                    <button className="btn btn-primary w-100 text-center" onClick={() => addGood({mainId, price, displayAssets, displayName})
                        }>
                            Купить
                    </button>
            </div>
        </div>
       
    </div> : ''
    }
    </>
)
}
export {GoodItem}



/*
{
    "mainId": "EID_ElegantLily",
    "displayName": "Oki Doki",
    "displayDescription": "Всегда можно немного поважничать.",
    "displayType": "Эмоция",
    "mainType": "emote",
    "offerId": "v2:/7bc305b2b525ec1f5d0d2e13b768b114ed9bf972107674da9aa54565a97e32f0",
    "devName": "[VIRTUAL]1 x Oki Doki for 500 MtxCurrency",
    "offerDates": {
        "in": "2024-08-16T00:00:00.000Z",
        "out": "2024-11-01T23:59:59.999Z"
    },
    "colors": {
        "color1": "#F695BC",
        "color2": "#ce4d7a",
        "color3": "#8150d6",
        "textBackgroundColor": "#8150d6"
    },
    "displayAssets": [
        {
            "displayAsset": "DAv2_EID_ElegantLily",
            "materialInstance": "MI_0",
            "primaryMode": "MAX",
            "productTag": "Product.BR",
            "url": "https://media.fortniteapi.io/images/displayAssets/v2/MAX/DAv2_EID_ElegantLily/MI_0.png",
            "flipbook": null,
            "background_texture": null,
            "background": "https://media.fortniteapi.io/images/shop/7bc305b2b525ec1f5d0d2e13b768b114ed9bf972107674da9aa54565a97e32f0/v2/MI_0/background.png",
            "full_background": "https://media.fortniteapi.io/images/shop/7bc305b2b525ec1f5d0d2e13b768b114ed9bf972107674da9aa54565a97e32f0/v2/MI_0/info.ru.png"
        }
    ],
    "firstReleaseDate": "2024-08-16",
    "previousReleaseDate": "2024-10-01",
    "giftAllowed": true,
    "buyAllowed": true,
    "price": {
        "regularPrice": 500,
        "finalPrice": 500,
        "floorPrice": 500
    },
    "rarity": {
        "id": "Uncommon",
        "name": "НЕОБЫЧНЫЙ"
    },
    "series": {
        "id": "CreatorCollabSeries",
        "name": "Звёздная серия"
    },
    "banner": null,
    "offerTag": null,
    "granted": [
        {
            "id": "EID_ElegantLily",
            "type": {
                "id": "emote",
                "name": "Эмоция"
            },
            "name": "Oki Doki",
            "description": "Всегда можно немного поважничать.",
            "rarity": {
                "id": "Uncommon",
                "name": "НЕОБЫЧНЫЙ"
            },
            "series": {
                "id": "CreatorCollabSeries",
                "name": "Звёздная серия"
            },
            "images": {
                "icon": "https://media.fortniteapi.io/images/efc1c9d145a8aa5643ea0353ba72d26d/transparent.png",
                "featured": null,
                "background": "https://media.fortniteapi.io/images/cosmetics/efc1c9d145a8aa5643ea0353ba72d26d/v2/background.png",
                "icon_background": "https://media.fortniteapi.io/images/cosmetics/efc1c9d145a8aa5643ea0353ba72d26d/v2/icon_background.png",
                "full_background": "https://media.fortniteapi.io/images/cosmetics/efc1c9d145a8aa5643ea0353ba72d26d/v2/info.ru.png"
            },
            "juno": {
                "icon": null
            },
            "beans": {
                "icon": null
            },
            "video": null,
            "audio": null,
            "gameplayTags": [
                "Cosmetics.EmoteType.Dance",
                "Cosmetics.Source.ItemShop",
                "Cosmetics.Filter.Season.31",
                "Cosmetics.Set.LipTherapist"
            ],
            "set": {
                "id": "LipTherapist",
                "name": "Karol G",
                "partOf": "Входит в набор «Karol G»."
            }
        }
    ],
    "priority": -1,
    "section": {
        "id": "KarolG.97",
        "name": "Karol G",
        "category": "Сцена ждёт",
        "landingPriority": 0,
        "metadata": null
    },
    "groupIndex": 0,
    "storeName": "BRWeeklyStorefront",
    "tileSize": "Size_1_x_1",
    "categories": []
},*/