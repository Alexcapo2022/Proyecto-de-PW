import React, { useState } from "react";
const Guides = () =>{
    
    const [subselection,setSubselection]=useState(0);
    return<div id="content-support">

        <h1>Support guides</h1>
        <div className="col mt-5" id="content-support-guide-col">
            <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection===1?setSubselection(0):setSubselection(1)}}> &#128187; Guía de inicio rápido de Build Redux</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===1?"flex":"none"}}>
            Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de tu compra.
            Si han transcurrido 30 días desde tu compra, no se te ofrecerá un reembolso
            y/o cambio de ningún tipo.
            </div>
            <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection===2?setSubselection(0):setSubselection(2)}}>&#9881; Resumen del sistema</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===2?"flex":"none"}}>
            Nuestro negocio funciona sobre la base de citas. Cuando cancelan una cita, 
            exigimos que todos los clientes lo informen con MÁS de 24 horas de anticipación al horario programado. 
            De lo contrario, les cobraremos la sesión completa.
            </div>
            <div className="row" id="content-support-guide-row"> <button onClick={()=>{subselection===3?setSubselection(0):setSubselection(3)}}> &#128187; Solución de problemas - Pantalla</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===3?"flex":"none"}}>
            La empresa garantiza a sus clientes el servicio de reparación sin costo por 
            repuesto ni mano de obra, por un periodo de doce (12) meses los cuales inician 
            a partir de la fecha de entrega a satisfacción del cliente.
            </div>
            <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection===4?setSubselection(0):setSubselection(4)}}>&#128257; Guía de reinicio - Memoria</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===4?"flex":"none"}}>
            Le informamos que aceptamos las siguientes dos formas de pago: pagar con tarjeta de crédito / tarjeta de débito (VISA, Mastercard, Maestro y American Express) y pago con Paypal.
            </div>
            <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection===5?setSubselection(0):setSubselection(5)}}>&#128257; Guía de reinicio - Tarjeta gráfica</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===5?"flex":"none"}}>
            Normalmente tomará 1-3 días hábiles para preparar los artículos. Después de que se envíe el pedido, el envío demora otros días.
            </div>
            <div className="row" id="content-support-guide-row"><button onClick={()=>{subselection===6?setSubselection(0):setSubselection(6)}}>&#128208; Guía de realineación: E/S trasera</button></div>
            <div className="row"  id="content-support-guide-row-1" style={{display:subselection===6?"flex":"none"}}>
            Lo sentimos, pero no realizamos envíos a destinos internacionales para pedidos realizados en línea.
            Los clientes fuera de Perú que deseen comprar productos o piezas de Sentry deberán comunicarse con nosotros directamente o buscar un representante.
            </div>
        </div>
    </div>
}
export default Guides;