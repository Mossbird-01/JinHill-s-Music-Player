const songs = [
    {
        title: "深海回响",
        artist: "李尧音",
        src: "audio/深海回响-李尧音.320.mp3", // 本地音频文件路径
        lrc: `
            [00:00.00] 作词 : 杜南宇
            [00:01.00] 作曲 : 杜南宇
            [00:02.00] 编曲 : 季志豪
            [00:09.34]听说海底的国王
            [00:10.85]覆灭了所有幻想
            [00:12.76]人鱼有翅膀
            [00:13.99]却飞不到空濛远方
            [00:16.60]而我像礁石一样
            [00:18.51]凝望着你的目光
            [00:20.43]深邃的空荡
            [00:21.78]一转身又沉入海洋
            [00:24.07]乌鸦在头顶盘旋
            [00:26.23]跟随谁的糜烂过往
            [00:28.20]这城市灯红酒绿
            [00:29.85]格格不入无关痛痒
            [00:31.89]我走在热寂地方
            [00:33.62]困在原地徒增着熵
            [00:35.78]摇晃 心脏
            [00:37.26]你突然撕破了伪装
            [00:39.54]听说海底的国王
            [00:41.52]覆灭了所有幻想
            [00:43.45]人鱼有翅膀
            [00:44.95]却飞不到空濛远方
            [00:47.25]而我像礁石一样
            [00:49.26] 凝望着你的目光
            [00:51.11]深邃的空荡
            [00:52.71]一转身又沉入海洋
            [01:00.94]我听见深海的回响
            [01:04.46]灵魂在流亡
            [01:26.05]乌鸦在头顶盘旋
            [01:28.03]跟随谁的糜烂过往
            [01:30.02]这城市灯红酒绿
            [01:31.74]格格不入无关痛痒
            [01:33.72]我走在热寂地方
            [01:35.52]困在原地徒增着熵
            [01:37.62]摇晃 心脏
            [01:39.16]你突然撕破了伪装
            [01:41.76]听说海底的国王
            [01:43.30]覆灭了所有幻想
            [01:45.27]人鱼有翅膀
            [01:46.69]却飞不到空濛远方
            [01:49.22]而我像礁石一样
            [01:51.20] 凝望着你的目光
            [01:53.00]深邃的空荡
            [01:54.43]一转身又沉入海洋
            [02:02.71]我听见深海的回响
            [02:06.03]灵魂在流亡
            [02:12.65]听说海底的国王
            [02:14.31]覆灭了所有幻想
            [02:20.20]而我像礁石一样
            [02:22.12] 凝望着你的目光
            [02:25.64]一转身又沉入海洋
            [02:27.99]听说海底的国王
            [02:29.78]覆灭了所有幻想
            [02:31.71]人鱼有翅膀
            [02:33.00]却飞不到空濛远方
            [02:35.58]而我像礁石一样
            [02:37.45] 凝望着你的目光
            [02:39.30]深邃的空荡
            [02:40.79]一转身又沉入海洋
            [02:50.58] 录音室 : HCY_Studio
            [02:51.03] 录音师 : 胡春阳
            [02:51.49] 混音 : 季志豪
            [02:51.94] 制作 : Morerare录音棚
            [02:52.40] 制作统筹 : 司徒小春
            [02:52.85] 监制 : 何施瑶
            [02:53.30] 出品 : HOTPLAY STUDIO
            [02:53.76] 营销推广 : 噼里啪啦Studio
            [02:54.21] 发行 : 讯飞音乐
            [02:54.67] 词曲提供 : 词曲家
            [02:55.12] 未经著作权人书面许可，不得以任何方式（包括翻唱、翻录等）使用
            ` 
    }, {
        title: "离别开出花",
        artist: "就是南方凯",
        src: "audio/离别开出花.mp3", // 本地音频文件路径
        lrc: `
            [00:00.87] 作曲 : 李浩瑞
            [00:01.74] 制作人 : 刘涛/李浩瑞
            [00:02.61] 编曲 : 谭侃侃
            [00:03.48]  吉他/贝斯 : 谭侃侃
            [00:04.36] 混音工程师 : 袁中仁
            [00:05.23] 母带后期混音师 : 袁中仁
            [00:06.10] 和声 : 李浩瑞/谭侃侃/顾雄/袁中仁/夹_zZ
            [00:06.97] 和声编写 : 李浩瑞/顾雄
            [00:07.84] 配唱制作人 : 刘涛/李浩瑞
            [00:08.72] 录音师 : 袁中仁
            [00:09.59] 人声编辑 : 刘涛
            [00:10.46] 视觉设计 : kidult.
            [00:11.33] 监制 : 许雯静Vivian Xu@索尼音乐/刘嘉雄Charles Liu@索尼音乐
            [00:12.20] 策划总监 : 左三好
            [00:13.08] 营销推广 : 祝鑫
            [00:13.95] 混音室 : 好乐无荒混音棚（长沙）
            [00:14.82] 录音棚 : 好乐无荒录音棚（长沙）
            [00:15.69] 制作公司 : 好乐无荒
            [00:16.56] OP/SP : 好乐无荒
            [00:17.44] 项目统筹 : 宋旭辉Shawn Song@索尼音乐/李若嫣Ruoyan Li@索尼音乐
            [00:18.31] 统筹 : 赵楚峰Chufeng Zhao@索尼音乐
            [00:19.18] 总监制 : 陈国威Andrew Chan@索尼音乐
            [00:20.05] 联合企划 : 大声密谋
            [00:20.94]坐上那朵离家的云霞
            [00:25.44]飘去无人知晓的天涯
            [00:29.97]背着妈妈说的那句话
            [00:34.47]孩子人生其实不复杂
            [00:37.46]
            [00:37.74]喔～眼泪轻轻地擦
            [00:41.01]别管那多嘴乌鸦
            [00:43.05]咽下那些风沙
            [00:45.54]你才能慢慢长大
            [00:47.55]要错过几个她
            [00:49.92]用你最好的年华
            [00:52.32]这是青春的代价
            [00:54.93]
            [00:55.20]当离别开出花
            [00:57.09]伸出新长的枝桠
            [00:59.64]像冬去春又来
            [01:01.65]等待心雪融化
            [01:03.81]
            [01:04.23]你每次离开家
            [01:06.18]带着远方的牵挂
            [01:08.76]那城市的繁华
            [01:10.68]盖住了月牙
            [01:12.88]
            [01:13.29]当离别开出花
            [01:15.54]它生长在悬崖
            [01:17.79]在最高的山顶
            [01:19.74]才听得见回答
            [01:21.91]
            [01:22.32]没什么好害怕
            [01:24.24]孩子放心去飞吧
            [01:27.09]在你的身后
            [01:28.83]有个等你的家
            [01:32.01]
            [01:42.45]坐上那朵离家的云霞
            [01:46.95]飘去无人知晓的天涯
            [01:51.51]背着妈妈说的那句话
            [01:55.98]孩子人生其实不复杂
            [01:58.75]
            [01:59.22]喔～眼泪轻轻地擦
            [02:02.40]别忘那童年梦话
            [02:04.56]散在远方的花
            [02:06.96]也随风慢慢长大
            [02:09.06]要错过几个她
            [02:11.40]用你最真的年华
            [02:13.80]这是青春的回答
            [02:16.46]
            [02:16.74]当离别开出花
            [02:18.57]伸出新长的枝桠
            [02:21.15]像冬去春又来
            [02:23.16]等待心雪融化
            [02:25.27]
            [02:25.74]你每次离开家
            [02:27.69]带着远方的牵挂
            [02:30.27]那城市的繁华
            [02:32.22]盖住了月牙
            [02:34.45]
            [02:34.80]当离别开出花
            [02:37.02]它生长在悬崖
            [02:39.30]在最高的山顶
            [02:41.25]才听得见回答
            [02:43.09]
            [02:43.86]没什么好害怕
            [02:45.81]孩子放心去飞吧
            [02:48.69]在你的身后
            [02:50.34]有个等你的家
            [02:52.73]
            [02:53.01]当离别开出花
            [02:54.78]伸出新长的枝桠
            [02:57.36]像冬去春又来
            [02:59.37]等待心雪融化
            [03:01.25]
            [03:01.92]你每次离开家
            [03:03.87]带着远方的牵挂
            [03:06.48]那城市的繁华
            [03:08.43]盖住了月牙
            [03:10.68]
            [03:11.07]当离别开出花
            [03:13.23]它生长在悬崖
            [03:15.51]在最高的山顶
            [03:17.49]才听得见回答
            [03:19.33]
            [03:20.07]没什么好害怕
            [03:22.08]孩子放心去飞吧
            [03:24.87]在你的身后
            [03:26.55]有个等你的家
            [03:29.48]
            [03:45.71] （本作品声明：著作权权利保留，未经许可，不得使用）
            `
    }, {
        title: "崩溃的世界-Collapsing World -",
        artist: " Lightscape",
        src: "audio/崩溃的世界.mp3", 
        lrc: `[00:00.00] 纯音乐，请欣赏`
    }, {
        title: "城南花已开",
        artist: "三亩地",
        src: "audio/城南花已开-三亩地.320.mp3", 
        lrc: `[00:00.00] 纯音乐，请欣赏`,
    }, {
        title: "你的答案",
        artist: "阿冗",
        src: "audio/你的答案-阿冗.mp3", 
        lrc: `[00:00.00] 作词 : 刘涛/林晨阳
[00:00.00] 作曲 : 刘涛
[00:00.00]《你的答案》
[00:02.46]作词 Lyrics：林晨阳 刘涛
[00:04.69]作曲 Music：刘涛
[00:07.34]演唱Singer：阿冗
[00:09.32]制作人 Produced by 刘涛
[00:12.09]编曲 Arranger：谭侃侃
[00:14.60]吉他 Guitar：谭侃侃
[00:15.15]键盘 Keyboards：谭侃侃
[00:17.44]合声 Backing vocals：金天 胡阁
[00:18.95]录音棚 Recording studio：北京好乐无荒录音棚
[00:19.65]录音师 Recording Engineer：吴佳敏
[00:20.35]混音师 Mixing Engineer：刘三斤
[00:21.59]母带后期混音师 Mastering Engineer：刘三斤
[00:22.20]监制 Executive producer: 陶诗
[00:23.00]OP/SP：好乐无荒
[00:24.82]鸣谢：万物体验家；不要音乐
[00:25.24]也许世界就这样
[00:28.49]我也还在路上
[00:31.13]没有人能诉说
[00:36.21]也许我只能沉默
[00:39.25]眼泪湿润眼眶
[00:42.10]可又不甘懦弱
[00:45.96]低着头 期待白昼
[00:51.04]接受所有的嘲讽
[00:56.31]向着风 拥抱彩虹
[01:02.00]勇敢的向前走
[01:06.68]黎明的那道光
[01:09.11]会越过黑暗
[01:11.75]打破一切恐惧我能
[01:14.80]找到答案
[01:17.44]哪怕要逆着光
[01:19.88]就驱散黑暗
[01:22.52]丢弃所有的负担
[01:25.77]不再孤单
[01:28.61]不再孤单
[01:39.01]也许世界就这样
[01:41.85]我也还在路上
[01:44.70]没有人能诉说
[01:49.78]也许我只能沉默
[01:52.82]眼泪湿润眼眶
[01:55.66]可又不甘懦弱
[01:59.53]低着头 期待白昼
[02:04.81]接受所有的嘲讽
[02:10.09]向着风 拥抱彩虹
[02:15.78]勇敢的向前走
[02:20.45]黎明的那道光
[02:22.48]会越过黑暗
[02:25.12]打破一切恐惧我能
[02:28.17]找到答案
[02:31.21]哪怕要逆着光
[02:33.45]就驱散黑暗
[02:36.09]丢弃所有的负担
[02:39.34]不再孤单
[02:42.19]不再孤单
[02:50.52]黎明的那道光
[02:52.54]会越过黑暗
[02:55.18]打破一切恐惧我能
[02:58.03]找到答案
[03:01.07]哪怕要逆着光
[03:03.51]就驱散黑暗
[03:05.95]有一万种的力量
[03:09.20]淹没孤单
[03:12.04]不再孤单
`,
    }, {
        title: "control",
        artist: "Zoe+Wees",
        src: "audio/control.mp3", 
        lrc: `[00:00.000] 作词 : Patrick Pyke Salmy/Ricardo Munoz/Zoe Wees/Nils Bodenstedt/Emma Sophia Rosen/Rene Müller
[00:01.000] 作曲 : Patrick Pyke Salmy/Ricardo Munoz/Zoe Wees/Nils Bodenstedt/Emma Sophia Rosen/Rene Müller
[00:08.484]Early in the morning I still get a little bit nervous
[00:16.840]Fighting my anxiety constantly I try to control it
[00:25.291]Even when I know it’s been forever I can still feel the spin
[00:33.735]Hurts when I remember and I never wanna feel it again
[00:42.173]Don’t know if you get it cause I can’t express how thankful I am
[00:50.340]That you were always with me when it hurts I know that you understand
[00:57.903]I don’t wanna lose control
[01:06.159]Nothing I can do anymore
[01:14.810]Trying every day when I hold my breath
[01:18.934]Spinning out in space pressing on my chest
[01:23.222]I don’t wanna lose control
[01:32.699]Some**mes I still think it’s coming but I know it’s not
[01:41.111]Trying to breathe in and then out but the air gets caught
[01:49.517]Cause even though I’m older now and I know how to shake off the past
[01:57.918]I wouldn’t have made it if I didn’t have you holding my hand
[02:05.321]I don’t wanna lose control
[02:13.563]Nothing I can do anymore
[02:22.049]Trying every day when I hold my breath
[02:26.291]Spinning out in space pressing on my chest
[02:30.686]I don’t wanna lose control
[02:39.754]I need you to know I would never be this strong without you
[02:44.913]You’ve seen how I’ve grown you took all my doubt
[02:48.211]Cause you were home
[02:55.815]I don’t wanna lose control
[03:03.976]There’s nothing I can do anymore
[03:12.691]I don’t wanna lose control
[03:20.906]Nothing I can do anymore (anymore), anymore
[03:29.385]Trying every day when I hold my breath
[03:33.667]Spinning out in space pressing on my chest
[03:37.905]I don’t wanna lose control`
    }, {
        title: "葬花",
        artist: "THT",
        src: "audio/葬花-THT.320.mp3", 
        lrc: `[00:00.00] 纯音乐，请欣赏`,
    }, {
        title: "潮汐（Natural）",
        artist: "傅梦彤",
        src: "audio/潮汐.mp3", 
        lrc: `[00:06.35]潮汐 (Natural) - 傅梦彤
[00:11.66]作词：安苏羽/舒心
[00:12.06]作曲：IN-K
[00:13.82]混音：谢骁
[00:15.39]制作人：安苏羽
[00:17.44]OP：音炬文化
[00:20.00]当海面迎来汹涌的潮汐
[00:22.81]我奔跑寻找昔日的足迹
[00:26.00]夕阳下倒影迷人的美丽
[00:27.88]可我却丢失故事和你
[00:30.52]你说过向往大海的神秘
[00:33.12]也憧憬我们遗失的过去
[00:35.71]分享给大海秘密
[00:39.60]蓝色的海底
[00:41.45]远山的风景
[00:44.19]我们的距离遥不可及
[00:49.23]退守的爱情
[00:51.88]还剩下回忆
[00:54.32]疯狂的寻觅你的身影
[01:00.01]残月忧郁
[01:02.59]星夜静谧
[01:04.89]潮落叹息
[01:10.89]聆听山语
[01:13.20]回荡不清
[01:15.80]若即若离
[01:22.31]当海面迎来汹涌的潮汐
[01:24.71]我奔跑寻找昔日的足迹
[01:27.30]夕阳下倒影迷人的美丽
[01:29.90]可我却丢失故事和你
[01:32.44]你说过向往大海的神秘
[01:34.93]也憧憬我们遗失的过去
[01:37.63]分享给大海秘密
[01:40.82]蓝色的海底
[01:43.51]远山的风景
[01:46.16]我们的距离
[01.47.30]遥不可及
[01:51.15]退守的爱情
[01:53.74]还剩下回忆
[01:56.29]疯狂的寻觅
[01:59.68]你的身影
[02:01.82]残月忧郁
[02:05.19]星夜静谧
[02:07.49]潮落叹息
[02:12.59]聆听山语
[02:14.36]回荡不清
[02:17.88]若即若离
[02:22.48]残月忧郁
[02:25.00]星夜静谧
[02:27.10]潮落叹息
[02:32.78]聆听山语
[02:35.79]回荡不清
[02:38.30]若即若离
`,
    }, {
        title: " Haru Haru",
        artist: "Duncan Laurence",
        src: "audio/HaruHaru.mp3", 
        lrc: `[00:00.00]纯音乐，请欣赏`,
    }, {
        title: "Call of Silence",
        artist: "泽野弘之",
        src: "audio/Call of Silence-泽野弘之.320.mp3", 
        lrc: `[00:38.41]Don't you think about me enough
[00:46.16]I've been burning my heart out
[00:53.90]Got to face need to tell you
[01:01.49]I won't run because I'm reticent
[01:44.22]You will know you're reborn tonight
[01:51.90]Must be ragged but I stay by your side
[01:59.66]Even if my body's bleached to the bones
[02:07.32]I don't want to go through that ever again
[02:14.53]So cry no more oh my beloved
[02:22.30]Go ahead be proud and fight it out
[02:30.07]You are the one our rising star
[02:37.79]You guide us far to home yet girt`,
    }, {
        title: "夜空中最亮的星",
        artist: "逃跑计划",
        src: "audio/夜空中最亮的星.mp3", 
        lrc: `[00:00.10]夜空中最亮的星 - 逃跑计划
[00:00.20]作词：毛川/李赤
[00:00.30]作曲：毛川
[00:18.40]夜空中最亮的星能否听清
[00:27.03]那仰望的人心底的孤独和叹息
[00:36.25]Oh 夜空中最亮的星能否记起
[00:44.73]曾与我同行消失在风里的身影
[00:52.51]我祈祷拥有一颗透明的心灵
[00:57.80]和会流泪的眼睛
[01:03.34]给我再去相信的勇气
[01:06.38]Oh 越过谎言去拥抱你
[01:10.52]每当我找不到存在的意义
[01:15.31]每当我迷失在黑夜里
[01:19.65]Oh 夜空中最亮的星
[01:24.39]请指引我靠近你
[01:38.31]夜空中最亮的星是否知道
[01:47.04]曾与我同行的身影如今在哪里
[01:55.97]Oh 夜空中最亮的星是否在意
[02:04.50]是等太阳升起还是意外先来临
[02:12.63]我宁愿所有痛苦都留在心里
[02:17.47]也不愿忘记你的眼睛
[02:23.31]给我再去相信的勇气
[02:26.40]Oh 越过谎言去拥抱你
[02:30.54]每当我找不到存在的意义
[02:35.28]每当我迷失在黑夜里
[02:39.67]Oh 夜空中最亮的星
[02:44.22]Oh 请照亮我前行
[03:05.87]我祈祷拥有一颗透明的心灵
[03:10.91]和会流泪的眼睛
[03:16.64]给我再去相信的勇气
[03:19.74]Oh 越过谎言去拥抱你
[03:23.93]每当我找不到存在的意义
[03:28.62]每当我迷失在黑夜里
[03:32.96]Oh 夜空中最亮的星
[03:37.69]Oh 请照亮我前行
[03:51.71]夜空中最亮的星能否听清
[04:00.34]那仰望的人心底的孤独和叹息
`,
    }, {
        title: "In The Shadow Of The Sun",
        artist: "Professor Green ",
        src: "audio/In The Shadow Of The Sun.mp3", 
        lrc: `[00:00.01]In The Shadow Of The Sun - Professor Green
[00:00.02]作词：Chris Loco/Stephen Manderson/Tom Liljegren/Alexander Ryberg/Joseph Khajadourian/Alex Schwartz
[00:00.03]作曲：Chris Loco/Stephen Manderson/Tom Liljegren/Alexander Ryberg/Joseph Khajadourian/Alex Schwartz
[00:00.24]Max Elto： 
[00:00.74]They say that life is always easier 
[00:05.88]After you let yourself come undone 
[00:11.22]They say they'll give you whatever you want 
[00:16.16]And they'll be waiting in the shadow of the sun 
[00:19.80]Seizing time where no one's been before 
[00:23.54]Close the curtains what you waiting for 
[00:27.23]And I'll be keeping secrets 
[00:31.02]Till I'm in the ground 
[00:32.92]Professor Green： 
[00:37.61]Keep your past your own I don't care about before 
[00:40.95]I don't wanna know your secrets I wanna help you keep yours 
[00:45.49]No one needs to no one'll ever know what we do 
[00:48.49]Where we go why don't we go to a place where only we know 
[00:52.24]Where we escape from real life and it feels good and it feels nice 
[00:56.03]That we ain't yet but we still might 
[00:57.83]Cause we go with it if it feels right 
[00:59.77]And it feels feels amazing 
[01:04.61]We ain't ready to see the day 
[01:05.71]Max Elto： 
[01:06.11]And I'll be waiting in the shadow of the sun 
[01:08.20]Seizing time where no one's been before 
[01:11.90]Close the curtains what you waiting for 
[01:15.52]And I'll be keeping secrets 
[01:19.46]And I'll be waiting in the shadow of the sun 
[01:23.06]Seizing time where no one's been before 
[01:26.45]Close the curtains what you waiting for 
[01:30.44]And I'll be keeping secrets 
[01:34.23]Till I'm in the ground 
[01:35.83]Professor Green： 
[01:37.32]Let go of fear 
[01:38.82]This can be a secret that we both keep that we both share 
[01:41.41]Hidden behind the smiles we both wear 
[01:43.91]As the sun creeps through the curtains 
[01:45.65]On the walls we become two silhouettes 
[01:48.40]As we close our eyes 
[01:49.60]Let go of the lies that fill our heads 
[01:52.29]Let's light it up live life in the moment 
[01:54.88]Why would we worry about where we might end up 
[01:57.73]They can't see us they can't judge us it's just us 
[02:01.47]They might wonder but only know where we go 
[02:04.23]When the sun comes up 
[02:05.18]Max Elto： 
[02:05.57]And I'll be waiting in the shadow of the sun 
[02:07.72]Seizing time where no one's been before 
[02:11.41]Close the curtains what you waiting for 
[02:15.05]And I'll be keeping secrets 
[02:18.94]And I'll be waiting in the shadow of the sun 
[02:22.59]Seizing time where no one's been before 
[02:26.18]Close the curtains what you waiting for 
[02:30.07]And I'll be keeping secrets 
[02:33.81]Till I'm in the ground 
[02:36.45]I'm in the shadow of the shadow of the the sun 
[02:39.90]Where I belong girl there's something coming on 
[02:43.80]I'm in the shadow of the shadow of the sun 
[02:48.09]Oh and I need you 
[02:50.58]Professor Green： 
[02:51.28]Chasing it chasing it 
[02:52.83]I don't know what I'm chasing is 
[02:55.02]All I know is I've been craving it 
[02:56.92]Ever since I had a taste of it 
[02:58.71]Life is what you make of it 
[03:00.26]We're just here writing our own books 
[03:02.71]This is just a page of it 
[03:04.10]Before you wave your fingers at us 
[03:05.70]You better make sure your hands are clean 
[03:07.74]We all obey our hands are tied 
[03:09.84]And I don't wanna have to leave 
[03:11.69]I don't wanna say goodbye 
[03:14.03]They say life is always easier when you come undone 
[03:17.92]When I go you'll know where I've gone 
[03:20.42]And I'll be waiting in the shadow of the sun 
[03:35.43]I'll be waiting in the shadow of the sun 
[03:38.87]Seizing time where no one's been before 
[03:42.57]Close the curtains what you waiting for 
[03:46.21]And I'll be keeping secrets 
[03:50.05]Till I'm in the ground 
`,
    }, {
        title: "Here with you",
        artist: "Asher Monroe",
        src: "audio/Here with you.mp3", 
        lrc: `[ml:1.0]
[ti:Here With You]
[ar:Asher Monroe]
[al:Here With You]
[by:]
[offset:0]
[00:00.00]Here With You (与你同在) - Asher Monroe
[00:06.78]   
[00:06.78]To all my friends
[00:08.41]对我所有好友来讲
[00:08.41]The night is young
[00:10.42]夜未央
[00:10.42]The music's loud
[00:12.19]乐未殇
[00:12.19]They playing our song
[00:14.07]他们在我们喜爱的歌声里欢畅
[00:14.07]Nowhere else that I belong
[00:17.78]不想去任何其他地方
[00:17.78]Than here with you
[00:21.59]我只想和你在此相伴
[00:21.59]Than here with you
[00:22.69]我只想和你在此相伴
[00:22.69]Oh oh oh oh oh oh
[00:24.18]   
[00:24.18]Oh oh oh oh oh oh
[00:26.02]   
[00:26.02]Oh oh oh oh oh oh
[00:27.77]   
[00:27.77]Oh oh oh oh oh oh
[00:29.55]   
[00:29.55]Oh oh oh oh oh oh
[00:31.26]   
[00:31.26]Oh oh oh oh oh oh
[00:33.03]   
[00:33.03]Oh oh oh oh oh oh
[00:35.15]   
[00:35.15]Oh ain't felt this good since I remember
[00:39.37]记忆中从未感觉如此美好
[00:39.37]This night got started when you entered
[00:43.03]今夜变得闪亮 当你的到来
[00:43.03]I hope we can get a little closer
[00:46.71]希望我们能有更多了解
[00:46.71]Maybe even get to know your name
[00:50.48]或许只需要知道你的名字
[00:50.48]I wanna hear the music so loud
[00:54.14]我希望音乐更疯狂
[00:54.14]Get some drinks inside me right now
[00:58.28]此刻 我只想来点美酒
[00:58.28]So baby let it go
[01:00.19]宝贝 不要犹豫
[01:00.19]You had me at hello
[01:01.96]你只需打个招呼我就会跟你走
[01:01.96]Let's raise our glass and toast
[01:03.81]让我们举杯畅饮
[01:03.81]DJ play that once more
[01:05.75]DJ让音乐再次唱响
[01:05.75]To all my friends
[01:07.41]对我所有好友来讲
[01:07.41]The night is young
[01:09.27]夜未央
[01:09.27]The music's loud
[01:11.05]乐未殇
[01:11.05]They playing our song
[01:13.00]他们在我们喜爱的歌声里欢畅
[01:13.00]There's nowhere else
[01:14.78]不想去任何其他地方
[01:14.78]That I belong
[01:16.63]我只想和你在此相伴
[01:16.63]Than here with you
[01:20.58]我只想和你在此相伴
[01:20.58]Than here with you
[01:21.74]我只想和你在此相伴
[01:21.74]Oh oh oh oh oh oh
[01:23.27]   
[01:23.27]Oh oh oh oh oh oh
[01:25.06]   
[01:25.06]Oh oh oh oh oh oh
[01:26.71]   
[01:26.71]Oh oh oh oh oh oh
[01:28.26]   
[01:28.26]Than here with you
[01:29.46]我只想和你在此相伴
[01:29.46]Oh oh oh oh oh oh
[01:30.86]   
[01:30.86]Oh oh oh oh oh oh
[01:32.42]   
[01:32.42]Oh oh oh oh oh oh
[01:33.91]   
[01:33.91]Oh gonna see the sun before we know it
[01:38.37]太阳就要升起 在我们还未意识到之前
[01:38.37]If you got some money time to blow it
[01:42.00]还有金钱的话 尽情挥洒掉吧
[01:42.00]Girl the way you got me feeling so sick
[01:45.85]女孩 你让我感觉
[01:45.85]Dancing the night away with you
[01:48.07]如此疯狂 与你彻夜共舞
[01:48.07]With you with you yeah
[01:50.09]和你一起  
[01:50.09]Nobody here is sober
[01:53.72]没有人还清醒
[01:53.72]Last call don't mean it's over yeah
[01:57.47]最后的招待并不代表就要结束
[01:57.47]So baby let it go
[01:59.30]所以 宝贝 不要犹豫
[01:59.30]You had me at hello
[02:01.05]你只需打个招呼我就会跟你走
[02:01.05]Let's raise our glass and toast
[02:03.01]让我们举杯畅饮 尽情享受
[02:03.01]To to toast toast
[02:04.83]举杯畅饮
[02:04.83]To all my friends
[02:06.55]对我所有好友来讲
[02:06.55]The night is young
[02:08.29]夜未央
[02:08.29]The music's loud
[02:10.31]乐未殇
[02:10.31]They playing our song
[02:12.10]他们在我们喜爱的歌声里欢畅
[02:12.10]There's nowhere else that I belong
[02:15.78]不想去任何其他地方
[02:15.78]Than here with you
[02:17.70]我只想和你在此相伴
[02:17.70]Than here with you
[02:19.67]我只想和你在此相伴
[02:19.67]Than here with you
[02:20.84]我只想和你在此相伴
[02:20.84]Oh oh oh oh oh oh
[02:22.30]   
[02:22.30]Oh oh oh oh oh oh
[02:23.77]   
[02:23.77]Than here with you
[02:24.80]我只想和你在此相伴
[02:24.80]Oh oh oh oh oh oh
[02:26.00]   
[02:26.00]Oh oh oh oh oh oh
[02:27.18]   
[02:27.18]Than here with you
[02:28.33]我只想和你在此相伴
[02:28.33]Oh oh oh oh oh oh
[02:29.79]   
[02:29.79]Oh oh oh oh oh oh
[02:31.13]   
[02:31.13]Oh oh oh oh oh oh
[02:32.87]   
[02:32.87]Oh I wanna hear the music so loud
[02:41.83]我只想听见美妙的歌声
[02:41.83]I wanna hear the music so loud
[02:45.79]我只想听见美妙的歌声
[02:45.79]Hear the music so loud
[02:52.90]听见美妙的歌声
[02:52.90]To all my friends
[02:54.60]对我所有好友来讲
[02:54.60]The night is young
[02:56.30]夜未央
[02:56.30]The music's loud
[02:58.10]乐未殇
[02:58.10]They playing our song
[03:00.01]他们在我们喜爱的歌声里欢畅
[03:00.01]There's nowhere else that I belong
[03:03.70]不想去任何其他地方
[03:03.70]Than here with you
[03:05.67]我只想和你在此相伴
[03:05.67]Than here with you
[03:07.61]我只想和你在此相伴
[03:07.61]Than here with you
[03:08.73]我只想和你在此相伴
[03:08.73]Oh oh oh oh oh oh
[03:10.31]   
[03:10.31]Oh oh oh oh oh oh
[03:11.58]   
[03:11.58]Than here with you
[03:13.03]我只想和你在此相伴
[03:13.03]Oh oh oh oh oh oh
[03:14.14]   
[03:14.14]Oh oh oh oh oh oh
[03:15.24]   
[03:15.24]Than here with you
[03:16.36]我只想和你在此相伴
[03:16.36]Oh oh oh oh oh oh
[03:17.65]   
[03:17.65]Oh oh oh oh oh oh
[03:18.80]   
[03:18.80]Than here with you
[03:20.04]我只想和你在此相伴
[03:20.04]Oh oh oh oh oh oh
[03:21.15]   
[03:21.15]Oh oh oh oh oh oh
[03:22.27]   
[03:22.27]Than here with you
[03:23.61]我只想和你在此相伴
[03:23.61]Oh oh oh oh oh oh
[03:25.03]   
[03:25.03]Oh oh oh oh oh oh
[03:26.43]   
[03:26.43]Oh oh oh oh oh oh
[03:27.82]   
[03:27.82]Oh oh oh oh oh oh
[03:29.63]   
[03:29.63]Than here with you
[03:31.01]我只想和你在此相伴
[03:31.01]Oh oh oh oh oh oh
[03:32.73]   
[03:32.73]Oh oh oh oh oh oh
[03:34.45]   
[03:34.45]Oh oh oh oh oh oh
[03:36.25]   
[03:36.25]Oh oh oh oh oh oh
[03:41.025]   
[03:41.025]
`,
    }, {
        title: "狮舞迎春",
        artist: "原神",
        src: "audio/狮舞迎春.mp3", 
        lrc: `[00:00.00]纯音乐，请欣赏`,
    }, {
        title: "孤勇者",
        artist: "陈奕迅",
        src: "audio/孤勇者 - 陈奕迅.mp3", 
        lrc: `[00:00.00]孤勇者(《英雄联盟：双城之战》动画剧集中文主题曲) - 陈奕迅
[00:02.04]作词：唐恬
[00:02.74]作曲：钱雷
[00:02.94]编曲：钱雷
[00:03.14]吉他：高飞
[00:03.34]人声录音师：利伟明
[00:03.74]人声录音棚：雅旺录音室
[00:04.24]Vocal edite：汝文博@SBMS Beijing 
[00:04.59]混音&母带：周天澈@Studio 21A 
[00:05.08]词版权管理方：北京梦织音传媒有限公司
[00:05.93]曲版权管理方：索尼音乐版权代理（北京）有限公司
[00:06.93]录音作品及MV版权：EAS MUSIC LTD 
[00:07.43]出品监制：霍锦/ 卢泓宇
[00:07.93]联合出品方：拳头游戏/ 腾讯游戏/ 腾讯视频
[00:08.88]制作人：钱雷
[00:22.79]都，是勇敢的
[00:28.93]你额头的伤口，你的不同，你犯的错
[00:37.41]都不必隐藏
[00:43.75]你破旧的玩偶，你的面具，你的自我
[00:52.28]他们说，要带着光驯服每一头怪兽
[00:58.96]他们说，要缝好你的伤没有人爱小丑
[01:06.39]为何孤独不可光荣
[01:09.49]人只有不完美值得歌颂
[01:13.73]谁说污泥满身的不算英雄
[01:21.36]爱你孤身走暗巷
[01:23.06]爱你不跪的模样
[01:24.85]爱你对峙过绝望
[01:26.70]不肯哭一场
[01:28.54]爱你破烂的衣裳
[01:30.34]却敢堵命运的枪
[01:32.19]爱你和我那么像
[01:34.08]缺口都一样
[01:35.98]去吗配吗这褴褛的披风
[01:39.67]战吗战啊以最卑微的梦
[01:43.31]致那黑夜中的呜咽与怒吼
[01:50.79]谁说站在光里的才算英雄
[02:09.32]他们说要戒了你的狂
[02:11.96]就像擦掉了污垢
[02:16.70]他们说要顺台阶而上而代价是低头
[02:23.99]那就让我不可乘风
[02:26.98]你一样骄傲着那种孤勇
[02:31.37]谁说对弈平凡的不算英雄
[02:38.90]爱你孤身走暗巷
[02:40.55]爱你不跪的模样
[02:42.29]爱你对峙过绝望
[02:44.19]不肯哭一场
[02:46.04]爱你破烂的衣裳
[02:47.93]却敢堵命运的枪
[02:49.73]爱你和我那么像
[02:51.57]缺口都一样
[02:53.42]去吗配吗这褴褛的披风
[02:57.15]战吗战啊以最卑微的梦
[03:00.79]致那黑夜中的呜咽与怒吼
[03:08.47]谁说站在光里的才算英雄
[03:13.56]你的斑驳与众不同
[03:20.56]你的沉默震耳欲聋You Are The Hero 
[03:27.34]爱你孤身走暗巷
[03:28.69]爱你不跪的模样
[03:30.52]爱你对峙过绝望
[03:32.27]不肯哭一场(You Are The Hero) 
[03:34.56]爱你来自于蛮荒
[03:35.96]一生不借谁的光
[03:37.82]你将造你的城邦
[03:39.61]在废墟之上
[03:41.46]去吗去啊以最卑微的梦
[03:45.15]战吗战啊以最孤高的梦
[03:48.89]致那黑夜中的呜咽与怒吼
[03:56.28]谁说站在光里的才算英雄
`
    },
];
let currentSongIndex = 0;
let isPlaying = false;
let visualizerBars = [];
let sound = null;
let audioContext = null;
let analyser = null;
let currentLyricIndex = -1;
let lyricsData = [];
let lyricsTimer = null;
let progressTimer = null;
let isDragging = false;


// 定义 titleElement
const titleElement = document.querySelector('.title');
const currentLyric = document.getElementById('currentLyric');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progress-Container');
// Howler初始化
function initHowler() {
    if (sound) sound.unload();
    
        sound = new Howl({
        src: [songs[currentSongIndex].src],
        html5: true,
        volume: 0.7,
        onplay: () => {
            isPlaying = true;
            titleElement.classList.add('playing');
            initVisualizer();
            requestAnimationFrame(updateVisualizer);
            lyricsTimer = setInterval(() => {
                updateLyrics(sound.seek());
            }, 100);
            progressTimer = setInterval(() => {
                const progress = sound.seek() / sound.duration();
                updateProgress(progress || 0);
            }, 100);
        },
        onend: () => playNext(),
        onpause: () => {
            isPlaying = false;
            titleElement.classList.remove('playing');
        }
    });

    // 初始化 AudioContext 和 Analyser
    initAudioContext();
}

// 初始化 AudioContext 和 Analyser
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        // 连接 Howler 的音频节点到 Analyser
        Howler.masterGain.connect(analyser);
        analyser.connect(audioContext.destination);
    }
}

// 可视化初始化
function initVisualizer() {
    const visualizer = document.getElementById('visualizer');
    visualizer.innerHTML = '';
    visualizerBars = [];
    
    for (let i = 0; i < 13; i++) { 
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        visualizer.appendChild(bar);
        visualizerBars.push({
            element: bar,
            height: 0 // 保存柱子当前高度
        });
    }
}

// 开始可视化
function startVisualizer() {
    isPlaying = true;
    updateVisualizer(); // 开始更新可视化
}

// 停止可视化
function stopVisualizer() {
    isPlaying = false;
}

// 更新可视化效果
function updateVisualizer() {
    if (!isPlaying) return; // 如果不在播放，退出

    visualizerBars.forEach((barObj) => {
        // 生成新的高度值并平滑过渡
        const newValue = Math.random() * 100; // 降低高度范围至 0 到 50 之间
        const currentHeight = barObj.height;

        // 插值计算 (线性变化)
        barObj.height = currentHeight + (newValue - currentHeight) * 1.2; // 在当前高度和新高度间插值
        barObj.element.style.height = `${barObj.height}px`;
        
        // 随机颜色
        barObj.element.style.background = `hsla(183, 81.70%, 45.10%, 0.85)`; // 将颜色改为蓝色（或其他你想要的颜色）
    });
     // 增加平滑效果，速度慢一点
     setTimeout(() => {
        requestAnimationFrame(updateVisualizer);
    }, 70); // 延迟100毫秒再请求下一个动画帧
}



// 播放列表初始化
function initPlaylist() {
    const playlist = document.getElementById('playlist');
    songs.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentSongIndex ? 'playing' : ''}`;
        item.textContent = `${song.title} - ${song.artist}`;
        item.onclick = () => playSong(index);
        playlist.appendChild(item);
    });
}

// 播放指定歌曲
function playSong(index) {
    currentSongIndex = index;
    document.querySelectorAll('.playlist-item').forEach(item => 
        item.classList.remove('playing'));
    document.querySelectorAll('.playlist-item')[index].classList.add('playing');
    
    // 更新标题和艺术家
    titleElement.textContent = songs[index].title;
    document.getElementById('artist').textContent = songs[index].artist;
    // 解析歌词
    lyricsData = parseLRC(songs[index].lrc);
    currentLyricIndex = -1;
    currentLyric.textContent = '';

    
        initHowler();
        if (isPlaying) sound.play();
    }


// 播放控制
document.getElementById('playButton').addEventListener('click', () => {
    if (!sound) return;
    if (isPlaying) {
        sound.pause();
    } else {
        // 用户点击播放按钮后，初始化 AudioContext
        if (!audioContext) {
            initAudioContext();
        }
        sound.play();
    }
});

document.getElementById('prevButton').addEventListener('click', playPrev);
document.getElementById('nextButton').addEventListener('click', playNext);

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    initPlaylist();
    playSong(0);
    setupProgressDrag();});
    
   // 点击特效（保持原有）
   document.body.addEventListener('click', (e) => {
    createEffect(e.clientX, e.clientY);
});

function createEffect(x, y) {
    const container = document.getElementById('effect-container');

    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'effect-circle';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.borderColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        circle.style.animationDelay = i * 0.2 + 's';

        container.appendChild(circle);
        setTimeout(() => circle.remove(), 1000);
    }
}
// 播放控制
playButton.addEventListener('click', () => {
    audio.play();
    titleElement.classList.add('playing'); // 添加播放状态class
    timer = setInterval(updatePlayer, 100);
});

stopButton.addEventListener('click', () => {
    audio.pause();
    titleElement.classList.remove('playing');
    clearInterval(timer);
    currentLyricIndex = -1;
    currentLyric.textContent = '';
    progressBar.style.width = '0';
});

// 更新播放状态
function updatePlayer() {
    const currentTime = audio.currentTime;
    const progress = currentTime / audio.duration;
    
    updateProgress(progress);
    updateLyrics(currentTime);
}

// 进度条更新
function updateProgress(progress) {
    progressBar.style.width = `${progress * 100}%`;
    updateProgressGradient(progress);
}

// 渐变效果
function updateProgressGradient(progress) {
    const color1 = `rgba(0, 123, 255, ${0.8 - progress * 0.4})`;
    const color2 = `rgba(255, 65, 108, ${0.8 - progress * 0.4})`;
    progressBar.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`;
}
// 歌词解析
function parseLRC(lrcText) {
    const lines = lrcText.split('\n');
    const result = [];

    lines.forEach(line => {
        const timeMatches = line.match(/\[(\d+):(\d+\.\d+)\]/g);
        const text = line.replace(/\[\d+:\d+\.\d+\]/g, '').trim();

        if (timeMatches && text) {
            timeMatches.forEach(timeMatch => {
                const timeParts = timeMatch.match(/\[(\d+):(\d+\.\d+)\]/);
                const minutes = parseFloat(timeParts[1]);
                const seconds = parseFloat(timeParts[2]);
                result.push({
                    time: minutes * 60 + seconds,
                    text: text
                });
            });
        }
    });

    return result.sort((a, b) => a.time - b.time);
}

// 歌词更新
function updateLyrics(currentTime) {
    for (let i = lyricsData.length - 1; i >= 0; i--) {
        if (currentTime >= lyricsData[i].time) {
            if (currentLyricIndex !== i) {
                currentLyricIndex = i;
                showLyric(lyricsData[i].text);
            }
            break;
        }
    }
}

function showLyric(text) {
    currentLyric.style.transform = 'translateY(-20px)';
    currentLyric.style.opacity = '0';
    
    setTimeout(() => {
        currentLyric.textContent = text;
        currentLyric.style.transform = 'translateY(0)';
        currentLyric.style.opacity = '1';
    }, 300);
}
