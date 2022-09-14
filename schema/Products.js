cube(`Products`, {
  sql: `SELECT * FROM public.products`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Merchants: {
      sql: `${CUBE}.merchant_id = ${Merchants}.id`,
      relationship: `belongsTo`
    },
    
    ProductCategories: {
      sql: `${CUBE}.product_category_id = ${ProductCategories}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, createdAt]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
