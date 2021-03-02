let initData = [
  {
    id: 1, symbol: 'FMG3-MAR21', lowLimitPrice: 9.0, highLimitPrice: 20.0,
    tradingReferencePrice: 29.0, securityID: "002", "cfiCode": "001", "lastEligibleTradeDate": "20210201-22:30:00.00",
    "activationDate": "20210201-22:30:00.00", "strikePrice": 10.0,
  },
]

export const Customer = {
  list: () => new Promise((resolve, reject) => {
    resolve({
      data: {
        data: {
          data: initData
        },
        code: 1
      },
      status: 200
    })
  }),
  create: params => new Promise((resolve, reject) => {
    let data = { ...params, id: initData[initData.length - 1].id + 1 }
    initData = initData.concat(data)
    resolve({
      data: {
        data: {
          data: data
        },
        code: 1
      },
      status: 200
    })
  }),
  retrieve: () => { },
  update: params => new Promise((resolve, reject) => {
    let index = initData.findIndex(item => item.id === params.id)
    for (let k in initData[index]) {
      initData[index][k] = params[k]
    }
    resolve({
      data: {
        data: {
          data: params
        },
        code: 1
      }
    })
  }),
  destroy: id => new Promise((resolve, reject) => {
    let index = initData.findIndex(item => item.id === id)
    initData.splice(index, 1)
    resolve({
      data: {
        data: {
          data: initData
        },
        code: 1
      },
      status: 200
    })
  })
}
