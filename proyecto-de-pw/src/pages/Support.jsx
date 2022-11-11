import guide from "../imagenes/icons/guide.png";
import FAQ from "../imagenes/icons/faq.png";
import Submit from "../imagenes/icons/submit.png";
import '../estilos/Support.css'


const Support = ()=>{
    return (
    <div id="content-support">

        <h1>Support hub</h1>
        <div className="row" id="content-support-hub">
            <div className="col"><a href="Support/Guides"><button id="content-support-hub-button">
            <img src={guide} alt=""/>
                Guides
                </button></a></div>
            <div className="col"><a href="Support/Faq"><button id="content-support-hub-button" >
            <img src={FAQ} alt=""/>
                FAQ
                </button></a></div>
            <div className="col"><a href="Support/SubmitTicket"><button id="content-support-hub-button" >
            <img src={Submit} alt=""/>
                Submit ticket
                </button></a></div>
        </div>
    </div>
    )
}

export default Support