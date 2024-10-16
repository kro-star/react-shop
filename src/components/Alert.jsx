import { useContext } from "react";
import { ShopContect } from "../context";

import { useEffect } from "react"

function Alert () {
    const {closeAlert, alertName} = useContext(ShopContect)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => clearTimeout(timerId);
        //eslint-disable-next-line
    }, [alertName])

    return <div className="alert bg-violet text-white position-fixed">
        Товар {alertName} добавлен в корзину
    </div>
}
export {Alert}