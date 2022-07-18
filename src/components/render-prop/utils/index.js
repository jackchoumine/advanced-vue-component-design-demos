/*
 * @Description :
 * @Date        : 2022-07-19 01:08:59 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-19 01:09:00 +0800
 * @LastEditors : JackChou
 */

export function copyText(content = '', title = '') {
  // NOTE 使用 input 难以调整复制文本的格式，比如换行
  const textarea = document.createElement('textarea')
  textarea.value = typeof content === 'string' ? content.trim() : ''
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('Copy')
    alert(` 复制 ${title} 成功 `)
  } catch (error) {
    alert(' 复制失败，请重试')
  }
  document.body.removeChild(textarea)
}
