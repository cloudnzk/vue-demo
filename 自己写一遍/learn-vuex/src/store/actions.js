export default{
    aUpdateInfo(context, payload){
        /* 异步操作通常用Promise写 */
        return new Promise((resolve) => {
            setTimeout(() => {
                //这个updateInfo是上面mutation的
                context.commit('updateInfo')
                console.log(payload)
                resolve('11111')
            },1000)
        })
    }
}