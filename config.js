export const HOME_SECTION_INFO = {
    // 联系方式
    // 此处 title 字段为中英文切换的 key ，对应于 en.js 与 zh.js 文件中的 key
    // icon 需要从 https://www.iconfont.cn/ 中获取。
    // jobs 与 desc 字段直接到 en.js 与 zh.js 文件中修改即可。
    // jobs 用-分隔，desc 用空格分隔，否则没有逐个字的出场动画效果。
    contactList: [
        { icon: 'icon-gitee', url: 'https://gitee.com/autumn-ux', title: 'gitee' },
        {
            icon: 'icon-qq',
            url: 'http://wpa.qq.com/msgrd?v=3&uin=3226322882&site=qq&menu=yes',
            title: 'qq'
        },
        { icon: 'icon-mail', url: 'mailto:3226322882@qq.com', title: 'mail' },
        { icon: 'icon-blog', url: '#', title: 'blog' }
    ]
}

export const ABOUT_SECTION_INFO = {
    // 学历信息
    // school 字段为学校名称的中英文切换的 key ，对应于 en.js 与 zh.js 文件中的 key
    // background 字段为学校背景图片的文件名，需要自行添加到 src/assets/images/school/ 目录下
    // length 字段为介绍文本的段落数，具体查看 en.js 与 zh.js 文件中的介绍文本。
    colleges: [
        {
            school: 'currentUniversity',
            background: 'university.jpg',
            length: 4
        }
    ]
}

export const SKILL_SECTION_INFO = [
    // name 是技能的名称，name 字段没有中英切换
    // level 是技能的等级，level 字段代表的含义可以到 zh.js 文件中对应的 key 中修改，支持中英文切换
    // 技能块的背景图标需要使用 svg 格式，并且文件名为 name + '.svg'，需要自行添加到 src/assets/images/svg/ 目录下
    { name: 'HTML', level: 'Proficient' },
    { name: 'CSS', level: 'Proficient' },
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'Vue', level: 'Proficient' },
    { name: 'React', level: 'Familiar' },
    { name: 'Spring', level: 'Familiar' },
    { name: 'Scrapy', level: 'Familiar' },
    { name: 'MySQL', level: 'Familiar' },
    { name: 'TypeScript', level: 'Familiar' },
    { name: 'Python', level: 'Familiar' },
    { name: 'Java', level: 'Familiar' },
    { name: 'NodeJS', level: 'Novice' }
]

export const PROJECT_SECTION_INFO = [
    // title 是项目名称的中英文切换的 key ，对应于 en.js 与 zh.js 文件中的 key
    // skills 是项目用到的技能，skills 字段中的 key 对应于 SKILL_SECTION_INFO 中的 name 字段
    // time 是项目时间
    // deployed 是项目是否已上线，online 表示已上线，offline 表示已下线，none 表示未部署
    // 项目介绍直接在 en.js 与 zh.js 文件中对应的 key 中修改，支持中英文切换，key的格式为 title + 'Introduction'，例如：'SoftwareAssociationPlatformIntroduction'
    // link 是项目链接，如果项目没有链接，则不填
    // responsibilityLength 是项目responsibility的段落数，具体查看 en.js 与 zh.js 文件中的介绍文本。
    // images 是项目展示图片，images 字段中的 filename 对应于 src/assets/images/project/ 目录下的图片文件名。
    {
        title: 'SoftwareAssociationPlatform',
        skills: ['Vue', 'JavaScript', 'HTML', 'CSS'],
        time: {
            start: '2023.09',
            end: '2024.01'
        },
        deployed: 'online',
        jobs: ['frontEndDevelopment'],
        responsibilityLength: 6
    },
    {
        title: 'SwustOJSystem',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        time: {
            start: '2024.02',
            end: '2024.06'
        },
        deployed: 'none',
        jobs: ['frontEndDevelopment'],
        responsibilityLength: 8
    },
    {
        title: 'TreeIslandDataSystem',
        skills: ['Vue', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        time: {
            start: '2024.07',
            end: '2024.11'
        },
        deployed: 'online',
        jobs: ['frontEndDevelopment'],
        responsibilityLength: 7
    },
    {
        title: 'PersonalBlogSystem',
        skills: ['Vue', 'Spring', 'Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
        time: {
            start: '2024.09',
            end: '2024.12'
        },
        deployed: 'online',
        jobs: ['frontEndDevelopment', 'backEndDevelopment'],
        link: 'https://your-blog-url.com',
        responsibilityLength: 6
    },
]

export const EXPERIENCE_SECTION_INFO = [
    // title 是经历的标题，支持中英文切换 ，对应于 en.js 与 zh.js 文件中的 key
    // 经历介绍直接在 en.js 与 zh.js 文件中对应的 key 中修改，支持中英文切换，key的格式为 title + 'Experience'，例如：'UniversityStudyExperience'
    // time 是经历的时间
    { title: 'UniversityStudy', time: '2023.9' },
    { title: 'FrontendLearning', time: '2023.2' },
    { title: 'BackendLearning', time: '2024.2' },
    { title: 'ProjectDevelopment', time: '2024.6' },
]

export const SEO_META = {
    title: '个人作品集 - 大学生前端开发者',
    description: '欢迎访问我的个人作品集，这里展示了我在前端开发学习过程中的项目成果和技术成长。',
    keywords: '个人主页, 前端开发, 项目展示, 作品集, Vue, React, 大学生开发者',
    // 添加 Open Graph 标签
    ogTitle: '个人作品集 - 大学生前端开发者',
    ogDescription: '查看我的学习项目和技术成长历程，一起探索前端开发之旅。',
    ogImage: '/assets/images/photo.png',
    // 添加 Twitter 标签
    twitterTitle: '个人作品集 - 大学生前端开发者',
    twitterDescription: '查看我的学习项目和技术成长历程，一起探索前端开发之旅。',
    twitterImage: '/assets/images/photo.png',
}
