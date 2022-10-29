const img = 'https://tva1.sinaimg.cn/large/008i3skNgy1gu9gco1hdbj605k05kgll02.jpg'
export const data = {
  name: 'LiHei',
  image: img,
  job: 'web dev',
  salary: '3000',
  address: '四川省成都市成华区十里店寺庙',
  education: '本科',
  isGood: 1,
}

export const titleList = [
  { title: '姓名', prop: 'name', enableCopy: true },
  {
    title: '头像',
    // 自定义 title 属性值
    titleTips: data => {
      return (data.image && '生成图，点击放大') || '暂无头像'
    },
    prop: data => {
      return (
        <div style={{ width: '150px', height: '150px' }}>
          <img src={data.image} alt='我的头像：超级无敌美丽' />
        </div>
      )
    },
  },
  {
    title: '职业',
    prop: 'job',
  },
  {
    title: '月薪',
    prop: data => {
      return <span>{data.salary + '$'}</span>
    },
  },
  {
    title: '住址',
    prop: 'address',
    span: 2,
    enableCopy: true,
  },
  {
    title: '学历',
    prop: 'education',
    span: 1,
  },
  {
    title: '是否统招',
    prop: data => {
      const map = { 0: '否', 1: '是' }
      return <span>{map[data.isGood]}</span>
    },
    span: 2,
  },
]
