import { Message } from 'element-ui'

export default function report (data, type='', callback) {
  let map = {
    create: 'create',
    update: 'update',
    destroy: 'delete'
  }
  let msg = map[type] || type || 'action'

  if (data.code === 1) {
    Message.success(msg + ' succeed！')
    callback(data)
  } else {
    Message.error(msg + ' failed！' + data.msg)
  }
}
