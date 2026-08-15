// HSK3 书写练习 - 题库数据 (Writing Section Q71-80 for all 20 exams)
// Part 1: 排列顺序 (71-75) - arrange chunks into a correct sentence
// Part 2: 汉字填空 (76-80) - fill in the missing character given pinyin
const EXAM_DATA = [
  {
    "num": 1,
    "code": "H30000",
    "part1": [
      {
        "q": 71,
        "exp": "Cấu trúc: 我 (tôi) + 最 (nhất) + 爱吃 (thích ăn) + 西瓜 (dưa hấu). Trạng từ 最 luôn đứng TRƯỚC động từ để chỉ mức độ cao nhất.",
        "chunks": [
          "我",
          "最",
          "爱吃",
          "西瓜"
        ],
        "answer": "我最爱吃西瓜。"
      },
      {
        "q": 72,
        "exp": "Chủ ngữ 他 (anh ấy) + trạng từ 终于 (cuối cùng) + động từ 同意 (đồng ý) + trợ từ 了 (hoàn thành). 终于 đứng trước động từ.",
        "chunks": [
          "他",
          "终于",
          "同意",
          "了"
        ],
        "answer": "他终于同意了。"
      },
      {
        "q": 73,
        "exp": "Câu hỏi với từ để hỏi 哪 (nào): 他们 (họ) + 在 (đang) + 复习 (ôn tập) + 哪一课 (bài nào). 在 chỉ hành động đang diễn ra.",
        "chunks": [
          "他们",
          "在",
          "复习",
          "哪",
          "一课"
        ],
        "answer": "他们在复习哪一课？"
      },
      {
        "q": 74,
        "exp": "Kết cấu 是……的 nhấn mạnh CÁCH THỰC HIỆN: 这个菜单 (thực đơn này) + 是用汉语写的 (là được viết bằng tiếng Trung).",
        "chunks": [
          "这个",
          "菜单",
          "是",
          "用",
          "汉语",
          "写的"
        ],
        "answer": "这个菜单是用汉语写的。"
      },
      {
        "q": 75,
        "exp": "Trạng ngữ chỉ thời gian (在2010年冬天) đứng TRƯỚC động từ 举行 (tổ chức, diễn ra): cuộc họp này diễn ra vào mùa đông năm 2010.",
        "chunks": [
          "这次",
          "会议",
          "在",
          "2010年",
          "冬天",
          "举行"
        ],
        "answer": "这次会议在2010年冬天举行。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "太 + 阳 = 太阳 (mặt trời). Câu đầy đủ: 今天的云很多，看不见太阳。= Hôm nay mây nhiều, không nhìn thấy mặt trời.",
        "pinyin": "tài",
        "sentence": "今天的云很多，看不见〔〕阳。",
        "answer": "太"
      },
      {
        "q": 77,
        "exp": "名 + 字 = 名字 (tên). 叫什么名字 = tên là gì. Câu hỏi: con gấu trúc đó tên là gì?",
        "pinyin": "míng",
        "sentence": "那只熊猫叫什么〔〕字？",
        "answer": "名"
      },
      {
        "q": 78,
        "exp": "米 = mét, đơn vị đo chiều dài. 一万五千米 = 15.000 mét. Câu hỏi: Bạn dám chạy 15.000 mét không?",
        "pinyin": "mǐ",
        "sentence": "你敢跑一万五千〔〕吗？",
        "answer": "米"
      },
      {
        "q": 79,
        "exp": "回 + 答 = 回答 (trả lời). 他回答得很好 = anh ấy trả lời rất tốt. (我/认为 + mệnh đề)",
        "pinyin": "huí",
        "sentence": "我认为他〔〕答得很好。",
        "answer": "回"
      },
      {
        "q": 80,
        "exp": "牛 + 奶 = 牛奶 (sữa bò). 早饭是牛奶、面包和鸡蛋 = bữa sáng là sữa bò, bánh mì và trứng.",
        "pinyin": "niú",
        "sentence": "早饭是〔〕奶、面包和鸡蛋。",
        "answer": "牛"
      }
    ]
  },
  {
    "num": 2,
    "code": "H31001",
    "part1": [
      {
        "q": 71,
        "exp": "Tính từ 高兴 (vui) + 地 biến thành trạng ngữ, nối với động từ 笑 (cười). 弟弟 (em trai) vui vẻ cười.",
        "chunks": [
          "弟弟",
          "高兴地",
          "笑",
          "了"
        ],
        "answer": "弟弟高兴地笑了。"
      },
      {
        "q": 72,
        "exp": "上午的考试 (bài thi buổi sáng) + trạng từ 比较 (tương đối) + tính từ 简单 (đơn giản). 比较 đứng trước tính từ.",
        "chunks": [
          "上午",
          "的",
          "考试",
          "比较",
          "简单"
        ],
        "answer": "上午的考试比较简单。"
      },
      {
        "q": 73,
        "exp": "Kết cấu 越来越……了 (càng ngày càng): 这个城市的环境 (môi trường thành phố này) + 变 (trở nên) + 越来越好 (ngày càng tốt).",
        "chunks": [
          "这个城市",
          "的",
          "环境",
          "变得",
          "越来越",
          "好",
          "了"
        ],
        "answer": "这个城市的环境变得越来越好了。"
      },
      {
        "q": 74,
        "exp": "Động từ 送给 (tặng cho) nhận 2 tân ngữ: 给他 (cho anh ấy) + 一个礼物 (một món quà). Vị bác sĩ đó tặng anh ấy một món quà.",
        "chunks": [
          "那位",
          "医生",
          "送给",
          "他",
          "一个",
          "礼物"
        ],
        "answer": "那位医生送给他一个礼物。"
      },
      {
        "q": 75,
        "exp": "其他班 (các lớp khác) + 的成绩 (thành tích) + 也 (cũng) + 有很大提高 (có tiến bộ rất lớn). 也 đứng sau chủ ngữ.",
        "chunks": [
          "其他班",
          "的",
          "成绩",
          "也",
          "有",
          "很大",
          "提高"
        ],
        "answer": "其他班的成绩也有很大提高。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "出 + 租车 = 出租车 (taxi). 坐出租车 = đi taxi. Câu: Bệnh viện xa đây lắm, chúng ta đi taxi nhé.",
        "pinyin": "chū",
        "sentence": "医院离这儿很远，我们坐〔〕租车去吧。",
        "answer": "出"
      },
      {
        "q": 77,
        "exp": "元 = đồng (đơn vị tiền Trung Quốc). 一元 = 10 角 = 100 分. 1 đồng = 10 hào, 1 hào = 10 xu.",
        "pinyin": "yuán",
        "sentence": "一〔〕是10角，一角是10分。",
        "answer": "元"
      },
      {
        "q": 78,
        "exp": "姓……叫…… = họ…… tên……. 你姓什么、叫什么 = bạn họ gì, tên gì. 叫 = gọi/tên là.",
        "pinyin": "jiào",
        "sentence": "我不认识他，你知道他姓什么、〔〕什么吗？",
        "answer": "叫"
      },
      {
        "q": 79,
        "exp": "中 + 间 = 中间 (ở giữa). 中间穿红裙子的 = người mặc váy đỏ ở giữa. Chắc chắn là em gái anh ấy.",
        "pinyin": "zhōng",
        "sentence": "〔〕间穿红裙子的一定是他妹妹。",
        "answer": "中"
      },
      {
        "q": 80,
        "exp": "米 + 饭 = 米饭 (cơm). 不想吃米饭了 = không muốn ăn cơm nữa (已饱 = đã no).",
        "pinyin": "mǐ",
        "sentence": "我已经饱了，不想吃〔〕饭了。",
        "answer": "米"
      }
    ]
  },
  {
    "num": 3,
    "code": "H31002",
    "part1": [
      {
        "q": 71,
        "exp": "我们 (chúng tôi) + trạng từ 先 (trước tiên) + 看看 (xem xem, động từ lặp) + 菜单 (thực đơn). 先 đứng trước động từ.",
        "chunks": [
          "我们",
          "先",
          "看看",
          "菜单"
        ],
        "answer": "我们先看看菜单。"
      },
      {
        "q": 72,
        "exp": "她 (cô ấy) + 忘了 (quên) + 带 (mang theo) + 护照 (hộ chiếu). Động từ 带 bổ nghĩa cho 忘了 (quên làm gì).",
        "chunks": [
          "她",
          "忘了",
          "带",
          "护照"
        ],
        "answer": "她忘了带护照。"
      },
      {
        "q": 73,
        "exp": "这些 (những) + 葡萄 (nho) + 很 (rất) + 新鲜 (tươi). Trạng từ 很 đứng trước tính từ 新鲜.",
        "chunks": [
          "这些",
          "葡萄",
          "很",
          "新鲜"
        ],
        "answer": "这些葡萄很新鲜。"
      },
      {
        "q": 74,
        "exp": "熊猫的 (của gấu trúc) + 眼睛和耳朵 (mắt và tai) + 都 (đều) + 是黑色的 (là màu đen). 都 đứng trước 是.",
        "chunks": [
          "熊猫",
          "的",
          "眼睛和耳朵",
          "都是",
          "黑色",
          "的"
        ],
        "answer": "熊猫的眼睛和耳朵都是黑色的。"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 敢不敢 = dám hay không (A 不 A): 你 + 敢不敢 + 用冷水 (bằng nước lạnh) + 洗澡 (tắm). Bạn có dám tắm bằng nước lạnh không?",
        "chunks": [
          "你",
          "敢不敢",
          "用",
          "冷水",
          "洗澡"
        ],
        "answer": "你敢不敢用冷水洗澡？"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "别 + 人 = 别人 (người khác). 关心别人 = quan tâm đến người khác. Anh ấy luôn rất quan tâm đến người khác.",
        "pinyin": "rén",
        "sentence": "他一直都很关心别〔〕。",
        "answer": "人"
      },
      {
        "q": 77,
        "exp": "Kết cấu 太……了 = quá……. 你的头发太长了 = tóc của bạn dài quá, như cỏ vậy.",
        "pinyin": "tài",
        "sentence": "你的头发〔〕长了，像草一样。",
        "answer": "太"
      },
      {
        "q": 78,
        "exp": "Lượng từ 个 dùng cho danh từ chung: 有个眼镜店 = có một cửa hàng kính. 个 là lượng từ thông dụng nhất.",
        "pinyin": "gè",
        "sentence": "就在这条街的东边，有〔〕眼镜店。",
        "answer": "个"
      },
      {
        "q": 79,
        "exp": "云 = mây. 没有云 = không có mây. Câu: Hôm nay trời nắng, không có mây.",
        "pinyin": "yún",
        "sentence": "今天是晴天，没有〔〕。",
        "answer": "云"
      },
      {
        "q": 80,
        "exp": "文 + 化 = 文化 (văn hóa). 中国文化 = văn hóa Trung Quốc. Ngoài học tiếng, tôi còn muốn hiểu thêm văn hóa TQ.",
        "pinyin": "wén",
        "sentence": "我来中国，除了学习汉语，还希望了解更多的中国〔〕化。",
        "answer": "文"
      }
    ]
  },
  {
    "num": 4,
    "code": "H31004",
    "part1": [
      {
        "q": 71,
        "exp": "Chú ý trật tự: 药 (thuốc) + 在 (ở) + 我的包里 (trong túi của tôi). Động từ 在 chỉ vị trí, theo sau là nơi chốn.",
        "chunks": [
          "药",
          "在",
          "我的",
          "包里"
        ],
        "answer": "药在我的包里。"
      },
      {
        "q": 72,
        "exp": "Cấu trúc 去 + địa điểm (机场 sân bay) + mục đích (接女朋友 đón bạn gái). 要 = sẽ, dự định.",
        "chunks": [
          "他",
          "要",
          "去机场",
          "接",
          "女朋友"
        ],
        "answer": "他要去机场接女朋友。"
      },
      {
        "q": 73,
        "exp": "你脚下 (dưới chân bạn) + 的路 (con đường) + 还 (vẫn) + 很长 (rất dài). 还 = vẫn còn, đứng trước tính từ.",
        "chunks": [
          "你",
          "脚下",
          "的",
          "路",
          "还",
          "很长"
        ],
        "answer": "你脚下的路还很长。"
      },
      {
        "q": 74,
        "exp": "Cấu trúc 用……写字 (dùng……viết chữ): 她 + 不喜欢 (không thích) + 用铅笔 (dùng bút chì) + 写字 (viết chữ).",
        "chunks": [
          "她",
          "不",
          "喜欢",
          "用铅笔",
          "写字"
        ],
        "answer": "她不喜欢用铅笔写字。"
      },
      {
        "q": 75,
        "exp": "Câu hỏi 怎么了? = làm sao rồi? 你丈夫的鼻子 (mũi của chồng bạn) + 怎么了. Cấu trúc 怎么 + 了.",
        "chunks": [
          "你丈夫",
          "的",
          "鼻子",
          "怎么",
          "了"
        ],
        "answer": "你丈夫的鼻子怎么了？"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "手 + 间 = 洗手间 (nhà vệ sinh). 洗手间就在电梯左边 = nhà vệ sinh ngay bên trái thang máy.",
        "pinyin": "shǒu",
        "sentence": "洗〔〕间就在电梯左边。",
        "answer": "手"
      },
      {
        "q": 77,
        "exp": "Kết cấu 是……的: 这只鸟是谁画的? = con chim này do ai vẽ? 是 dùng để nhấn mạnh chủ thể.",
        "pinyin": "shì",
        "sentence": "黑板上的这只鸟〔〕谁画的？",
        "answer": "是"
      },
      {
        "q": 78,
        "exp": "想 + 家 = 想家 (nhớ nhà). 今晚的月亮让他想家了 = trăng đêm nay khiến anh ấy nhớ nhà.",
        "pinyin": "jiā",
        "sentence": "今晚的月亮让他想〔〕了。",
        "answer": "家"
      },
      {
        "q": 79,
        "exp": "一 + 会 + 儿 = 一会儿 (một lúc). 坐一会儿吧 = ngồi một lúc nhé. (这边 quá nóng).",
        "pinyin": "huì",
        "sentence": "这边太热了，我们去树下坐一〔〕儿吧。",
        "answer": "会"
      },
      {
        "q": 80,
        "exp": "花 + 儿 = 花儿 (hoa, thêm 儿 chỉ cách nói phương bắc). 五颜六色的花儿 = hoa đủ màu sắc. 开着 = đang nở.",
        "pinyin": "huā",
        "sentence": "草地上开着五颜六色的〔〕儿。",
        "answer": "花"
      }
    ]
  },
  {
    "num": 5,
    "code": "H31005",
    "part1": [
      {
        "q": 71,
        "exp": "Kết cấu 是……的 nhấn mạnh đặc điểm: 李小姐的头发 (tóc của cô Lý) + 是黑色的 (là màu đen).",
        "chunks": [
          "李小姐",
          "的",
          "头发",
          "是",
          "黑色",
          "的"
        ],
        "answer": "李小姐的头发是黑色的。"
      },
      {
        "q": 72,
        "exp": "Câu hỏi với 什么时候 (khi nào): 会议 (cuộc họp) + 什么时候 + 举行 (diễn ra). 什么时候 đứng trước động từ.",
        "chunks": [
          "会议",
          "什么",
          "时候",
          "举行"
        ],
        "answer": "会议什么时候举行？"
      },
      {
        "q": 73,
        "exp": "他们班的 (lớp của họ) + 学生 (học sinh) + 学习 (học) + 很努力 (rất chăm chỉ). 学习 là động từ, 努力 là trạng thái.",
        "chunks": [
          "他们班",
          "的",
          "学生",
          "学习",
          "很",
          "努力"
        ],
        "answer": "他们班的学生学习很努力。"
      },
      {
        "q": 74,
        "exp": "马和羊 (ngựa và cừu) + 都 (đều) + 喜欢 (thích) + 吃草 (ăn cỏ). 都 đứng sau chủ ngữ, trước động từ.",
        "chunks": [
          "马和羊",
          "都",
          "喜欢",
          "吃草"
        ],
        "answer": "马和羊都喜欢吃草。"
      },
      {
        "q": 75,
        "exp": "老年人 (người già) + 要 (nên) + 关心 (quan tâm) + 自己的 (của chính mình) + 腿脚 (chân tay). Người già nên quan tâm chân tay của mình.",
        "chunks": [
          "老年人",
          "要",
          "关心",
          "自己",
          "的",
          "腿脚"
        ],
        "answer": "老年人要关心自己的腿脚。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "中 + 间 = 中间 (ở giữa). 黑板中间 = giữa bảng đen. Thầy ơi, từ này ở giữa bảng nghĩa là gì?",
        "pinyin": "zhōng",
        "sentence": "老师，黑板〔〕间的这个词是什么意思？",
        "answer": "中"
      },
      {
        "q": 77,
        "exp": "Lượng từ 只 dùng cho chim và động vật nhỏ: 3只小鸟 = 3 con chim nhỏ. Nhưng nhà anh ấy có 3 con chim.",
        "pinyin": "zhī",
        "sentence": "他不喜欢猫，也不喜欢狗，但他家有3〔〕小鸟。",
        "answer": "只"
      },
      {
        "q": 78,
        "exp": "星期 + 日 = Chủ nhật (日 = mặt trời, cũng là ngày). 明天星期日 = ngày mai Chủ nhật.",
        "pinyin": "rì",
        "sentence": "明天星期〔〕，你作业写完没？",
        "answer": "日"
      },
      {
        "q": 79,
        "exp": "右 + 边 = 右边 (bên phải), trái nghĩa với 左边 (bên trái). Tôi nói cái mũ bên phải.",
        "pinyin": "yòu",
        "sentence": "不是左边，我说的是〔〕边的那个帽子。",
        "answer": "右"
      },
      {
        "q": 80,
        "exp": "分 = xu (đơn vị tiền). 3角5分 = 3 hào 5 xu. Tôi còn thiếu 3 hào 5 xu.",
        "pinyin": "fēn",
        "sentence": "你带钱了吗？我还差3角5〔〕。",
        "answer": "分"
      }
    ]
  },
  {
    "num": 6,
    "code": "H31006",
    "part1": [
      {
        "q": 71,
        "exp": "咖啡里 (trong cà phê) + 不要 (đừng) + 放糖 (bỏ đường). Cấu trúc 不要 + động từ = đừng làm gì.",
        "chunks": [
          "咖啡里",
          "不要",
          "放糖"
        ],
        "answer": "咖啡里不要放糖。"
      },
      {
        "q": 72,
        "exp": "Cấu trúc 把 + tân ngữ + động từ + bổ ngữ kết quả + 了吗? 把碗和筷子 (bát và đũa) + 洗干净 (rửa sạch).",
        "chunks": [
          "把",
          "碗和筷子",
          "洗干净",
          "了",
          "吗"
        ],
        "answer": "把碗和筷子洗干净了吗？"
      },
      {
        "q": 73,
        "exp": "孩子 (đứa trẻ) + 突然 (đột nhiên) + 发烧 (sốt) + 了. Trạng từ 突然 đứng trước động từ 发烧.",
        "chunks": [
          "孩子",
          "突然",
          "发烧",
          "了"
        ],
        "answer": "孩子突然发烧了。"
      },
      {
        "q": 74,
        "exp": "看到 (nhìn thấy) + 这个句子 (câu này) + 表示 (biểu thị) + 游戏结束 (trò chơi kết thúc). Nhìn thấy câu này nghĩa là trò chơi kết thúc.",
        "chunks": [
          "看到",
          "这个句子",
          "表示",
          "游戏结束"
        ],
        "answer": "看到这个句子表示游戏结束。"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 对……满意 (hài lòng với……): 她 (cô ấy) + 对 (với) + 这条绿裤子 (chiếc quần xanh này) + 很满意 (rất hài lòng).",
        "chunks": [
          "她",
          "对",
          "这条绿裤子",
          "很",
          "满意"
        ],
        "answer": "她对这条绿裤子很满意。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "也 = cũng. 面包会有的，牛奶也会有的 = bánh mì sẽ có, sữa cũng sẽ có. (也 đứng sau chủ ngữ).",
        "pinyin": "yě",
        "sentence": "相信我，面包会有的，牛奶〔〕会有的。",
        "answer": "也"
      },
      {
        "q": 77,
        "exp": "节 + 日 = 节日 (ngày lễ). 每个国家都有自己的节日 = mỗi nước đều có ngày lễ riêng của mình.",
        "pinyin": "rì",
        "sentence": "每个国家都有自己的节〔〕、自己的文化。",
        "answer": "日"
      },
      {
        "q": 78,
        "exp": "在 = ở, tại. 写 + 在 + nơi chốn = viết ở đâu. 把姓名写在照片后面 = viết tên ở sau ảnh.",
        "pinyin": "zài",
        "sentence": "请用铅笔把姓名写〔〕照片后面。",
        "answer": "在"
      },
      {
        "q": 79,
        "exp": "多 + 练习 = luyện tập nhiều. 必须多练习 = phải luyện tập nhiều (điều kiện thứ hai để học vẽ tốt).",
        "pinyin": "duō",
        "sentence": "要学好画画儿，第一，要老师教得好；第二，必须〔〕练习。",
        "answer": "多"
      },
      {
        "q": 80,
        "exp": "为 = cho, vì. 请您为我写介绍信 = nhờ ngài viết thư giới thiệu CHO tôi.",
        "pinyin": "wèi",
        "sentence": "我想请您〔〕我写介绍信。",
        "answer": "为"
      }
    ]
  },
  {
    "num": 7,
    "code": "H31007",
    "part1": [
      {
        "q": 71,
        "exp": "我 (tôi) + 喜欢 (thích) + 中国文化 (văn hóa Trung Quốc). Danh từ 文化 làm tân ngữ cho động từ 喜欢.",
        "chunks": [
          "我",
          "喜欢",
          "中国",
          "文化"
        ],
        "answer": "我喜欢中国文化。"
      },
      {
        "q": 72,
        "exp": "Câu bị động với 被: 他的名字 (tên của anh ấy) + 被写错了 (bị viết sai rồi). Chủ thể bị động đứng trước 被.",
        "chunks": [
          "他",
          "的",
          "名字",
          "被",
          "写错",
          "了"
        ],
        "answer": "他的名字被写错了。"
      },
      {
        "q": 73,
        "exp": "她身高 (chiều cao của cô ấy) + 不到 (chưa đến, không tới) + 一米七 (1m70). Cô ấy cao chưa tới 1m70.",
        "chunks": [
          "她",
          "身高",
          "不到",
          "一米七"
        ],
        "answer": "她身高不到一米七。"
      },
      {
        "q": 74,
        "exp": "现在 (bây giờ) + 画 (vẽ) + 羊的 (của con cừu) + 耳朵和鼻子 (tai và mũi). Trạng ngữ thời gian đứng đầu câu.",
        "chunks": [
          "现在",
          "画",
          "羊",
          "的",
          "耳朵和鼻子"
        ],
        "answer": "现在画羊的耳朵和鼻子。"
      },
      {
        "q": 75,
        "exp": "Kết cấu 如果……就…… (nếu…… thì……): 如果有面条 (nếu có mì) + 就更好了 (thì càng tốt).",
        "chunks": [
          "如果",
          "有面条",
          "就",
          "更好",
          "了"
        ],
        "answer": "如果有面条就更好了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "手 + 机 = 手机 (điện thoại di động). 这是谁的手机? = đây là điện thoại của ai?",
        "pinyin": "shǒu",
        "sentence": "这是谁的〔〕机？",
        "answer": "手"
      },
      {
        "q": 77,
        "exp": "一元 (1 đồng). 一元、一角、一分 = 1 đồng, 1 hào, 1 xu (tiền Trung Quốc).",
        "pinyin": "yuán",
        "sentence": "你看，这是几十年前的一〔〕、一角和一分。",
        "answer": "元"
      },
      {
        "q": 78,
        "exp": "牛 + 奶 = 牛奶 (sữa bò). 喝杯牛奶吧 = uống một cốc sữa bò nhé.",
        "pinyin": "niú",
        "sentence": "我不饿，不吃面包了，喝杯〔〕奶吧。",
        "answer": "牛"
      },
      {
        "q": 79,
        "exp": "打 + 电话 = gọi điện thoại. 给我打电话 = gọi điện cho tôi. Có vấn đề gì cứ gọi cho tôi.",
        "pinyin": "diàn",
        "sentence": "不客气，有什么问题就给我打〔〕话。",
        "answer": "电"
      },
      {
        "q": 80,
        "exp": "云 = mây. 云表示阴天 = mây biểu thị trời âm u. Mặt trời nhỏ = trời nắng, mây = trời âm u.",
        "pinyin": "yún",
        "sentence": "这个小太阳表示晴天，〔〕表示阴天。",
        "answer": "云"
      }
    ]
  },
  {
    "num": 8,
    "code": "H31008",
    "part1": [
      {
        "q": 71,
        "exp": "那 + lượng từ 位 (kính ngữ) + 邻居 (hàng xóm) + 很热情 (rất nhiệt tình). Vị hàng xóm đó rất nhiệt tình.",
        "chunks": [
          "那位",
          "邻居",
          "很",
          "热情"
        ],
        "answer": "那位邻居很热情。"
      },
      {
        "q": 72,
        "exp": "这个楼 (tòa nhà này) + 一共 (tổng cộng) + 三层 (ba tầng). Tòa nhà này tổng cộng ba tầng.",
        "chunks": [
          "这个",
          "楼",
          "一共",
          "三层"
        ],
        "answer": "这个楼一共三层。"
      },
      {
        "q": 73,
        "exp": "Câu bị động 被: 菜单 (thực đơn) + 被服务员拿走了 (bị người phục vụ lấy đi rồi).",
        "chunks": [
          "菜单",
          "被",
          "服务员",
          "拿走",
          "了"
        ],
        "answer": "菜单被服务员拿走了。"
      },
      {
        "q": 74,
        "exp": "Cấu trúc so sánh A 比 B + tính từ: 中国南方的雨水 (lượng mưa miền nam TQ) + 比北方多 (nhiều hơn miền bắc).",
        "chunks": [
          "中国南方",
          "的",
          "雨水",
          "比",
          "北方",
          "多"
        ],
        "answer": "中国南方的雨水比北方多。"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 把 + tân ngữ (冰箱 tủ lạnh) + động từ (放 đặt) + nơi chốn (厨房里 trong bếp) + 吧 (đề nghị).",
        "chunks": [
          "把",
          "冰箱",
          "放",
          "厨房里",
          "吧"
        ],
        "answer": "把冰箱放厨房里吧。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "几 = mấy, vài. 上几年级 = học lớp mấy. Con của chị bạn học lớp mấy rồi?",
        "pinyin": "jǐ",
        "sentence": "你姐姐的孩子上〔〕年级？",
        "answer": "几"
      },
      {
        "q": 77,
        "exp": "关 + 心 = 关心 (quan tâm). 谢谢关心 = cảm ơn sự quan tâm. Cô Mã ơi, cảm ơn cô quan tâm, tôi hết sốt rồi.",
        "pinyin": "xīn",
        "sentence": "马小姐，谢谢关〔〕，我不发烧了，头也不疼了。",
        "answer": "心"
      },
      {
        "q": 78,
        "exp": "下 + 午 = 下午 (buổi chiều). 下午有个重要的会议 = chiều nay có cuộc họp quan trọng.",
        "pinyin": "xià",
        "sentence": "对不起，〔〕午有个重要的会议，我让司机去医院接你好不好？",
        "answer": "下"
      },
      {
        "q": 79,
        "exp": "很 + 大 + 提高 = sự tiến bộ rất lớn. 有了很大提高 = đã có tiến bộ rất lớn (sau 4 tuần luyện tập).",
        "pinyin": "dà",
        "sentence": "经过4个星期的练习，叔叔的普通话水平有了很〔〕提高。",
        "answer": "大"
      },
      {
        "q": 80,
        "exp": "云 = mây. 云表示阴天 = mây biểu thị trời âm u.",
        "pinyin": "yún",
        "sentence": "这个小太阳表示晴天，〔〕表示阴天。",
        "answer": "云"
      }
    ]
  },
  {
    "num": 9,
    "code": "H31009",
    "part1": [
      {
        "q": 71,
        "exp": "咖啡里 (trong cà phê) + 不要 (đừng) + 放糖 (bỏ đường). Cấu trúc 不要 + động từ = đừng làm gì.",
        "chunks": [
          "咖啡里",
          "不要",
          "放糖"
        ],
        "answer": "咖啡里不要放糖。"
      },
      {
        "q": 72,
        "exp": "Kết cấu chúc: 祝 (chúc) + 大家 (mọi người) + 身体健康 (sức khỏe tốt). 健康 là tính từ, đứng trước nó là 身体 (cơ thể).",
        "chunks": [
          "祝",
          "大家",
          "身体",
          "健康"
        ],
        "answer": "祝大家身体健康！"
      },
      {
        "q": 73,
        "exp": "那名服务员 (người phục vụ đó) + 做事情 (làm việc) + 特别 (đặc biệt) + 认真 (nghiêm túc). Trạng từ 特别 đứng trước tính từ 认真.",
        "chunks": [
          "那名服务员",
          "做事情",
          "特别",
          "认真"
        ],
        "answer": "那名服务员做事情特别认真。"
      },
      {
        "q": 74,
        "exp": "Kết cấu 是……的 nhấn mạnh THỜI GIAN: 我们 (chúng tôi) + 是8点半 (là lúc 8h30) + 离开东门的 (rời khỏi cổng đông).",
        "chunks": [
          "我们",
          "是",
          "8点半",
          "离开",
          "东门",
          "的"
        ],
        "answer": "我们是8点半离开东门的。"
      },
      {
        "q": 75,
        "exp": "Tính từ 满意 (hài lòng) + 地 biến thành trạng ngữ + 笑了 (mỉm cười). Cô ấy mỉm cười một cách hài lòng.",
        "chunks": [
          "她",
          "满意地",
          "笑",
          "了"
        ],
        "answer": "她满意地笑了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "再 + 见 = 再见 (tạm biệt). 再见，欢迎您下次再来 = Tạm biệt, hoan nghênh lần sau quay lại.",
        "pinyin": "jiàn",
        "sentence": "再〔〕，欢迎您下次再来。",
        "answer": "见"
      },
      {
        "q": 77,
        "exp": "晴 + 天 = 晴天 (trời nắng). 刚才还是晴天 = lúc nãy trời vẫn còn nắng. Trái nghĩa: 阴天.",
        "pinyin": "tiān",
        "sentence": "突然就下雨了，刚才还是晴〔〕，还有太阳。",
        "answer": "天"
      },
      {
        "q": 78,
        "exp": "在 = ở, tại. 写 + 在 + nơi chốn = viết ở đâu. 把姓名写在照片后面 = viết tên ở sau ảnh.",
        "pinyin": "zài",
        "sentence": "请用铅笔把姓名写〔〕照片后面。",
        "answer": "在"
      },
      {
        "q": 79,
        "exp": "中 + 国 = 中国 (Trung Quốc). 为了更好地了解中国文化 = để hiểu rõ hơn về văn hóa Trung Quốc.",
        "pinyin": "zhōng",
        "sentence": "为了更好地了解〔〕国文化，他开始学习汉语，而且提高很快。",
        "answer": "中"
      },
      {
        "q": 80,
        "exp": "多 + 长 + 时间 = bao lâu. 坏了多长时间了? = hỏng bao lâu rồi? (厨房 = bếp).",
        "pinyin": "cháng",
        "sentence": "厨房里的灯坏了多〔〕时间了？",
        "answer": "长"
      }
    ]
  },
  {
    "num": 10,
    "code": "H31110",
    "part1": [
      {
        "q": 71,
        "exp": "Cấu trúc 对……有兴趣 (có hứng thú với……): 他弟弟 (em trai anh ấy) + 对表演 (với biểu diễn) + 很有兴趣 (rất có hứng thú).",
        "chunks": [
          "他弟弟",
          "对",
          "表演",
          "很",
          "有兴趣"
        ],
        "answer": "他弟弟对表演很有兴趣。"
      },
      {
        "q": 72,
        "exp": "Kết cấu 多么……啊 = đáng yêu/biết bao……: 它的鼻子 (cái mũi của nó) + 多么可爱 (đáng yêu biết bao).",
        "chunks": [
          "它",
          "的",
          "鼻子",
          "多么",
          "可爱",
          "啊"
        ],
        "answer": "它的鼻子多么可爱啊！"
      },
      {
        "q": 73,
        "exp": "姐姐 (chị) + 想 (muốn) + 参加 (tham gia) + 普通话考试 (kỳ thi tiếng phổ thông). Chị muốn tham dự kỳ thi tiếng phổ thông.",
        "chunks": [
          "姐姐",
          "想",
          "参加",
          "普通话",
          "考试"
        ],
        "answer": "姐姐想参加普通话考试。"
      },
      {
        "q": 74,
        "exp": "黑板上 (trên bảng đen) + 写着 (đang viết, 着 chỉ trạng thái) + 她的名字 (tên của cô ấy). Trên bảng có viết tên cô ấy.",
        "chunks": [
          "黑板上",
          "写着",
          "她",
          "的",
          "名字"
        ],
        "answer": "黑板上写着她的名字。"
      },
      {
        "q": 75,
        "exp": "老师 (cô giáo) + 很快地 (rất nhanh) + 画好了 (đã vẽ xong, 好 = hoàn thành) + 熊猫的耳朵 (tai của gấu trúc).",
        "chunks": [
          "老师",
          "很快地",
          "画好",
          "了",
          "熊猫",
          "的",
          "耳朵"
        ],
        "answer": "老师很快地画好了熊猫的耳朵。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "出 + 现 = 出现 (xuất hiện). 他出现在哪里，哪里就有笑声 = anh ấy xuất hiện ở đâu, ở đó có tiếng cười.",
        "pinyin": "chū",
        "sentence": "他〔〕现在哪里，哪里就有笑声。",
        "answer": "出"
      },
      {
        "q": 77,
        "exp": "太 + 旧了 = quá cũ rồi. 这张地图太旧了 = tấm bản đồ thế giới này cũ quá, mua tấm mới nhé.",
        "pinyin": "tài",
        "sentence": "这张世界地图〔〕旧了，再买张新的吧。",
        "answer": "太"
      },
      {
        "q": 78,
        "exp": "Lượng từ 个 + 词 (từ). 这个词 = từ này. 这 + lượng từ + danh từ chỉ 'cái này'.",
        "pinyin": "gè",
        "sentence": "这〔〕词是什么意思？这是我今天看新闻时看到的。",
        "answer": "个"
      },
      {
        "q": 79,
        "exp": "你 + 家 = 你家 (nhà của bạn). 你家是在17层吧? = nhà bạn ở tầng 17 đúng không? (吧 = nghi vấn nhẹ).",
        "pinyin": "nǐ",
        "sentence": "喂，我刚到电梯口，〔〕家是在17层吧？",
        "answer": "你"
      },
      {
        "q": 80,
        "exp": "后 = sau. 9点后 = sau 9 giờ. Gọi điện sau 9 giờ tối rất rẻ, 1 phút 1 hào 2 xu.",
        "pinyin": "hòu",
        "sentence": "晚上9点〔〕打电话很便宜，一分钟一角二分钱。",
        "answer": "后"
      }
    ]
  },
  {
    "num": 11,
    "code": "H31111",
    "part1": [
      {
        "q": 71,
        "exp": "左阿姨 (cô Tả) + 不会 (không biết) + 讲 (nói) + 普通话 (tiếng phổ thông). 会 + động từ = biết làm gì; 不会 = không biết.",
        "chunks": [
          "左阿姨",
          "不",
          "会",
          "讲",
          "普通话"
        ],
        "answer": "左阿姨不会讲普通话。"
      },
      {
        "q": 72,
        "exp": "这些 (những) + 面包 (bánh mì) + 一共 (tổng cộng) + 18块 (18 đồng). 块 = đồng, đơn vị tiền nói thường.",
        "chunks": [
          "这些",
          "面包",
          "一共",
          "18块"
        ],
        "answer": "这些面包一共18块。"
      },
      {
        "q": 73,
        "exp": "你的作业 (bài tập của bạn) + 完成 (hoàn thành) + 了吗? Kết hợp trợ từ 了 và nghi vấn 吗: làm xong chưa?",
        "chunks": [
          "你",
          "的",
          "作业",
          "完成",
          "了",
          "吗"
        ],
        "answer": "你的作业完成了吗？"
      },
      {
        "q": 74,
        "exp": "我女儿的 (của con gái tôi) + 数学 (môn toán) + 成绩 (thành tích) + 非常好 (rất tốt). Thành tích toán của con gái tôi rất tốt.",
        "chunks": [
          "我女儿",
          "的",
          "数学",
          "成绩",
          "非常",
          "好"
        ],
        "answer": "我女儿的数学成绩非常好。"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 把 + tân ngữ + động từ: 她把信 (cô ấy + lá thư) + 放进了 (đã bỏ vào) + 叔叔的包里 (trong túi của chú). 进 = vào trong.",
        "chunks": [
          "她",
          "把信",
          "放进",
          "了",
          "叔叔",
          "的",
          "包里"
        ],
        "answer": "她把信放进了叔叔的包里。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "下 + 次 = 下次 (lần sau). 欢迎您下次再来 = hoan nghênh lần sau quay lại. (下一次 = lần tới).",
        "pinyin": "xià",
        "sentence": "再见，欢迎您〔〕次再来。",
        "answer": "下"
      },
      {
        "q": 77,
        "exp": "回 + 答 = 回答 (câu trả lời). 男朋友的回答 = câu trả lời của bạn trai, khiến cô ấy đặc biệt vui.",
        "pinyin": "huí",
        "sentence": "男朋友的〔〕答，让她特别高兴。",
        "answer": "回"
      },
      {
        "q": 78,
        "exp": "Cấu trúc so sánh A 比 B + tính từ: 小鱼比羊肉更好吃 = cá nhỏ còn ngon hơn thịt cừu. 比 đứng giữa 2 đối tượng.",
        "pinyin": "bǐ",
        "sentence": "对猫来说，小鱼〔〕羊肉更好吃。",
        "answer": "比"
      },
      {
        "q": 79,
        "exp": "太……了 = quá……. 房间里太热了 = trong phòng nóng quá. Mở điều hòa ra nhé.",
        "pinyin": "tài",
        "sentence": "你把空调打开吧，房间里〔〕热了。",
        "answer": "太"
      },
      {
        "q": 80,
        "exp": "今 + 天 = 今天 (hôm nay). 您今天买的葡萄 = nho ông mua hôm nay, rất tươi, rất ngon.",
        "pinyin": "tiān",
        "sentence": "爷爷，您今〔〕买的葡萄真新鲜，非常好吃。",
        "answer": "天"
      }
    ]
  },
  {
    "num": 12,
    "code": "H31218",
    "part1": [
      {
        "q": 71,
        "exp": "Kết cấu 祝 + tân ngữ + 越来越…… (chúc ai đó ngày càng……): 祝您越来越年轻 = chúc bạn ngày càng trẻ.",
        "chunks": [
          "祝您",
          "越来越",
          "年轻"
        ],
        "answer": "祝您越来越年轻！"
      },
      {
        "q": 72,
        "exp": "花园里的 (trong vườn) + 树和草 (cây và cỏ) + 都绿了 (đều xanh rồi). 都 = đều, đứng trước tính từ.",
        "chunks": [
          "花园里",
          "的",
          "树和草",
          "都",
          "绿",
          "了"
        ],
        "answer": "花园里的树和草都绿了。"
      },
      {
        "q": 73,
        "exp": "这条 (cái này) + 裤子 (quần) + 太 (quá) + 长 (dài) + 了. 太……了 = quá. Cái quần này dài quá!",
        "chunks": [
          "这条",
          "裤子",
          "太",
          "长",
          "了"
        ],
        "answer": "这条裤子太长了！"
      },
      {
        "q": 74,
        "exp": "我觉得 (tôi nghĩ/cho rằng) + 熊猫 (gấu trúc) + 更可爱 (đáng yêu hơn). 更 = hơn. Tôi thấy gấu trúc đáng yêu hơn.",
        "chunks": [
          "我",
          "觉得",
          "熊猫",
          "更",
          "可爱"
        ],
        "answer": "我觉得熊猫更可爱。"
      },
      {
        "q": 75,
        "exp": "Câu bị động 被: 她的帽子 (mũ của cô ấy) + 被风刮跑了 (bị gió thổi bay rồi). 被 + nguyên nhân + động từ.",
        "chunks": [
          "她",
          "的",
          "帽子",
          "被风",
          "刮跑",
          "了"
        ],
        "answer": "她的帽子被风刮跑了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "很 + 大 + 提高 = tiến bộ rất lớn. 有大大提高 = đã có tiến bộ rất lớn. Trình độ tiếng phổ thông của anh ấy tiến bộ rất lớn.",
        "pinyin": "dà",
        "sentence": "他的普通话水平最近有很〔〕提高。",
        "answer": "大"
      },
      {
        "q": 77,
        "exp": "怎 + 么 = 怎么 (thế nào). 香蕉怎么卖 = chuối bán thế nào? (Hỏi giá cả).",
        "pinyin": "me",
        "sentence": "你好，香蕉怎〔〕卖？",
        "answer": "么"
      },
      {
        "q": 78,
        "exp": "多 + 吃 + 水果 = ăn nhiều trái cây. 感冒了要多喝水，多吃水果 = bị cảm nên uống nhiều nước, ăn nhiều hoa quả.",
        "pinyin": "chī",
        "sentence": "感冒了要多喝水，多〔〕水果。",
        "answer": "吃"
      },
      {
        "q": 79,
        "exp": "人 = người. 房间里没人 = trong phòng không có ai. Xin lỗi, tôi tưởng trong phòng không có ai.",
        "pinyin": "rén",
        "sentence": "对不起，我以为房间里没〔〕。",
        "answer": "人"
      },
      {
        "q": 80,
        "exp": "进 + 去 = đi vào (động từ xu hướng). 我会进去买蛋糕 = tôi sẽ đi vào mua bánh. Mỗi lần qua cửa hàng đó tôi đều vào mua bánh cho trẻ.",
        "pinyin": "qù",
        "sentence": "每次经过那家商店，我都会进〔〕为孩子买些蛋糕或者别的东西。",
        "answer": "去"
      }
    ]
  },
  {
    "num": 13,
    "code": "H31219",
    "part1": [
      {
        "q": 71,
        "exp": "Cấu trúc 对……热情 (nhiệt tình với……): 蓝小姐 (cô Lam) + 对人 (với mọi người) + 非常 (rất) + 热情 (nhiệt tình).",
        "chunks": [
          "蓝小姐",
          "对人",
          "非常",
          "热情"
        ],
        "answer": "蓝小姐对人非常热情。"
      },
      {
        "q": 72,
        "exp": "邻居 (người hàng xóm) + 高兴地 (vui vẻ) + 走了 (đi rồi). Tính từ 高兴 + 地 làm trạng ngữ chỉ cách thức.",
        "chunks": [
          "邻居",
          "高兴地",
          "走",
          "了"
        ],
        "answer": "邻居高兴地走了。"
      },
      {
        "q": 73,
        "exp": "妹妹 (em gái) + 长得 (trông như thế nào) + 最像 (giống nhất) + 妈妈 (mẹ). 最 = nhất. Em gái trông giống mẹ nhất.",
        "chunks": [
          "妹妹",
          "长得",
          "最像",
          "妈妈"
        ],
        "answer": "妹妹长得最像妈妈。"
      },
      {
        "q": 74,
        "exp": "请 (xin hãy) + 根据要求 (theo yêu cầu) + 回答 (trả lời) + 问题 (câu hỏi). 根据 = căn cứ theo.",
        "chunks": [
          "请",
          "根据",
          "要求",
          "回答",
          "问题"
        ],
        "answer": "请根据要求回答问题。"
      },
      {
        "q": 75,
        "exp": "Câu bị động 被: 街道 (đường phố) + 被打扫干净了 (được quét dọn sạch sẽ rồi). 打扫 + bổ ngữ kết quả 干净.",
        "chunks": [
          "街道",
          "被",
          "打扫",
          "干净",
          "了"
        ],
        "answer": "街道被打扫干净了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "花 = chi, tiêu. 花近60万块钱 = chi gần 60 vạn đồng. Bố tôi để mua nó đã chi gần 60 vạn.",
        "pinyin": "huā",
        "sentence": "我爸爸为了买它，〔〕了近60万块钱。",
        "answer": "花"
      },
      {
        "q": 77,
        "exp": "水 + 平 = 水平 (trình độ). 汉语水平 = trình độ tiếng Trung. Sau hơn nửa năm học chăm chỉ, trình độ tiếng Trung cô ấy tiến bộ rất lớn.",
        "pinyin": "shuǐ",
        "sentence": "经过半年多的努力学习，她的汉语〔〕平有了很大提高。",
        "answer": "水"
      },
      {
        "q": 78,
        "exp": "也 = cũng. 晚上12点也可以叫零点 = 12 giờ đêm cũng có thể gọi là 0 giờ.",
        "pinyin": "yě",
        "sentence": "晚上12点〔〕可以叫零点。",
        "answer": "也"
      },
      {
        "q": 79,
        "exp": "雨 + 伞 = 雨伞 (ô/dù mưa). 不用带雨伞了 = không cần mang ô nữa. (太阳出来了 = mặt trời đã lên).",
        "pinyin": "yǔ",
        "sentence": "太阳出来了，不用带〔〕伞了。",
        "answer": "雨"
      },
      {
        "q": 80,
        "exp": "Lượng từ 个 + 盘子 (cái đĩa). 再拿一个盘子 = lấy thêm một cái đĩa. Phục vụ ơi, giúp chúng tôi lấy thêm một cái đĩa.",
        "pinyin": "gè",
        "sentence": "服务员，请帮我们再拿一〔〕盘子。",
        "answer": "个"
      }
    ]
  },
  {
    "num": 14,
    "code": "H31220",
    "part1": [
      {
        "q": 71,
        "exp": "Định ngữ đứng trước danh từ: 中午买的 (mua lúc trưa) + 西瓜 (dưa hấu) + 特别甜 (đặc biệt ngọt). Dưa mua lúc trưa đặc biệt ngọt.",
        "chunks": [
          "中午买",
          "的",
          "西瓜",
          "特别",
          "甜"
        ],
        "answer": "中午买的西瓜特别甜。"
      },
      {
        "q": 72,
        "exp": "教室的 (của lớp học) + 空调 (điều hòa) + 又 (lại) + 坏了 (hỏng rồi). 又 chỉ việc lặp lại. Điều hòa lớp lại hỏng rồi.",
        "chunks": [
          "教室",
          "的",
          "空调",
          "又",
          "坏",
          "了"
        ],
        "answer": "教室的空调又坏了。"
      },
      {
        "q": 73,
        "exp": "真 (thật sự) + 不敢相信 (không thể tin nổi) + 那是真的 (cái đó là thật). Thật không thể tin nổi chuyện đó là thật.",
        "chunks": [
          "真",
          "不敢相信",
          "那",
          "是",
          "真的"
        ],
        "answer": "真不敢相信那是真的。"
      },
      {
        "q": 74,
        "exp": "Câu hỏi giá tiền: 这条裤子 (cái quần này) + 多少钱 (bao nhiêu tiền). Cái quần này bao nhiêu tiền?",
        "chunks": [
          "这条",
          "裤子",
          "多少",
          "钱"
        ],
        "answer": "这条裤子多少钱？"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 把 + tân ngữ + động từ + 给 + tân ngữ: 请把菜单拿给我 = xin hãy đưa thực đơn cho tôi.",
        "chunks": [
          "请",
          "把",
          "菜单",
          "拿给",
          "我"
        ],
        "answer": "请把菜单拿给我。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "工 + 作 = 工作 (công việc). 别影响爸爸工作 = đừng ảnh hưởng bố làm việc. Chúng ta sang bên kia chơi nhé.",
        "pinyin": "gōng",
        "sentence": "别影响爸爸〔〕作，我们去那边玩儿。",
        "answer": "工"
      },
      {
        "q": 77,
        "exp": "离 + 开 = 离开 (rời khỏi). 她马上就离开了 = cô ấy lập tức rời đi ngay khi buổi biểu diễn vừa kết thúc.",
        "pinyin": "kāi",
        "sentence": "表演一结束，她马上就离〔〕了。",
        "answer": "开"
      },
      {
        "q": 78,
        "exp": "你 + 声音 = giọng của bạn. 你声音大一点儿 = bạn nói to hơn một chút. Tôi nghe không rõ.",
        "pinyin": "nǐ",
        "sentence": "喂？〔〕声音大一点儿，我听不清楚。",
        "answer": "你"
      },
      {
        "q": 79,
        "exp": "现 + 在 = 现在 (bây giờ). 现在是8点45分 = bây giờ là 8h45. 一刻钟 = 15 phút.",
        "pinyin": "zài",
        "sentence": "现〔〕是8点45分，再有一刻钟就9点了。",
        "answer": "在"
      },
      {
        "q": 80,
        "exp": "问 = hỏi. 去问高先生 = đi hỏi thầy Cao. Nếu gặp chỗ nào không hiểu, có thể đi hỏi thầy Cao.",
        "pinyin": "wèn",
        "sentence": "如果遇到什么不懂的地方，可以去〔〕高先生。",
        "answer": "问"
      }
    ]
  },
  {
    "num": 15,
    "code": "H31221",
    "part1": [
      {
        "q": 71,
        "exp": "这种 (loại này) + 蛋糕 (bánh kem) + 太 (quá) + 甜 (ngọt) + 了. 太……了 = quá. Loại bánh này ngọt quá.",
        "chunks": [
          "这种",
          "蛋糕",
          "太",
          "甜",
          "了"
        ],
        "answer": "这种蛋糕太甜了。"
      },
      {
        "q": 72,
        "exp": "这个月 (tháng này) + 花了 (đã chi) + 一万多 (hơn một vạn) + 块钱 (đồng tiền). 了 biểu thị hành động hoàn thành.",
        "chunks": [
          "这个月",
          "花",
          "了",
          "一万多",
          "块钱"
        ],
        "answer": "这个月花了一万多块钱。"
      },
      {
        "q": 73,
        "exp": "帮助别人 (giúp đỡ người khác) + 是 (là) + 一件快乐的事情 (một việc vui vẻ). Lượng từ 件 cho 事情.",
        "chunks": [
          "帮助别人",
          "是",
          "一件",
          "快乐的",
          "事情"
        ],
        "answer": "帮助别人是一件快乐的事情。"
      },
      {
        "q": 74,
        "exp": "会议 (cuộc họp) + 还 (vẫn) + 没有 (chưa) + 结束 (kết thúc) + 呢. 还没有……呢 = vẫn chưa…… đâu.",
        "chunks": [
          "会议",
          "还",
          "没有",
          "结束",
          "呢"
        ],
        "answer": "会议还没有结束呢。"
      },
      {
        "q": 75,
        "exp": "她的汉语水平 (trình độ tiếng Trung của cô ấy) + 提高得很快 (tiến bộ rất nhanh). 得 nối động từ với bổ ngữ mức độ.",
        "chunks": [
          "她",
          "的",
          "汉语水平",
          "提高得",
          "很快"
        ],
        "answer": "她的汉语水平提高得很快。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "中 + 国 = 中国 (Trung Quốc). 春节是中国最重要的节日 = Tết Nguyên Đán là ngày lễ quan trọng nhất của Trung Quốc.",
        "pinyin": "zhōng",
        "sentence": "春节是〔〕国最重要的一个节日。",
        "answer": "中"
      },
      {
        "q": 77,
        "exp": "一元 = 1 đồng. 10个一分是一角，10个一角是一元 = 10 xu là 1 hào, 10 hào là 1 đồng.",
        "pinyin": "yuán",
        "sentence": "10个一分是一角，10个一角是一〔〕。",
        "answer": "元"
      },
      {
        "q": 78,
        "exp": "只 = chỉ. 走路只需要几分钟 = đi bộ chỉ cần vài phút. Từ đây đến ga tàu điện ngầm rất tiện.",
        "pinyin": "zhǐ",
        "sentence": "从这儿到地铁站很方便，走路〔〕需要几分钟。",
        "answer": "只"
      },
      {
        "q": 79,
        "exp": "出 + 门 = 出门 (ra khỏi cửa, ra ngoài). 她早上出门的时候 = lúc cô ấy ra ngoài buổi sáng. Quên tắt đèn.",
        "pinyin": "mén",
        "sentence": "她早上出〔〕的时候忘记关灯了。",
        "answer": "门"
      },
      {
        "q": 80,
        "exp": "好办法 = cách hay. 没想出什么好办法 = không nghĩ ra được cách hay nào. Vì trước đây chưa gặp chuyện như vậy.",
        "pinyin": "hǎo",
        "sentence": "他以前没遇到过这样的事情，所以也没想出什么〔〕办法来。",
        "answer": "好"
      }
    ]
  },
  {
    "num": 16,
    "code": "H31327",
    "part1": [
      {
        "q": 71,
        "exp": "Câu bị động 被: 蛋糕 (bánh) + 被我吃了 (bị tôi ăn rồi). Tân ngữ của động từ chuyển lên đầu câu.",
        "chunks": [
          "蛋糕",
          "被",
          "我",
          "吃",
          "了"
        ],
        "answer": "蛋糕被我吃了。"
      },
      {
        "q": 72,
        "exp": "猫 (mèo) + 是 (là) + 一种 (một loài) + 爱干净的 (ưa sạch sẽ) + 动物 (động vật). Mèo là loài động vật ưa sạch sẽ.",
        "chunks": [
          "猫",
          "是",
          "一种",
          "爱干净",
          "的",
          "动物"
        ],
        "answer": "猫是一种爱干净的动物。"
      },
      {
        "q": 73,
        "exp": "那个体育馆 (nhà thi đấu đó) + 能坐 (có thể chứa) + 两万人 (hai vạn người). Nhà thi đấu đó chứa được 2 vạn người.",
        "chunks": [
          "那个",
          "体育馆",
          "能坐",
          "两万人"
        ],
        "answer": "那个体育馆能坐两万人。"
      },
      {
        "q": 74,
        "exp": "街道两边的 (hai bên đường) + 树 (cây) + 长得 (mọc như thế nào) + 真高 (thật cao). Cây hai bên đường mọc thật cao.",
        "chunks": [
          "街道两边",
          "的",
          "树",
          "长得",
          "真高"
        ],
        "answer": "街道两边的树长得真高。"
      },
      {
        "q": 75,
        "exp": "请用 (xin dùng) + 黑板上的词 (những từ trên bảng) + 写一个句子 (viết một câu). Xin dùng từ trên bảng viết một câu.",
        "chunks": [
          "请",
          "用",
          "黑板上",
          "的",
          "词",
          "写",
          "一个",
          "句子"
        ],
        "answer": "请用黑板上的词写一个句子。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "文 + 化 = 文化 (văn hóa). 中国的茶文化 = văn hóa trà Trung Quốc. Bạn có hiểu văn hóa trà Trung Quốc không?",
        "pinyin": "wén",
        "sentence": "你了解中国的茶〔〕化吗？",
        "answer": "文"
      },
      {
        "q": 77,
        "exp": "公 + 司 = 公司 (công ty). 明天公司要举行会议 = ngày mai công ty sẽ tổ chức một cuộc họp quan trọng.",
        "pinyin": "gōng",
        "sentence": "明天〔〕司要举行一个重要的会议。",
        "answer": "公"
      },
      {
        "q": 78,
        "exp": "到 + 来 = 到来 (sự có mặt). 对大家的到来表示欢迎 = bày tỏ sự hoan nghênh với sự có mặt của mọi người.",
        "pinyin": "dào",
        "sentence": "他先对大家的〔〕来表示欢迎。",
        "answer": "到"
      },
      {
        "q": 79,
        "exp": "学 + 校 = 学校 (trường học). 学校旁边有条河 = bên cạnh trường học có một con sông.",
        "pinyin": "xué",
        "sentence": "〔〕校旁边有条河，河里有很多鱼。",
        "answer": "学"
      },
      {
        "q": 80,
        "exp": "和 = và (liên từ). 苹果和西瓜 = táo và dưa hấu. Tôi định đi siêu thị mua ít táo và dưa hấu.",
        "pinyin": "hé",
        "sentence": "我打算去超市买点儿苹果〔〕西瓜，一起去吧？",
        "answer": "和"
      }
    ]
  },
  {
    "num": 17,
    "code": "H31328",
    "part1": [
      {
        "q": 71,
        "exp": "Kết cấu 又……又…… (vừa…… vừa……): 她的头发 (tóc của cô ấy) + 又黑又长 (vừa đen vừa dài).",
        "chunks": [
          "她",
          "的",
          "头发",
          "又黑又长"
        ],
        "answer": "她的头发又黑又长。"
      },
      {
        "q": 72,
        "exp": "我 (tôi) + 终于 (cuối cùng) + 学会 (học biết/học được) + 用筷子 (dùng đũa) + 了. 学会 = học được kỹ năng.",
        "chunks": [
          "我",
          "终于",
          "学会",
          "用",
          "筷子",
          "了"
        ],
        "answer": "我终于学会用筷子了。"
      },
      {
        "q": 73,
        "exp": "Cấu trúc 把 + tân ngữ + động từ + 得 + bổ ngữ: 他把教室打扫得干干净净 = anh ấy quét dọn lớp học sạch sẽ.",
        "chunks": [
          "他",
          "把",
          "教室",
          "打扫得",
          "干干净净"
        ],
        "answer": "他把教室打扫得干干净净。"
      },
      {
        "q": 74,
        "exp": "我 (tôi) + 不 (không) + 喜欢 (thích) + 看 (xem) + 体育新闻 (tin tức thể thao). Tôi không thích xem tin thể thao.",
        "chunks": [
          "我",
          "不喜欢",
          "看",
          "体育新闻"
        ],
        "answer": "我不喜欢看体育新闻。"
      },
      {
        "q": 75,
        "exp": "Cấu trúc 对……满意 (hài lòng với……): 校长 (hiệu trưởng) + 对 (với) + 你的回答 (câu trả lời của bạn) + 非常满意 (rất hài lòng).",
        "chunks": [
          "校长",
          "对",
          "你",
          "的",
          "回答",
          "非常",
          "满意"
        ],
        "answer": "校长对你的回答非常满意。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "中 + 文 = 中文 (tiếng Trung). 学中文 = học tiếng Trung. Bạn thấy học tiếng Trung có khó không?",
        "pinyin": "zhōng",
        "sentence": "你觉得学〔〕文难不难？",
        "answer": "中"
      },
      {
        "q": 77,
        "exp": "来 = đến. 春天来了 = mùa xuân đến rồi. Cỏ hai bên đường đều xanh rồi.",
        "pinyin": "lái",
        "sentence": "春天〔〕了，街道两边的草都绿了。",
        "answer": "来"
      },
      {
        "q": 78,
        "exp": "电 + 子 = 电子 (điện tử). 电子邮件 = thư điện tử (email). Có việc có thể gọi điện hoặc gửi email.",
        "pinyin": "diàn",
        "sentence": "再见，有事可以给我打电话或者发〔〕子邮件。",
        "answer": "电"
      },
      {
        "q": 79,
        "exp": "一口好牙 = một hàm răng tốt. 要想有一口好牙 = muốn có một hàm răng tốt thì phải đánh răng cẩn thận mỗi ngày.",
        "pinyin": "hǎo",
        "sentence": "要想有一口〔〕牙，就要每天认真刷牙。",
        "answer": "好"
      },
      {
        "q": 80,
        "exp": "知 + 道 = 知道 (biết). 不知道 = không biết. Tuyết rơi to thế này, không biết có ảnh hưởng máy bay cất cánh không.",
        "pinyin": "zhī",
        "sentence": "雪下得这么大，不〔〕道会不会影响飞机起飞。",
        "answer": "知"
      }
    ]
  },
  {
    "num": 18,
    "code": "H31329",
    "part1": [
      {
        "q": 71,
        "exp": "他 (anh ấy) + 学习 (học) + 特别 (đặc biệt) + 努力 (chăm chỉ). Trạng từ 特别 đứng trước tính từ 努力.",
        "chunks": [
          "他",
          "学习",
          "特别",
          "努力"
        ],
        "answer": "他学习特别努力。"
      },
      {
        "q": 72,
        "exp": "Câu hỏi với 哪种 (loại nào): 你 (bạn) + 想吃 (muốn ăn) + 哪种面包 (loại bánh mì nào). Bạn muốn ăn loại bánh mì nào?",
        "chunks": [
          "你",
          "想",
          "吃",
          "哪种",
          "面包"
        ],
        "answer": "你想吃哪种面包？"
      },
      {
        "q": 73,
        "exp": "你的脸 (mặt của bạn) + 还没 (vẫn chưa) + 洗 (rửa) + 干净 (sạch). 干净 là bổ ngữ kết quả của 洗.",
        "chunks": [
          "你",
          "的",
          "脸",
          "还没",
          "洗",
          "干净"
        ],
        "answer": "你的脸还没洗干净。"
      },
      {
        "q": 74,
        "exp": "他的成绩 (thành tích của anh ấy) + 一直是 (luôn luôn là) + 我们班最好的 (tốt nhất lớp chúng tôi). 一直 = suốt.",
        "chunks": [
          "他",
          "的",
          "成绩",
          "一直",
          "是",
          "我们班",
          "最好",
          "的"
        ],
        "answer": "他的成绩一直是我们班最好的。"
      },
      {
        "q": 75,
        "exp": "那位 (vị đó) + 老人 (cụ già) + 已经 (đã) + 107岁了 (107 tuổi rồi). Lượng từ 位 dùng cho người (kính ngữ).",
        "chunks": [
          "那位",
          "老人",
          "已经",
          "107岁",
          "了"
        ],
        "answer": "那位老人已经107岁了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "季 + 节 = 季节 (mùa). 这个季节的西瓜 = dưa hấu của mùa này. Dưa hấu mùa này ngon nhất.",
        "pinyin": "jié",
        "sentence": "这个季〔〕的西瓜最好吃了。",
        "answer": "节"
      },
      {
        "q": 77,
        "exp": "月 + 亮 = 月亮 (mặt trăng). 月亮出来了 = trăng lên rồi. Bà ơi, mặt trời xuống núi thì trăng lên đúng không?",
        "pinyin": "yuè",
        "sentence": "奶奶，是不是太阳下山了，〔〕亮就出来了？",
        "answer": "月"
      },
      {
        "q": 78,
        "exp": "找 = trả lại tiền thừa. 找您6角5分钱 = trả lại ngài 6 hào 5 xu tiền thừa. Hoan nghênh lần sau quay lại.",
        "pinyin": "zhǎo",
        "sentence": "这是〔〕您的6角5分钱，欢迎下次再来！",
        "answer": "找"
      },
      {
        "q": 79,
        "exp": "Lượng từ 只 dùng cho động vật: 那只大熊猫 = con gấu trúc đó. Mau nhìn, con gấu trúc đó leo lên cây rồi.",
        "pinyin": "zhǐ",
        "sentence": "快看，那〔〕大熊猫爬到树上去了。",
        "answer": "只"
      },
      {
        "q": 80,
        "exp": "自 + 己 = 自己 (bản thân). 知道自己想要什么 = biết bản thân muốn gì. Khi lựa chọn, điều quan trọng nhất là biết mình muốn gì.",
        "pinyin": "zì",
        "sentence": "做选择时，最重要的是知道〔〕已想要什么。",
        "answer": "自"
      }
    ]
  },
  {
    "num": 19,
    "code": "H31330",
    "part1": [
      {
        "q": 71,
        "exp": "这次旅游 (chuyến du lịch này) + 花了 (đã chi) + 一万元 (một vạn đồng). 了 biểu thị hoàn thành. Chuyến du lịch này tốn một vạn đồng.",
        "chunks": [
          "这次",
          "旅游",
          "花",
          "了",
          "一万元"
        ],
        "answer": "这次旅游花了一万元。"
      },
      {
        "q": 72,
        "exp": "她丈夫 (chồng của cô ấy) + 在大学 (ở trường đại học) + 教中文 (dạy tiếng Trung). Chồng cô ấy dạy tiếng Trung ở đại học.",
        "chunks": [
          "她丈夫",
          "在",
          "大学",
          "教",
          "中文"
        ],
        "answer": "她丈夫在大学教中文。"
      },
      {
        "q": 73,
        "exp": "妹妹 (em gái) + 害怕得 (sợ đến mức) + 哭了起来 (bật khóc). 得 nối bổ ngữ mức độ; 起来 chỉ hành động bắt đầu.",
        "chunks": [
          "妹妹",
          "害怕得",
          "哭",
          "了",
          "起来"
        ],
        "answer": "妹妹害怕得哭了起来。"
      },
      {
        "q": 74,
        "exp": "Kết cấu 就要……了 = sắp…… rồi: 飞机 (máy bay) + 马上 (ngay lập tức) + 就要起飞了 (sắp cất cánh rồi).",
        "chunks": [
          "飞机",
          "马上",
          "就要",
          "起飞",
          "了"
        ],
        "answer": "飞机马上就要起飞了。"
      },
      {
        "q": 75,
        "exp": "今晚的 (đêm nay) + 月亮 (mặt trăng) + 真大啊 (thật to). Kết cấu 真……啊 = thật là……. Trăng đêm nay thật to!",
        "chunks": [
          "今晚",
          "的",
          "月亮",
          "真",
          "大",
          "啊"
        ],
        "answer": "今晚的月亮真大啊！"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "一 + 会 + 儿 = 一会儿 (một lát). 我一会儿就做完了 = tôi làm xong ngay trong một lát. Bài tập hôm nay rất đơn giản.",
        "pinyin": "huì",
        "sentence": "今天的作业很简单，我一〔〕儿就做完了。",
        "answer": "会"
      },
      {
        "q": 77,
        "exp": "更 = hơn nữa. 做对的事情比把事情做对更重要 = làm đúng việc còn quan trọng hơn việc làm cho đúng.",
        "pinyin": "gèng",
        "sentence": "有时候，做对的事情比把事情做对〔〕重要。",
        "answer": "更"
      },
      {
        "q": 78,
        "exp": "火 + 车 = 火车 (tàu hỏa). 火车站 = ga tàu hỏa. Bắc Kinh Tây là ga tàu lớn nhất Trung Quốc.",
        "pinyin": "chē",
        "sentence": "北京西站是中国最大的火〔〕站。",
        "answer": "车"
      },
      {
        "q": 79,
        "exp": "今 + 年 = 今年 (năm nay). 今年20岁 = năm nay 20 tuổi. Anh ấy nói với tôi anh ấy họ Chu, năm nay 20 tuổi.",
        "pinyin": "nián",
        "sentence": "他告诉我，他姓周，今〔〕20岁。",
        "answer": "年"
      },
      {
        "q": 80,
        "exp": "为 + tân ngữ + tính từ = vì……: 真为她高兴 = thật vui thay cho cô ấy. Chị hôm nay cưới, thật vui cho chị.",
        "pinyin": "wèi",
        "sentence": "姐姐今天结婚，真〔〕她高兴。",
        "answer": "为"
      }
    ]
  },
  {
    "num": 20,
    "code": "H31332",
    "part1": [
      {
        "q": 71,
        "exp": "弟弟 (em trai) + 害怕 (sợ) + 极了 (vô cùng). 极了 đứng SAU tính từ/động từ tâm lý để chỉ mức độ tột cùng.",
        "chunks": [
          "弟弟",
          "害怕",
          "极",
          "了"
        ],
        "answer": "弟弟害怕极了。"
      },
      {
        "q": 72,
        "exp": "这只 (con này, lượng từ 只 cho động vật) + 大熊猫 (gấu trúc) + 很可爱 (rất đáng yêu). Trạng từ 很 đứng trước tính từ.",
        "chunks": [
          "这只",
          "大熊猫",
          "很",
          "可爱"
        ],
        "answer": "这只大熊猫很可爱。"
      },
      {
        "q": 73,
        "exp": "Kết cấu 是……的 + bị động 被: 历史 (lịch sử) + 是不应该被忘记的 (là không nên bị lãng quên).",
        "chunks": [
          "历史",
          "是",
          "不应该",
          "被",
          "忘记",
          "的"
        ],
        "answer": "历史是不应该被忘记的。"
      },
      {
        "q": 74,
        "exp": "Cấu trúc so sánh A 比 B + tính từ + lượng: 我比去年 (tôi so với năm ngoái) + 瘦了10公斤 (gầy đi 10kg).",
        "chunks": [
          "我",
          "比",
          "去年",
          "瘦",
          "了",
          "10公斤"
        ],
        "answer": "我比去年瘦了10公斤。"
      },
      {
        "q": 75,
        "exp": "她 (cô ấy) + 最后 (cuối cùng) + 决定 (quyết định) + 把房子卖了 (bán ngôi nhà). Cấu trúc 把 + tân ngữ + động từ + 了.",
        "chunks": [
          "她",
          "最后",
          "决定",
          "把",
          "房子",
          "卖",
          "了"
        ],
        "answer": "她最后决定把房子卖了。"
      }
    ],
    "part2": [
      {
        "q": 76,
        "exp": "太 + 阳 = 太阳 (mặt trời). 太阳出来了 = mặt trời mọc rồi. Một ngày mới bắt đầu.",
        "pinyin": "tài",
        "sentence": "〔〕阳出来了，新的一天开始了。",
        "answer": "太"
      },
      {
        "q": 77,
        "exp": "您 = ngài (kính ngữ của 你). 您可以坐电梯 = ngài có thể đi thang máy bên cạnh.",
        "pinyin": "nín",
        "sentence": "电影院在8层，〔〕可以坐旁边那个电梯。",
        "answer": "您"
      },
      {
        "q": 78,
        "exp": "里 = trong. 冰箱里 = trong tủ lạnh. Trong tủ lạnh còn nước giải khát không? Tôi hơi khát.",
        "pinyin": "lǐ",
        "sentence": "冰箱〔〕还有饮料吗？我有点儿渴了。",
        "answer": "里"
      },
      {
        "q": 79,
        "exp": "听 + 音乐 = nghe nhạc. 睡觉前听音乐 = nghe nhạc trước khi ngủ. Tôi và em gái đều có thói quen này.",
        "pinyin": "tīng",
        "sentence": "我和妹妹一样，都有睡觉前〔〕音乐的习惯。",
        "answer": "听"
      },
      {
        "q": 80,
        "exp": "节 + 目 = 节目 (tiết mục). 下一个节目 = tiết mục tiếp theo. Tiết mục tiếp theo là của lớp chúng ta, mọi người chuẩn bị đi.",
        "pinyin": "jié",
        "sentence": "下一个〔〕目就是我们班的了，大家准备下。",
        "answer": "节"
      }
    ]
  }
];
