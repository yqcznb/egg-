'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }
}

module.exports = HomeController;
