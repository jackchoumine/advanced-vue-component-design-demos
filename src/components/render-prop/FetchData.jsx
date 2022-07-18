/*
 * @Description : renderLess 封装公共行为
 * @Date        : 2022-07-19 03:25:16 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-19 03:45:16 +0800
 * @LastEditors : JackChou
 */

export const FetchData = (props, { slots }) => {
  const data = { name: 'JackChou' }
  return [slots.left(data), slots.default(), slots.right()]
}
