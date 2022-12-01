import '../estilos/Support.css'


const Support = ()=>{
    return (
    <div id="content-support">

        <h1>Support hub</h1>
        <div className="row" id="content-support-hub">
            <div className="col"><a href="Support/Guides"><button id="content-support-hub-button">
            <img src={`/src/imagenes/icons/guide.png`} alt=""/>
                Guides
                </button></a></div>
            <div className="col"><a href="Support/Faq"><button id="content-support-hub-button" >
            <img src={`/src/imagenes/icons/faq.png`} alt=""/>
                FAQ
                </button></a></div>
            <div className="col"><a href="Support/SubmitTicket"><button id="content-support-hub-button" >
            <img src={ `${ RUTA_BACKEND }/icons/submit.png` } alt=""/>
                Submit ticket
                </button></a></div>
        </div>
    </div>
    )
}

export default Support