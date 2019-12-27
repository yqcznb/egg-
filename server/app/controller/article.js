const Controller = require('egg').Controller;

class ArticleController extends Controller {
   async create(){
    const { ctx } = this;
    const result = await ctx.service.article.create(ctx.request.body);
    if(result){
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '发布文章失败'
        }
    }   
   }
}

module.exports = ArticleController;