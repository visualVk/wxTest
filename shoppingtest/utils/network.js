const app = getApp()

let baseURL = 'http://localhost:32001/person'
let authURL = 'http://localhost:40400/auth'

let token = wx.getStorageSync('token');


export function getRequest(requestHandler) {
  return new Promise((resolve, reject) => {
    let params = requestHandler.data || {}
    let key = Object(params);
    let url = baseURL + '/findAllPersonSimpleInfo'
    requestHandler.Url = url
    request('GET', requestHandler)
      .then(res => {
        resolve(res)
      }).catch(error => {
      reject(error)
    })
  })
}

export function postRequest(requestHandler) {
  return new Promise((resolve, reject) => {
    let params = requestHandler.data || {}
    let url = authURL + '/userlogin'
    requestHandler.Url = url
    request('POST', requestHandler)
      .then(res => {
        resolve(res)
      }).catch(error => {
      reject(error)
    })
  })
}

export function request(method, requestHandler) {
  let token = {}
  wx.setStorage({
    key: 'token',
    data: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFwcCJdLCJuYW1lIjoiYWRtaW4iLCJwZXJzb25JZCI6MywiaWQiOjIsImV4cCI6MTU3MTkyNjk5MywiYXV0aG9yaXRpZXMiOlsiZmluZFBhY3RzQnlQZXJzb25JZCIsImRlbGV0ZUxlYXJuQnlJZCIsImRlbGV0ZVJvbGVCeUlkIiwidXBsb2FkIiwiZmluZFBhY3RCeUlkIiwiZmluZEFsbFBlcm1pc3Npb25zIiwiZGVsZXRlSm9iQnlJZCIsImRlbGV0ZVBhY3RCeUlkIiwiZmluZFJvbGVCeUlkIiwiYWRkUGFjdFR5cGUiLCJkZWxldGVEZXZlbG9waW5nQnlJZCIsInVwZGF0ZVJvbGVCeUlkIiwiZmluZEpvYkJ5SWQiLCJkZWxldGVQZXJtaXNzaW9uIiwidXBkYXRlUGVyc29uU3VwZXJJbmZvQnlJZCIsInVwZGF0ZVBlcnNvbk5vcm1hbEluZm8iLCJmaW5kRGV2ZWxvcGluZ3NCeVBlcnNvbklkIiwiZmluZEpvYnNCeVBlcnNvbklkIiwidXBkYXRlUGFjdFR5cGVCeUlkIiwiYWRkUGVyc29uU3VwZXIiLCJkZWxldGVQZXJzb25TdXBlckluZm9CeWlkTGlzdCIsImFkZFJvbGUiLCJ1cGRhdGVKb2JCeUlkIiwiZmluZFBhY3RzQnlOYW1lIiwiZmluZEFsbFBhY3RzIiwiZ2V0VXNlciIsImZpbmRQZXJzb25TaW1wbGVJbmZvc0J5UXVlcnlWbyIsImZpbmRBbGxQYWN0VHlwZSIsInVwZGF0ZURldmVsb3BpbmdCeUlkIiwiZGVsZXRlUGFjdFR5cGVCeUlkIiwiZmluZEFsbFJvbGVzIiwidXBkYXRlUGVybWlzc2lvbiIsImZpbmRMZWFybkJ5SWQiLCJmaW5kUGVyc29uU3VwZXJJbmZvc0J5SWQiLCJmaW5kQWxsSm9iIiwiYWRkTGVhcm4iLCJmaW5kUGFjdFR5cGVCeUlkIiwiYWRkSm9iIiwiZmluZExlYXJuc0J5UGVyc29uSWQiLCJhZGRQYWN0IiwiZGVsZXRlUGVyc29uU3VwZXJJbmZvQnlJZCIsInVwZGF0ZVBhY3RCeUlkIiwidXBkYXRlTGVhcm5CeUlkIiwiZmluZFBlcm1pc3Npb25CeUlkIiwiZmluZERldmVsb3BpbmdCeUlkIiwiZmluZEFsbFBlcnNvblNpbXBsZUluZm8iLCJmaW5kUGVyc29uTm9ybWFsSW5mb0J5SWQiLCJhZGRQZXJtaXNpc29uIiwiYWRkRGV2ZWxvcGluZyJdLCJqdGkiOiIwMjcxNWU0My0yZThmLTQ0N2UtYTY0NC0zMmZhMzUzN2M1MmUiLCJjbGllbnRfaWQiOiJYY1dlYkFwcCJ9.OthEggZy7Bh3fNZkyS_kTqgdtOFc8Q51jJVFzKZaKcwiWha_onDMfrLO12_QxK7m6BtbiiYr5b0sQl6M0ie3HgMT0lB_x-Co0xsYvtFMirNFKMx4Aittt5w-os9SKqBTjKL9PBf6csy0m2vRmTryQ9VnUlPh4GxN0IyFXrUypLh8MzaQXc6M0i9R3rleltF4IEkIhT8Th9x3yi56YkvCvM0H9wzixz7K3wUhpxx44TfAO_CyQlK8EfwVmDa0FkZVs22DqzY4WQulXOhbM7sG8Meb07VOeb8-c75Tmirw-IVeOARpS3t3tRotvdZyAvT4GcIflp2SjuXG0M9ewnsSXw'
  })
  wx.getStorage({
    key: 'token',
    success(res) {
      console.log(res);
      token = res.data
    }
  })
  return new Promise((resolve, reject) => {
    let url = requestHandler.Url;
    let data = requestHandler.data;
    let dataType = requestHandler.dataType;
    console.log(token);
    wx.request({
      url: url,
      method: method,
      data: {data},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFwcCJdLCJuYW1lIjoiYWRtaW4iLCJwZXJzb25JZCI6MywiaWQiOjIsImV4cCI6MTU3MTkyNjk5MywiYXV0aG9yaXRpZXMiOlsiZmluZFBhY3RzQnlQZXJzb25JZCIsImRlbGV0ZUxlYXJuQnlJZCIsImRlbGV0ZVJvbGVCeUlkIiwidXBsb2FkIiwiZmluZFBhY3RCeUlkIiwiZmluZEFsbFBlcm1pc3Npb25zIiwiZGVsZXRlSm9iQnlJZCIsImRlbGV0ZVBhY3RCeUlkIiwiZmluZFJvbGVCeUlkIiwiYWRkUGFjdFR5cGUiLCJkZWxldGVEZXZlbG9waW5nQnlJZCIsInVwZGF0ZVJvbGVCeUlkIiwiZmluZEpvYkJ5SWQiLCJkZWxldGVQZXJtaXNzaW9uIiwidXBkYXRlUGVyc29uU3VwZXJJbmZvQnlJZCIsInVwZGF0ZVBlcnNvbk5vcm1hbEluZm8iLCJmaW5kRGV2ZWxvcGluZ3NCeVBlcnNvbklkIiwiZmluZEpvYnNCeVBlcnNvbklkIiwidXBkYXRlUGFjdFR5cGVCeUlkIiwiYWRkUGVyc29uU3VwZXIiLCJkZWxldGVQZXJzb25TdXBlckluZm9CeWlkTGlzdCIsImFkZFJvbGUiLCJ1cGRhdGVKb2JCeUlkIiwiZmluZFBhY3RzQnlOYW1lIiwiZmluZEFsbFBhY3RzIiwiZ2V0VXNlciIsImZpbmRQZXJzb25TaW1wbGVJbmZvc0J5UXVlcnlWbyIsImZpbmRBbGxQYWN0VHlwZSIsInVwZGF0ZURldmVsb3BpbmdCeUlkIiwiZGVsZXRlUGFjdFR5cGVCeUlkIiwiZmluZEFsbFJvbGVzIiwidXBkYXRlUGVybWlzc2lvbiIsImZpbmRMZWFybkJ5SWQiLCJmaW5kUGVyc29uU3VwZXJJbmZvc0J5SWQiLCJmaW5kQWxsSm9iIiwiYWRkTGVhcm4iLCJmaW5kUGFjdFR5cGVCeUlkIiwiYWRkSm9iIiwiZmluZExlYXJuc0J5UGVyc29uSWQiLCJhZGRQYWN0IiwiZGVsZXRlUGVyc29uU3VwZXJJbmZvQnlJZCIsInVwZGF0ZVBhY3RCeUlkIiwidXBkYXRlTGVhcm5CeUlkIiwiZmluZFBlcm1pc3Npb25CeUlkIiwiZmluZERldmVsb3BpbmdCeUlkIiwiZmluZEFsbFBlcnNvblNpbXBsZUluZm8iLCJmaW5kUGVyc29uTm9ybWFsSW5mb0J5SWQiLCJhZGRQZXJtaXNpc29uIiwiYWRkRGV2ZWxvcGluZyJdLCJqdGkiOiIwMjcxNWU0My0yZThmLTQ0N2UtYTY0NC0zMmZhMzUzN2M1MmUiLCJjbGllbnRfaWQiOiJYY1dlYkFwcCJ9.OthEggZy7Bh3fNZkyS_kTqgdtOFc8Q51jJVFzKZaKcwiWha_onDMfrLO12_QxK7m6BtbiiYr5b0sQl6M0ie3HgMT0lB_x-Co0xsYvtFMirNFKMx4Aittt5w-os9SKqBTjKL9PBf6csy0m2vRmTryQ9VnUlPh4GxN0IyFXrUypLh8MzaQXc6M0i9R3rleltF4IEkIhT8Th9x3yi56YkvCvM0H9wzixz7K3wUhpxx44TfAO_CyQlK8EfwVmDa0FkZVs22DqzY4WQulXOhbM7sG8Meb07VOeb8-c75Tmirw-IVeOARpS3t3tRotvdZyAvT4GcIflp2SjuXG0M9ewnsSXw'
      },
      success: function (res) {
        if (res.data.msg == 'success') {
          console.log('success')
        }
        resolve(res.data)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

export function postFormData(requestHandler) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'POST',
      url: requestHandler.url,
      data: requestHandler.data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
