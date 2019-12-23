'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }
//获取商品详情内容，获取ctx上下文
  async detail() {
    const { ctx } = this;
    
    ctx.body = `id==${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = `id==${ctx.params.id}`;
  }

  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { name, weight} = ctx.request.body;
    ctx.body = {
      name,
      weight
    }
  }
  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id:123
    }
  }

  async delete() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = {
      id:123
    }
  }
  
}

module.exports = ProductController;
