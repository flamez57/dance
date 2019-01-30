/**
 * 全局变量
 */
//域名配置
global.onLineEnv = {
    frontHost:'https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1',
}

//接口配置
global.frApi = {
    lists:global.onLineEnv.frontHost+'/lists',   //列表
    detail:global.onLineEnv.frontHost+'/detail'   //详情
}
