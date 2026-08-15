// HSK3 书写练习 - 题库数据 (Writing Section Q71-80 for all 20 exams)
// Part 1: 排列顺序 (71-75) - arrange chunks into a correct sentence
// Part 2: 汉字填空 (76-80) - fill in the missing character given pinyin
const EXAM_DATA = [
  {
    num: 1,
    code: "H30000",
    part1: [
      { q: 71, chunks: ["我", "最", "爱吃", "西瓜"], answer: "我最爱吃西瓜。" },
      { q: 72, chunks: ["他", "终于", "同意", "了"], answer: "他终于同意了。" },
      { q: 73, chunks: ["他们", "在", "复习", "哪", "一课"], answer: "他们在复习哪一课？" },
      { q: 74, chunks: ["这个", "菜单", "是", "用", "汉语", "写的"], answer: "这个菜单是用汉语写的。" },
      { q: 75, chunks: ["这次", "会议", "在", "2010年", "冬天", "举行"], answer: "这次会议在2010年冬天举行。" }
    ],
    part2: [
      { q: 76, pinyin: "tài", sentence: "今天的云很多，看不见〔〕阳。", answer: "太" },
      { q: 77, pinyin: "míng", sentence: "那只熊猫叫什么〔〕字？", answer: "名" },
      { q: 78, pinyin: "mǐ", sentence: "你敢跑一万五千〔〕吗？", answer: "米" },
      { q: 79, pinyin: "huí", sentence: "我认为他〔〕答得很好。", answer: "回" },
      { q: 80, pinyin: "niú", sentence: "早饭是〔〕奶、面包和鸡蛋。", answer: "牛" }
    ]
  },
  {
    num: 2,
    code: "H31001",
    part1: [
      { q: 71, chunks: ["弟弟", "高兴地", "笑", "了"], answer: "弟弟高兴地笑了。" },
      { q: 72, chunks: ["上午", "的", "考试", "比较", "简单"], answer: "上午的考试比较简单。" },
      { q: 73, chunks: ["这个城市", "的", "环境", "变得", "越来越", "好", "了"], answer: "这个城市的环境变得越来越好了。" },
      { q: 74, chunks: ["那位", "医生", "送给", "他", "一个", "礼物"], answer: "那位医生送给他一个礼物。" },
      { q: 75, chunks: ["其他班", "的", "成绩", "也", "有", "很大", "提高"], answer: "其他班的成绩也有很大提高。" }
    ],
    part2: [
      { q: 76, pinyin: "chū", sentence: "医院离这儿很远，我们坐〔〕租车去吧。", answer: "出" },
      { q: 77, pinyin: "yuán", sentence: "一〔〕是10角，一角是10分。", answer: "元" },
      { q: 78, pinyin: "jiào", sentence: "我不认识他，你知道他姓什么、〔〕什么吗？", answer: "叫" },
      { q: 79, pinyin: "zhōng", sentence: "〔〕间穿红裙子的一定是他妹妹。", answer: "中" },
      { q: 80, pinyin: "mǐ", sentence: "我已经饱了，不想吃〔〕饭了。", answer: "米" }
    ]
  },
  {
    num: 3,
    code: "H31002",
    part1: [
      { q: 71, chunks: ["我们", "先", "看看", "菜单"], answer: "我们先看看菜单。" },
      { q: 72, chunks: ["她", "忘了", "带", "护照"], answer: "她忘了带护照。" },
      { q: 73, chunks: ["这些", "葡萄", "很", "新鲜"], answer: "这些葡萄很新鲜。" },
      { q: 74, chunks: ["熊猫", "的", "眼睛和耳朵", "都是", "黑色", "的"], answer: "熊猫的眼睛和耳朵都是黑色的。" },
      { q: 75, chunks: ["你", "敢不敢", "用", "冷水", "洗澡"], answer: "你敢不敢用冷水洗澡？" }
    ],
    part2: [
      { q: 76, pinyin: "rén", sentence: "他一直都很关心别〔〕。", answer: "人" },
      { q: 77, pinyin: "tài", sentence: "你的头发〔〕长了，像草一样。", answer: "太" },
      { q: 78, pinyin: "gè", sentence: "就在这条街的东边，有〔〕眼镜店。", answer: "个" },
      { q: 79, pinyin: "yún", sentence: "今天是晴天，没有〔〕。", answer: "云" },
      { q: 80, pinyin: "wén", sentence: "我来中国，除了学习汉语，还希望了解更多的中国〔〕化。", answer: "文" }
    ]
  },
  {
    num: 4,
    code: "H31004",
    part1: [
      { q: 71, chunks: ["药", "在", "我的", "包里"], answer: "药在我的包里。" },
      { q: 72, chunks: ["他", "要", "去机场", "接", "女朋友"], answer: "他要去机场接女朋友。" },
      { q: 73, chunks: ["你", "脚下", "的", "路", "还", "很长"], answer: "你脚下的路还很长。" },
      { q: 74, chunks: ["她", "不", "喜欢", "用铅笔", "写字"], answer: "她不喜欢用铅笔写字。" },
      { q: 75, chunks: ["你丈夫", "的", "鼻子", "怎么", "了"], answer: "你丈夫的鼻子怎么了？" }
    ],
    part2: [
      { q: 76, pinyin: "shǒu", sentence: "洗〔〕间就在电梯左边。", answer: "手" },
      { q: 77, pinyin: "shì", sentence: "黑板上的这只鸟〔〕谁画的？", answer: "是" },
      { q: 78, pinyin: "jiā", sentence: "今晚的月亮让他想〔〕了。", answer: "家" },
      { q: 79, pinyin: "huì", sentence: "这边太热了，我们去树下坐一〔〕儿吧。", answer: "会" },
      { q: 80, pinyin: "huā", sentence: "草地上开着五颜六色的〔〕儿。", answer: "花" }
    ]
  },
  {
    num: 5,
    code: "H31005",
    part1: [
      { q: 71, chunks: ["李小姐", "的", "头发", "是", "黑色", "的"], answer: "李小姐的头发是黑色的。" },
      { q: 72, chunks: ["会议", "什么", "时候", "举行"], answer: "会议什么时候举行？" },
      { q: 73, chunks: ["他们班", "的", "学生", "学习", "很", "努力"], answer: "他们班的学生学习很努力。" },
      { q: 74, chunks: ["马和羊", "都", "喜欢", "吃草"], answer: "马和羊都喜欢吃草。" },
      { q: 75, chunks: ["老年人", "要", "关心", "自己", "的", "腿脚"], answer: "老年人要关心自己的腿脚。" }
    ],
    part2: [
      { q: 76, pinyin: "zhōng", sentence: "老师，黑板〔〕间的这个词是什么意思？", answer: "中" },
      { q: 77, pinyin: "zhī", sentence: "他不喜欢猫，也不喜欢狗，但他家有3〔〕小鸟。", answer: "只" },
      { q: 78, pinyin: "rì", sentence: "明天星期〔〕，你作业写完没？", answer: "日" },
      { q: 79, pinyin: "yòu", sentence: "不是左边，我说的是〔〕边的那个帽子。", answer: "右" },
      { q: 80, pinyin: "fēn", sentence: "你带钱了吗？我还差3角5〔〕。", answer: "分" }
    ]
  },
  {
    num: 6,
    code: "H31006",
    part1: [
      { q: 71, chunks: ["咖啡里", "不要", "放糖"], answer: "咖啡里不要放糖。" },
      { q: 72, chunks: ["把", "碗和筷子", "洗干净", "了", "吗"], answer: "把碗和筷子洗干净了吗？" },
      { q: 73, chunks: ["孩子", "突然", "发烧", "了"], answer: "孩子突然发烧了。" },
      { q: 74, chunks: ["看到", "这个句子", "表示", "游戏结束"], answer: "看到这个句子表示游戏结束。" },
      { q: 75, chunks: ["她", "对", "这条绿裤子", "很", "满意"], answer: "她对这条绿裤子很满意。" }
    ],
    part2: [
      { q: 76, pinyin: "yě", sentence: "相信我，面包会有的，牛奶〔〕会有的。", answer: "也" },
      { q: 77, pinyin: "rì", sentence: "每个国家都有自己的节〔〕、自己的文化。", answer: "日" },
      { q: 78, pinyin: "zài", sentence: "请用铅笔把姓名写〔〕照片后面。", answer: "在" },
      { q: 79, pinyin: "duō", sentence: "要学好画画儿，第一，要老师教得好；第二，必须〔〕练习。", answer: "多" },
      { q: 80, pinyin: "wèi", sentence: "我想请您〔〕我写介绍信。", answer: "为" }
    ]
  },
  {
    num: 7,
    code: "H31007",
    part1: [
      { q: 71, chunks: ["我", "喜欢", "中国", "文化"], answer: "我喜欢中国文化。" },
      { q: 72, chunks: ["他", "的", "名字", "被", "写错", "了"], answer: "他的名字被写错了。" },
      { q: 73, chunks: ["她", "身高", "不到", "一米七"], answer: "她身高不到一米七。" },
      { q: 74, chunks: ["现在", "画", "羊", "的", "耳朵和鼻子"], answer: "现在画羊的耳朵和鼻子。" },
      { q: 75, chunks: ["如果", "有面条", "就", "更好", "了"], answer: "如果有面条就更好了。" }
    ],
    part2: [
      { q: 76, pinyin: "shǒu", sentence: "这是谁的〔〕机？", answer: "手" },
      { q: 77, pinyin: "yuán", sentence: "你看，这是几十年前的一〔〕、一角和一分。", answer: "元" },
      { q: 78, pinyin: "niú", sentence: "我不饿，不吃面包了，喝杯〔〕奶吧。", answer: "牛" },
      { q: 79, pinyin: "diàn", sentence: "不客气，有什么问题就给我打〔〕话。", answer: "电" },
      { q: 80, pinyin: "yún", sentence: "这个小太阳表示晴天，〔〕表示阴天。", answer: "云" }
    ]
  },
  {
    num: 8,
    code: "H31008",
    part1: [
      { q: 71, chunks: ["那位", "邻居", "很", "热情"], answer: "那位邻居很热情。" },
      { q: 72, chunks: ["这个", "楼", "一共", "三层"], answer: "这个楼一共三层。" },
      { q: 73, chunks: ["菜单", "被", "服务员", "拿走", "了"], answer: "菜单被服务员拿走了。" },
      { q: 74, chunks: ["中国南方", "的", "雨水", "比", "北方", "多"], answer: "中国南方的雨水比北方多。" },
      { q: 75, chunks: ["把", "冰箱", "放", "厨房里", "吧"], answer: "把冰箱放厨房里吧。" }
    ],
    part2: [
      { q: 76, pinyin: "jǐ", sentence: "你姐姐的孩子上〔〕年级？", answer: "几" },
      { q: 77, pinyin: "xīn", sentence: "马小姐，谢谢关〔〕，我不发烧了，头也不疼了。", answer: "心" },
      { q: 78, pinyin: "xià", sentence: "对不起，〔〕午有个重要的会议，我让司机去医院接你好不好？", answer: "下" },
      { q: 79, pinyin: "dà", sentence: "经过4个星期的练习，叔叔的普通话水平有了很〔〕提高。", answer: "大" },
      { q: 80, pinyin: "yún", sentence: "这个小太阳表示晴天，〔〕表示阴天。", answer: "云" }
    ]
  },
  {
    num: 9,
    code: "H31009",
    part1: [
      { q: 71, chunks: ["咖啡里", "不要", "放糖"], answer: "咖啡里不要放糖。" },
      { q: 72, chunks: ["祝", "大家", "身体", "健康"], answer: "祝大家身体健康！" },
      { q: 73, chunks: ["那名服务员", "做事情", "特别", "认真"], answer: "那名服务员做事情特别认真。" },
      { q: 74, chunks: ["我们", "是", "8点半", "离开", "东门", "的"], answer: "我们是8点半离开东门的。" },
      { q: 75, chunks: ["她", "满意地", "笑", "了"], answer: "她满意地笑了。" }
    ],
    part2: [
      { q: 76, pinyin: "jiàn", sentence: "再〔〕，欢迎您下次再来。", answer: "见" },
      { q: 77, pinyin: "tiān", sentence: "突然就下雨了，刚才还是晴〔〕，还有太阳。", answer: "天" },
      { q: 78, pinyin: "zài", sentence: "请用铅笔把姓名写〔〕照片后面。", answer: "在" },
      { q: 79, pinyin: "zhōng", sentence: "为了更好地了解〔〕国文化，他开始学习汉语，而且提高很快。", answer: "中" },
      { q: 80, pinyin: "cháng", sentence: "厨房里的灯坏了多〔〕时间了？", answer: "长" }
    ]
  },
  {
    num: 10,
    code: "H31110",
    part1: [
      { q: 71, chunks: ["他弟弟", "对", "表演", "很", "有兴趣"], answer: "他弟弟对表演很有兴趣。" },
      { q: 72, chunks: ["它", "的", "鼻子", "多么", "可爱", "啊"], answer: "它的鼻子多么可爱啊！" },
      { q: 73, chunks: ["姐姐", "想", "参加", "普通话", "考试"], answer: "姐姐想参加普通话考试。" },
      { q: 74, chunks: ["黑板上", "写着", "她", "的", "名字"], answer: "黑板上写着她的名字。" },
      { q: 75, chunks: ["老师", "很快地", "画好", "了", "熊猫", "的", "耳朵"], answer: "老师很快地画好了熊猫的耳朵。" }
    ],
    part2: [
      { q: 76, pinyin: "chū", sentence: "他〔〕现在哪里，哪里就有笑声。", answer: "出" },
      { q: 77, pinyin: "tài", sentence: "这张世界地图〔〕旧了，再买张新的吧。", answer: "太" },
      { q: 78, pinyin: "gè", sentence: "这〔〕词是什么意思？这是我今天看新闻时看到的。", answer: "个" },
      { q: 79, pinyin: "nǐ", sentence: "喂，我刚到电梯口，〔〕家是在17层吧？", answer: "你" },
      { q: 80, pinyin: "hòu", sentence: "晚上9点〔〕打电话很便宜，一分钟一角二分钱。", answer: "后" }
    ]
  },
  {
    num: 11,
    code: "H31111",
    part1: [
      { q: 71, chunks: ["左阿姨", "不", "会", "讲", "普通话"], answer: "左阿姨不会讲普通话。" },
      { q: 72, chunks: ["这些", "面包", "一共", "18块"], answer: "这些面包一共18块。" },
      { q: 73, chunks: ["你", "的", "作业", "完成", "了", "吗"], answer: "你的作业完成了吗？" },
      { q: 74, chunks: ["我女儿", "的", "数学", "成绩", "非常", "好"], answer: "我女儿的数学成绩非常好。" },
      { q: 75, chunks: ["她", "把信", "放进", "了", "叔叔", "的", "包里"], answer: "她把信放进了叔叔的包里。" }
    ],
    part2: [
      { q: 76, pinyin: "xià", sentence: "再见，欢迎您〔〕次再来。", answer: "下" },
      { q: 77, pinyin: "huí", sentence: "男朋友的〔〕答，让她特别高兴。", answer: "回" },
      { q: 78, pinyin: "bǐ", sentence: "对猫来说，小鱼〔〕羊肉更好吃。", answer: "比" },
      { q: 79, pinyin: "tài", sentence: "你把空调打开吧，房间里〔〕热了。", answer: "太" },
      { q: 80, pinyin: "tiān", sentence: "爷爷，您今〔〕买的葡萄真新鲜，非常好吃。", answer: "天" }
    ]
  },
  {
    num: 12,
    code: "H31218",
    part1: [
      { q: 71, chunks: ["祝您", "越来越", "年轻"], answer: "祝您越来越年轻！" },
      { q: 72, chunks: ["花园里", "的", "树和草", "都", "绿", "了"], answer: "花园里的树和草都绿了。" },
      { q: 73, chunks: ["这条", "裤子", "太", "长", "了"], answer: "这条裤子太长了！" },
      { q: 74, chunks: ["我", "觉得", "熊猫", "更", "可爱"], answer: "我觉得熊猫更可爱。" },
      { q: 75, chunks: ["她", "的", "帽子", "被风", "刮跑", "了"], answer: "她的帽子被风刮跑了。" }
    ],
    part2: [
      { q: 76, pinyin: "dà", sentence: "他的普通话水平最近有很〔〕提高。", answer: "大" },
      { q: 77, pinyin: "me", sentence: "你好，香蕉怎〔〕卖？", answer: "么" },
      { q: 78, pinyin: "chī", sentence: "感冒了要多喝水，多〔〕水果。", answer: "吃" },
      { q: 79, pinyin: "rén", sentence: "对不起，我以为房间里没〔〕。", answer: "人" },
      { q: 80, pinyin: "qù", sentence: "每次经过那家商店，我都会进〔〕为孩子买些蛋糕或者别的东西。", answer: "去" }
    ]
  },
  {
    num: 13,
    code: "H31219",
    part1: [
      { q: 71, chunks: ["蓝小姐", "对人", "非常", "热情"], answer: "蓝小姐对人非常热情。" },
      { q: 72, chunks: ["邻居", "高兴地", "走", "了"], answer: "邻居高兴地走了。" },
      { q: 73, chunks: ["妹妹", "长得", "最像", "妈妈"], answer: "妹妹长得最像妈妈。" },
      { q: 74, chunks: ["请", "根据", "要求", "回答", "问题"], answer: "请根据要求回答问题。" },
      { q: 75, chunks: ["街道", "被", "打扫", "干净", "了"], answer: "街道被打扫干净了。" }
    ],
    part2: [
      { q: 76, pinyin: "huā", sentence: "我爸爸为了买它，〔〕了近60万块钱。", answer: "花" },
      { q: 77, pinyin: "shuǐ", sentence: "经过半年多的努力学习，她的汉语〔〕平有了很大提高。", answer: "水" },
      { q: 78, pinyin: "yě", sentence: "晚上12点〔〕可以叫零点。", answer: "也" },
      { q: 79, pinyin: "yǔ", sentence: "太阳出来了，不用带〔〕伞了。", answer: "雨" },
      { q: 80, pinyin: "gè", sentence: "服务员，请帮我们再拿一〔〕盘子。", answer: "个" }
    ]
  },
  {
    num: 14,
    code: "H31220",
    part1: [
      { q: 71, chunks: ["中午买", "的", "西瓜", "特别", "甜"], answer: "中午买的西瓜特别甜。" },
      { q: 72, chunks: ["教室", "的", "空调", "又", "坏", "了"], answer: "教室的空调又坏了。" },
      { q: 73, chunks: ["真", "不敢相信", "那", "是", "真的"], answer: "真不敢相信那是真的。" },
      { q: 74, chunks: ["这条", "裤子", "多少", "钱"], answer: "这条裤子多少钱？" },
      { q: 75, chunks: ["请", "把", "菜单", "拿给", "我"], answer: "请把菜单拿给我。" }
    ],
    part2: [
      { q: 76, pinyin: "gōng", sentence: "别影响爸爸〔〕作，我们去那边玩儿。", answer: "工" },
      { q: 77, pinyin: "kāi", sentence: "表演一结束，她马上就离〔〕了。", answer: "开" },
      { q: 78, pinyin: "nǐ", sentence: "喂？〔〕声音大一点儿，我听不清楚。", answer: "你" },
      { q: 79, pinyin: "zài", sentence: "现〔〕是8点45分，再有一刻钟就9点了。", answer: "在" },
      { q: 80, pinyin: "wèn", sentence: "如果遇到什么不懂的地方，可以去〔〕高先生。", answer: "问" }
    ]
  },
  {
    num: 15,
    code: "H31221",
    part1: [
      { q: 71, chunks: ["这种", "蛋糕", "太", "甜", "了"], answer: "这种蛋糕太甜了。" },
      { q: 72, chunks: ["这个月", "花", "了", "一万多", "块钱"], answer: "这个月花了一万多块钱。" },
      { q: 73, chunks: ["帮助别人", "是", "一件", "快乐的", "事情"], answer: "帮助别人是一件快乐的事情。" },
      { q: 74, chunks: ["会议", "还", "没有", "结束", "呢"], answer: "会议还没有结束呢。" },
      { q: 75, chunks: ["她", "的", "汉语水平", "提高得", "很快"], answer: "她的汉语水平提高得很快。" }
    ],
    part2: [
      { q: 76, pinyin: "zhōng", sentence: "春节是〔〕国最重要的一个节日。", answer: "中" },
      { q: 77, pinyin: "yuán", sentence: "10个一分是一角，10个一角是一〔〕。", answer: "元" },
      { q: 78, pinyin: "zhǐ", sentence: "从这儿到地铁站很方便，走路〔〕需要几分钟。", answer: "只" },
      { q: 79, pinyin: "mén", sentence: "她早上出〔〕的时候忘记关灯了。", answer: "门" },
      { q: 80, pinyin: "hǎo", sentence: "他以前没遇到过这样的事情，所以也没想出什么〔〕办法来。", answer: "好" }
    ]
  },
  {
    num: 16,
    code: "H31327",
    part1: [
      { q: 71, chunks: ["蛋糕", "被", "我", "吃", "了"], answer: "蛋糕被我吃了。" },
      { q: 72, chunks: ["猫", "是", "一种", "爱干净", "的", "动物"], answer: "猫是一种爱干净的动物。" },
      { q: 73, chunks: ["那个", "体育馆", "能坐", "两万人"], answer: "那个体育馆能坐两万人。" },
      { q: 74, chunks: ["街道两边", "的", "树", "长得", "真高"], answer: "街道两边的树长得真高。" },
      { q: 75, chunks: ["请", "用", "黑板上", "的", "词", "写", "一个", "句子"], answer: "请用黑板上的词写一个句子。" }
    ],
    part2: [
      { q: 76, pinyin: "wén", sentence: "你了解中国的茶〔〕化吗？", answer: "文" },
      { q: 77, pinyin: "gōng", sentence: "明天〔〕司要举行一个重要的会议。", answer: "公" },
      { q: 78, pinyin: "dào", sentence: "他先对大家的〔〕来表示欢迎。", answer: "到" },
      { q: 79, pinyin: "xué", sentence: "〔〕校旁边有条河，河里有很多鱼。", answer: "学" },
      { q: 80, pinyin: "hé", sentence: "我打算去超市买点儿苹果〔〕西瓜，一起去吧？", answer: "和" }
    ]
  },
  {
    num: 17,
    code: "H31328",
    part1: [
      { q: 71, chunks: ["她", "的", "头发", "又黑又长"], answer: "她的头发又黑又长。" },
      { q: 72, chunks: ["我", "终于", "学会", "用", "筷子", "了"], answer: "我终于学会用筷子了。" },
      { q: 73, chunks: ["他", "把", "教室", "打扫得", "干干净净"], answer: "他把教室打扫得干干净净。" },
      { q: 74, chunks: ["我", "不喜欢", "看", "体育新闻"], answer: "我不喜欢看体育新闻。" },
      { q: 75, chunks: ["校长", "对", "你", "的", "回答", "非常", "满意"], answer: "校长对你的回答非常满意。" }
    ],
    part2: [
      { q: 76, pinyin: "zhōng", sentence: "你觉得学〔〕文难不难？", answer: "中" },
      { q: 77, pinyin: "lái", sentence: "春天〔〕了，街道两边的草都绿了。", answer: "来" },
      { q: 78, pinyin: "diàn", sentence: "再见，有事可以给我打电话或者发〔〕子邮件。", answer: "电" },
      { q: 79, pinyin: "hǎo", sentence: "要想有一口〔〕牙，就要每天认真刷牙。", answer: "好" },
      { q: 80, pinyin: "zhī", sentence: "雪下得这么大，不〔〕道会不会影响飞机起飞。", answer: "知" }
    ]
  },
  {
    num: 18,
    code: "H31329",
    part1: [
      { q: 71, chunks: ["他", "学习", "特别", "努力"], answer: "他学习特别努力。" },
      { q: 72, chunks: ["你", "想", "吃", "哪种", "面包"], answer: "你想吃哪种面包？" },
      { q: 73, chunks: ["你", "的", "脸", "还没", "洗", "干净"], answer: "你的脸还没洗干净。" },
      { q: 74, chunks: ["他", "的", "成绩", "一直", "是", "我们班", "最好", "的"], answer: "他的成绩一直是我们班最好的。" },
      { q: 75, chunks: ["那位", "老人", "已经", "107岁", "了"], answer: "那位老人已经107岁了。" }
    ],
    part2: [
      { q: 76, pinyin: "jié", sentence: "这个季〔〕的西瓜最好吃了。", answer: "节" },
      { q: 77, pinyin: "yuè", sentence: "奶奶，是不是太阳下山了，〔〕亮就出来了？", answer: "月" },
      { q: 78, pinyin: "zhǎo", sentence: "这是〔〕您的6角5分钱，欢迎下次再来！", answer: "找" },
      { q: 79, pinyin: "zhǐ", sentence: "快看，那〔〕大熊猫爬到树上去了。", answer: "只" },
      { q: 80, pinyin: "zì", sentence: "做选择时，最重要的是知道〔〕已想要什么。", answer: "自" }
    ]
  },
  {
    num: 19,
    code: "H31330",
    part1: [
      { q: 71, chunks: ["这次", "旅游", "花", "了", "一万元"], answer: "这次旅游花了一万元。" },
      { q: 72, chunks: ["她丈夫", "在", "大学", "教", "中文"], answer: "她丈夫在大学教中文。" },
      { q: 73, chunks: ["妹妹", "害怕得", "哭", "了", "起来"], answer: "妹妹害怕得哭了起来。" },
      { q: 74, chunks: ["飞机", "马上", "就要", "起飞", "了"], answer: "飞机马上就要起飞了。" },
      { q: 75, chunks: ["今晚", "的", "月亮", "真", "大", "啊"], answer: "今晚的月亮真大啊！" }
    ],
    part2: [
      { q: 76, pinyin: "huì", sentence: "今天的作业很简单，我一〔〕儿就做完了。", answer: "会" },
      { q: 77, pinyin: "gèng", sentence: "有时候，做对的事情比把事情做对〔〕重要。", answer: "更" },
      { q: 78, pinyin: "chē", sentence: "北京西站是中国最大的火〔〕站。", answer: "车" },
      { q: 79, pinyin: "nián", sentence: "他告诉我，他姓周，今〔〕20岁。", answer: "年" },
      { q: 80, pinyin: "wèi", sentence: "姐姐今天结婚，真〔〕她高兴。", answer: "为" }
    ]
  },
  {
    num: 20,
    code: "H31332",
    part1: [
      { q: 71, chunks: ["弟弟", "害怕", "极", "了"], answer: "弟弟害怕极了。" },
      { q: 72, chunks: ["这只", "大熊猫", "很", "可爱"], answer: "这只大熊猫很可爱。" },
      { q: 73, chunks: ["历史", "是", "不应该", "被", "忘记", "的"], answer: "历史是不应该被忘记的。" },
      { q: 74, chunks: ["我", "比", "去年", "瘦", "了", "10公斤"], answer: "我比去年瘦了10公斤。" },
      { q: 75, chunks: ["她", "最后", "决定", "把", "房子", "卖", "了"], answer: "她最后决定把房子卖了。" }
    ],
    part2: [
      { q: 76, pinyin: "tài", sentence: "〔〕阳出来了，新的一天开始了。", answer: "太" },
      { q: 77, pinyin: "nín", sentence: "电影院在8层，〔〕可以坐旁边那个电梯。", answer: "您" },
      { q: 78, pinyin: "lǐ", sentence: "冰箱〔〕还有饮料吗？我有点儿渴了。", answer: "里" },
      { q: 79, pinyin: "tīng", sentence: "我和妹妹一样，都有睡觉前〔〕音乐的习惯。", answer: "听" },
      { q: 80, pinyin: "jié", sentence: "下一个〔〕目就是我们班的了，大家准备下。", answer: "节" }
    ]
  }
];
