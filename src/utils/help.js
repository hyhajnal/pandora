function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (`e-${S4() + S4()}`)
}

const getInit = type => {
  let attr
  switch (type) {
    case 'div':
      attr = {
        style: 'width:100%;height:100px;border:1px solid #ccc;'
      }
      break
    case 'span':
      attr = {
        style: 'color:#000;',
        config: [
          { name: 'text', label: '文字', type: 'input' }
        ],
        content: {
          props: {
            text: '文字'
          }
        }
      }
      break
    case 'button':
      attr = {
        config: [
          { name: 'size', label: '文字', type: 'input', data: '文字' }
        ]
      }
      break
    case 'radio':
      attr = {}
      break
    case 'search':
      attr = {}
      break
    case 'switch':
      attr = {}
      break
    default:
      attr = {}
  }
  return attr
}

const mobiles = [{
  label: 'iPhone7',
  width: 375,
  height: 667
}, {
  label: 'iPhone7Plus',
  width: 414,
  height: 736
}, {
  label: 'iPhone5s',
  width: 320,
  height: 568
}, {
  label: 'iPhoneX',
  width: 375,
  height: 812
}]

export { guid, getInit, mobiles }
