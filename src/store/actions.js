export default  {
    //context:上下文 不够优雅
    // aUpdateInfo(context,payload){
    //     setTimeout(()=>{
    //         context.commit('updateInfo')
    //         // payload()
    //         console.log(payload.message);
    //         payload.success()
    //     },1000)
    // }

    aUpdateInfo(context,payload){
        return new Promise((resolve) => {
            setTimeout(()=>{
                context.commit('updateInfo')
                console.log(payload);
                resolve('111')
            },1000)
        })
    }
}
