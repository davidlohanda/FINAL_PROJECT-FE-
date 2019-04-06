import axios from 'axios'


// =====================LOGIN=============================
export const onLogin=(username,password)=>{
    return(dispatch)=>{
        dispatch({
            type:'LOADING'
        })
        axios.get('http://localhost:2000/userLogin',{params:{username,password}})
        .then((res)=>{
            console.log(res.data)
            if(res.data.length === 0){
                dispatch({
                    type:'USER_NOT_FOUND'
                })
            }else if(res.data[0].verified==='true'){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:res.data[0].username
                })
            }else if(res.data[0].verified==='false'){
                dispatch({
                    type:'USER_NOT_VERIFIED'
                })
            }
        })
        .catch((err)=>{
            dispatch({
                type:'SYSTEM_ERROR'
            })
        })
    }
}

export const keepLogin=(cookie)=>{
    return(dispatch)=>{
        axios.get('http://localhost:2000/userKeepLogin',{params:{username : cookie}})
        .then((res)=>{
            if(res.data.length > 0){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:cookie
                })
            }
        })
        .catch((err)=>console.log(err))
    }
    
}

export const resetUser=()=>{
    return{
        type:'RESET_USER'
    }
}

// ========================REGISTER==========================
export const onRegister=(username,email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:'LOADING'
        })

        axios.post('http://localhost:2000/userRegister',{username,email,password})
        .then((res)=>{
            if(res.data==='Registration Success'){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:res.data[0].username
                })
            }else if(res.data==='Username not available'){
                dispatch({
                    type:'USERNAME_NOT_AVAILABLE'
                })
            }
        })
        .catch((err)=>{
            dispatch({
                type:'SYSTEM_ERROR'
            })
        })
    }
}
