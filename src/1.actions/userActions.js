import axios from 'axios'

// =====================LOGIN=============================
export const onLogin=(username,password)=>{
    return(dispatch)=>{
        dispatch({
            type:'LOADING'
        })
        axios.get('http://localhost:2000/users',{params:{username,password}})
        .then((res)=>{
            if(res.data.length > 0){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:username
                })
            }else{
                dispatch({
                    type:'USER_NOT_FOUND'
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
        axios.get('http://localhost:2000/users',{params:{username : cookie}})
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

        axios.get('http://localhost:2000/users?username='+username)
        .then((res)=>{
            if(res.data.length>0){
                dispatch({
                    type:'USERNAME_NOT_AVAILABLE'
                })
            }else{
                axios.post('http://localhost:2000/users',{username,email,password})
                .then((res)=>{
                    dispatch({
                        type:'LOGIN_SUCCESS',
                        payload:username
                    })
                })
                .catch((err)=>console.log(err))
            }
        })
        .catch((err)=>{
            dispatch({
                type:'SYSTEM_ERROR'
            })
        })
    }
}
