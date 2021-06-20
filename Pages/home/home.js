Page({
  data: {
    name: 'Yjaa',
    age: 18,
    GirlFriends: [
      {id: 1, name: 'Lem', age: 18},
      {id: 2, name: 'Lam', age: 18},
      {id: 3, name: 'AMlA', age: 18},
    ],
    counter: 0
  },
  addAge() {
    // 1. 这种做法页面是不会更新的
    // this.data.age += 1
    // console.log(this.data.age)

    // 2. this.setData()
    this.setData({
      age: this.data.age + 1
    })
  },
  subAge() {
    this.setData({
      age: this.data.age - 1
    })
  }
})