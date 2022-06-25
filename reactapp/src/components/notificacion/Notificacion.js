import { useState ,createContext } from "react"

const Notif=({message, severity})=>{

    const styDiv={
        width:' auto',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: severity === 'error'? 'red': 'rgb(5, 150, 5)',
        padding: '1rem 2rem 1rem 2rem',
        borderRadius: '1rem'
    }

    const notifText={
        color:' white',
        fontSize: '1.7rem'
    }
        
      

    return(

        <div style={styDiv}>
            <h3 style={notifText}>{message}</h3>

        </div>

    )
}

export const NotificacionContext= createContext()

export const NotificacionProvee=({children})=>{
    const [mensajeUst, setMensaje]=useState({
        severity: 'exito',
        message: ''
    })

    const setNotificacion=(svt, msg)=>{
        setMensaje({severity:svt, message:msg})
        setTimeout(()=>{
            setMensaje({...mensajeUst, message:''})
        },2000)
    }

    return(
        <NotificacionContext.Provider value={setNotificacion}>
            {mensajeUst.message!=='' && <Notif message={mensajeUst.message} severity={mensajeUst.severity}/>}
            {children}
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext