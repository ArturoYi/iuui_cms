const activityRouter = {
  route: null,
  name: 'ActivityManageFolder',
  title: 'ActivityManage',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-huodongbaoming',
  filePath: 'view/activity/', // 文件路径
  order: null,
  inNav: true,
  permission: ['活動管理'],
  children: [
    {
      title: 'ActivityList',
      type: 'view',
      name: 'activityList',
      route: '/activity/list',
      filePath: 'view/activity/activity-list.vue',
      inNav: true,
    },
    {
      title: 'AddActyvity',
      type: 'view',
      name: 'activityAdd',
      route: '/activity/add',
      filePath: 'view/activity/activity-add.vue',
      inNav: true,
    },
    {
      title: 'ActyvityDetail',
      type: 'view',
      name: 'activityDetail',
      route: '/activity/:id/detail',
      filePath: 'view/activity/activityDetail.vue',
      inNav: false,
    },
    {
      title: 'EditActyvityDetail',
      type: 'view',
      name: 'activityEdit',
      route: '/activity/:id/detail/edit',
      filePath: 'view/activity/activity-edit.vue',
      inNav: false,
    },
    {
      title: 'ActivitySignUpInfo',
      type: 'view',
      name: 'activitySignUpInfo',
      route: '/activity/:id/signup/:number/info',
      filePath: 'view/activity/components/activity-signup-info.vue',
      inNav: false,
    },
  ],
}

export default activityRouter
