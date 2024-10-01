/**
 * page controller
 */

 import { factories } from '@strapi/strapi';

 export default factories.createCoreController('api::page.page', ({ strapi }) => ({
   // Sobrescreve o método find para incluir 'populate' automaticamente
   async find(ctx) {
    console.log(ctx.query)
     // Adiciona o parâmetro 'populate' à query para popular automaticamente
     ctx.query = {
       ...ctx.query,
       populate: 'deep', // ou personalize aqui o que deseja popular
     };

     if (ctx.query.slug) {
        ctx.query.filters = {
          ...ctx.query.filters,
          slug: ctx.query.slug, // Aplica o filtro do slug
        };
      }
  
     // Chama o método original 'find' com as query modificadas
     const { data, meta } = await super.find(ctx);
     return { data, meta };
   },
 }));
 