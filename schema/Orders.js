cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [Orders.count],
      dimensions: [Orders.status],
      timeDimension: Orders.createdAt,
      granularity: `day`
    }
  },
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    },
    Products: {
      sql: `${CUBE}.product_id = ${Products}.id`,
      relationship: `belongsTo`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    number: {
      sql: `number`,
      type: `sum`
    }
  },
  dimensions: {
    status: {
      sql: `status`,
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
    },
    completedAt: {
      sql: `completed_at`,
      type: `time`
    }
  }
});