var defBase64 = require('./defBase64')
var version = require('./version')

/**
 * 生成css样式
 */
module.exports = function (arr, config) {
  var img0, img1, img2
  var size = config.size || 'cover'
  var blur = config.blur || '32px'
  var opacity = config.opacity || 0.5
  var brightness = config.brightness || 0.4
  var saturate = config.saturate || 1
  var grayscale = config.grayscale || 0
  var contrast = config.contrast || 1
  var textShadow = config.textShadow || '0 1px 4px rgba(0,0,0,0.9)'
  var animationDuration = config.animationDuration || 5
  var animation = config.animation || false

  animation = animation ? 'fadeZoom' : 'none'

  if (arr && arr.length) { // 如果传入的有参数
    img0 = encodeURI(arr[0] || 'none')
    img1 = encodeURI(arr[1] || 'none')
    img2 = encodeURI(arr[2] || 'none')
  } else { // 如果没有参数，则使用默认值
    img0 = defBase64[0]
    img1 = defBase64[1]
    img2 = defBase64[2]
  }

  var content = `

/*css-background-start*/
/*background.ver.${version}*/
/*
@keyframes fadeZoom {
  0% { opacity: 0.2; transform: scale(1); }
  100% { opacity: 0.8; transform: scale(3); }
}
*/
@keyframes fadeZoom {
  100% {
    transform: rotate(360deg)
  }
}
.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2) { text-shadow:${textShadow};}
.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2):before {
    animation-name: ${animation}; animation-duration:${animationDuration}s; background-size: ${size}; filter:opacity(${opacity}) blur(${blur}) grayscale(${grayscale}) brightness(${brightness}) saturate(${saturate}) contrast(${contrast}); opacity:${opacity}; animation-iteration-count:infinite; animation-timing-function: cubic-bezier(0.43, 0.01, 0.41, 1); content: " "; position: absolute; left: 0; right: 0; top: 0; bottom: 0;}
.editor-one>.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2):before{background-image: url('${img0}');}

.editor-two>.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2):before{background-image: url('${img1}');}

.editor-three>.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2):before{background-image: url('${img2}');}

[id='workbench.parts.editor']>.content>.one-editor-silo .monaco-editor>.overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}

.container>.editor-container>.monaco-editor>.overflow-guard>.monaco-scrollable-element:nth-child(2){background-position:100% 100%;background-repeat:no-repeat;}
/*css-background-end*/
`

  return content
}
