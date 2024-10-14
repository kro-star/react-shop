import { Footer } from "./Footer"
import { Header } from "./Header"
import { useParams } from 'react-router-dom';

function GoodInfo (props) {
    const { goodId } = useParams;
    
    
    const errSrc = require('../img/error404.png');
    return <>
        <Header />
        <main className="w-100 text-center">
            <img src={errSrc} alt="Нет информации"  className=' err'/>
        </main>
        <Footer />
    </>
}
export {GoodInfo}