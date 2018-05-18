let util = {}
util.title = function (title) {
  title = title ? title + '' : 'base project'
  window.document.title = title
}

export default util
