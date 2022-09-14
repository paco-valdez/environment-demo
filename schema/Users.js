cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, id, lastName, city, createdAt]
    }
  },
  
  dimensions: {
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
