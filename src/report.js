import { Message } from 'element-ui'
// 显示操作执行结果
export default function report(data, type = '', callback) {
  let map = {
    create: 'create',
    update: 'update',
    destroy: 'delete'
  }
  let msg = map[type] || type || 'action'

  if (data.code === 1) {
    Message.success(msg + ' succeed！')
    callback(data) //如果执行成功，则调用回调函数
  } else {
    Message.error(msg + ' failed！' + data.msg)
  }
}
