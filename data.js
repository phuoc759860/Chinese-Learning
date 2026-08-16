// HSK3 书写练习 + 阅读练习 - 题库数据
// Writing (书写) Q71-80: Part 1 排列顺序 (71-75), Part 2 汉字填空 (76-80)
// Reading (阅读) Q41-70: p1 选项匹配 (41-45), p2 选项匹配 (46-50), p3 选词填空 (51-55),
// p4 选词填空对话 (56-60), p5 阅读理解 (61-70)
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
    ],
    "reading": {
      "p1": {
        "options": [
          "爷爷教了我很多次。",
          "做作业遇到不会的词语时，你用铅笔在旁边记一下。",
          "我还以为你忘了呢，你真好！",
          "决定了没？去还是不去？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "你先吃个苹果吧，我去给你做面条儿。"
        ],
        "items": [
          {
            "q": 41,
            "text": "生日快乐！这是我给你买的礼物，喜欢不喜欢？",
            "a": "C",
            "exp": "Người được tặng quà sinh nhật đáp lại: 我还以为你忘了呢，你真好！(Tôi cứ tưởng bạn quên mất, bạn thật tốt!) – lời cảm ơn tự nhiên khi nhận được quà."
          },
          {
            "q": 42,
            "text": "天阴了，我怕一会儿要下雨，明天吧？",
            "a": "D",
            "exp": "Người thứ nhất ngại trời âm u sắp mưa (下雨 = trời mưa) nên đề nghị hoãn sang hôm sau; đối phương hỏi dồn: 决定了没？去还是不去？(Quyết định chưa? Đi hay không đi?) – cặp ghép chính thức của đề, ý liên hệ khá lỏng."
          },
          {
            "q": 43,
            "text": "现在去看字典吧，字典里有。",
            "a": "B",
            "exp": "Khi gặp từ không biết (不会的词语 = từ không biết) thì tra từ điển (看字典 = xem từ điển); đáp án B '做作业遇到不会的词语时，你用铅笔在旁边记一下'(Khi làm bài gặp từ không biết, em dùng bút chì ghi chú bên cạnh) – cặp ghép chính thức của đề."
          },
          {
            "q": 44,
            "text": "你的游泳水平最近提高很快啊。",
            "a": "A",
            "exp": "Lời khen trình độ bơi (游泳 = bơi lội) tiến bộ nhanh; đáp án A '爷爷教了我很多次。'(Ông nội đã dạy tôi rất nhiều lần) giải thích lý do tiến bộ – cặp ghép chính thức của đề."
          },
          {
            "q": 45,
            "text": "我饿了，冰箱里有什么吃的吗？",
            "a": "F",
            "exp": "Người nói đói bụng (饿了 = đói) hỏi có gì ăn; đối phương đề nghị: 你先吃个苹果吧，我去给你做面条儿。(Anh ăn táo trước đi, tôi đi làm mì cho anh) – lời đề nghị ăn uống phù hợp."
          }
        ]
      },
      "p2": {
        "options": [
          "吃完饭以后，你来洗碗。",
          "他在黑板上写的字太小！我们都看不清楚！",
          "她已经结婚了，孩子都两岁了。",
          "他们很认真、很努力地练习了一个夏天。",
          "他对自己画的画儿总是不满意。"
        ],
        "items": [
          {
            "q": 46,
            "text": "安静，你需要换一个眼镜了。",
            "a": "B",
            "exp": "Trong lớp, thầy yêu cầu '安静'(im lặng) rồi nhắc bạn cần thay kính mới; đáp án B '他在黑板上写的字太小！我们都看不清楚！'(Chữ ông ấy viết trên bảng nhỏ quá! Chúng tôi nhìn không rõ!) – lý do phải thay kính; cặp ghép chính thức của đề."
          },
          {
            "q": 47,
            "text": "其实，主要是他对自己的要求太高了。",
            "a": "E",
            "exp": "Giải thích vì sao chưa hài lòng: anh ấy yêu cầu với chính mình quá cao (要求太高 = yêu cầu quá cao); đáp án E '他对自己画的画儿总是不满意'(Anh ấy luôn không hài lòng với bức tranh mình vẽ) rất phù hợp."
          },
          {
            "q": 48,
            "text": "我准备给你妹妹介绍个男朋友。",
            "a": "A",
            "exp": "Câu nói định giới thiệu bạn trai (男朋友 = bạn trai) cho em gái; đáp án A '吃完饭以后，你来洗碗。'(Sau bữa cơm, bạn rửa bát) là cặp ghép chính thức của đề, ý không liên quan trực tiếp."
          },
          {
            "q": 49,
            "text": "为什么总是我啊？",
            "a": "A",
            "exp": "Lời than phiền 'tại sao lúc nào cũng là tôi?' trả lời cho đáp án A '吃完饭以后，你来洗碗。'(Sau bữa cơm, bạn rửa bát) – vì lại bị sai đi rửa bát nên bất mãn."
          },
          {
            "q": 50,
            "text": "今天的节目看了吗？那些学生的表演好极了。",
            "a": "D",
            "exp": "Khen màn biểu diễn (表演 = biểu diễn) của học sinh rất hay; đáp án D '他们很认真、很努力地练习了一个夏天。'(Họ rất nghiêm túc, cố gắng luyện tập suốt một mùa hè) giải thích vì sao biểu diễn tốt."
          }
        ]
      },
      "p3": {
        "options": [
          "刻",
          "双",
          "音乐",
          "其他",
          "声音",
          "干净"
        ],
        "items": [
          {
            "q": 51,
            "text": "除了数学，弟弟的（　）成绩都不错。",
            "a": "D",
            "exp": "其他 = những môn khác. '除了数学，弟弟的其他成绩都不错' = Ngoài môn toán, các môn khác của em trai đều tốt. Cấu trúc 除了…都… = ngoài… ra thì đều…"
          },
          {
            "q": 52,
            "text": "我特别想买这（　）鞋，问题是我的脚太大。",
            "a": "B",
            "exp": "双 = đôi (lượng từ cho giày, tất). 一双鞋 = một đôi giày. '我特别想买这双鞋' = Tôi rất muốn mua đôi giày này."
          },
          {
            "q": 53,
            "text": "这条裤子昨天洗过了，是（　）的。",
            "a": "F",
            "exp": "干净 = sạch sẽ. Quần vừa giặt hôm qua (洗过了 = đã giặt) nên sạch: '这条裤子是干净的' = chiếc quần này là sạch."
          },
          {
            "q": 54,
            "text": "现在是三点一（　），别担心，我们不会迟到。",
            "a": "A",
            "exp": "刻 = khắc (15 phút). 三点一刻 = 3 giờ 15 phút. Vì mới hơn 3 giờ 15 một chút nên không muộn (不会迟到 = sẽ không đến muộn)."
          },
          {
            "q": 55,
            "text": "姐姐从小就喜欢唱歌，现在她是一位（　）老师。",
            "a": "C",
            "exp": "音乐 = âm nhạc. 音乐老师 = giáo viên âm nhạc. Chị thích hát từ nhỏ (喜欢唱歌 = thích hát) nên trở thành giáo viên âm nhạc là hợp lý."
          }
        ]
      },
      "p4": {
        "options": [
          "明白",
          "角",
          "被",
          "爱好",
          "办法",
          "甜"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：这个问题你们准备什么时候解决？B：我们正在想（　），今天应该可以解决。",
            "a": "E",
            "exp": "办法 = biện pháp, cách giải quyết. '我们正在想办法' = Chúng tôi đang tìm cách, hôm nay chắc sẽ giải quyết được."
          },
          {
            "q": 57,
            "text": "A：怎么样，听（　）了吗？B：对不起，您读得太快，我没听懂。",
            "a": "A",
            "exp": "明白 = rõ, hiểu. 听明白了吗 = nghe rõ/nghe hiểu chưa? Người B trả lời chưa hiểu vì đối phương đọc nhanh quá (读得太快 = đọc quá nhanh)."
          },
          {
            "q": 58,
            "text": "A：盘子里的肉（　）那只黄猫吃了。B：那你该给它准备点儿水了。",
            "a": "C",
            "exp": "被 = bị (cấu trúc bị động 被…+V). '肉被那只黄猫吃了' = Thịt bị con mèo vàng ăn mất. Vì ăn mặn nên cần chuẩn bị nước cho mèo."
          },
          {
            "q": 59,
            "text": "A：菜有点儿（　），但很好吃。B：我妈妈是上海人，她做菜喜欢放糖。",
            "a": "F",
            "exp": "甜 = ngọt. Mẹ là người Thượng Hải thích cho đường (放糖 = cho đường) khi nấu ăn nên món ăn hơi ngọt: '菜有点儿甜' = món ăn hơi ngọt."
          },
          {
            "q": 60,
            "text": "A：你好，香蕉怎么卖？B：这种三块五一斤，那种便宜两（　）五分。",
            "a": "B",
            "exp": "角 = hào (đơn vị tiền Trung Quốc, 1元 = 10角). 两角五分 = 2 hào 5 phân. Loại kia rẻ hơn '两角五分' = rẻ hơn 0,25 đồng."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "中国人经常说：早饭要吃好，午饭要吃饱，晚饭要吃少。",
            "question": "根据这句话，可以知道：",
            "opts": [
              "早饭要少吃",
              "午饭要多吃",
              "不要吃晚饭"
            ],
            "a": "B",
            "exp": "Câu '早饭要吃好，午饭要吃饱，晚饭要吃少' = sáng ăn tốt, trưa ăn no, tối ăn ít → đáp án B '午饭要多吃' (bữa trưa nên ăn nhiều) là đúng."
          },
          {
            "q": 62,
            "passage": "公司来了一位新同事，长得跟我有点儿像，而且我们都姓王，很多人总是笑着问我：“新来的同事是不是你哥哥？”",
            "question": "新来的同事：",
            "opts": [
              "是我哥",
              "长得像我",
              "长得像我弟弟"
            ],
            "a": "B",
            "exp": "Đoạn văn nói đồng nghiệp mới trông giống tôi (长得跟我有点儿像) và cùng họ Vương nên nhiều người hỏi có phải anh trai tôi không → đáp án B '长得像我' (trông giống tôi) đúng."
          },
          {
            "q": 63,
            "passage": "北京的秋天比较短，但这是北京最好的季节。秋天的北京不冷也不热，下雨的时候不多，这时候去北京旅游最好。北京的春天也很漂亮，只是有时候会刮大风。",
            "question": "北京的秋天：",
            "opts": [
              "很舒服",
              "非常热",
              "经常刮风"
            ],
            "a": "A",
            "exp": "Mùa thu Bắc Kinh là mùa đẹp nhất: không nóng không lạnh (不冷也不热), ít mưa; còn gió lớn là ở mùa xuân → đáp án A '很舒服' (rất dễ chịu) đúng."
          },
          {
            "q": 64,
            "passage": "张先生，您到饭店以后，先休息一下。中午我们一起吃午饭，下午4点以前没有什么事，如果您愿意，我可以带您到附近看看。5点，我们经理和您见面，晚上经理请您吃晚饭。",
            "question": "张先生5点做什么？",
            "opts": [
              "和经理见面",
              "到外面去看看",
              "和经理一起吃饭"
            ],
            "a": "A",
            "exp": "Đoạn văn ghi rõ: 5点，我们经理和您见面 (5 giờ giám đốc gặp ông), còn ăn tối là buổi tối → đáp án A '和经理见面' (gặp giám đốc) đúng."
          },
          {
            "q": 65,
            "passage": "小李，洗手间在一楼东边，如果有客人要去，你带他们去。还有，注意洗手间的灯不要关。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "小李是客人",
              "小李表示同意",
              "别关洗手间的灯"
            ],
            "a": "C",
            "exp": "Câu cuối nói rõ: 注意洗手间的灯不要关 (chú ý đừng tắt đèn nhà vệ sinh) → đáp án C '别关洗手间的灯' (đừng tắt đèn nhà vệ sinh) đúng."
          },
          {
            "q": 66,
            "passage": "一年级二班的考试已经结束了，我听大家说，虽然题很多，但不难，很简单。",
            "question": "这次考试：",
            "opts": [
              "很难",
              "题很多",
              "时间不长"
            ],
            "a": "B",
            "exp": "Đoạn văn nói: 题很多，但不难，很简单 (đề nhiều nhưng không khó, rất đơn giản) → đáp án B '题很多' (đề nhiều) đúng."
          },
          {
            "q": 67,
            "passage": "我对外面的世界很有兴趣，我希望有机会到别的国家看一看，了解它们不同的文化。",
            "question": "我希望：",
            "opts": [
              "学习普通话",
              "有很多节日",
              "去国外看看"
            ],
            "a": "C",
            "exp": "Người nói mong có cơ hội đến nước khác xem (到别的国家看一看), tìm hiểu văn hóa khác nhau → đáp án C '去国外看看' (đi nước ngoài xem) đúng."
          },
          {
            "q": 68,
            "passage": "自行车？没问题，你别客气。就在楼下，就是那辆蓝色的。我这几天不骑，你不用急着还。",
            "question": "那辆自行车：",
            "opts": [
              "坏了",
              "是蓝色的",
              "是别人的"
            ],
            "a": "B",
            "exp": "Đoạn văn miêu tả xe đạp màu xanh (那辆蓝色的) ở dưới lầu, dùng thoải mái không cần trả gấp → đáp án B '是蓝色的' (màu xanh) đúng."
          },
          {
            "q": 69,
            "passage": "两年不见，没想到他变化这么大，比以前瘦了很多，但和以前一样的是，他还是那么热情、快乐、关心别人。",
            "question": "他以前怎么样？",
            "opts": [
              "又矮又瘦",
              "容易生气",
              "热情、快乐"
            ],
            "a": "C",
            "exp": "Đoạn văn nói trước đây anh ấy cũng nhiệt tình, vui vẻ, biết quan tâm người khác (和以前一样的是，他还是那么热情、快乐) → đáp án C '热情、快乐' đúng."
          },
          {
            "q": 70,
            "passage": "下了飞机，坐出租车的时候，我把行李箱放在了车箱里。下车时，我忘了拿行李箱，里面有很多重要的东西。但是，我有出租车票，我相信能找到我的行李箱。",
            "question": "我的行李箱现在最可能在：",
            "opts": [
              "机场",
              "飞机上",
              "出租车上"
            ],
            "a": "C",
            "exp": "Vali để trong cốp taxi (放在了车箱里) và quên lấy khi xuống xe, chưa ai lấy nên nhiều khả năng vẫn ở taxi → đáp án C '出租车上' (trên taxi) đúng."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "太好了！需要我帮忙吗？",
          "今天把我饿坏了，还有什么吃的吗？",
          "你最好再检查一下，看还有没有问题。",
          "没问题，你就放心吧。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "这条裤子你花了多少钱？"
        ],
        "items": [
          {
            "q": 41,
            "text": "我的作业早就完成了。",
            "a": "C",
            "exp": "Học sinh báo bài tập (作业 = bài tập) đã làm xong từ lâu; đối phương nhắc: 你最好再检查一下，看还有没有问题。(Bạn tốt nhất kiểm tra lại xem còn vấn đề gì không) – lời dặn cẩn thận."
          },
          {
            "q": 42,
            "text": "你先来个苹果，我去给你做碗面条儿。",
            "a": "B",
            "exp": "Người thứ nhất đói bụng (饿坏了 = đói lắm) hỏi còn gì ăn; đáp án B '今天把我饿坏了，还有什么吃的吗？'(Hôm nay tôi đói quá, còn gì ăn không?) – câu hỏi phù hợp để nhận lời mời ăn táo và mì."
          },
          {
            "q": 43,
            "text": "我终于有了自己的大房子了，明天就可以搬家了。",
            "a": "A",
            "exp": "Người nói vui vì cuối cùng có nhà to của riêng mình (大房子 = ngôi nhà lớn), mai chuyển nhà (搬家 = chuyển nhà); đối phương đáp: 太好了！需要我帮忙吗？(Tuyệt quá! Cần tôi giúp gì không?) – chúc mừng và đề nghị giúp đỡ."
          },
          {
            "q": 44,
            "text": "这几天我不在家，小狗就请你帮我照顾了。",
            "a": "D",
            "exp": "Nhờ chăm sóc con chó (照顾 = chăm sóc) mấy ngày vắng nhà; đáp án D '没问题，你就放心吧。'(Không vấn đề, bạn cứ yên tâm) – lời đồng ý nhận lời."
          },
          {
            "q": 45,
            "text": "姐姐给我买的，我也不太清楚。",
            "a": "F",
            "exp": "Ai đó hỏi giá chiếc quần; đáp án F '这条裤子你花了多少钱？'(Chiếc quần này bạn mua hết bao nhiêu tiền?) – câu hỏi giá cả, chủ quần trả lời là chị mua nên không rõ."
          }
        ]
      },
      "p2": {
        "options": [
          "银行马上就要关门了。",
          "那是我叔叔的儿子，一岁多了。",
          "把菜单儿给我，我们喝杯绿茶吧？",
          "我的几个同事周末想去北京玩儿，但他们都不会开车。",
          "昨天的雨下得非常大，我没带伞。"
        ],
        "items": [
          {
            "q": 46,
            "text": "这个小孩儿胖胖的，真可爱。",
            "a": "B",
            "exp": "Khen đứa bé bụ bẫm (胖胖的 = mũm mĩm) đáng yêu; đáp án B '那是我叔叔的儿子，一岁多了。'(Đó là con trai chú tôi, hơn một tuổi rồi) – giới thiệu về đứa bé."
          },
          {
            "q": 47,
            "text": "我哥是司机，我问问他，看他有没有时间。",
            "a": "D",
            "exp": "Anh trai là tài xế (司机 = tài xế) nên hỏi xem có rảnh không; đáp án D '我的几个同事周末想去北京玩儿，但他们都不会开车。'(Mấy đồng nghiệp cuối tuần muốn đi Bắc Kinh chơi nhưng không ai biết lái xe) – lý do cần nhờ tài xế."
          },
          {
            "q": 48,
            "text": "你怎么又生病了？",
            "a": "E",
            "exp": "Hỏi vì sao lại bị ốm (生病 = bị bệnh); đáp án E '昨天的雨下得非常大，我没带伞。'(Hôm qua mưa rất to, tôi không mang ô) – lý do bị ốm vì dính mưa."
          },
          {
            "q": 49,
            "text": "没关系，我明天去也可以。",
            "a": "A",
            "exp": "Ngân hàng sắp đóng cửa; người này trấn an: 没关系 (không sao), mai đi cũng được → đáp án A '银行马上就要关门了。'(Ngân hàng sắp đóng cửa) là lời nhắc ban đầu."
          },
          {
            "q": 50,
            "text": "好的，我也有些渴了。",
            "a": "C",
            "exp": "Đồng ý vì cũng hơi khát (渴了 = khát); đáp án C '把菜单儿给我，我们喝杯绿茶吧？'(Đưa tôi thực đơn, chúng ta uống chén trà xanh nhé?) – lời mời uống trà."
          }
        ]
      },
      "p3": {
        "options": [
          "其实",
          "感冒",
          "附近",
          "舒服",
          "声音",
          "把"
        ],
        "items": [
          {
            "q": 51,
            "text": "电影马上就要开始了，（　）手机关了吧。",
            "a": "F",
            "exp": "把 = trợ từ kết cấu 把…+V (đưa tân ngữ lên trước động từ). 把手机关了吧 = Hãy tắt điện thoại đi. Vì phim sắp bắt đầu nên nhắc tắt điện thoại."
          },
          {
            "q": 52,
            "text": "他很高，这张桌子太低，坐着很不（　）。",
            "a": "D",
            "exp": "舒服 = thoải mái, dễ chịu. '坐着很不舒服' = ngồi rất không thoải mái, vì bàn quá thấp so với người cao."
          },
          {
            "q": 53,
            "text": "您可以选择火车站（　）的宾馆，住那儿会更方便。",
            "a": "C",
            "exp": "附近 = gần đó, khu lân cận. '火车站附近的宾馆' = khách sạn gần ga tàu – ở đó sẽ thuận tiện hơn."
          },
          {
            "q": 54,
            "text": "天气冷，你多穿点儿衣服，小心（　）。",
            "a": "B",
            "exp": "感冒 = cảm cúm. Trời lạnh (天气冷) nên mặc thêm áo, cẩn thận kẻo bị cảm: '小心感冒' = cẩn thận kẻo cảm lạnh."
          },
          {
            "q": 55,
            "text": "对一个女人来说，漂亮、聪明都很重要，但（　）更重要的是快乐。",
            "a": "A",
            "exp": "其实 = thực ra. '但其实更重要的是快乐' = nhưng thực ra điều quan trọng hơn là niềm vui – thể hiện sự nhấn mạnh ý thật."
          }
        ]
      },
      "p4": {
        "options": [
          "刻",
          "一直",
          "节",
          "爱好",
          "被",
          "打扫"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：请问，现在是十一点吗？B：现在十一点十五了，您的表慢了一（　）。",
            "a": "A",
            "exp": "刻 = khắc (15 phút). 一刻 = 15 phút. '您的表慢了一刻' = đồng hồ của ông chậm 15 phút, vì thực tế đã 11 giờ 15."
          },
          {
            "q": 57,
            "text": "A：最近怎么（　）没看见他？B：他去旅游了，可能这个周末才能回来。",
            "a": "B",
            "exp": "一直 = mãi, suốt. '最近怎么一直没看见他' = dạo này sao mãi không thấy anh ấy – vì anh ấy đi du lịch (旅游 = du lịch)."
          },
          {
            "q": 58,
            "text": "A：牛奶呢？B：一定是（　）猫喝了。",
            "a": "E",
            "exp": "被 = bị (cấu trúc bị động 被…+V). '一定是被猫喝了' = chắc chắn là bị mèo uống mất."
          },
          {
            "q": 59,
            "text": "A：你家的厨房真干净！B：当然了，为了欢迎你，我已经（　）了两个多小时了。",
            "a": "F",
            "exp": "打扫 = dọn dẹp, lau chùi. '我已经打扫了两个多小时了' = tôi đã dọn dẹp hơn hai tiếng đồng hồ để chào đón bạn."
          },
          {
            "q": 60,
            "text": "A：买这么多鲜花，今天是谁的生日啊？B：今天是9月10日，教师（　）！这是为老师准备的。",
            "a": "C",
            "exp": "节 = ngày lễ. 教师节 = Ngày Nhà giáo (10/9). Mua hoa để chuẩn bị cho ngày Nhà giáo, không phải sinh nhật."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "人们常说：今天工作不努力，明天努力找工作。",
            "question": "这句话的意思主要是：",
            "opts": [
              "要努力工作",
              "明天会更好",
              "时间过得太快"
            ],
            "a": "A",
            "exp": "Câu '今天工作不努力，明天努力找工作' = hôm nay không chăm chỉ làm việc thì ngày mai phải chăm chỉ tìm việc → nhấn mạnh phải làm việc chăm chỉ → đáp án A '要努力工作' đúng."
          },
          {
            "q": 62,
            "passage": "请大家把黑板上的这些词写在本子上，回家后用这些词语写一个小故事，别忘了，最少写100字。",
            "question": "说话人最可能是做什么的？",
            "opts": [
              "老师",
              "学生",
              "经理"
            ],
            "a": "A",
            "exp": "Người nói bảo 'các em' chép từ trên bảng đen (黑板 = bảng đen) vào vở và về nhà viết truyện ngắn ít nhất 100 chữ → đó là lời của giáo viên dặn học sinh → đáp án A '老师' đúng."
          },
          {
            "q": 63,
            "passage": "我对这儿很满意，虽然没有花园，但是离河边很近，那里有草地，有大树，还有鸟；虽然冬天天气很冷，但是空气新鲜，而且房间里一点儿也不冷。",
            "question": "使他觉得满意的是：",
            "opts": [
              "没有花园",
              "房间很大",
              "离河很近"
            ],
            "a": "C",
            "exp": "Điều làm anh hài lòng là gần sông (离河很近): có cỏ, cây to và chim; dù trời lạnh nhưng phòng không lạnh chút nào → đáp án C '离河很近' đúng."
          },
          {
            "q": 64,
            "passage": "昨天晚上睡得太晚，今天起床时已经8点多了，我刷了牙，洗了脸，就出来了，差点儿忘了关门。到了公司，会议已经开始了。没办法，我只能站在外面等休息时间。",
            "question": "他今天早上：",
            "opts": [
              "没复习",
              "迟到了",
              "忘了关门"
            ],
            "a": "B",
            "exp": "Dậy muộn, đến công ty thì cuộc họp đã bắt đầu, phải đứng ngoài chờ giờ nghỉ → anh ấy đến muộn (迟到了) → đáp án B đúng."
          },
          {
            "q": 65,
            "passage": "我去年春节去过一次上海，今年再去的时候，发现那里的变化非常大。经过那条街道时，我几乎不认识了。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "现在是春节",
              "上海变化很大",
              "上海人很热情"
            ],
            "a": "B",
            "exp": "Đoạn văn nói Thượng Hải thay đổi rất lớn (变化非常大), đi qua con đường cũ gần như không nhận ra → đáp án B '上海变化很大' đúng."
          },
          {
            "q": 66,
            "passage": "世界真的很小，我昨天才发现，你给小张介绍的男朋友是我妻子以前的同事。",
            "question": "小张的男朋友是我妻子：",
            "opts": [
              "以前的同事",
              "以前的丈夫",
              "以前的男朋友"
            ],
            "a": "A",
            "exp": "Đoạn văn nói rõ: bạn trai của Tiểu Trương là đồng nghiệp cũ của vợ tôi (我妻子以前的同事) → đáp án A '以前的同事' đúng."
          },
          {
            "q": 67,
            "passage": "下班后，在路上遇到一个老同学。好久没见面，我们就在公司旁边那个咖啡馆里坐了坐，一边喝咖啡一边说了些过去的事，所以回来晚了。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "他回到家了",
              "他正在喝咖啡",
              "咖啡馆在公园旁边"
            ],
            "a": "A",
            "exp": "Đoạn văn kể: gặp bạn cũ, ngồi quán cà phê cạnh công ty rồi về nhà muộn (回来晚了) → anh ấy đã về nhà → đáp án A đúng; quán cà phê ở cạnh công ty nên C sai."
          },
          {
            "q": 68,
            "passage": "小刘是一位小学老师，教三年级的数学，他虽然很年轻，但是课讲得很好，同学们都很喜欢他。",
            "question": "学生为什么喜欢刘老师？",
            "opts": [
              "很年轻",
              "课讲得好",
              "对学生要求高"
            ],
            "a": "B",
            "exp": "Đoạn văn nói dù còn trẻ nhưng thầy dạy rất hay (课讲得很好) nên học sinh đều thích → đáp án B '课讲得好' đúng."
          },
          {
            "q": 69,
            "passage": "今天12号了，晚上陈阿姨要来家里，家里有菜，有鱼，还有些羊肉，但是没有水果了，你去买些香蕉、葡萄吧，再买个西瓜？",
            "question": "家里需要买什么？",
            "opts": [
              "鸡蛋",
              "水果",
              "果汁"
            ],
            "a": "B",
            "exp": "Nhà có rau, cá, thịt cừu nhưng hết hoa quả (没有水果了); cần mua chuối, nho và dưa hấu → cần mua trái cây → đáp án B '水果' đúng."
          },
          {
            "q": 70,
            "passage": "有人问我长得像谁，这个问题不太好回答。家里人一般觉得我的鼻子和耳朵像我爸爸，眼睛像我妈妈。",
            "question": "关于他，下面哪个是对的？",
            "opts": [
              "头发很长",
              "不像妈妈",
              "鼻子像爸爸"
            ],
            "a": "C",
            "exp": "Đoạn văn nói mũi và tai giống bố (鼻子…像我爸爸), mắt giống mẹ → đáp án C '鼻子像爸爸' đúng."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "这是一个很好的机会，但我对自己的游泳成绩不太满意。",
          "我刚才在电梯门口遇到经理了。",
          "这儿的冬天就是这样，慢慢地你就习惯了。",
          "我的电脑又不能用了，你来帮我看看？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "你们就别担心了。"
        ],
        "items": [
          {
            "q": 41,
            "text": "这次比赛，世界很多国家的运动员都来参加。",
            "a": "A",
            "exp": "Nói về cuộc thi bơi (比赛 = cuộc thi) có vận động viên nhiều nước; đáp án A '这是一个很好的机会，但我对自己的游泳成绩不太满意。'(Đây là cơ hội rất tốt, nhưng tôi không hài lòng với thành tích bơi của mình) – cặp ghép chính thức, ý liên hệ khá lỏng."
          },
          {
            "q": 42,
            "text": "外面的风刮得真大！",
            "a": "C",
            "exp": "Kêu gió thổi to quá (风刮得真大 = gió thổi to thật); đáp án C '这儿的冬天就是这样，慢慢地你就习惯了。'(Mùa đông ở đây là vậy đó, dần dần anh sẽ quen) – lời trấn an cho đặc điểm mùa đông."
          },
          {
            "q": 43,
            "text": "你那个太旧了，换一个吧。很便宜，就两三千块钱。",
            "a": "D",
            "exp": "Khuyên đổi cái cũ (太旧了 = cũ quá) vì rẻ; đáp án D '我的电脑又不能用了，你来帮我看看？'(Máy tính của tôi lại không dùng được rồi, anh đến xem giúp nhé?) – máy cũ hỏng nên cần thay, cặp ghép chính thức của đề."
          },
          {
            "q": 44,
            "text": "孩子已经18岁了，知道怎么照顾自己。",
            "a": "F",
            "exp": "Con đã 18 tuổi tự biết chăm sóc bản thân (照顾自己 = tự chăm sóc); đáp án F '你们就别担心了。'(Mọi người đừng lo lắng nữa) – lời trấn an phù hợp."
          },
          {
            "q": 45,
            "text": "他让我告诉你，下午两点半在公司会议室开会。",
            "a": "B",
            "exp": "Nhắn giúp lịch họp lúc 14:30 ở phòng họp công ty; đáp án B '我刚才在电梯门口遇到经理了。'(Vừa nãy tôi gặp giám đốc ở cửa thang máy) – giám đốc nhờ chuyển lời, cặp ghép chính thức của đề."
          }
        ]
      },
      "p2": {
        "options": [
          "你认识那位先生，是吗？",
          "妹妹在北京上大学，三年级。",
          "他感冒了，有点儿发烧。",
          "女儿第一次骑马的时候比较害怕。",
          "叔叔，您愿意教我吗？"
        ],
        "items": [
          {
            "q": 46,
            "text": "终于把教室打扫干净了，她洗澡去了。",
            "a": "B",
            "exp": "Nói về việc cô ấy (她) dọn xong lớp rồi đi tắm; đáp án B '妹妹在北京上大学，三年级。'(Em gái học đại học ở Bắc Kinh, năm thứ ba) – cặp ghép chính thức của đề, ý liên hệ khá lỏng (cùng nói về '她')."
          },
          {
            "q": 47,
            "text": "你10岁了？体育怎么样？喜欢打篮球吗？",
            "a": "E",
            "exp": "Hỏi một đứa trẻ 10 tuổi về môn thể thao, bóng rổ (打篮球 = chơi bóng rổ); đáp án E '叔叔，您愿意教我吗？'(Chú ơi, chú dạy cháu được không?) – lời xin học của đứa trẻ, phù hợp."
          },
          {
            "q": 48,
            "text": "他是我的同事，需要我为你介绍一下吗？",
            "a": "A",
            "exp": "Đề nghị giới thiệu đồng nghiệp (同事 = đồng nghiệp) cho bạn; đáp án A '你认识那位先生，是吗？'(Anh quen quý ông kia à?) – câu hỏi trước khi giới thiệu, phù hợp."
          },
          {
            "q": 49,
            "text": "那你在家休息几天吧。",
            "a": "C",
            "exp": "Khuyên ở nhà nghỉ ngơi mấy ngày; đáp án C '他感冒了，有点儿发烧。'(Anh ấy bị cảm cúm, hơi sốt) – lý do cần nghỉ ngơi, phù hợp."
          },
          {
            "q": 50,
            "text": "现在，她觉得那是一件非常快乐的事情。",
            "a": "D",
            "exp": "Giờ cô ấy thấy đó là chuyện rất vui; đáp án D '女儿第一次骑马的时候比较害怕。'(Lúc đầu con gái cưỡi ngựa khá sợ) – lúc đầu sợ, giờ thấy vui, cặp ghép chính thức của đề."
          }
        ]
      },
      "p3": {
        "options": [
          "向",
          "然后",
          "花",
          "筷子",
          "声音",
          "相同"
        ],
        "items": [
          {
            "q": 51,
            "text": "您站中间就可以了，好，再（　）左边一点儿，非常好！",
            "a": "A",
            "exp": "向 = về phía, hướng về. '再向左边一点儿' = hơi dịch về phía bên trái một chút nữa – lời chỉnh tư thế chụp ảnh."
          },
          {
            "q": 52,
            "text": "服务员，请你再给我拿一双（　）。",
            "a": "D",
            "exp": "筷子 = đũa. 一双筷子 = một đôi đũa. '请你再给我拿一双筷子' = nhờ phục vụ mang thêm một đôi đũa."
          },
          {
            "q": 53,
            "text": "虽然这两个问题有不一样的地方，但是解决的办法是（　）的。",
            "a": "F",
            "exp": "相同 = giống nhau. '解决的办法是相同的' = cách giải quyết là giống nhau. Cấu trúc 虽然…但是… = mặc dù… nhưng…"
          },
          {
            "q": 54,
            "text": "这次出去旅游，一共去了7个城市，（　）了一万多块钱。",
            "a": "C",
            "exp": "花 = tiêu (tiền). '花了一万多块钱' = tiêu hơn một vạn đồng – khi đi du lịch (旅游 = du lịch) thường tốn tiền."
          },
          {
            "q": 55,
            "text": "明天早上我先去银行，（　）再去找你。",
            "a": "B",
            "exp": "然后 = sau đó. '明天早上我先去银行，然后再去找你' = sáng mai tôi đi ngân hàng trước, sau đó đi tìm bạn – diễn tả thứ tự trước sau."
          }
        ]
      },
      "p4": {
        "options": [
          "关心",
          "差",
          "突然",
          "爱好",
          "节目",
          "还"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：下一个（　）是什么？B：下面为大家唱歌的是王医生，歌的名字是《十五的月亮》，大家欢迎！",
            "a": "E",
            "exp": "节目 = tiết mục. '下一个节目是什么' = tiết mục tiếp theo là gì; người B giới thiệu tiết mục hát của bác sĩ Vương."
          },
          {
            "q": 57,
            "text": "A：我的飞机票呢？怎么（　）找不到了？B：是不是和报纸放一起了？",
            "a": "C",
            "exp": "突然 = bỗng nhiên, đột nhiên. '怎么突然找不到了' = sao bỗng dưng không tìm thấy – vé máy bay (飞机票 = vé máy bay) đột nhiên không thấy."
          },
          {
            "q": 58,
            "text": "A：现在几点了？我的手表又坏了。B：我看一下，现在（　）一刻九点。",
            "a": "B",
            "exp": "差 = kém, thiếu. 差一刻九点 = 9 giờ kém 15 phút (tức 8 giờ 45). Đồng hồ hỏng nên hỏi giờ, người B xem và báo."
          },
          {
            "q": 59,
            "text": "A：那本书你（　）了？B：对，没什么意思，而且很多地方看不懂。",
            "a": "F",
            "exp": "还 = trả lại (đọc huán). '那本书你还了？' = cuốn sách đó bạn trả lại rồi à? Người B xác nhận: cuốn sách chán và nhiều chỗ không hiểu."
          },
          {
            "q": 60,
            "text": "A：那个药的作用怎么样？脚好些了吗？B：好多了，谢谢您的（　）。",
            "a": "A",
            "exp": "关心 = quan tâm. '谢谢您的关心' = cảm ơn sự quan tâm của ông – lời cảm ơn sau khi được hỏi thăm sức khỏe."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "每次经过他家门口的时候，我几乎都能看到他的那只老猫在树下睡觉。",
            "question": "那只猫经常在哪儿睡觉？",
            "opts": [
              "树下",
              "椅子上",
              "办公室"
            ],
            "a": "A",
            "exp": "Đoạn văn nói con mèo già ngủ dưới gốc cây (在树下睡觉) mỗi lần đi qua nhà anh ấy → đáp án A '树下' (dưới gốc cây) đúng."
          },
          {
            "q": 62,
            "passage": "奶奶经常对我说：“吃饭七分饱。”“七分”就是70%的意思。很多中国人认为“吃饭七分饱”对身体健康很有帮助。",
            "question": "“吃饭七分饱”是为了：",
            "opts": [
              "健康",
              "帮助别人",
              "发现问题"
            ],
            "a": "A",
            "exp": "Đoạn văn nói nhiều người Trung Quốc cho rằng 'ăn bảy phần no' rất có ích cho sức khỏe (对身体健康很有帮助) → đáp án A '健康' (sức khỏe) đúng."
          },
          {
            "q": 63,
            "passage": "这里的香蕉非常有名，每年8月这里会举行一个香蕉节，所以，夏季有很多人来这里玩儿。",
            "question": "这个地方：",
            "opts": [
              "常下雪",
              "很有名",
              "有很多故事"
            ],
            "a": "B",
            "exp": "Đoạn văn nói chuối ở đây rất nổi tiếng (非常有名), mỗi năm 8 tháng có lễ hội chuối, mùa hè nhiều người đến chơi → đáp án B '很有名' (rất nổi tiếng) đúng."
          },
          {
            "q": 64,
            "passage": "他姓高，但是长得不高，只有一米六。同事们都说：“我们以后叫你小高吧。”他笑着回答：“当然可以，过去朋友们都这么叫我。”",
            "question": "关于他，可以知道什么？",
            "opts": [
              "比较矮",
              "腿很长",
              "有60公斤"
            ],
            "a": "A",
            "exp": "Đoạn văn nói anh ấy họ Cao nhưng không cao, chỉ 1 mét 6 (只有一米六) → đáp án A '比较矮' (khá thấp) đúng."
          },
          {
            "q": 65,
            "passage": "太阳从西边出来了吗？他今天怎么这么早就起床了？他一般都要睡到8点以后才起床。",
            "question": "根据这段话，可以知道今天：",
            "opts": [
              "他起得早",
              "天气不错",
              "他工作很认真"
            ],
            "a": "A",
            "exp": "Đoạn văn lấy làm lạ vì hôm nay anh ấy dậy sớm (怎么这么早就起床了), bình thường anh ngủ đến sau 8 giờ → đáp án A '他起得早' (anh ấy dậy sớm) đúng."
          },
          {
            "q": 66,
            "passage": "手机使我们的学习、工作越来越方便，除了打电话、写短信外，很多手机还可以照相，有时候真的方便极了。",
            "question": "手机经常被用来：",
            "opts": [
              "写字",
              "写短信",
              "做练习"
            ],
            "a": "B",
            "exp": "Đoạn văn nói ngoài gọi điện, nhắn tin (写短信 = nhắn tin), nhiều điện thoại còn chụp ảnh được → đáp án B '写短信' (nhắn tin) là việc hay được dùng, đúng."
          },
          {
            "q": 67,
            "passage": "“再见”是一个很有意思的词语。“再见”表示“再一次见面”，所以人们离开时说“再见”，其实也是希望以后再见面。",
            "question": "“再见”出现在什么时候？",
            "opts": [
              "关灯",
              "见面",
              "离开"
            ],
            "a": "C",
            "exp": "Đoạn văn giải thích '再见' (tạm biệt) có nghĩa 'gặp lại lần nữa', nói khi rời đi (离开) với mong muốn gặp lại → đáp án C '离开' (rời đi) đúng."
          },
          {
            "q": 68,
            "passage": "西瓜的汁儿多，吃的时候小心点儿，要低下头，不要吃得脸上、衬衫上都是。还有，不要一边吃一边说话。",
            "question": "吃西瓜时须：",
            "opts": [
              "站着",
              "低着头",
              "多喝牛奶"
            ],
            "a": "B",
            "exp": "Đoạn văn dặn khi ăn dưa hấu (西瓜 = dưa hấu) nhiều nước phải cúi đầu (低下头) để không dính vào mặt và áo → đáp án B '低着头' (cúi đầu) đúng."
          },
          {
            "q": 69,
            "passage": "你看，这上面写着1.21元，前面的1表示元，中间的2表示角，最后的1表示分。明白了吗？",
            "question": "中间的数字表示：",
            "opts": [
              "元",
              "角",
              "分"
            ],
            "a": "B",
            "exp": "Đoạn văn giải thích: số 1 đầu là 元, số 2 ở giữa là 角, số cuối là 分 → số ở giữa (中间的数字) là '角' → đáp án B đúng."
          },
          {
            "q": 70,
            "passage": "我是一个中学老师，教学生画画儿。每次下课前，我会把下次学生要带的东西写在黑板上，但每次上课时，总会有学生忘了拿铅笔。",
            "question": "学生会忘记拿什么？",
            "opts": [
              "画儿",
              "手表",
              "铅笔"
            ],
            "a": "C",
            "exp": "Đoạn văn kể lúc nào cũng có học sinh quên mang bút chì (忘了拿铅笔) → đáp án C '铅笔' (bút chì) đúng."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "七个小矮人的故事，你听说过吗？",
          "这双运动鞋是新买的？多少钱买的？",
          "这位就是我的新男朋友。",
          "一般吧，我们上个月才认识，只是普通朋友。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "去洗洗手，准备碗筷，吃饭了，你妈妈呢？"
        ],
        "items": [
          {
            "q": 41,
            "text": "方便给我们介绍一下吗？他是谁啊？",
            "a": "C",
            "exp": "Câu hỏi “方便给我们介绍一下吗？他是谁啊？” (Tiện giới thiệu một chút được không? Anh ấy là ai?) muốn biết người đó là ai, nên đáp án C “这位就是我的新男朋友” (Đây chính là bạn trai mới của tôi) dùng để giới thiệu, rất hợp."
          },
          {
            "q": 42,
            "text": "你和王小姐的关系怎么样？",
            "a": "D",
            "exp": "Câu hỏi “你和王小姐的关系怎么样？” (Quan hệ giữa anh và cô Vương thế nào?) được đáp án D “一般吧，我们上个月才认识，只是普通朋友” (Bình thường thôi, chúng tôi tháng trước mới quen, chỉ là bạn thường) trả lời trực tiếp về quan hệ."
          },
          {
            "q": 43,
            "text": "800多块，虽然比较贵，但穿着很舒服。",
            "a": "B",
            "exp": "Câu “800多块，虽然比较贵” (hơn 800 tệ, tuy hơi đắt) nói về giá, nên đáp án B “这双运动鞋是新买的？多少钱买的？” (Đôi giày thể thao này mới mua à? Bao nhiêu tiền?) hỏi về giá giày, liên quan chặt chẽ."
          },
          {
            "q": 44,
            "text": "她在看电视，我去叫她。",
            "a": "F",
            "exp": "Đáp án F “去洗洗手，准备碗筷，吃饭了，你妈妈呢？” (Đi rửa tay, chuẩn bị bát đũa, ăn cơm, mẹ cậu đâu?) hỏi mẹ đang ở đâu, còn câu trả lời “她在看电视，我去叫她” (Cô ấy đang xem tivi, tôi đi gọi) chính là câu trả lời — đây là cặp ghép chính thức."
          },
          {
            "q": 45,
            "text": "小时候奶奶给我讲过，很有名。",
            "a": "A",
            "exp": "Đáp án A “七个小矮人的故事，你听说过吗？” (Chuyện bảy chú lùn, cậu nghe bao giờ chưa?) hỏi về câu chuyện, còn câu trả lời “小时候奶奶给我讲过，很有名” (Hồi nhỏ bà tôi đã kể, rất nổi tiếng) — liên quan đến việc đã nghe kể."
          }
        ]
      },
      "p2": {
        "options": [
          "别担心，我坐出租车去，30分钟就到学校了。",
          "我们是去旅游，不是搬家，还是少拿一些吧。",
          "没关系，我觉得你这样更可爱。健康才是最重要的。",
          "你不是说给我带礼物了吗？是什么？让我看看。",
          "我觉得这家宾馆还不错，你说呢？"
        ],
        "items": [
          {
            "q": 46,
            "text": "怎么办啊？我又胖了两公斤。",
            "a": "C",
            "exp": "Người nói lo lắng vì “又胖了两公斤” (lại tăng hai ký), đáp án C “没关系，我觉得你这样更可爱。健康才是最重要的” (Không sao, tôi thấy bạn như thế đáng yêu hơn, sức khỏe mới quan trọng nhất) là lời an ủi."
          },
          {
            "q": 47,
            "text": "快点儿吧，再有一个小时就要考试了。",
            "a": "A",
            "exp": "Vì “再有一个小时就要考试了” (còn một tiếng nữa là thi) nên phải nhanh, đáp án A “别担心，我坐出租车去，30分钟就到学校了” (Đừng lo, tôi đi taxi, 30 phút là đến trường) trấn an là vẫn kịp."
          },
          {
            "q": 48,
            "text": "在行李箱里呢，我来拿，还是你自己去拿？",
            "a": "D",
            "exp": "Câu “在行李箱里呢” (ở trong vali ấy) trả lời câu hỏi đồ ở đâu của đáp án D “你不是说给我带礼物了吗？是什么？让我看看” (Chẳng phải anh nói mang quà cho tôi à? Là gì? Cho tôi xem với) — đồ đã được mang về."
          },
          {
            "q": 49,
            "text": "房间很干净，还能上网，那我们先住这儿吧。",
            "a": "E",
            "exp": "Câu “那我们先住这儿吧” (Vậy chúng ta cứ ở đây nhé) là lời đồng ý, trả lời đáp án E “我觉得这家宾馆还不错，你说呢？” (Tôi thấy khách sạn này cũng được, bạn thấy sao?) — cùng đề cập chỗ ở."
          },
          {
            "q": 50,
            "text": "面包、水、地图都准备好了，我们还需要带什么？",
            "a": "B",
            "exp": "Câu hỏi “还需要带什么？” (còn cần mang gì nữa?) về việc chuẩn bị đồ, đáp án B “我们是去旅游，不是搬家，还是少拿一些吧” (Chúng ta đi du lịch chứ không phải chuyển nhà, mang bớt chút đi) nhắc nhẹ nhàng."
          }
        ]
      },
      "p3": {
        "options": [
          "为了",
          "结束",
          "兴趣",
          "年轻",
          "声音",
          "检查"
        ],
        "items": [
          {
            "q": 51,
            "text": "会议9点半能（　）吗？外面有人找王经理。",
            "a": "B",
            "exp": "“结束” (kết thúc). Câu hỏi “会议9点半能结束吗？” (Cuộc họp 9 giờ 30 có kết thúc được không?) vì bên ngoài có người tìm Giám đốc Vương, cần họp xong sớm."
          },
          {
            "q": 52,
            "text": "作业写完了要好好（　）一下，注意别写错字。",
            "a": "F",
            "exp": "“检查” (kiểm tra). Viết xong bài tập phải “检查一下” (kiểm tra lại) để tránh viết sai chữ, rất hợp nghĩa."
          },
          {
            "q": 53,
            "text": "他从小就对电子游戏有（　），长大后他选择了和游戏有关的工作。",
            "a": "C",
            "exp": "“兴趣” (sở thích, hứng thú). Anh ấy từ nhỏ đã “对电子游戏有兴趣” (có hứng thú với trò chơi điện tử), nên sau này chọn công việc liên quan đến trò chơi."
          },
          {
            "q": 54,
            "text": "现在的（　）人结婚越来越晚了。",
            "a": "D",
            "exp": "“年轻” (trẻ). Câu nói “现在的年轻人” (giới trẻ hiện nay) kết hôn ngày càng muộn, đây là cách nói thông dụng."
          },
          {
            "q": 55,
            "text": "（　）更好地解决问题，必须提高自己的水平。",
            "a": "A",
            "exp": "“为了” (để). Câu “为了更好地解决问题” (để giải quyết vấn đề tốt hơn) phải nâng cao trình độ của bản thân — “为了” biểu thị mục đích."
          }
        ]
      },
      "p4": {
        "options": [
          "其实",
          "疼",
          "地方",
          "爱好",
          "要求",
          "教"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：哥，刚才说的那个数学题怎么做啊？B：很简单，我（　）你。",
            "a": "F",
            "exp": "“教” (dạy). Người anh đáp “很简单，我教你” (Đơn giản, tôi dạy cậu) — vì em hỏi bài toán làm thế nào nên anh sẽ dạy."
          },
          {
            "q": 57,
            "text": "A：你都很长时间没锻炼了，下午和我去爬山吧。B：我昨天刚打了篮球，今天腿还（　）呢。",
            "a": "B",
            "exp": "“疼” (đau). Hôm qua vừa đánh bóng rổ nên “今天腿还疼呢” (hôm nay chân vẫn còn đau), hợp lý."
          },
          {
            "q": 58,
            "text": "A：比赛（　）很简单，5分钟，谁踢进的球最多，谁就是第一。B：明白了，可以开始了吗？",
            "a": "E",
            "exp": "“要求” (yêu cầu). “比赛要求很简单” (yêu cầu của trận đấu rất đơn giản): 5 phút, ai ghi được nhiều bàn nhất là nhất — giải thích luật thi đấu."
          },
          {
            "q": 59,
            "text": "A：晚上在哪儿见面？B：就上次我们去过的那个（　），那儿附近有一家咖啡馆很安静。",
            "a": "C",
            "exp": "“地方” (nơi, chỗ). “就上次我们去过的那个地方” (đúng chỗ lần trước chúng ta từng đến) trả lời câu hỏi gặp nhau ở đâu."
          },
          {
            "q": 60,
            "text": "A：你喜欢这种音乐节目？B：（　）我只想听听那些老歌。",
            "a": "A",
            "exp": "“其实” (thực ra). “其实我只想听听那些老歌” (Thực ra tôi chỉ muốn nghe những bài hát cũ) — nêu ý thật, phủ nhận nhẹ ý ở câu hỏi."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "喂？你在哪儿呢？你声音大一点儿好吗？我刚才没听清楚你在说什么。",
            "question": "那个人的声音很：",
            "opts": [
              "大",
              "小",
              "清楚"
            ],
            "a": "B",
            "exp": "Người nói bảo “你声音大一点儿好吗？我刚才没听清楚” (bạn nói to lên chút được không, tôi vừa rồi nghe không rõ), vì vậy giọng của người kia rất nhỏ (小)."
          },
          {
            "q": 62,
            "passage": "“笑一笑，十年少。”这是中国人常说的一句话，意思是笑的作用很大，笑一笑会让人年轻10岁。我们应该常笑，这样才能使自己年轻，不容易变老。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "人应该快乐",
              "笑能使人聪明",
              "爱笑的人更认真"
            ],
            "a": "A",
            "exp": "Đoạn văn nói “笑一笑，十年少” (cười một cái trẻ mười tuổi), nên con người nên thường cười, tức là nên vui vẻ (快乐) để trẻ lâu."
          },
          {
            "q": 63,
            "passage": "每年秋季的10月4日，这个城市都会举行“啤酒节”，会有很多国家的人前来参加。啤酒节上，除了喝啤酒，这儿的歌舞表演更是让人难忘，你还会在这儿遇到很多名人。",
            "question": "在啤酒节上：",
            "opts": [
              "可以看电影",
              "能看到表演",
              "共有上千种啤酒"
            ],
            "a": "B",
            "exp": "Đoạn văn nói ở lễ hội bia có “歌舞表演更是让人难忘” (biểu diễn ca múa càng đáng nhớ), nên ở lễ hội bia có thể xem biểu diễn (表演)."
          },
          {
            "q": 64,
            "passage": "中午看新闻了没？我很快就可以坐15号地铁了。15号地铁经过我家附近，以后，我上班就方便多了，从我家到公司只要花20分钟，比坐公共汽车快多了。",
            "question": "15号地铁：",
            "opts": [
              "离他家不远",
              "车站有电梯",
              "旁边有火车站"
            ],
            "a": "A",
            "exp": "Đoạn văn nói “15号地铁经过我家附近” (tuyến metro số 15 đi qua gần nhà tôi), nên ga metro cách nhà anh ấy không xa (离他家不远)."
          },
          {
            "q": 65,
            "passage": "新买的这个空调比以前那个旧的好多了，它的声音非常小，几乎没有声音，不会影响我们的学习和休息。",
            "question": "新空调怎么样？",
            "opts": [
              "用电少",
              "声音很小",
              "出现了问题"
            ],
            "a": "B",
            "exp": "Đoạn văn nói điều hòa (空调) mới “声音非常小，几乎没有声音” (tiếng rất nhỏ, gần như không có tiếng), nên đáp án là tiếng rất nhỏ (声音很小)."
          },
          {
            "q": 66,
            "passage": "你手中拿着一件东西不放时，你只有这一件东西，如果你愿意放开，你就有机会选择其他的。",
            "question": "放开手中的东西，可以：",
            "opts": [
              "更了解它",
              "有更多选择",
              "更相信自己"
            ],
            "a": "B",
            "exp": "Đoạn văn nói nếu buông (放开) vật trong tay ra thì sẽ “有机会选择其他的” (có cơ hội chọn những thứ khác), tức là có thêm nhiều sự lựa chọn (更多选择)."
          },
          {
            "q": 67,
            "passage": "猫和人不同，它们不怕黑，因为它们的眼睛在晚上更容易看清楚东西。我们家的那只猫就总是习惯白天睡觉，晚上出来走动。",
            "question": "关于那只猫，可以知道什么？",
            "opts": [
              "害怕晚上",
              "喜欢换环境",
              "喜欢白天休息"
            ],
            "a": "C",
            "exp": "Đoạn văn nói con mèo nhà tôi “总是习惯白天睡觉” (luôn quen ngủ ban ngày), tức là thích nghỉ ngơi vào ban ngày (喜欢白天休息)."
          },
          {
            "q": 68,
            "passage": "茶是我的最爱，花茶、绿茶、红茶，我都喜欢，天冷了或者你工作累了的时候，喝杯热茶，真是舒服极了。",
            "question": "关于他，可以知道：",
            "opts": [
              "口渴了",
              "没完成工作",
              "很喜欢喝茶"
            ],
            "a": "C",
            "exp": "Đoạn văn mở đầu “茶是我的最爱” (trà là sở thích nhất của tôi), nên có thể biết anh ấy rất thích uống trà (很喜欢喝茶)."
          },
          {
            "q": 69,
            "passage": "你好，我今天早上才发现，昨天从你们这儿拿回去的衣服不是我的，衬衫和裤子都不是我的，这条裤子太长了，你帮我看一下，是谁拿错了。",
            "question": "根据这段话，可以知道他：",
            "opts": [
              "非常生气",
              "是卖衣服的",
              "拿错了衣服"
            ],
            "a": "C",
            "exp": "Anh ấy phát hiện “昨天从你们这儿拿回去的衣服不是我的” (quần áo lấy về hôm qua không phải của mình), tức là đã cầm nhầm quần áo (拿错了衣服)."
          },
          {
            "q": 70,
            "passage": "孩子在学会说话以前，就已经懂得了哭和笑，他们借这样的办法来告诉别人自己饿了、生气了、不舒服或者很高兴、很满意。慢慢大一点以后，他们就开始用一些简单的词语来表示自己的意思了。",
            "question": "孩子笑可能表示：",
            "opts": [
              "很难过",
              "很好吃",
              "不想玩了"
            ],
            "a": "B",
            "exp": "Đoạn văn nói trẻ con dùng khóc cười để biểu lộ “很高兴、很满意” (rất vui, rất hài lòng); trẻ cười có thể vì đồ ăn ngon (很好吃) và hài lòng."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "问我吗？在报纸下面吧。",
          "明天的考试要求带铅笔。",
          "这么小就会写自己的名字了？真不简单。",
          "你弟弟的工作怎么样了？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "你这么忙，有时间去运动吗？"
        ],
        "items": [
          {
            "q": 41,
            "text": "我天天去游泳，你没发现我瘦了？",
            "a": "F",
            "exp": "Câu “我天天去游泳” (tôi ngày nào cũng đi bơi) trả lời đáp án F “你这么忙，有时间去运动吗？” (Bận thế này mà có thời gian vận động à?) — bơi là một môn vận động, liên quan chặt chẽ."
          },
          {
            "q": 42,
            "text": "我丈夫给他介绍了一家电脑公司，但他还没决定去不去。",
            "a": "D",
            "exp": "Câu nói về việc “我丈夫给他介绍了一家电脑公司” (chồng tôi giới thiệu một công ty máy tính cho nó) là câu trả lời cho đáp án D “你弟弟的工作怎么样了？” (Công việc của em trai cậu thế nào?) — nói về công việc."
          },
          {
            "q": 43,
            "text": "没问题，我昨天下午就准备好了。",
            "a": "B",
            "exp": "Đáp án B “明天的考试要求带铅笔” (Kỳ thi ngày mai yêu cầu mang bút chì) thông báo yêu cầu, câu “没问题，我昨天下午就准备好了” (Không vấn đề, chiều qua tôi đã chuẩn bị xong) là lời xác nhận đã chuẩn bị."
          },
          {
            "q": 44,
            "text": "大家都觉得他又聪明又可爱。",
            "a": "C",
            "exp": "Câu “大家都觉得他又聪明又可爱” (Ai cũng thấy nó vừa thông minh vừa đáng yêu) khen ngợi một đứa trẻ, cùng nội dung khen ngợi với đáp án C “这么小就会写自己的名字了？真不简单” (Bé vậy mà đã biết viết tên mình, thật không đơn giản)."
          },
          {
            "q": 45,
            "text": "你看见我的眼镜了吗？又找不到了。",
            "a": "A",
            "exp": "Câu hỏi “你看见我的眼镜了吗？” (Cậu thấy kính của tôi không?) tìm kính, đáp án A “问我吗？在报纸下面吧” (Hỏi tôi à? Ở dưới tờ báo đấy) cho biết vị trí chiếc kính."
          }
        ]
      },
      "p2": {
        "options": [
          "你了解他吗？这么快就和他结婚了！",
          "阿姨，那您买的时候花了多少钱？",
          "你这条裙子是不是有点儿短？",
          "不用客气了，你一会儿洗碗筷和盘子吧。",
          "很近，就在这条街的后面。"
        ],
        "items": [
          {
            "q": 46,
            "text": "你相信吗？这把椅子去年春天卖100万。",
            "a": "B",
            "exp": "Câu nói “这把椅子去年春天卖100万” (cái ghế này mùa xuân năm ngoái bán 100 vạn) về giá cả, đáp án B “阿姨，那您买的时候花了多少钱？” (Bác ơi, vậy lúc bác mua hết bao nhiêu tiền?) hỏi về giá, liên quan chặt chẽ."
          },
          {
            "q": 47,
            "text": "真的？那我穿裤子好了。",
            "a": "C",
            "exp": "Đáp án C “你这条裙子是不是有点儿短？” (Chiếc váy này của cậu hơi ngắn thì phải?) nhận xét về váy, câu “真的？那我穿裤子好了” (Thật à? Vậy tôi mặc quần cho rồi) đồng tình và đổi ý không mặc váy."
          },
          {
            "q": 48,
            "text": "第一次见面我就喜欢上他了。",
            "a": "A",
            "exp": "Câu “第一次见面我就喜欢上他了” (Ngay lần gặp đầu tôi đã thích anh ấy rồi) trả lời đáp án A “你了解他吗？这么快就和他结婚了！” (Cậu hiểu anh ấy không? Kết hôn nhanh thế!) — ngạc nhiên vì quen nhau quá nhanh."
          },
          {
            "q": 49,
            "text": "你累了吧？休息一下，我来做饭。",
            "a": "D",
            "exp": "Câu đề nghị “我来做饭” (để tôi nấu cơm), đáp án D “不用客气了，你一会儿洗碗筷和盘子吧” (Khỏi khách sáo, lát nữa cậu rửa bát đũa và đĩa nhé) nhận lời giúp và giao việc lại — liên quan việc bếp núc."
          },
          {
            "q": 50,
            "text": "你们上次去的那个饭馆儿离这儿远吗？",
            "a": "E",
            "exp": "Câu hỏi “离这儿远吗？” (có xa đây không?) về khoảng cách, đáp án E “很近，就在这条街的后面” (Rất gần, ngay phía sau con phố này) trả lời về khoảng cách."
          }
        ]
      },
      "p3": {
        "options": [
          "讲",
          "绿",
          "健康",
          "习惯",
          "声音",
          "年级"
        ],
        "items": [
          {
            "q": 51,
            "text": "蓝天，白云，（　）树，那儿的环境真好。",
            "a": "B",
            "exp": "“绿” (xanh). Câu “蓝天，白云，绿树” (trời xanh, mây trắng, cây xanh) miêu tả cảnh đẹp, “绿树” (cây xanh) rất hợp với bối cảnh môi trường tốt."
          },
          {
            "q": 52,
            "text": "妹妹的孩子今年7岁了，应该上一（　）了。",
            "a": "F",
            "exp": "“年级” (khối lớp). Trẻ 7 tuổi nên vào “一年级” (lớp một), “上年级” (lên lớp) là cách nói chuẩn."
          },
          {
            "q": 53,
            "text": "有不懂的地方，就去查字典，这是一个比较好的学习（　）。",
            "a": "D",
            "exp": "“习惯” (thói quen). “学习习惯” (thói quen học tập): gặp chỗ không hiểu thì tra từ điển là một thói quen tốt."
          },
          {
            "q": 54,
            "text": "爸爸，您每天喝杯红葡萄酒，对（　）很有帮助。",
            "a": "C",
            "exp": "“健康” (sức khỏe). Uống một ly rượu vang đỏ mỗi ngày “对健康很有帮助” (rất có ích cho sức khỏe), hợp với lời khuyên dành cho bố."
          },
          {
            "q": 55,
            "text": "跟以前比，我现在的普通话（　）得好多了。",
            "a": "A",
            "exp": "“讲” (nói). “普通话讲得好多了” (tiếng phổ thông nói tốt hơn nhiều) — “讲普通话” (nói tiếng phổ thông) là kết hợp thông dụng."
          }
        ]
      },
      "p4": {
        "options": [
          "教",
          "多么",
          "河",
          "爱好",
          "满意",
          "终于"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：这是一个（　）好的机会啊！你必须去。B：一共只有两个月？那好吧。",
            "a": "B",
            "exp": "“多么” (biết bao). “这是一个多么好的机会啊！” (Đây là một cơ hội tốt biết bao!) — “多么…啊” biểu thị sự cảm thán mạnh."
          },
          {
            "q": 57,
            "text": "A：地图上这儿有条（　），怎么没看见啊？B：你看错了，还在前面呢。",
            "a": "C",
            "exp": "“河” (con sông). “地图上这儿有条河” (trên bản đồ chỗ này có một con sông), “条” là lượng từ đi với sông, rất hợp."
          },
          {
            "q": 58,
            "text": "A：我画完了，您看看，（　）吗？B：好极了，你画得越来越好了。",
            "a": "E",
            "exp": "“满意” (hài lòng). Câu “您看看，满意吗？” (Bác xem, có hài lòng không?) xin ý kiến, và đáp lại “好极了” (tuyệt vời) là hài lòng."
          },
          {
            "q": 59,
            "text": "A：你（　）回来了，啤酒买了吗？B：医生不让你喝酒吃肉。我买了些果汁和牛奶。",
            "a": "F",
            "exp": "“终于” (cuối cùng). “你终于回来了” (Cuối cùng anh cũng về rồi) biểu thị sự chờ đợi lâu, rất hợp với giọng đợi mong."
          },
          {
            "q": 60,
            "text": "A：您做过哪些工作？B：我以前是大学老师，主要（　）东西方文化比较。",
            "a": "A",
            "exp": "“教” (giảng dạy). “主要教东西方文化比较” (chủ yếu giảng dạy môn so sánh văn hóa Đông - Tây) — giáo viên đại học “教” (dạy) một môn học."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "不同的季节可以用不同的颜色来表示，我们用黄色表示秋季，那夏季呢？",
            "question": "黄色常被用来表示：",
            "opts": [
              "春天",
              "秋天",
              "冬天"
            ],
            "a": "B",
            "exp": "Đoạn văn nói rõ “我们用黄色表示秋季” (chúng ta dùng màu vàng để biểu thị mùa thu), nên màu vàng thường được dùng để biểu thị mùa thu (秋天)."
          },
          {
            "q": 62,
            "passage": "2月14号早上，她正要去上班的时候，突然看到男朋友拿着鲜花站在门口。她这才明白今天是他们的节日。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "她那天迟到了",
              "男朋友很难过",
              "男朋友要送她花"
            ],
            "a": "C",
            "exp": "Cô ấy “看到男朋友拿着鲜花站在门口” (thấy bạn trai cầm hoa tươi đứng ở cửa), nên có thể biết bạn trai muốn tặng hoa cho cô (送她花)."
          },
          {
            "q": 63,
            "passage": "你的菜单里有水果饭吗？你想学着做水果饭吗？其实很简单，把米饭做好后，再把一块儿一块儿新鲜的水果放进去，水果饭就完成了。你可以做苹果饭，香蕉饭，如果你愿意，还可以做西瓜饭。",
            "question": "水果饭：",
            "opts": [
              "不需要水",
              "很容易做",
              "是一种面包"
            ],
            "a": "B",
            "exp": "Đoạn văn nói làm “水果饭” (cơm trái cây) “其实很简单” (thật ra rất đơn giản): nấu cơm rồi cho trái cây tươi vào là xong."
          },
          {
            "q": 64,
            "passage": "听说你下个星期就要离开北京回国了？我下星期不在北京，没办法去机场送你了，这个小熊猫送给你，欢迎你明年再到中国来。",
            "question": "他为什么现在送礼物？",
            "opts": [
              "担心有变化",
              "想学习汉语",
              "下星期不在北京"
            ],
            "a": "C",
            "exp": "Vì “我下星期不在北京，没办法去机场送你了” (tuần sau tôi không ở Bắc Kinh, không đến sân bay tiễn được) nên phải tặng quà bây giờ."
          },
          {
            "q": 65,
            "passage": "他在我生病的时候照顾过我，在我遇到问题的时候帮助过我，在我心中，他是我最好的朋友。",
            "question": "我遇到问题时，他：",
            "opts": [
              "非常生气",
              "身体不太好",
              "帮我解决问题"
            ],
            "a": "C",
            "exp": "Đoạn văn nói “在我遇到问题的时候帮助过我” (đã giúp tôi lúc tôi gặp vấn đề), tức là anh ấy giúp tôi giải quyết vấn đề (帮我解决问题)."
          },
          {
            "q": 66,
            "passage": "中国有句老话，叫“有借有还，再借不难”，是说向别人借的东西，用完就要还回去，这样才能让别人相信你，下次还会借给你。",
            "question": "借了别人的东西：",
            "opts": [
              "要记得还",
              "要洗干净",
              "别用太长时间"
            ],
            "a": "A",
            "exp": "Câu tục ngữ “有借有还，再借不难” (mượn có trả, mượn lại chẳng khó) nghĩa là mượn đồ phải trả lại, tức là phải nhớ trả (记得还)."
          },
          {
            "q": 67,
            "passage": "这辆车有上下两层，很多人都愿意坐上边那层，因为坐得高，眼睛看得远，一路上经过的地方，你都可以看得更清楚。",
            "question": "关于这辆车，可以知道：",
            "opts": [
              "司机很热情",
              "一共有两层",
              "下层不能坐人"
            ],
            "a": "B",
            "exp": "Đoạn văn nói “这辆车有上下两层” (chiếc xe này có tầng trên và tầng dưới), tức là xe có tổng cộng hai tầng (一共有两层)."
          },
          {
            "q": 68,
            "passage": "小王上午脸色不太好，同事们以为他病了，问他怎么了，他笑着回答说：“昨晚看球赛，两点才睡觉。”",
            "question": "小王昨天晚上：",
            "opts": [
              "发烧了",
              "看比赛了",
              "看表演了"
            ],
            "a": "B",
            "exp": "Tiểu Vương tự nói “昨晚看球赛，两点才睡觉” (tối qua xem bóng đá, 2 giờ mới ngủ), tức là tối qua anh ấy đã xem thi đấu (看比赛了)."
          },
          {
            "q": 69,
            "passage": "没关系，她哭是因为刚才听到一个孩子在唱《月亮船》，这使她突然想起了很多过去的事情。",
            "question": "她为什么哭？",
            "opts": [
              "想起了过去",
              "鼻子不舒服",
              "不想说再见"
            ],
            "a": "A",
            "exp": "Cô ấy khóc vì nghe một đứa trẻ hát “月亮船” (Thuyền Trăng), “使她突然想起了很多过去的事情” (làm cô chợt nhớ ra nhiều chuyện quá khứ)."
          },
          {
            "q": 70,
            "passage": "下班后我们一起去喝茶吧，就在公司旁边，30元一位，除了茶水，还送一些吃的。你那个朋友姓什么？我忘了，把他也叫上？",
            "question": "那个茶馆儿怎么样？",
            "opts": [
              "椅子很矮",
              "在花园里",
              "送吃的东西"
            ],
            "a": "C",
            "exp": "Đoạn văn nói quán trà này “除了茶水，还送一些吃的” (ngoài trà ra còn tặng thêm đồ ăn), tức là quán trà có tặng đồ ăn (送吃的东西)."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "这是一年级的数学题？这么难！",
          "那是我叔叔去年送我的生日礼物。",
          "跑完一万米后，你觉得怎么样？",
          "好的，如果没什么其他事，我一定去。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "你妹妹也爱看体育节目啊？"
        ],
        "items": [
          {
            "q": 41,
            "text": "这个帽子真可爱，你在哪儿买的？",
            "a": "B",
            "exp": "Câu hỏi “你在哪儿买的？” (Cậu mua ở đâu thế?) hỏi về chiếc mũ, đáp án B “那是我叔叔去年送我的生日礼物” (Đó là quà sinh nhật năm ngoái chú tôi tặng) trả lời về nguồn gốc chiếc mũ."
          },
          {
            "q": 42,
            "text": "是的，特别是足球比赛，她喜欢踢足球。",
            "a": "F",
            "exp": "Câu “是的，特别是足球比赛” (Đúng vậy, nhất là trận bóng đá) xác nhận đáp án F “你妹妹也爱看体育节目啊？” (Em gái cậu cũng thích xem chương trình thể thao à?) — cùng nói về sở thích thể thao."
          },
          {
            "q": 43,
            "text": "又渴又累，腿也疼。",
            "a": "C",
            "exp": "Câu “又渴又累，腿也疼” (vừa khát vừa mệt, chân cũng đau) là câu trả lời cho đáp án C “跑完一万米后，你觉得怎么样？” (Chạy xong 10.000 mét rồi, cậu thấy thế nào?) — miêu tả cảm giác sau khi chạy."
          },
          {
            "q": 44,
            "text": "这个周末大家都去唱歌，你和我们一起去？",
            "a": "D",
            "exp": "Câu rủ “你和我们一起去？” (Cậu đi cùng chúng tôi không?) được đáp án D “好的，如果没什么其他事，我一定去” (Được, nếu không có việc gì khác thì tôi nhất định đi) đồng ý nhận lời."
          },
          {
            "q": 45,
            "text": "你认真点儿，其实很简单。",
            "a": "A",
            "exp": "Đáp án A “这是一年级的数学题？这么难！” (Đây là bài toán lớp một à? Khó vậy!) than bài toán khó, còn câu “你认真点儿，其实很简单” (Nghiêm túc chút, thật ra rất đơn giản) trấn an — liên quan đến độ khó của bài."
          }
        ]
      },
      "p2": {
        "options": [
          "东边有一家，但是要到9点才开门。",
          "放心吧，我不会忘记的。",
          "你等我一下，我换件衬衫就来。",
          "姐姐，这个词是什么意思啊？",
          "孩子，遇到问题时，你应该想办法去解决。"
        ],
        "items": [
          {
            "q": 46,
            "text": "你总是这么慢，快7点了，要迟到了。",
            "a": "C",
            "exp": "Câu thúc giục “快7点了，要迟到了” (sắp 7 giờ, sắp muộn rồi), đáp án C “你等我一下，我换件衬衫就来” (Đợi tôi một lát, tôi thay áo sơ mi là đến ngay) cho biết sẽ nhanh chóng đi."
          },
          {
            "q": 47,
            "text": "宾馆附近有银行吗？",
            "a": "A",
            "exp": "Câu hỏi “宾馆附近有银行吗？” (Gần khách sạn có ngân hàng không?) được đáp án A “东边有一家，但是要到9点才开门” (Phía đông có một nhà, nhưng 9 giờ mới mở cửa) trả lời về vị trí ngân hàng."
          },
          {
            "q": 48,
            "text": "你出去的时候，记得把灯关上。",
            "a": "B",
            "exp": "Câu dặn “记得把灯关上” (nhớ tắt đèn), đáp án B “放心吧，我不会忘记的” (Yên tâm, tôi sẽ không quên) hứa sẽ làm theo."
          },
          {
            "q": 49,
            "text": "不能只是着急和生气。",
            "a": "E",
            "exp": "Đáp án E “孩子，遇到问题时，你应该想办法去解决” (Này con, gặp vấn đề thì phải nghĩ cách giải quyết) là lời khuyên, và câu “不能只是着急和生气” (Không thể chỉ vội vàng và tức giận) chính là ý đó — không nên chỉ lo buồn."
          },
          {
            "q": 50,
            "text": "我也不知道，你去查一下字典吧。",
            "a": "D",
            "exp": "Câu “你去查一下字典吧” (Cậu tra từ điển đi) trả lời đáp án D “姐姐，这个词是什么意思啊？” (Chị ơi, từ này nghĩa là gì ạ?) — hỏi nghĩa của từ."
          }
        ]
      },
      "p3": {
        "options": [
          "有名",
          "变化",
          "季节",
          "只",
          "声音",
          "瘦"
        ],
        "items": [
          {
            "q": 51,
            "text": "这个城市已经有900多年的历史了，非常（　）。",
            "a": "A",
            "exp": "“有名” (nổi tiếng). Thành phố có hơn 900 năm lịch sử nên rất “有名” (nổi tiếng) — vì lịch sử lâu đời nên nổi tiếng, rất hợp."
          },
          {
            "q": 52,
            "text": "因为工作比较忙，小李最近（　）了很多。",
            "a": "F",
            "exp": "“瘦” (gầy). Vì công việc bận rộn, Tiểu Lý gần đây “瘦了很多” (gầy đi nhiều) — lý do công việc bận làm người gầy đi, hợp lý."
          },
          {
            "q": 53,
            "text": "春、夏、秋、冬，你最喜欢哪个（　）？",
            "a": "C",
            "exp": "“季节” (mùa). Xuân, hạ, thu, đông là bốn “季节” (mùa) trong năm, câu hỏi bạn thích mùa nào nhất."
          },
          {
            "q": 54,
            "text": "你阿姨的（　）真大，我几乎没认出她来。",
            "a": "B",
            "exp": "“变化” (thay đổi). “你阿姨的变化真大” (Sự thay đổi của dì cậu thật lớn), đến mức gần như không nhận ra — hợp với ngữ cảnh lâu ngày không gặp."
          },
          {
            "q": 55,
            "text": "从我们学校坐公共汽车去火车站，（　）需要10分钟。",
            "a": "D",
            "exp": "“只” (chỉ). “只需要10分钟” (chỉ cần 10 phút) — “只” biểu thị số lượng ít, nhấn mạnh thời gian ngắn."
          }
        ]
      },
      "p4": {
        "options": [
          "刷牙",
          "太阳",
          "一共",
          "爱好",
          "借",
          "新鲜"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：音乐会的门票我放在桌子上了，（　）4张。B：我看见了，谢谢你。",
            "a": "C",
            "exp": "“一共” (tổng cộng). “一共4张” (tổng cộng 4 tấm vé) — “一共” dùng để nói tổng số, rất hợp với việc đếm vé."
          },
          {
            "q": 57,
            "text": "A：（　）以后不能再吃东西了。B：妈，您说第1001次了。",
            "a": "A",
            "exp": "“刷牙” (đánh răng). “刷牙以后不能再吃东西了” (Sau khi đánh răng không được ăn nữa) — mẹ dặn con sau khi đánh răng không ăn, là lời dặn quen thuộc."
          },
          {
            "q": 58,
            "text": "A：小姐，葡萄多少钱一斤？B：3块。今天的葡萄很（　），也很甜。",
            "a": "F",
            "exp": "“新鲜” (tươi). Người bán nói “今天的葡萄很新鲜，也很甜” (nho hôm nay rất tươi và cũng rất ngọt) — khen nho tươi ngon để bán hàng."
          },
          {
            "q": 59,
            "text": "A：喂，上次（　）的那本书，晚几天还你可以吗？B：没问题，我现在在外地，回去再说。",
            "a": "E",
            "exp": "“借” (mượn). “上次借的那本书” (cuốn sách mượn lần trước) — hỏi trả muộn vài ngày, “借书” (mượn sách) là kết hợp thông dụng."
          },
          {
            "q": 60,
            "text": "A：天终于晴了，好久没看见（　）了。B：天气这么好，我们去河边走走？",
            "a": "B",
            "exp": "“太阳” (mặt trời). “好久没看见太阳了” (lâu rồi không thấy mặt trời) — trời mưa lâu ngày nên không thấy mặt trời, và giờ trời tạnh nên thấy lại."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "站得高，才能看得远。所以，人们对自己的要求高一些，了解的事情就会更多一些。",
            "question": "想要了解更多，我们需要：",
            "opts": [
              "换新的环境",
              "多帮助别人",
              "提高对自己的要求"
            ],
            "a": "C",
            "exp": "Đoạn văn nói “站得高，才能看得远” (đứng cao mới nhìn xa), muốn hiểu biết nhiều hơn thì “对自己的要求高一些” (yêu cầu bản thân cao hơn), tức là nâng cao yêu cầu với bản thân."
          },
          {
            "q": 62,
            "passage": "熊猫的耳朵、眼睛、鼻子是黑色的，脚也是黑色的，它身上除了白色就是黑色。所以人们说：熊猫的照片只能是黑白的。",
            "question": "根据这段话，熊猫：",
            "opts": [
              "爱照相",
              "很聪明",
              "有个黑鼻子"
            ],
            "a": "C",
            "exp": "Đoạn văn nói tai, mắt, mũi (鼻子) của gấu trúc đều màu đen, nên gấu trúc có cái mũi đen (有个黑鼻子)."
          },
          {
            "q": 63,
            "passage": "老师问小明：“北京和月亮，哪个离你更近？”“当然是月亮了。”小明说。老师问他为什么，他说：“因为我经常可以看到月亮，但要看到北京，我需要花很长时间。”",
            "question": "小明为什么认为月亮离他近？",
            "opts": [
              "月亮很大",
              "容易看到月亮",
              "他没去过北京"
            ],
            "a": "B",
            "exp": "Tiểu Minh giải thích “因为我经常可以看到月亮” (vì tôi thường xuyên nhìn thấy mặt trăng) còn muốn thấy Bắc Kinh phải mất rất nhiều thời gian — tức là mặt trăng dễ nhìn thấy (容易看到)."
          },
          {
            "q": 64,
            "passage": "他刚才给我打电话，说那本书里还有一个问题，一会儿你去他那儿看看。以后要注意，一定要认真。",
            "question": "那本书：",
            "opts": [
              "作用不大",
              "有不少错字",
              "被发现还有问题"
            ],
            "a": "C",
            "exp": "Đoạn văn nói anh ấy “说那本书里还有一个问题” (bảo trong cuốn sách vẫn còn một vấn đề), tức là cuốn sách bị phát hiện vẫn còn vấn đề (被发现还有问题)."
          },
          {
            "q": 65,
            "passage": "小黄，明天上午我有个会，你帮我去机场接李先生吧。他明天8点的飞机，你早点儿去，早半个小时到，好不好？谢谢你了。",
            "question": "小黄明天最可能：",
            "opts": [
              "去旅游",
              "去机场接人",
              "要照顾病人"
            ],
            "a": "B",
            "exp": "Đoạn văn nhờ Tiểu Hoàng “去机场接李先生” (đi sân bay đón ông Lý), nên ngày mai cậu ấy nhiều khả năng nhất là đi sân bay đón người (去机场接人)."
          },
          {
            "q": 66,
            "passage": "因为工作需要，我要用到汉语。为了使自己的汉语说得更好，我参加了一个汉语学习班。除了星期天，每天晚上都有课。",
            "question": "我星期几没有课？",
            "opts": [
              "星期日",
              "星期六",
              "星期五"
            ],
            "a": "A",
            "exp": "Đoạn văn nói “除了星期天，每天晚上都有课” (trừ Chủ nhật ra, tối nào cũng có lớp), nên ngày Chủ nhật (星期日) là ngày không có lớp."
          },
          {
            "q": 67,
            "passage": "爸爸希望爷爷和奶奶搬到城里跟我们一起住，但是他们不同意。爷爷说，他们不习惯住楼房，而且不愿意离开那些老邻居。",
            "question": "爷爷奶奶不同意什么？",
            "opts": [
              "卖房子",
              "搬到城里",
              "检查身体"
            ],
            "a": "B",
            "exp": "Ông bà nội “不习惯住楼房” (không quen sống trong nhà chung cư) và không muốn rời hàng xóm cũ, nên không đồng ý chuyển lên thành phố (搬到城里) ở cùng."
          },
          {
            "q": 68,
            "passage": "我妻子是出租车司机，她开车十几年了，北京每一条街道的名字她几乎都知道。她很热情，工作很努力。",
            "question": "我妻子是个什么样的人？",
            "opts": [
              "比较矮",
              "喜欢安静",
              "很了解北京"
            ],
            "a": "C",
            "exp": "Đoạn văn nói vợ tôi là tài xế taxi, “北京每一条街道的名字她几乎都知道” (hầu như biết tên mọi con phố ở Bắc Kinh), nên cô ấy rất hiểu Bắc Kinh (很了解北京)."
          },
          {
            "q": 69,
            "passage": "中国人常说：“好马不吃回头草。”意思是说，已经过去的就不要再想了，要向前看，别走回头路。",
            "question": "这句话主要想告诉我们：",
            "opts": [
              "要多吃米饭",
              "兴趣很重要",
              "遇事要向前看"
            ],
            "a": "C",
            "exp": "Câu “好马不吃回头草” (Ngựa tốt không ngoảnh đầu ăn cỏ) có nghĩa là “要向前看” (phải nhìn về phía trước), đừng nghĩ lại chuyện đã qua — tức là gặp việc nên hướng về phía trước."
          },
          {
            "q": 70,
            "passage": "哥哥长得很高，只有一个爱好，就是打篮球。他希望有机会做篮球运动员，但是他现在的水平还不是很高。",
            "question": "根据这段话，哥哥：",
            "opts": [
              "爱打篮球",
              "正在复习",
              "以前是运动员"
            ],
            "a": "A",
            "exp": "Đoạn văn nói anh trai “只有一个爱好，就是打篮球” (chỉ có một sở thích duy nhất là đánh bóng rổ), nên anh ấy rất thích đánh bóng rổ (爱打篮球)."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "小马告诉我们票已经卖完了。",
          "谢谢您的关心，我会的。",
          "那会让人觉得你不是在认真听。",
          "让他教教我吧，我还不会呢。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "但是这个公园，我只去年春天来过一次。"
        ],
        "items": [
          {
            "q": 41,
            "text": "一个人在外面，要照顾好自己。",
            "a": "B",
            "exp": "对方叮嘱独自在外要照顾好自己，选项B以感谢回应对方的关心并承诺会做到，符合对话逻辑。"
          },
          {
            "q": 42,
            "text": "虽然离得很近。",
            "a": "F",
            "exp": "上半句说离得很近，选项F用“但是”转折，说明虽然近却只来过一次，前后形成转折关系。"
          },
          {
            "q": 43,
            "text": "和别人说话的时候，不要总是看手表。",
            "a": "C",
            "exp": "告诫说话时不要总是看手表，选项C解释原因——那样会让人觉得你不够认真听，形成因果关系。"
          },
          {
            "q": 44,
            "text": "叔叔说他过去经常游泳。",
            "a": "D",
            "exp": "叔叔过去常游泳说明他擅长游泳，所以想请他教自己（因为自己还不会），回应自然衔接。"
          },
          {
            "q": 45,
            "text": "我们打算先去茶馆儿喝茶，然后再去看电影。",
            "a": "A",
            "exp": "虽然计划先去喝茶再去看电影，但选项A说明电影票已经卖完，原来的计划可能无法实现，符合场景。"
          }
        ]
      },
      "p2": {
        "options": [
          "请问，洗手间在哪儿？",
          "果汁吧，一会儿要开车。",
          "没时间了，公司要求9点前必须到。",
          "经过一个多月的学习，她的水平提高了很多。",
          "他的爱好很多。"
        ],
        "items": [
          {
            "q": 46,
            "text": "我们今天喝什么？啤酒怎么样？",
            "a": "B",
            "exp": "对方建议喝啤酒，选项B说一会儿要开车，开车不能喝酒，所以改喝果汁，回应合理。"
          },
          {
            "q": 47,
            "text": "在前面，左边，407的旁边。",
            "a": "A",
            "exp": "这句话是在指路，回答位置“在前面、左边、407的旁边”，正对应询问洗手间在哪里的问题。"
          },
          {
            "q": 48,
            "text": "开始的时候，奶奶担心自己不会用电脑、不会上网。",
            "a": "D",
            "exp": "奶奶一开始担心不会用电脑和上网，选项D说经过一个多月的学习水平提高很多，说明担心已消除，前后呼应。"
          },
          {
            "q": 49,
            "text": "踢足球、打篮球，跟体育有关的我都喜欢。",
            "a": "E",
            "exp": "对方说各种体育活动都喜欢，选项E概括他的爱好很多，是对前面内容的总结。"
          },
          {
            "q": 50,
            "text": "外面刮风了，有点儿冷，别穿裙子了，穿裤子吧。",
            "a": "C",
            "exp": "说话人建议别穿裙子改穿裤子，选项C说时间紧、必须9点前到公司，正好是催促快穿裤子的原因。"
          }
        ]
      },
      "p3": {
        "options": [
          "了解",
          "甜",
          "花",
          "快乐",
          "声音",
          "习惯"
        ],
        "items": [
          {
            "q": 51,
            "text": "中秋节晚上和家人一起看月亮，是中国人的（　）。",
            "a": "F",
            "exp": "中秋赏月是中国人代代相传的习俗，“习惯”指长期形成的行为方式，搭配最恰当。"
          },
          {
            "q": 52,
            "text": "我不（　）这件事情的经过，你问问其他人吧。",
            "a": "A",
            "exp": "“了解”指知道事情的情况，因为不了解事情的经过，所以请对方去问别人，符合语境。"
          },
          {
            "q": 53,
            "text": "咖啡太（　）了，下次不要放这么多糖。",
            "a": "B",
            "exp": "后面说下次别放这么多糖，说明咖啡太甜了，“甜”与放糖多形成因果关系。"
          },
          {
            "q": 54,
            "text": "山路高高低低，很不好走，我们（　）了4个多小时才到那儿。",
            "a": "C",
            "exp": "“花”表示时间、金钱的消耗，说走了四个多小时才到，“花了4个多小时”搭配自然。"
          },
          {
            "q": 55,
            "text": "白小姐祝我生日（　）的时候，我才发现自己忙得把生日也忘了。",
            "a": "D",
            "exp": "别人祝自己生日快乐，而自己忙得连生日也忘了，“生日快乐”是固定祝福语。"
          }
        ]
      },
      "p4": {
        "options": [
          "画",
          "包",
          "年级",
          "爱好",
          "简单",
          "热情"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：你（　）的这是猫？B：大熊猫！它在爬树。这也看不懂？",
            "a": "A",
            "exp": "B说“大熊猫，它在爬树”，说明是在看图，“你画的这是猫”即问图中画的是什么动物。"
          },
          {
            "q": 57,
            "text": "A：“新鲜”的“鲜”字怎么写？B：很（　），就是一个“鱼”和一个“羊”。",
            "a": "E",
            "exp": "“鲜”由“鱼”和“羊”两个字拼成，B说这样拼起来很容易，“简单”说明写法不难。"
          },
          {
            "q": 58,
            "text": "A：你感冒还没好，别忘记带药。B：放心吧，已经放进（　）里了。",
            "a": "B",
            "exp": "对方提醒带药，B说已经放进包里，“包”是随身携带、装东西的容器，符合语境。"
          },
          {
            "q": 59,
            "text": "A：你叫什么名字，是哪个班的学生？B：我叫牛向东，是三（　）二班的。",
            "a": "C",
            "exp": "“三年级二班”是常见的班级说法，“年级”指学习的年段，与班次搭配最自然。"
          },
          {
            "q": 60,
            "text": "A：几乎每个星期你都要去那个饭馆儿吃饭？B：是，那儿的菜还可以，服务员也很（　）。",
            "a": "F",
            "exp": "常去这家饭馆是因为菜不错、服务好，“热情”形容服务员态度好，让顾客感到满意。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "最近几年，这里的变化很大，车辆更多了，街道更干净了，天更蓝了，树更绿了。",
            "question": "这里最近几年怎么样？",
            "opts": [
              "环境变好了",
              "和过去相同",
              "变得更差了"
            ],
            "a": "A",
            "exp": "短文说车辆更多、街道更干净、天更蓝树更绿，说明环境变好了，所以选A“环境变好了”。"
          },
          {
            "q": 62,
            "passage": "14日，终于下雪了，大雪使校园变得更干净了。下课后，孩子们高兴地在校园里跑来跑去，头发上都是雪，一张张笑脸都红红的。",
            "question": "根据这段话，孩子们：",
            "opts": [
              "很聪明",
              "喜欢下雪天",
              "在教室里玩儿"
            ],
            "a": "B",
            "exp": "孩子们下课后在雪地里高兴地跑来跑去，头发上都是雪，说明他们喜欢下雪天，所以选B。"
          },
          {
            "q": 63,
            "passage": "汉字有多少个？这个问题谁也回答不清楚，《汉语大字典》里有五六万字，普通的小字典，一本也有八九千字。但人们常用的也就两千多个，认识这两千多个字，读书看报就没什么问题了。",
            "question": "这段话的主要意思是：",
            "opts": [
              "汉字很难写",
              "要学会查字典",
              "常用汉字不多"
            ],
            "a": "C",
            "exp": "短文强调人们常用的汉字只有两千多个，认识这些字就能读书看报，主要意思是常用汉字不多，所以选C。"
          },
          {
            "q": 64,
            "passage": "一些新老师刚开始讲课的时候，都很担心讲不好，学生不喜欢。但时间长了，多练习几次，就敢讲了。",
            "question": "有些新老师会担心什么？",
            "opts": [
              "灯坏了",
              "学生不喜欢",
              "黑板不好用"
            ],
            "a": "B",
            "exp": "短文说新老师担心讲不好、学生不喜欢，所以选B“学生不喜欢”，即担心学生不喜欢自己的课。"
          },
          {
            "q": 65,
            "passage": "一杯水，对一条小鱼来说，可能很有帮助，它可以在里面游得很好。但是，对一条大鱼来说，一杯水是没有什么帮助的，它需要的是一条小河。",
            "question": "对大鱼来说，一杯水：",
            "opts": [
              "没什么作用",
              "像小河一样",
              "比小河更重要"
            ],
            "a": "A",
            "exp": "短文用比喻说明一杯水对大鱼没有帮助，大鱼需要的是小河，所以对大鱼来说一杯水没什么作用，选A。"
          },
          {
            "q": 66,
            "passage": "“多么”和“极”不能同时出现在一个句子里，好，大家现在看黑板上的这几个句子，看看它们错在什么地方。",
            "question": "这些句子：",
            "opts": [
              "是错的",
              "都很长",
              "没写在中间"
            ],
            "a": "A",
            "exp": "老师说“多么”和“极”不能同时出现在一个句子里，让大家看黑板上的句子错在哪里，说明这些句子是错的，选A。"
          },
          {
            "q": 67,
            "passage": "我们脚上穿的是什么？是鞋。我们都喜欢穿漂亮的鞋，但是除了漂亮，我们在选择鞋的时候，更要注意它是不是穿着舒服。",
            "question": "这段话主要讲的是：",
            "opts": [
              "脚",
              "鞋",
              "帽子"
            ],
            "a": "B",
            "exp": "短文整段都在谈鞋，强调选鞋不仅要漂亮还要舒服，所以主要讲的是“鞋”，选B。"
          },
          {
            "q": 68,
            "passage": "这个地方的西瓜又大又甜，非常有名。每年6月28日，这里都会举行西瓜节。在西瓜节上，大家可以看到几十公斤的大西瓜。",
            "question": "这段话主要介绍了：",
            "opts": [
              "一个节日",
              "一个鸡蛋",
              "一个词语"
            ],
            "a": "A",
            "exp": "短文介绍每年6月28日举行西瓜节，还能看到几十公斤的大西瓜，主要介绍的是一个节日，选A。"
          },
          {
            "q": 69,
            "passage": "喂，你帮我看看，我的眼镜是不是在桌子上？什么？在椅子上？好，我知道了。",
            "question": "我在找什么东西？",
            "opts": [
              "椅子",
              "衬衫",
              "眼镜"
            ],
            "a": "C",
            "exp": "说话人请人帮忙找眼镜，问眼镜是否在桌子上，所以找的东西是眼镜，选C。"
          },
          {
            "q": 70,
            "passage": "鸟是一种很常见的动物，花园里、草地上，我们很容易发现它们。它们出现在哪里，哪里就有快乐。",
            "question": "这段话主要告诉我们，鸟：",
            "opts": [
              "不吃肉",
              "喜欢吃米",
              "带给人们快乐"
            ],
            "a": "C",
            "exp": "短文说鸟出现在哪里，哪里就有快乐，主要告诉我们鸟带给人们快乐，所以选C。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "真冷啊，把空调打开吧。",
          "我等个朋友，先给我来一杯咖啡吧，谢谢。",
          "如果不下雪，我要和同学们去爬山。",
          "报纸上有什么新闻吗？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "没问题，那些题都非常简单。"
        ],
        "items": [
          {
            "q": 41,
            "text": "上午的数学考试怎么样？",
            "a": "F",
            "exp": "对方问上午的数学考试怎么样，选项F说没问题、题目都很简单，表示考得很好，是对问题的回答。"
          },
          {
            "q": 42,
            "text": "先生，请问您喝点儿什么？",
            "a": "B",
            "exp": "服务员问喝什么，选项B回答先来一杯咖啡并礼貌道谢，符合点单的场景。"
          },
          {
            "q": 43,
            "text": "这个周末你打算做什么？",
            "a": "C",
            "exp": "对方问周末有什么计划，选项C说不下雪就和同学去爬山，是在说明自己的周末安排。"
          },
          {
            "q": 44,
            "text": "还没看呢，我洗完澡再看。",
            "a": "D",
            "exp": "答句“还没看呢”说明对方在问有没有看报纸或新闻，选项D问报纸上有什么新闻，正好对应。"
          },
          {
            "q": 45,
            "text": "你衣服穿得太少了，是不是感冒了？",
            "a": "A",
            "exp": "对方说你穿太少、是不是感冒了，选项A感叹真冷并要求开空调，说明是因为天气冷，前后呼应。"
          }
        ]
      },
      "p2": {
        "options": [
          "我记得你弟弟以前特别胖。",
          "祝您生日快乐！这是我送您的礼物。",
          "今天我来洗碗，你累一天了，去看电视吧。",
          "你不舒服吗？需不需要去房间休息一下？",
          "明天就要出国了？在外面注意身体，照顾好自己。"
        ],
        "items": [
          {
            "q": 46,
            "text": "没关系，我吃过药了。",
            "a": "D",
            "exp": "对方关心地问是不是不舒服、要不要去休息，答句说吃过药了没关系，是在回应对方的关心。"
          },
          {
            "q": 47,
            "text": "他从去年秋天开始锻炼，现在不到70公斤。",
            "a": "A",
            "exp": "答句说通过锻炼现在不到70公斤，说明他以前比较胖，选项A说记得他弟弟以前特别胖，形成前后对比。"
          },
          {
            "q": 48,
            "text": "好，我会给你打电话或者写电子邮件的。",
            "a": "E",
            "exp": "答句承诺会打电话或发邮件联系，选项E叮嘱出国后注意身体、照顾好自己，是分别前的嘱咐，话题一致。"
          },
          {
            "q": 49,
            "text": "不用，你把筷子和杯子拿过来就可以了。",
            "a": "C",
            "exp": "答句婉拒对方帮忙，只需拿筷子和杯子，选项C主动提出自己洗碗、让对方去看电视，对方拒绝，符合场景。"
          },
          {
            "q": 50,
            "text": "大家来吃蛋糕吧，这块儿大的给你。",
            "a": "B",
            "exp": "切蛋糕、分蛋糕通常与生日有关，选项B祝生日快乐并送上礼物，与吃蛋糕的场景一致。"
          }
        ]
      },
      "p3": {
        "options": [
          "聪明",
          "几乎",
          "解决",
          "历史",
          "声音",
          "关系"
        ],
        "items": [
          {
            "q": 51,
            "text": "这个城市有几百年的（　）了。",
            "a": "D",
            "exp": "“历史”指过去的经过、发展过程，说这个城市有几百年历史，“有……历史”是固定搭配。"
          },
          {
            "q": 52,
            "text": "儿子长大了，都快一米八了，（　）和他爸爸一样高了。",
            "a": "B",
            "exp": "“几乎”表示接近、差不多，儿子快一米八，差不多和爸爸一样高了，语气恰当。"
          },
          {
            "q": 53,
            "text": "小黄是我的好朋友，她和我的（　）一直很好。",
            "a": "F",
            "exp": "与好朋友相处，“我和她的关系一直很好”，“关系”指人与人之间的联系，搭配自然。"
          },
          {
            "q": 54,
            "text": "多吃鱼会使人变得更（　）。",
            "a": "A",
            "exp": "人们常说吃鱼补脑，“聪明”指智力好、脑子好使，符合多吃鱼使人更聪明的说法。"
          },
          {
            "q": 55,
            "text": "我们已经找到（　）问题的办法了。",
            "a": "C",
            "exp": "“解决问题”是常用搭配，找到解决问题的办法，表示问题已经有着落。"
          }
        ]
      },
      "p4": {
        "options": [
          "画",
          "简单",
          "选择",
          "爱好",
          "结婚",
          "马上"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：你（　）的这是猫？B：大熊猫！它在爬树。这也看不懂？",
            "a": "A",
            "exp": "B说“大熊猫，它在爬树”，说明是在看图，“你画的这是猫”即问图中画的是什么动物。"
          },
          {
            "q": 57,
            "text": "A：你低着头想什么呢？B：是工作还是读书，我不知道应该怎么（　）才好。",
            "a": "C",
            "exp": "B在工作和读书之间犹豫不定，“选择”表示在两者之间做决定，符合语境。"
          },
          {
            "q": 58,
            "text": "A：你渴不？我想去买点儿水。B：那你快一点儿，表演（　）就要开始了。",
            "a": "F",
            "exp": "“马上”表示时间很短，表演马上就要开始了，催促对方快去快回，符合语境。"
          },
          {
            "q": 59,
            "text": "A：相信我，这件事对公司不会有影响的。B：夏经理，你把事情想得太（　）了。",
            "a": "B",
            "exp": "A认为不会有影响，B认为他考虑得不够周全，“简单”指把问题想得太容易，语气恰当。"
          },
          {
            "q": 60,
            "text": "A：好久没看见白老师了，他不在这儿住了？B：是，他（　）以后就和妻子搬到学校去住了。",
            "a": "E",
            "exp": "“结婚以后”是常见说法，结婚后和妻子一起搬到学校去住，说明搬家与结婚有关。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "最近几年，这里的变化很大，车辆更多了，街道更干净了，天更蓝了，树更绿了。",
            "question": "这里最近几年怎么样？",
            "opts": [
              "环境变好了",
              "和过去相同",
              "变得更差了"
            ],
            "a": "A",
            "exp": "短文说车辆更多、街道更干净、天更蓝树更绿，说明环境变好了，所以选A“环境变好了”。"
          },
          {
            "q": 62,
            "passage": "人们根据季节的变化来决定喝什么茶。老人们经常说：“春天最好喝花茶，冬天最好喝红茶。”",
            "question": "这段话告诉我们：",
            "opts": [
              "茶有什么作用",
              "老人爱喝红茶",
              "不同季节喝不同的茶"
            ],
            "a": "C",
            "exp": "短文说人们根据季节变化决定喝什么茶，春天喝花茶、冬天喝红茶，主旨是不同季节喝不同的茶，所以选C。"
          },
          {
            "q": 63,
            "passage": "汉字有多少个？这个问题谁也回答不清楚，《汉语大字典》里有五六万字，普通的小字典，一本也有八九千字。但人们常用的也就两千多个，认识这两千多个字，读书看报就没什么问题了。",
            "question": "这段话的主要意思是：",
            "opts": [
              "汉字很难写",
              "要学会查字典",
              "常用汉字不多"
            ],
            "a": "C",
            "exp": "短文强调人们常用的汉字只有两千多个，认识这些字就能读书看报，主要意思是常用汉字不多，所以选C。"
          },
          {
            "q": 64,
            "passage": "为什么很多人愿意在网上买东西呢？因为非常方便，而且还便宜，如果对买到的东西有不满意的地方，也可以要求换新的。",
            "question": "在网上买东西：",
            "opts": [
              "比较贵",
              "花钱少",
              "花的时间多"
            ],
            "a": "B",
            "exp": "短文说网上买东西方便又便宜，不满意还能换，所以网上买东西花钱少，选B“花钱少”。"
          },
          {
            "q": 65,
            "passage": "儿子的作业总是做错，但昨天的一个也没错。老师问：“有人帮你写作业了？”“没有，我爸爸昨天没时间，我想我应该自己完成了。”",
            "question": "儿子昨天的作业为什么没错？",
            "opts": [
              "自己做的",
              "爸爸帮忙了",
              "认真复习了"
            ],
            "a": "A",
            "exp": "儿子说爸爸昨天没时间，所以自己完成了作业，说明昨天的作业是他自己做的，所以选A。"
          },
          {
            "q": 66,
            "passage": "晚上睡觉前喝一杯热牛奶，能帮助人们睡得更好。你有这个习惯吗？",
            "question": "“这个习惯”说的是：",
            "opts": [
              "帮助别人",
              "睡前刷牙",
              "睡前喝牛奶"
            ],
            "a": "C",
            "exp": "短文讲睡前喝一杯热牛奶能让人睡得更好，“这个习惯”指的就是睡前喝牛奶，所以选C。"
          },
          {
            "q": 67,
            "passage": "新年前一天，每个班都举行了新年晚会。学生们在晚会上唱歌、跳舞、做游戏，玩得高兴极了。",
            "question": "新年晚会：",
            "opts": [
              "已经结束了",
              "参加的人不多",
              "在1月1日举行"
            ],
            "a": "A",
            "exp": "短文用“举行了”描述新年晚会，说明晚会已经开过了，即已经结束，所以选A。"
          },
          {
            "q": 68,
            "passage": "我从小就喜欢旅游，但爸妈不让我一个人出去玩儿。我16岁生日那天，他们终于同意了。为了这次旅游，我买了一个小行李箱，还有地图。",
            "question": "爸妈同意什么了？",
            "opts": [
              "教我游泳",
              "我一个人去旅游",
              "跟我一起去旅游"
            ],
            "a": "B",
            "exp": "爸妈一直不让“我”一个人出去玩，16岁生日那天终于同意，买行李箱和地图说明是一个人准备去旅游，所以选B。"
          },
          {
            "q": 69,
            "passage": "喂，你帮我看看，我的眼镜是不是在桌子上？什么？在椅子上？好，我知道了。",
            "question": "我在找什么东西？",
            "opts": [
              "椅子",
              "衬衫",
              "眼镜"
            ],
            "a": "C",
            "exp": "说话人请人帮忙找眼镜，问眼镜是否在桌子上，所以找的东西是眼镜，选C。"
          },
          {
            "q": 70,
            "passage": "你想了解历史吗？这本书是一个很好的选择。书里讲了世界上很多国家的历史故事，相信爱好历史的人一定会对它有兴趣。",
            "question": "这本书主要介绍：",
            "opts": [
              "中国文化",
              "历史故事",
              "兴趣爱好"
            ],
            "a": "B",
            "exp": "短文说书里讲了很多国家的历史故事，所以这本书主要介绍历史故事，选B“历史故事”。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "睡觉前一定要记得刷牙。",
          "她是第一名，她高兴极了。",
          "那个照相机是你新买的？",
          "你拿这么多东西，还是坐电梯吧。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "叔叔，和我们一起去踢足球？有兴趣吗？"
        ],
        "items": [
          {
            "q": 41,
            "text": "刚才吃了块儿蛋糕，很好吃，就是太甜了。",
            "a": "A",
            "exp": "对方说自己刚吃了蛋糕，很好吃但太甜了，听话者便提醒吃甜食后睡前要记得刷牙，以保护牙齿，故选A。"
          },
          {
            "q": 42,
            "text": "好，你们先去玩儿，我打个电话就去找你们。",
            "a": "F",
            "exp": "有人邀叔叔一起去踢足球，叔叔答应并让对方先去，说自己打完电话就去，表示他同意一起去，故选F。"
          },
          {
            "q": 43,
            "text": "不是，是我跟一个同学借的。",
            "a": "C",
            "exp": "对方问照相机是不是新买的，回答者否认，说是跟同学借来的，故选C。"
          },
          {
            "q": 44,
            "text": "没关系，我就去二楼。",
            "a": "D",
            "exp": "对方劝他东西多就坐电梯，但他说不必，自己只去二楼，说明他要走楼梯，故选D。"
          },
          {
            "q": 45,
            "text": "万小姐的普通话水平怎么样？参加这次比赛了吗？",
            "a": "B",
            "exp": "对方问万小姐的普通话水平和参赛情况，回答说她得了第一名，高兴极了，说明她水平很好，故选B。"
          }
        ]
      },
      "p2": {
        "options": [
          "我准备晚上请客人去银行旁边的那个茶馆儿。",
          "我正打算去超市买点儿葡萄。",
          "这本历史书你看了吗？",
          "姐姐，这个词是什么意思啊？",
          "这个季节经常刮大风，慢慢你就习惯了。"
        ],
        "items": [
          {
            "q": 46,
            "text": "冰箱里没有水果了？",
            "a": "B",
            "exp": "问冰箱里是不是没有水果了，对方说正打算去超市买点葡萄，说明水果确实没了，故选B。"
          },
          {
            "q": 47,
            "text": "北方的秋天一般都是这样的。",
            "a": "E",
            "exp": "对方说北方的秋天就是这样，回答者安慰说这个季节常刮大风，慢慢就习惯了，故选E。"
          },
          {
            "q": 48,
            "text": "《上下五千年》？我三四年级的时候就读过了。",
            "a": "C",
            "exp": "《上下五千年》是一本历史书，对方问这本历史书你看了吗，回答者说三四年级就读过了，故选C。"
          },
          {
            "q": 49,
            "text": "那儿环境不错，我中午刚去过。",
            "a": "A",
            "exp": "对方说想晚上请客人去银行旁边的茶馆，回答者说那儿环境不错、中午刚去过，表示赞同去那儿，故选A。"
          },
          {
            "q": 50,
            "text": "我也不知道，你去查一下字典吧。",
            "a": "D",
            "exp": "对方问姐姐这个词是什么意思，回答者说自己也不知道，建议他去查字典，故选D。"
          }
        ]
      },
      "p3": {
        "options": [
          "迟到",
          "重要",
          "其他",
          "只",
          "声音",
          "厨房"
        ],
        "items": [
          {
            "q": 51,
            "text": "其实，做什么比怎么做更（　）。",
            "a": "B",
            "exp": "句意是“做什么比怎么做更重要”，强调事情本身比方式重要，空格应填“重要”，故选B。"
          },
          {
            "q": 52,
            "text": "我们办公室除了老马，（　）同事都结婚了。",
            "a": "C",
            "exp": "句意是“除了老马，其他同事都结婚了”，表示其余的同事，空格应填“其他”，故选C。"
          },
          {
            "q": 53,
            "text": "有些年轻人不爱做饭，所以他们的（　）总是很干净。",
            "a": "F",
            "exp": "年轻人不做饭，厨房用得少，所以总是很干净，空格应填“厨房”，故选F。"
          },
          {
            "q": 54,
            "text": "晚上6点50在电影院门口见，别（　）啊。",
            "a": "A",
            "exp": "约好时间地点见面，提醒对方不要迟到，空格应填“迟到”，故选A。"
          },
          {
            "q": 55,
            "text": "从我们学校坐公共汽车去火车站，（　）需要10分钟。",
            "a": "D",
            "exp": "句意是“坐公车去火车站只需要10分钟”，表示时间很短，空格应填“只”，故选D。"
          }
        ]
      },
      "p4": {
        "options": [
          "难",
          "愿意",
          "才",
          "爱好",
          "帽子",
          "遇到"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：这个（　）你多少钱买的？不便宜吧？B：不贵，100多块钱。",
            "a": "E",
            "exp": "问某个东西多少钱买的、贵不贵，回答说不贵、一百多块钱，空格应填“帽子”，故选E。"
          },
          {
            "q": 57,
            "text": "A：你明天看到刘阿姨，把这张票给她。B：她去外地了，下个星期（　）回来。",
            "a": "C",
            "exp": "刘阿姨去了外地，要下个星期才能回来，表示“到那时才……”，空格应填“才”，故选C。"
          },
          {
            "q": 58,
            "text": "A：怎么办呢？我以前没（　）过这样的问题。B：别着急，总会有解决办法的。",
            "a": "F",
            "exp": "以前没碰到过这样的问题，所以不知道怎么办，空格应填“遇到”，故选F。"
          },
          {
            "q": 59,
            "text": "A：你（　）住在大城市还是小城市？B：对我来说，哪儿都一样。",
            "a": "B",
            "exp": "问对方更愿意住大城市还是小城市，空格应填“愿意”，故选B。"
          },
          {
            "q": 60,
            "text": "A：这个题太（　）了，你做出来了吗？B：做出来了，我再检查一下。",
            "a": "A",
            "exp": "这道题太难了，所以问对方做出来没有，空格应填“难”，故选A。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "我们一年多没见面了，除了发现我变高以外，你没看出来有别的变化吗？",
            "question": "说话人有什么变化？",
            "opts": [
              "变黑了",
              "长高了",
              "头发变短了"
            ],
            "a": "B",
            "exp": "说话人说自己除了“变高”以外还有别的变化，对方已经发现他长高了，因此变化是长高了，故选B（opts[1]）。"
          },
          {
            "q": 62,
            "passage": "12岁生日的时候，妈妈送给我一个礼物，是一块儿手表。她告诉我，每天都有24个小时，但是对不同的孩子来说，时间又是不一样的。",
            "question": "妈妈希望我：",
            "opts": [
              "了解时间",
              "要关心别人",
              "要相信自己"
            ],
            "a": "A",
            "exp": "妈妈送手表并向“我”解释关于时间的话，目的是让“我”了解时间的意义，故选A（opts[0]）。"
          },
          {
            "q": 63,
            "passage": "我爸妈在这个房子里住了20多年了，一直没搬过家。房子虽然有些旧，但是打扫得很干净，而且房子前面还有一个小花园，我儿子和女儿都喜欢在那儿玩儿。",
            "question": "这个房子：",
            "opts": [
              "不是新的",
              "一共两层",
              "在公园附近"
            ],
            "a": "A",
            "exp": "短文说房子“有些旧”，住了20多年没搬过，说明房子不是新的，故选A（opts[0]）。"
          },
          {
            "q": 64,
            "passage": "我家离那个宾馆很近，坐地铁15分钟就到了。我打算周末去买一辆自行车，以后就可以骑车上班了。",
            "question": "我最可能在哪儿上班？",
            "opts": [
              "宾馆",
              "医院",
              "熊猫馆"
            ],
            "a": "A",
            "exp": "说话人说家离宾馆很近，并打算骑车去上班，可见工作地点就在宾馆附近，他最可能在宾馆上班，故选A（opts[0]）。"
          },
          {
            "q": 65,
            "passage": "小黄，明天上午我有个会，你帮我去机场接李先生吧。他明天8点的飞机，你早点儿去，早半个小时到，好不好？谢谢你了。",
            "question": "小黄明天最可能：",
            "opts": [
              "去旅游",
              "去机场接人",
              "要照顾病人"
            ],
            "a": "B",
            "exp": "说话人请小黄明天去机场接李先生，并提醒他早点到，所以小黄明天最可能是去机场接人，故选B（opts[1]）。"
          },
          {
            "q": 66,
            "passage": "我听他讲过，他和哥哥在很多地方都不太像，但是有一点是相同的，那就是他们都爱好画画儿。",
            "question": "他和哥哥：",
            "opts": [
              "都很聪明",
              "喜欢音乐",
              "有相同的兴趣"
            ],
            "a": "C",
            "exp": "短文说他和哥哥有一点相同：都爱好画画，说明他们有相同的兴趣，故选C（opts[2]）。"
          },
          {
            "q": 67,
            "passage": "前年买的那双运动鞋，到现在也没穿过几次，因为我很少出去锻炼。去年买的裤子，今年穿已经变得很“瘦”了。",
            "question": "根据这段话，我：",
            "opts": [
              "腿疼",
              "吃得太饱",
              "不经常运动"
            ],
            "a": "C",
            "exp": "运动鞋很少穿是因为“我”很少出去锻炼，说明“我”不经常运动，故选C（opts[2]）。"
          },
          {
            "q": 68,
            "passage": "我妻子是出租车司机，她开车十几年了，北京每一条街道的名字她几乎都知道。她很热情，工作很努力。",
            "question": "我妻子是个什么样的人？",
            "opts": [
              "比较矮",
              "喜欢安静",
              "很了解北京"
            ],
            "a": "C",
            "exp": "妻子开了十几年出租车，几乎知道北京每条街道的名字，说明她非常了解北京，故选C（opts[2]）。"
          },
          {
            "q": 69,
            "passage": "有三位老师下午来我们班听数学课，你们两个去902拿三张桌子和三把椅子，放到教室后面，下课后再搬回去。",
            "question": "他们为什么去拿桌椅？",
            "opts": [
              "校长来了",
              "有老师要来",
              "来了新的学生"
            ],
            "a": "B",
            "exp": "因为有三位老师下午要来班里听课，才需要拿桌椅给老师坐，所以他们拿桌椅是因为有老师要来，故选B（opts[1]）。"
          },
          {
            "q": 70,
            "passage": "你认识张云的女朋友吗？就是新来的白医生，她是我以前的邻居，和我妹妹是同学，这世界真小。",
            "question": "张云的女朋友：",
            "opts": [
              "不忙",
              "认识我妹妹",
              "在商店工作"
            ],
            "a": "B",
            "exp": "张云的女朋友是白医生，她是我妹妹的同学，说明她认识我妹妹，故选B（opts[1]）。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "谢谢你为我做这么好吃的鱼。",
          "好了吗？大家笑一笑，看我这儿。",
          "我今天穿这件蓝衬衫怎么样？",
          "这次比赛会给这个国家带来很多机会。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "我上课的时候做过这样的练习。"
        ],
        "items": [
          {
            "q": 41,
            "text": "别客气，还要米饭吗？厨房里还有。",
            "a": "A",
            "exp": "Người nói vừa cảm ơn vì món cá ngon (鱼), nên đáp lại bằng \"别客气\" (đừng khách sáo) và mời thêm cơm (米饭), vì còn cơm trong bếp (厨房)."
          },
          {
            "q": 42,
            "text": "我不这么想，我认为它的影响很小。",
            "a": "D",
            "exp": "Câu D nói cuộc thi (比赛) mang lại nhiều cơ hội (机会), nhưng câu trả lời bày tỏ sự phản đối: \"我不这么想\" (tôi không nghĩ vậy), vì cho rằng ảnh hưởng (影响) rất nhỏ."
          },
          {
            "q": 43,
            "text": "这个题你也会？你真聪明。",
            "a": "F",
            "exp": "Câu F \"我上课的时候做过这样的练习\" (tôi từng làm bài tập như thế này khi lên lớp) giải thích vì sao người kia cũng biết làm bài này (这个题)."
          },
          {
            "q": 44,
            "text": "不好，我觉得还是白色的好。",
            "a": "C",
            "exp": "Câu C hỏi về chiếc áo sơ mi xanh (蓝衬衫) mặc hôm nay, và câu trả lời cho rằng không đẹp bằng màu trắng (白色), nên \"还是白色的好\"."
          },
          {
            "q": 45,
            "text": "等等，您别站在右边，您站中间。",
            "a": "B",
            "exp": "Khi chụp ảnh (照相), người nói yêu cầu đừng đứng bên phải (右边) mà hãy đứng ở giữa (中间) và cười (笑一笑), nên chọn câu B."
          }
        ]
      },
      "p2": {
        "options": [
          "你的脚怎么样了？",
          "打扫完了？饿坏了吧？",
          "没关系，你第一次用这个相机，下次就好了。",
          "你怎么突然决定要离开？",
          "好的，马上就来。"
        ],
        "items": [
          {
            "q": 46,
            "text": "服务员，请给我再拿一个盘子和一杯果汁。",
            "a": "E",
            "exp": "Khách gọi nhân viên phục vụ (服务员) mang thêm một cái đĩa (盘子) và cốc nước ép (果汁), nên câu E \"好的，马上就来\" (vâng, đến ngay) là lời đáp phù hợp."
          },
          {
            "q": 47,
            "text": "奇怪，周末在动物园照的很多照片都不太清楚。",
            "a": "C",
            "exp": "Những bức ảnh (照片) chụp ở sở thú (动物园) không rõ, nên được an ủi: vì lần đầu dùng máy ảnh (相机) nên lần sau sẽ đẹp hơn."
          },
          {
            "q": 48,
            "text": "主要是因为那儿的环境更好。",
            "a": "D",
            "exp": "Câu trả lời giải thích lý do bỗng quyết định rời đi (离开): vì môi trường (环境) ở đó tốt hơn, nên khớp với câu hỏi D."
          },
          {
            "q": 49,
            "text": "我现在去给你做点儿面条儿。",
            "a": "B",
            "exp": "Vì bạn vừa dọn dẹp (打扫) xong chắc đang đói (饿坏), nên người nói đi làm chút mì (面条儿) cho bạn, khớp với câu B."
          },
          {
            "q": 50,
            "text": "谢谢您的关心，现在跑步没问题了。",
            "a": "A",
            "exp": "Người nói cảm ơn sự quan tâm (关心) và cho biết chân (脚) đã khỏe nên chạy bộ (跑步) không vấn đề, đáp lại câu hỏi \"你的脚怎么样了\"."
          }
        ]
      },
      "p3": {
        "options": [
          "重要",
          "还是",
          "空调",
          "习惯",
          "声音",
          "辆"
        ],
        "items": [
          {
            "q": 51,
            "text": "把（　）打开吧，房间里太热了。",
            "a": "C",
            "exp": "Đáp án C (空调): 空调 nghĩa là điều hòa, trong phòng quá nóng (太热) nên bật (打开) điều hòa lên."
          },
          {
            "q": 52,
            "text": "黄小姐是北方人吧？（　）我们这儿的天气吗？",
            "a": "D",
            "exp": "Đáp án D (习惯): 习惯 nghĩa là quen, hỏi cô Hoàng đã quen với thời tiết (天气) ở đây chưa."
          },
          {
            "q": 53,
            "text": "有些时候，发现问题比解决问题更（　）。",
            "a": "A",
            "exp": "Đáp án A (重要): 重要 nghĩa là quan trọng, ý nói đôi khi phát hiện vấn đề (发现问题) còn quan trọng hơn giải quyết vấn đề (解决问题)."
          },
          {
            "q": 54,
            "text": "你每天上班是坐地铁（　）坐公共汽车？",
            "a": "B",
            "exp": "Đáp án B (还是): 还是 dùng trong câu hỏi lựa chọn, hỏi đi làm bằng tàu điện ngầm (地铁) hay xe buýt (公共汽车)."
          },
          {
            "q": 55,
            "text": "阿姨，教室外面那（　）红色的自行车是您的吗？",
            "a": "F",
            "exp": "Đáp án F (辆): 辆 là lượng từ (đơn vị đếm) dùng cho xe, thích hợp để nói về chiếc xe đạp (自行车) màu đỏ."
          }
        ]
      },
      "p4": {
        "options": [
          "其他",
          "街道",
          "行李箱",
          "爱好",
          "帮忙",
          "双"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：那个（　）太小了，你换个大一点儿的吧。B：不用了，我一共就去两天，带的东西不多。",
            "a": "C",
            "exp": "Đáp án C (行李箱): 行李箱 nghĩa là va-li, cái va-li ấy quá nhỏ (太小) nhưng người B đi chỉ có hai ngày, mang đồ không nhiều (带的东西不多) nên vẫn dùng được."
          },
          {
            "q": 57,
            "text": "A：那位司机两点来拿，你必须在明天中午前做好。B：好的，还有（　）要求吗？",
            "a": "A",
            "exp": "Đáp án A (其他): 其他 nghĩa là khác, hỏi còn yêu cầu (要求) nào khác nữa không."
          },
          {
            "q": 58,
            "text": "A：这种鞋一个月能卖多少啊？B：好的时候一个月能卖两百多（　）。",
            "a": "F",
            "exp": "Đáp án F (双): 双 là lượng từ (đôi) dùng cho giày (鞋), nói một tháng bán được hơn hai trăm đôi."
          },
          {
            "q": 59,
            "text": "A：7年过去了，这条（　）几乎没什么变化。B：是，它还是那么干净，那么安静。",
            "a": "B",
            "exp": "Đáp án B (街道): 街道 nghĩa là đường phố, con phố ấy sau 7 năm vẫn sạch sẽ (干净) và yên tĩnh (安静), gần như không thay đổi."
          },
          {
            "q": 60,
            "text": "A：谢谢你（　），等我病好了，我请你吃饭。B：不客气，等你好了再说。",
            "a": "E",
            "exp": "Đáp án E (帮忙): 帮忙 nghĩa là giúp đỡ, cảm ơn vì đã giúp đỡ, hứa mời cơm khi khỏi bệnh (病好了)."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "老高家附近有一个花园，花园里有很多树，树上有小鸟，树下是鲜花、绿草。",
            "question": "说话人主要在介绍什么？",
            "opts": [
              "老高家",
              "花的颜色",
              "那个花园"
            ],
            "a": "C",
            "exp": "Đoạn văn giới thiệu về khu vườn (花园) gần nhà lão Cao: nhiều cây (树), chim (小鸟), hoa cỏ (鲜花、绿草), nên đáp án C. \"老高家\" và \"花的颜色\" chỉ là chi tiết phụ."
          },
          {
            "q": 62,
            "passage": "虽然已经是春天了，但是天气还是很冷。你这次去开会，小心感冒，多带点儿衣服，准备些药。",
            "question": "根据这段话，现在：",
            "opts": [
              "是秋天",
              "容易感冒",
              "应该多喝水"
            ],
            "a": "B",
            "exp": "Trời vẫn rất lạnh (冷) dù đã sang xuân, được dặn phòng cảm lạnh (感冒), mang thêm áo và thuốc, nên đáp án B. Không phải mùa thu (秋天) và cũng không nhắc đến chuyện uống nước."
          },
          {
            "q": 63,
            "passage": "这周日晚上公司要举行新年晚会，我想去买一条新裙子，因为我又胖了，现在已经65公斤了。我打算买条1000元以下的裙子。你明天有时间吗？和我一起去买好吗？",
            "question": "根据这段话，可以知道，我：",
            "opts": [
              "爱吃羊肉",
              "忘带铅笔了",
              "比以前更胖了"
            ],
            "a": "C",
            "exp": "Người nói lại tăng cân (又胖了), hiện nặng 65kg nên muốn mua váy mới, vì vậy \"比以前更胖了\" (béo hơn trước) là đúng, đáp án C."
          },
          {
            "q": 64,
            "passage": "我有两个好朋友，都姓刘，她们的生日是同一天，她们丈夫的生日也是同一天，你相信吗？",
            "question": "根据这段话，我的两个好朋友：",
            "opts": [
              "都很年轻",
              "生日相同",
              "长得很像"
            ],
            "a": "B",
            "exp": "Hai người bạn đều họ Lưu, sinh nhật (生日) cùng một ngày, kể cả chồng họ cũng vậy, nên \"生日相同\" (sinh nhật giống nhau) là đúng, đáp án B."
          },
          {
            "q": 65,
            "passage": "中国有句话叫“万事开头难”，意思是很多事情，在开始做的时候，你会觉得非常难，但是如果能把开头做好，后面的事情就简单多了。",
            "question": "做一件事情，最难的是：",
            "opts": [
              "开始的时候",
              "快完成的时候",
              "遇到问题的时候"
            ],
            "a": "A",
            "exp": "Câu tục ngữ \"万事开头难\" (vạn sự khởi đầu nan) nghĩa là mọi việc khó nhất lúc bắt đầu (开始的时候), làm tốt phần đầu thì sau đó dễ hơn, nên đáp án A."
          },
          {
            "q": 66,
            "passage": "天黑了，没有月亮，小云不敢一个人出去，所以叫我跟她一起去，没办法，我只能回来再洗裤子了。",
            "question": "根据这段话，可以知道小云：",
            "opts": [
              "要出去",
              "要去唱歌",
              "眼镜坏了"
            ],
            "a": "A",
            "exp": "Trời tối (天黑) không trăng nên Tiểu Vân không dám ra ngoài một mình, nhờ người nói đi cùng, tức là cô ấy muốn ra ngoài (要出去), đáp án A."
          },
          {
            "q": 67,
            "passage": "我女儿今年3岁了，经常问我们一些很奇怪的问题，有时候，我和她爸爸真的不知道应该怎么回答她。",
            "question": "我女儿：",
            "opts": [
              "害怕考试",
              "爱问问题",
              "头发很长"
            ],
            "a": "B",
            "exp": "Con gái 3 tuổi hay hỏi những câu hỏi kỳ lạ (很奇怪的问题) khiến bố mẹ khó trả lời, nên cô bé \"爱问问题\" (thích hỏi), đáp án B."
          },
          {
            "q": 68,
            "passage": "那里的人们为了表示热情，会在门口的桌子上放上一碗碗米酒，请客人先喝完三碗酒再进门。",
            "question": "请客人喝酒，是为了：",
            "opts": [
              "表示欢迎",
              "祝客人健康",
              "和客人说再见"
            ],
            "a": "A",
            "exp": "Mời khách uống rượu gạo (米酒) ba chén trước khi vào nhà là để tỏ lòng hiếu khách, chào đón (表示欢迎), nên đáp án A."
          },
          {
            "q": 69,
            "passage": "北京去年11月就下雪了，但是今年冬天都快过去一半了，而且南方也已经下过几次雪了，北京还没下。",
            "question": "北京今年冬季怎么样？",
            "opts": [
              "比南方热",
              "都是晴天",
              "还没下雪"
            ],
            "a": "C",
            "exp": "Mùa đông năm nay đã qua nửa, miền Nam (南方) đã có tuyết mấy lần nhưng Bắc Kinh (北京) vẫn chưa có tuyết (还没下雪), nên đáp án C."
          },
          {
            "q": 70,
            "passage": "汉语里，有些字有两个或者更多的读音，同一个字，用在不同地方时读音是不一样的，这些字被叫做“多音字”。",
            "question": "汉语里的“多音字”",
            "opts": [
              "有100多个",
              "没什么作用",
              "有不同的读音"
            ],
            "a": "C",
            "exp": "多音字 (đa âm tự) là chữ có hai hoặc nhiều cách đọc (读音) khác nhau tùy vào vị trí dùng, nên đáp án C. Đoạn văn không nói số lượng hay tác dụng của chúng."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "那儿的环境很好，天总是蓝的。",
          "你这次去中国打算玩儿多久？",
          "很简单，一定是你拿错了。",
          "奇怪，会议室的灯怎么没关？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "做蛋糕的时候，除了放鸡蛋外，还可以再放些牛奶。"
        ],
        "items": [
          {
            "q": 41,
            "text": "这个城市每条街道都很干净。",
            "a": "A",
            "exp": "Câu A \"那儿的环境很好，天总是蓝的\" (môi trường tốt, trời luôn trong xanh) phù hợp vì mỗi con phố (街道) đều sạch sẽ (干净)."
          },
          {
            "q": 42,
            "text": "回到家，才发现行李箱里有一件白衬衫不是我的。",
            "a": "C",
            "exp": "Câu C \"很简单，一定是你拿错了\" (chắc bạn cầm nhầm rồi) giải thích vì sao trong va-li (行李箱) lại có áo sơ mi trắng (白衬衫) không phải của mình."
          },
          {
            "q": 43,
            "text": "对不起，我以为你们一会儿还要回去。",
            "a": "D",
            "exp": "Câu D \"奇怪，会议室的灯怎么没关\" (sao đèn phòng họp lại không tắt) được giải thích bằng câu trả lời: vì tưởng mọi người lát nữa còn quay lại (回去)."
          },
          {
            "q": 44,
            "text": "我16号去，29号回来。",
            "a": "B",
            "exp": "Câu hỏi B \"你这次去中国打算玩儿多久\" (bạn định chơi ở Trung Quốc bao lâu) được trả lời bằng các mốc ngày đi 16 và về 29."
          },
          {
            "q": 45,
            "text": "我知道，奶奶以前教过我。",
            "a": "F",
            "exp": "Câu F \"做蛋糕的时候，除了放鸡蛋外，还可以再放些牛奶\" (làm bánh có thể thêm sữa ngoài trứng) khớp với câu trả lời: bà đã dạy tôi rồi (奶奶以前教过我)."
          }
        ]
      },
      "p2": {
        "options": [
          "我希望早点儿离开这个国家。",
          "没什么，就是告诉你外面天阴了，可能要下雪。",
          "我明白，这是个坏习惯。",
          "放心吧，我们跟邻居说了，他们很愿意帮忙。",
          "主要是他最近身体不好，影响了学习。"
        ],
        "items": [
          {
            "q": 46,
            "text": "你们去旅游，那小狗谁来照顾？",
            "a": "D",
            "exp": "Câu D \"放心吧，我们跟邻居说了，他们很愿意帮忙\" (yên tâm, hàng xóm đã nhận giúp) trả lời cho việc ai chăm sóc con chó nhỏ (小狗) khi đi du lịch."
          },
          {
            "q": 47,
            "text": "如果没什么变化，他应该已经上飞机了。",
            "a": "A",
            "exp": "Nói rằng anh ta chắc đã lên máy bay (上飞机) nếu không có gì thay đổi, phù hợp với câu A \"我希望早点儿离开这个国家\" (muốn sớm rời khỏi đất nước này)."
          },
          {
            "q": 48,
            "text": "晚上不要吃得太多，太饱，那样睡觉会不舒服。",
            "a": "C",
            "exp": "Ăn quá no (太饱) vào buổi tối khiến ngủ không ngon, được đáp bằng câu C \"我明白，这是个坏习惯\" (tôi hiểu, đó là thói quen xấu)."
          },
          {
            "q": 49,
            "text": "历史考试没考好，是题太难吗？",
            "a": "E",
            "exp": "Câu E \"主要是他最近身体不好，影响了学习\" (chủ yếu do sức khỏe gần đây không tốt ảnh hưởng việc học) giải thích vì sao bài thi lịch sử (历史考试) không tốt."
          },
          {
            "q": 50,
            "text": "我刚才洗澡去了，有事吗？",
            "a": "B",
            "exp": "Người nói vừa đi tắm (洗澡) nên không nghe thấy, câu B \"没什么，就是告诉你外面天阴了，可能要下雪\" (chỉ báo trời âm u, có thể có tuyết) là nội dung cần truyền đạt."
          }
        ]
      },
      "p3": {
        "options": [
          "终于",
          "水平",
          "面条儿",
          "结婚",
          "声音",
          "了解"
        ],
        "items": [
          {
            "q": 51,
            "text": "北方人爱吃（　），南方人喜欢吃米饭。",
            "a": "C",
            "exp": "Đáp án C (面条儿): 面条儿 nghĩa là mì, người phương Bắc (北方人) thích ăn mì còn người phương Nam (南方人) thích ăn cơm (米饭)."
          },
          {
            "q": 52,
            "text": "坐了7个小时的火车，我们（　）到北京了。",
            "a": "A",
            "exp": "Đáp án A (终于): 终于 nghĩa là cuối cùng, sau 7 tiếng ngồi tàu hỏa (火车) cuối cùng cũng đến Bắc Kinh (北京)."
          },
          {
            "q": 53,
            "text": "他们准备8月（　）。",
            "a": "D",
            "exp": "Đáp án D (结婚): 结婚 nghĩa là kết hôn, họ dự định kết hôn vào tháng 8."
          },
          {
            "q": 54,
            "text": "看了好几个节目，我觉得三年级二班的（　）最高。",
            "a": "B",
            "exp": "Đáp án B (水平): 水平 nghĩa là trình độ, xem nhiều tiết mục rồi nhận thấy trình độ của lớp 3/2 là cao nhất."
          },
          {
            "q": 55,
            "text": "你应该先（　）事情的经过，然后再想怎么解决问题。",
            "a": "F",
            "exp": "Đáp án F (了解): 了解 nghĩa là hiểu rõ/tìm hiểu, nên hiểu rõ diễn biến sự việc (事情的经过) trước rồi mới nghĩ cách giải quyết (解决问题)."
          }
        ]
      },
      "p4": {
        "options": [
          "结束",
          "方便",
          "层",
          "爱好",
          "当然",
          "一直"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：我到你们公司楼下了，你在几（　）？B：你等一下，我下来接你。",
            "a": "C",
            "exp": "Đáp án C (层): 层 là lượng từ chỉ tầng/lầu, hỏi bạn đang ở tầng mấy (几层) của tòa nhà công ty."
          },
          {
            "q": 57,
            "text": "A：船票我买到了，记得来送我。B：等表演一（　）我就去找你。",
            "a": "A",
            "exp": "Đáp án A (结束): 结束 nghĩa là kết thúc, khi buổi biểu diễn (表演) vừa kết thúc sẽ đi tìm bạn."
          },
          {
            "q": 58,
            "text": "A：我周末想去动物园，你知道怎么去吗？B：坐405路就能到。骑自行车去可能更（　）。",
            "a": "B",
            "exp": "Đáp án B (方便): 方便 nghĩa là thuận tiện, đạp xe (骑自行车) đi vườn thú (动物园) có thể thuận tiện hơn."
          },
          {
            "q": 59,
            "text": "A：火车站附近有宾馆吗？B：（　）有，我第一次来的时候就住前面那个宾馆。",
            "a": "E",
            "exp": "Đáp án E (当然): 当然 nghĩa là tất nhiên, khẳng định chắc chắn có khách sạn (宾馆) gần ga tàu (火车站), vì lần đầu đến đã ở đó."
          },
          {
            "q": 60,
            "text": "A：小马，你好久没来打篮球了。B：最近（　）忙着找工作，没时间玩儿。",
            "a": "F",
            "exp": "Đáp án F (一直): 一直 nghĩa là liên tục/mãi, gần đây cứ bận tìm việc (找工作) nên không có thời gian chơi."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "昨天，我送给妻子一个礼物，是一辆红色的汽车，她高兴极了。妻子的那辆旧车开了六七年了，早就应该换了。",
            "question": "妻子为什么很高兴？",
            "opts": [
              "搬新家了",
              "换了辆新车",
              "把旧车卖了"
            ],
            "a": "B",
            "exp": "Vợ rất vui (高兴极了) vì được tặng chiếc ô tô đỏ mới, chiếc xe cũ (旧车) đã dùng sáu bảy năm nay, nên \"换了辆新车\" (đổi xe mới) là đúng, đáp án B."
          },
          {
            "q": 62,
            "passage": "那个饭馆儿虽然不大，但是菜做得很好吃，而且不贵。很多新客人变成了老客人，老客人又带来更多新客人。",
            "question": "根据这段话，那家饭馆儿：",
            "opts": [
              "菜便宜",
              "很安静",
              "客人少"
            ],
            "a": "A",
            "exp": "Nhà hàng (饭馆儿) nhỏ nhưng đồ ăn ngon và không đắt (不贵), khách mới thành khách quen, khách quen lại dẫn thêm khách mới, nên \"菜便宜\" (món ăn rẻ) đúng, đáp án A."
          },
          {
            "q": 63,
            "passage": "为了变得瘦一些，妹妹决定每天早上去跑步。开始的几天，她每天能跑三千米，很努力。但是慢慢地，跑得越来越短，现在每天能跑500米就不错了。",
            "question": "根据这段话，妹妹现在：",
            "opts": [
              "变黑了",
              "不胖了",
              "天天跑步"
            ],
            "a": "C",
            "exp": "Em gái quyết định mỗi sáng chạy bộ (跑步) để gầy đi, giờ vẫn ngày nào cũng chạy, dù quãng đường ngắn dần, nên \"天天跑步\" (ngày nào cũng chạy) đúng, đáp án C."
          },
          {
            "q": 64,
            "passage": "她看那个电影的时候哭了，因为电影里的故事让她想起了很多年以前的一些事情，想起了很多以前的朋友。",
            "question": "关于这个电影，可以知道什么？",
            "opts": [
              "很有名",
              "让她很难过",
              "没什么意思"
            ],
            "a": "B",
            "exp": "Cô ấy khóc (哭了) khi xem phim vì câu chuyện trong phim gợi nhớ chuyện xưa và những người bạn cũ, nên bộ phim làm cô buồn (让她很难过), đáp án B."
          },
          {
            "q": 65,
            "passage": "小云，我给你介绍个男朋友吧？是我先生的弟弟，人很聪明，在银行工作，找机会你们见个面怎么样？",
            "question": "她想为小云：",
            "opts": [
              "办护照",
              "介绍工作",
              "介绍男朋友"
            ],
            "a": "C",
            "exp": "Người nói muốn giới thiệu bạn trai (男朋友) cho Tiểu Vân, đó là em trai chồng cô, làm ở ngân hàng (银行), nên \"介绍男朋友\" đúng, đáp án C."
          },
          {
            "q": 66,
            "passage": "这几天，爸爸的眼睛突然看不清楚东西了，这使我们很担心。明天是周日，我们打算带他去医院看看医生，检查一下。",
            "question": "爸爸怎么了？",
            "opts": [
              "眼镜坏了",
              "爱看新闻",
              "需要检查眼睛"
            ],
            "a": "C",
            "exp": "Mắt (眼睛) của bố đột nhiên nhìn không rõ, gia đình định đưa bố đi bệnh viện (医院) kiểm tra, nên \"需要检查眼睛\" (cần kiểm tra mắt) đúng, đáp án C."
          },
          {
            "q": 67,
            "passage": "虽然现在还是夏天，但最近一个星期几乎每天都在下雨，天气冷了不少，让人觉得像是秋天来了。",
            "question": "现在是什么季节？",
            "opts": [
              "春季",
              "夏季",
              "冬季"
            ],
            "a": "B",
            "exp": "Đoạn văn nói rõ \"现在还是夏天\" (giờ vẫn là mùa hạ/夏季) dù trời trở lạnh như thu, nên đáp án B (夏季)."
          },
          {
            "q": 68,
            "passage": "在家里，一般是我做饭，丈夫选择洗碗、打扫厨房。其实，我丈夫做饭做得很好吃，只是他不喜欢做饭。",
            "question": "关于丈夫，可以知道：",
            "opts": [
              "经常生气",
              "不愿意做饭",
              "做的饭很难吃"
            ],
            "a": "B",
            "exp": "Chồng nấu ăn rất ngon nhưng không thích nấu (不喜欢做饭), ở nhà chọn rửa bát (洗碗) và dọn bếp, nên \"不愿意做饭\" (không muốn nấu) đúng, đáp án B."
          },
          {
            "q": 69,
            "passage": "星期天我和儿子一起去爬山了。今天早上起床后，觉得腿特别疼。以后真的要注意多锻炼身体了。",
            "question": "他打算以后：",
            "opts": [
              "多运动",
              "踢足球",
              "要注意多休息"
            ],
            "a": "A",
            "exp": "Sau khi leo núi (爬山) chân đau nhức, người nói nhận ra cần chú ý rèn luyện thân thể (锻炼身体), tức là sau này \"多运动\" (vận động nhiều hơn), đáp án A."
          },
          {
            "q": 70,
            "passage": "现在是差一刻10点，我们10点半在世界公园门口见。外面刮风了，你出来的时候多穿件衣服。",
            "question": "他们准备：",
            "opts": [
              "去文化馆",
              "听音乐会",
              "在公园门口见面"
            ],
            "a": "C",
            "exp": "Đoạn văn hẹn \"10点半在世界公园门口见\" (gặp nhau trước cổng công viên thế giới), nên \"在公园门口见面\" (gặp ở cổng công viên) đúng, đáp án C."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "明白这个题是什么意思吗？要不要我给你讲讲？",
          "你今天去超市了？",
          "不客气，以后遇到什么事情就打我手机。",
          "是，因为里面的句子都非常简单，可以帮助我学习汉语。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "好，等一下，我把电脑关了。"
        ],
        "items": [
          {
            "q": 41,
            "text": "不用，我自己已经读得懂了。",
            "a": "A",
            "exp": "Câu trả lời \"不用，我自己已经读得懂了\" (không cần, tôi tự đọc hiểu được) đáp lại lời đề nghị của câu A: giải thích đề (这个题) cho tôi không?"
          },
          {
            "q": 42,
            "text": "你爱看这种故事书？",
            "a": "D",
            "exp": "Câu D \"是，因为里面的句子都非常简单，可以帮助我学习汉语\" (vâng, vì câu trong đó rất đơn giản, giúp học tiếng Hán) giải thích vì sao thích đọc sách truyện (故事书) này."
          },
          {
            "q": 43,
            "text": "天气这么热，我们去游泳吧？",
            "a": "F",
            "exp": "Câu F \"好，等一下，我把电脑关了\" (được, đợi tôi tắt máy tính đã) là lời đồng ý đi bơi (游泳) khi trời nóng (天气热)."
          },
          {
            "q": 44,
            "text": "是，我买了几斤苹果，还有葡萄，很甜，很新鲜。",
            "a": "B",
            "exp": "Câu trả lời xác nhận đã mua táo (苹果) và nho (葡萄) ở siêu thị, khớp với câu hỏi B \"你今天去超市了？\" (hôm nay bạn đi siêu thị à?)."
          },
          {
            "q": 45,
            "text": "谢谢您对我的关心和照顾。",
            "a": "C",
            "exp": "Người nói cảm ơn sự quan tâm, chăm sóc (关心和照顾), nên câu C \"不客气，以后遇到什么事情就打我手机\" (không có gì, có việc cứ gọi cho tôi) là lời đáp phù hợp."
          }
        ]
      },
      "p2": {
        "options": [
          "叔叔，我已经大学二年级了。",
          "头还疼吗？让我看看还发烧不。",
          "我记得把机票拿出来了，怎么找不到了呢？",
          "祝大家节日快乐！笑口常开！",
          "还是再看看地图吧。"
        ],
        "items": [
          {
            "q": 46,
            "text": "我已经吃药了，好多了。",
            "a": "B",
            "exp": "Câu B \"头还疼吗？让我看看还发烧不\" (đầu còn đau không, để tôi xem còn sốt không) phù hợp vì câu trả lời nói đã uống thuốc (吃药) và đỡ hơn."
          },
          {
            "q": 47,
            "text": "别着急，你看看是不是放行李箱里了。",
            "a": "C",
            "exp": "Câu C \"我记得把机票拿出来了，怎么找不到了呢？\" (tôi nhớ đã lấy vé máy bay ra, sao không thấy) được trả lời bằng \"别着急，你看看是不是放行李箱里了\" (đừng vội, xem có để trong va-li không)."
          },
          {
            "q": 48,
            "text": "上北下南，左西右东，我们应该向东走。",
            "a": "E",
            "exp": "Câu trả lời xác định phương hướng (上北下南，左西右东) và cho rằng nên đi về phía đông, nên câu E \"还是再看看地图吧\" (xem lại bản đồ) là phản hồi hợp lý."
          },
          {
            "q": 49,
            "text": "今天是2012年1月1日，又是新的一年了。",
            "a": "D",
            "exp": "Hôm nay là ngày đầu năm mới (新的一年), nên câu D \"祝大家节日快乐！笑口常开！\" (chúc mọi người vui vẻ, luôn tươi cười) là lời chúc ngày lễ phù hợp."
          },
          {
            "q": 50,
            "text": "我离开北京的时候你还不到一米，现在都长这么高了。",
            "a": "A",
            "exp": "Người nói gọi là \"叔叔\" (chú) và kể lúc rời Bắc Kinh cậu bé chưa đến một mét, giờ đã cao lớn, nên câu A \"叔叔，我已经大学二年级了\" (cháu đã năm hai đại học) là đáp lại phù hợp."
          }
        ]
      },
      "p3": {
        "options": [
          "终于",
          "打算",
          "突然",
          "完成",
          "声音",
          "成绩"
        ],
        "items": [
          {
            "q": 51,
            "text": "钱小姐花了一上午的时间，（　）把房间打扫干净了。",
            "a": "A",
            "exp": "Đáp án A (终于): 终于 nghĩa là cuối cùng, cô Tiền dành cả buổi sáng cuối cùng cũng dọn sạch phòng (房间打扫干净)."
          },
          {
            "q": 52,
            "text": "只有努力了，才会有好（　）。",
            "a": "F",
            "exp": "Đáp án F (成绩): 成绩 nghĩa là thành tích, chỉ khi nỗ lực (努力) mới có thành tích tốt."
          },
          {
            "q": 53,
            "text": "周末如果天气好，我（　）和朋友们去爬山。",
            "a": "B",
            "exp": "Đáp án B (打算): 打算 nghĩa là dự định, cuối tuần nếu thời tiết đẹp tôi dự định đi leo núi (爬山) với bạn bè."
          },
          {
            "q": 54,
            "text": "您放心，他们表示3月2号前一定可以（　）。",
            "a": "D",
            "exp": "Đáp án D (完成): 完成 nghĩa là hoàn thành, họ cam kết trước ngày 2/3 chắc chắn có thể hoàn thành."
          },
          {
            "q": 55,
            "text": "没想到他们这么快就结婚了，真是太（　）了。",
            "a": "C",
            "exp": "Đáp án C (突然): 突然 nghĩa là đột nhiên, không ngờ họ kết hôn (结婚) nhanh vậy nên thấy quá đột ngột."
          }
        ]
      },
      "p4": {
        "options": [
          "以前",
          "方便",
          "像",
          "爱好",
          "办公室",
          "渴"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：这是你妹妹的照片？你们长得一点儿也不（　）。B：大家都这么说。",
            "a": "C",
            "exp": "Đáp án C (像): 像 nghĩa là giống, hai chị em trông chẳng giống nhau chút nào (一点儿也不像)."
          },
          {
            "q": 57,
            "text": "A：口（　）了吧？喝一杯果汁吧。B：谢谢。",
            "a": "F",
            "exp": "Đáp án F (渴): 渴 nghĩa là khát, \"口渴\" là khát nước, nên mời uống một cốc nước ép (果汁)."
          },
          {
            "q": 58,
            "text": "A：请问，万经理的（　）在哪儿？B：前面左边第一个就是。",
            "a": "E",
            "exp": "Đáp án E (办公室): 办公室 nghĩa là văn phòng, hỏi văn phòng của giám đốc Vạn (万经理) ở đâu."
          },
          {
            "q": 59,
            "text": "A：你找到住的地方了吗？B：找到了，在火车站附近的一家宾馆，很（　）。",
            "a": "B",
            "exp": "Đáp án B (方便): 方便 nghĩa là thuận tiện, khách sạn (宾馆) gần ga tàu (火车站) nên rất thuận tiện."
          },
          {
            "q": 60,
            "text": "A：奇怪，你们两个（　）认识？B：是，她丈夫跟我是同事。",
            "a": "A",
            "exp": "Đáp án A (以前): 以前 nghĩa là trước đây, hỏi hai người quen nhau từ trước hay không, và được xác nhận là quen nhau trước."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "那儿的冬天特别冷，但是下雪的时候，孩子们还是会高兴地跑出去，在雪地里玩儿。",
            "question": "下雪的时候，孩子们：",
            "opts": [
              "很快乐",
              "很少出门",
              "有点儿害怕"
            ],
            "a": "A",
            "exp": "Mùa đông rất lạnh (冷) nhưng khi tuyết rơi (下雪) bọn trẻ vẫn vui vẻ chạy ra ngoài chơi, nên \"很快乐\" (rất vui) là đúng, đáp án A."
          },
          {
            "q": 62,
            "passage": "弟弟最大的爱好就是踢足球。如果你找不到他，那他一定是踢球去了。短短半年，他已经踢坏三双球鞋了。",
            "question": "关于弟弟，可以知道什么？",
            "opts": [
              "喜欢运动",
              "喜欢表演",
              "爱玩儿电子游戏"
            ],
            "a": "A",
            "exp": "Sở thích (爱好) lớn nhất của em trai là đá bóng (踢足球), nửa năm đá hỏng ba đôi giày, nên cậu \"喜欢运动\" (thích vận động), đáp án A."
          },
          {
            "q": 63,
            "passage": "他今年70多岁了，但是眼睛还很好。每天早饭后，他总是要一边喝茶，一边看看报纸上有什么重要新闻，这已经是他很多年的习惯了。",
            "question": "根据这段话，可以知道他：",
            "opts": [
              "喜欢喝啤酒",
              "腿脚不太好",
              "每天看报纸"
            ],
            "a": "C",
            "exp": "Sau bữa sáng (早饭后) ông thường vừa uống trà vừa xem báo (报纸) tìm tin quan trọng, thành thói quen nhiều năm, nên \"每天看报纸\" (ngày nào cũng đọc báo) đúng, đáp án C."
          },
          {
            "q": 64,
            "passage": "从小学到高中，他们一直是同班同学，关系非常好。但上大学后，他们去了不同的城市。从那以后，他们就很少有机会见面了。",
            "question": "高中时，他们两个人：",
            "opts": [
              "经常去旅游",
              "又矮又胖",
              "在一个班学习"
            ],
            "a": "C",
            "exp": "Từ tiểu học đến trung học (高中) họ luôn học cùng lớp (同班同学), nên lúc trung học họ \"在一个班学习\" (học chung một lớp), đáp án C."
          },
          {
            "q": 65,
            "passage": "中国人的姓名是姓在前，名在后。姓一般只有一个字，也有两个字的。有些人的名字很少见，需要查字典才能叫得出来。",
            "question": "关于中国人的名字，可以知道：",
            "opts": [
              "很难写",
              "姓在前面",
              "必须是三个字"
            ],
            "a": "B",
            "exp": "Tên người Trung Quốc đặt họ (姓) trước, tên (名) sau, nên \"姓在前面\" (họ đứng trước) là đúng, đáp án B. Không phải bắt buộc ba chữ hay khó viết."
          },
          {
            "q": 66,
            "passage": "过去，我很少看电影，但我先生很喜欢看。在他的影响下，我也爱上了看电影，了解了很多电影文化。",
            "question": "她现在：",
            "opts": [
              "爱看电影",
              "喜欢听音乐",
              "做事很认真"
            ],
            "a": "A",
            "exp": "Trước đây ít xem phim (看电影) nhưng dưới ảnh hưởng (影响) của chồng, giờ cô đã yêu thích xem phim, nên \"爱看电影\" (thích xem phim) đúng, đáp án A."
          },
          {
            "q": 67,
            "passage": "我去医院检查过了，医生说我身体健康，没发现什么问题。我看我就是锻炼得太少了，我决定从明天开始，早上早点儿起床去跑步。",
            "question": "他身体怎么样？",
            "opts": [
              "太瘦了",
              "没问题",
              "需要人照顾"
            ],
            "a": "B",
            "exp": "Bác sĩ nói sức khỏe (身体健康) tốt, không phát hiện vấn đề gì (没发现什么问题), nên cơ thể anh ấy \"没问题\" (không có vấn đề), đáp án B."
          },
          {
            "q": 68,
            "passage": "今天晚上有她们的节目，8点开始，8点40结束。你如果有兴趣，欢迎你和我们一起去看。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "他们迟到了",
              "今天没太阳",
              "晚上有节目"
            ],
            "a": "C",
            "exp": "Tối nay có tiết mục (节目) của họ, bắt đầu 8 giờ và kết thúc 8 giờ 40, nên \"晚上有节目\" (tối nay có tiết mục) đúng, đáp án C."
          },
          {
            "q": 69,
            "passage": "为了明天的考试，我复习了两个多星期，做了很多练习，我相信明天我一定可以考得很好。",
            "question": "根据这段话，说话人明天要：",
            "opts": [
              "搬家",
              "参加考试",
              "和别人一起写作业"
            ],
            "a": "B",
            "exp": "Người nói đã ôn tập (复习) hơn hai tuần và làm nhiều bài tập (练习) để chuẩn bị cho kỳ thi (考试) ngày mai, nên \"参加考试\" (dự thi) đúng, đáp án B."
          },
          {
            "q": 70,
            "passage": "哥哥去年在学校附近开了一家饭馆儿。每到节日，我都会去店里帮忙。因为那些天客人特别多，服务员忙不过来。",
            "question": "根据这段话，可以知道饭馆儿：",
            "opts": [
              "可以上网",
              "一共两层",
              "离学校很近"
            ],
            "a": "C",
            "exp": "Nhà hàng (饭馆儿) được anh trai mở gần trường học (学校附近), nên \"离学校很近\" (cách trường rất gần) đúng, đáp án C."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "对不起，我又忘了。",
          "这个蛋糕是谁买的？真好吃。",
          "你昨天去那家新开的商店了？",
          "你这次的数学成绩怎么样？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "因为这是一个了解中国文化的好机会。"
        ],
        "items": [
          {
            "q": 41,
            "text": "上午王阿姨来过，可能是她吧。",
            "a": "B",
            "exp": "Câu “Buổi sáng cô Vương đã đến, có lẽ là cô ấy” gợi ý cô Vương chính là người mang bánh đến, hợp với câu B “Chiếc bánh này ai mua vậy? Ngon thật” (这个蛋糕是谁买的？真好吃)."
          },
          {
            "q": 42,
            "text": "是，我在那儿买了件衬衫，给我爷爷买了条裤子。",
            "a": "C",
            "exp": "Câu trả lời xác nhận đã đến cửa hàng mới mở (那家新开的商店) và mua áo sơ mi (衬衫), quần (裤子), hợp với câu hỏi C."
          },
          {
            "q": 43,
            "text": "她在电子邮件中说，她欢迎大家都去。",
            "a": "F",
            "exp": "Email mời mọi người đến, hợp với câu F nêu lý do “đây là cơ hội tốt để hiểu về văn hóa Trung Quốc” (了解中国文化). Liên kết hơi lỏng, đây là cặp ghép chính thức."
          },
          {
            "q": 44,
            "text": "不好，78分，比上次还差。",
            "a": "D",
            "exp": "Câu trả lời nói về điểm số 78分 (kém hơn lần trước), hợp với câu hỏi D về thành tích môn toán (数学成绩)."
          },
          {
            "q": 45,
            "text": "以后记得关厨房里的灯。",
            "a": "A",
            "exp": "Lời nhắc “lần sau nhớ tắt đèn trong bếp” (关厨房里的灯) gợi ý người kia từng quên, nên đáp lại A “Xin lỗi, tôi lại quên rồi” (对不起，我又忘了)."
          }
        ]
      },
      "p2": {
        "options": [
          "别着急，再找找，是不是放行李箱了？",
          "那你快点儿给我讲吧。",
          "请问，洗手间是在前面吗？",
          "是，这是我丈夫送我的生日礼物。",
          "你知道你们年级有多少学生吗？"
        ],
        "items": [
          {
            "q": 46,
            "text": "你看见我的护照了吗？",
            "a": "A",
            "exp": "Câu hỏi về hộ chiếu (护照) tìm không thấy, đáp án A khuyên đừng vội, thử tìm trong va li (行李箱)."
          },
          {
            "q": 47,
            "text": "这个题其实很简单，为什么是5角钱？我一说你就明白了。",
            "a": "B",
            "exp": "Người nói bảo “nói xong cậu sẽ hiểu ngay” (我一说你就明白了), nên người kia giục B “vậy nhanh kể cho tôi nghe đi” (那你快点儿给我讲吧)."
          },
          {
            "q": 48,
            "text": "你换新手机了？",
            "a": "D",
            "exp": "Câu hỏi về điện thoại mới (新手机), đáp án D xác nhận đó là quà sinh nhật (生日礼物) chồng tặng."
          },
          {
            "q": 49,
            "text": "应该有200多个吧，一个班30多个，一共7个班。",
            "a": "E",
            "exp": "Câu trả lời tính số học sinh từ 7 lớp (7个班) ra hơn 200 người, hợp với câu hỏi E về số học sinh của khối (年级)."
          },
          {
            "q": 50,
            "text": "不是，在这边，您向左走，左边第一个门。",
            "a": "C",
            "exp": "Người kia hỏi nhà vệ sinh (洗手间) có phải ở phía trước không, câu trả lời C chỉ “bên trái, cửa đầu tiên bên trái” (左边第一个门)."
          }
        ]
      },
      "p3": {
        "options": [
          "国家",
          "短",
          "应该",
          "铅笔",
          "声音",
          "复习"
        ],
        "items": [
          {
            "q": 51,
            "text": "哥，你有红颜色的（　）吗？",
            "a": "D",
            "exp": "Đáp án D “铅笔” (bút chì): hỏi anh có bút chì màu đỏ (红颜色的) không."
          },
          {
            "q": 52,
            "text": "这双筷子怎么一个长，一个（　）。",
            "a": "B",
            "exp": "Đáp án B “短” (ngắn), trái nghĩa với 长 (dài): đôi đũa này một chiếc dài, một chiếc ngắn."
          },
          {
            "q": 53,
            "text": "我去过那个（　），但没去过那个城市。",
            "a": "A",
            "exp": "Đáp án A “国家” (đất nước): tôi đã đến nước đó nhưng chưa đến thành phố đó (城市)."
          },
          {
            "q": 54,
            "text": "下星期我要考试，所以这个周末我要在家（　）。",
            "a": "F",
            "exp": "Đáp án F “复习” (ôn tập): tuần sau có bài thi nên cuối tuần ở nhà ôn tập."
          },
          {
            "q": 55,
            "text": "没问题，那辆车（　）能坐8个人。",
            "a": "C",
            "exp": "Đáp án C “应该” (hẳn là, có thể): chiếc xe đó chắc chở được 8 người."
          }
        ]
      },
      "p4": {
        "options": [
          "练习",
          "重要",
          "担心",
          "爱好",
          "放心",
          "又"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：天阴了，别玩儿了，我们早点儿回去吧。B：别（　），今天不会有雨的。",
            "a": "C",
            "exp": "Đáp án C “担心” (lo lắng): “Đừng lo, hôm nay sẽ không mưa đâu” (今天不会有雨的)."
          },
          {
            "q": 57,
            "text": "A：小马说你发烧了，好点儿没？B：好多了，已经吃药了，您（　）吧。",
            "a": "E",
            "exp": "Đáp án E “放心” (yên tâm): đã đỡ nhiều rồi, uống thuốc xong, ngài cứ yên tâm."
          },
          {
            "q": 58,
            "text": "A：报纸上有什么新闻？B：我正在看，没发现什么（　）的新闻。",
            "a": "B",
            "exp": "Đáp án B “重要” (quan trọng): đang xem báo nhưng chưa thấy tin tức quan trọng (重要的新闻) nào."
          },
          {
            "q": 59,
            "text": "A：孩子怎么（　）哭了？是不是饿了？B：应该不是，她刚喝完牛奶。",
            "a": "F",
            "exp": "Đáp án F “又” (lại): sao đứa bé lại khóc? Từ “又” diễn tả việc lặp lại."
          },
          {
            "q": 60,
            "text": "A：黑板上的这几个（　）题要在下课前完成。B：好的，我知道了。",
            "a": "A",
            "exp": "Đáp án A “练习” (luyện tập): mấy bài luyện tập (练习题) trên bảng phải hoàn thành trước khi hết giờ."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "选择当然不是越多越好。有时候，选择太多，会使你忘记自己最想要的是什么，会使你更难做出好的决定。",
            "question": "选择太多会让人：",
            "opts": [
              "大笑",
              "很安静",
              "不知道该怎么办"
            ],
            "a": "C",
            "exp": "Đoạn văn nói lựa chọn quá nhiều khiến bạn quên mình muốn gì và khó đưa ra quyết định tốt, tức là C “không biết phải làm sao” (不知道该怎么办)."
          },
          {
            "q": 62,
            "passage": "元先生和我们住一个楼，而且都在7层。我们经常会在电梯里看见他，所以就认识了。现在，他和我们的关系不错。",
            "question": "他们和元先生：",
            "opts": [
              "是邻居",
              "都很认真",
              "经常一起去唱歌"
            ],
            "a": "A",
            "exp": "Ông Nguyên ở cùng tòa nhà, cùng tầng 7 với họ nên họ là hàng xóm (邻居) — đáp án A."
          },
          {
            "q": 63,
            "passage": "你还是去医院好好检查一下你的腿吧，明天是14号，我有时间，我和你一起去。不要觉得自己年轻就没关系，如果真有问题，会影响你以后的健康。你听懂了没有？",
            "question": "说话人希望明天：",
            "opts": [
              "去医院",
              "去看看鼻子",
              "能买到机票"
            ],
            "a": "A",
            "exp": "Người nói muốn ngày mai cùng đi bệnh viện kiểm tra chân (去医院好好检查一下) — đáp án A."
          },
          {
            "q": 64,
            "passage": "我妈让我今天晚上7点去和张叔叔的女儿见面。你7点半的时候一定要给我打个电话，我就可以早点儿离开了。",
            "question": "说话人是什么意思？",
            "opts": [
              "一定要帮我",
              "作用不大",
              "公司突然有事"
            ],
            "a": "B",
            "exp": "Người nói phải đi gặp con gái chú Trương theo yêu cầu của mẹ và nhờ gọi điện lúc 7h30 để sớm rời đi, cho thấy cuộc gặp này vai trò không lớn với anh ấy — đáp án B “作用不大”."
          },
          {
            "q": 65,
            "passage": "下午有客人来，你去买些水果，然后还要准备一些茶和咖啡，茶的话就准备这种的。",
            "question": "根据这段话，可以知道什么？",
            "opts": [
              "客人还没到",
              "苹果卖完了",
              "他们口渴了"
            ],
            "a": "A",
            "exp": "Chiều nay có khách đến nên phải đi mua trái cây và chuẩn bị trà, cà phê — nghĩa là khách chưa đến (客人还没到), đáp án A."
          },
          {
            "q": 66,
            "passage": "我喜欢北京的秋天，主要是因为这个季节的北京不冷也不热。如果北京的秋天能再长一点儿就更好了。",
            "question": "秋天的北京：",
            "opts": [
              "不刮风",
              "会下雪",
              "天气不错"
            ],
            "a": "C",
            "exp": "Mùa thu Bắc Kinh không lạnh không nóng (不冷也不热) nên thời tiết rất đẹp (天气不错) — đáp án C."
          },
          {
            "q": 67,
            "passage": "我奶奶今年67岁，她每天除了为我们准备早饭外，还要去爬山。她经常和我们说要想健康，就必须多运动。",
            "question": "根据这段话，奶奶：",
            "opts": [
              "经常旅游",
              "天天锻炼身体",
              "普通话水平低"
            ],
            "a": "B",
            "exp": "Bà mỗi ngày đều đi leo núi (爬山) và luôn nói muốn khỏe phải vận động nhiều — bà ngày nào cũng rèn luyện thân thể, đáp án B."
          },
          {
            "q": 68,
            "passage": "那个碗看上去不怎么样，但它已经有1000多年的历史了。去年，有人表示愿意出200万来买那个碗。",
            "question": "关于那个碗，可以知道什么？",
            "opts": [
              "不容易洗",
              "历史很久",
              "是去年冬天买的"
            ],
            "a": "A",
            "exp": "Đoạn văn nói chiếc bát trông bình thường nhưng đã có hơn 1000 năm lịch sử, năm ngoái có người trả 200 vạn để mua. Đáp án chính thức của đề là A “不容易洗” (khó rửa); đây là cặp ghép chính thức."
          },
          {
            "q": 69,
            "passage": "老包是东北人，爱吃米饭。他总是对办公室里的人说，哪个地方的大米也没有东北的大米好吃。",
            "question": "老包认为：",
            "opts": [
              "东北水很甜",
              "东北大米不新鲜",
              "东北大米最好吃"
            ],
            "a": "C",
            "exp": "Lão Bao bảo gạo vùng nào cũng không ngon bằng gạo Đông Bắc — nghĩa là gạo Đông Bắc ngon nhất (东北大米最好吃), đáp án C."
          },
          {
            "q": 70,
            "passage": "遇到自己想不明白的事情，或者出现自己不能解决的问题时，我们一般都会找人帮忙，希望别人能告诉自己一些好办法。",
            "question": "遇到问题时，我们希望别人：",
            "opts": [
              "别在旁边",
              "为我们想办法",
              "同意我们的决定"
            ],
            "a": "B",
            "exp": "Khi gặp vấn đề, người ta tìm người giúp và mong được bày cho cách hay — đáp án B “nghĩ cách giúp chúng ta” (为我们想办法)."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "你知道2014年世界杯在哪儿举行吗？",
          "一本汉语字典，但是我又忘记带了。",
          "那我介绍一下，她是我大学同学，姓白，叫白云。",
          "不可能吧，我刚才上网还很快。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "他很认真，也很努力，总是能很好地完成工作。"
        ],
        "items": [
          {
            "q": 41,
            "text": "你别问她，她不关心这个。",
            "a": "A",
            "exp": "Câu “Đừng hỏi cô ấy, cô ấy không quan tâm chuyện này” (她不关心这个) hợp với câu A hỏi về World Cup 2014 — chuyện cô ấy không quan tâm."
          },
          {
            "q": 42,
            "text": "你上星期说要送我礼物，是什么礼物？",
            "a": "B",
            "exp": "Câu hỏi món quà (礼物) là gì, đáp án B trả lời là một quyển từ điển tiếng Hán (汉语字典) nhưng quên mang."
          },
          {
            "q": 43,
            "text": "你们是第一次见面？",
            "a": "C",
            "exp": "Hỏi “các bạn gặp nhau lần đầu à?”, đáp án C giới thiệu người kia (我介绍一下), hợp với hoàn cảnh gặp mặt lần đầu."
          },
          {
            "q": 44,
            "text": "你的电脑怎么这么慢？",
            "a": "D",
            "exp": "Câu hỏi vì sao máy tính chậm (电脑慢), đáp án D phủ nhận vì lúc nãy lên mạng (上网) còn nhanh."
          },
          {
            "q": 45,
            "text": "小黄来学校的时间虽然不长，但是校长对他很满意。",
            "a": "F",
            "exp": "Vì Tiểu Hoàng làm việc nghiêm túc, chăm chỉ, luôn hoàn thành tốt công việc (完成工作) nên hiệu trưởng hài lòng — đáp án F."
          }
        ]
      },
      "p2": {
        "options": [
          "我有个同事以前是学画画儿的，画得很不错。",
          "这个季节就是这样，一会儿冷一会儿热。",
          "桌子上没有？是不是还放在行李箱里没拿出来？",
          "不用了，谢谢你，我坐出租车回去。",
          "这次我没能帮你什么忙，真是对不起。"
        ],
        "items": [
          {
            "q": 46,
            "text": "这几天天气变化真大。",
            "a": "B",
            "exp": "Câu nhận xét thời tiết thay đổi lớn, đáp án B giải thích mùa này lúc lạnh lúc nóng (一会儿冷一会儿热)."
          },
          {
            "q": 47,
            "text": "你看见我的照相机了吗？怎么找不到了？",
            "a": "C",
            "exp": "Tìm máy ảnh (照相机) không thấy, đáp án C gợi ý có thể còn để trong va li (行李箱) chưa lấy ra."
          },
          {
            "q": 48,
            "text": "你住的地方离这儿远吗？要不要我送你？",
            "a": "D",
            "exp": "Câu hỏi có cần đưa về không, đáp án D từ chối (不用了) vì sẽ đi taxi (出租车) về."
          },
          {
            "q": 49,
            "text": "如果你有兴趣，我可以让他教你。",
            "a": "A",
            "exp": "Người kia đề nghị để “anh ấy” dạy bạn, đáp án A giới thiệu đồng nghiệp học vẽ (画画儿) — chính là “anh ấy” đó."
          },
          {
            "q": 50,
            "text": "您太客气了，我再想想其他办法。",
            "a": "E",
            "exp": "Người kia xin lỗi vì không giúp được gì (没能帮你什么忙), đáp án E trấn an “bạn quá khách sáo” (您太客气了)."
          }
        ]
      },
      "p3": {
        "options": [
          "经过",
          "位",
          "世界",
          "特别",
          "声音",
          "别人"
        ],
        "items": [
          {
            "q": 51,
            "text": "她觉得这些选择题都（　）难。",
            "a": "D",
            "exp": "Đáp án D “特别” (rất, đặc biệt): cô ấy thấy các câu trắc nghiệm này đều rất khó."
          },
          {
            "q": 52,
            "text": "帮助（　）可以使我们更快乐。",
            "a": "F",
            "exp": "Đáp án F “别人” (người khác): giúp đỡ người khác khiến chúng ta vui hơn."
          },
          {
            "q": 53,
            "text": "（　）这件事情以后，他明白了很多东西。",
            "a": "A",
            "exp": "Đáp án A “经过” (trải qua): sau khi trải qua chuyện này, anh ấy hiểu ra nhiều điều."
          },
          {
            "q": 54,
            "text": "这是张（　）地图，中国在什么地方？",
            "a": "C",
            "exp": "Đáp án C “世界” (thế giới): đây là bản đồ thế giới, Trung Quốc ở đâu?"
          },
          {
            "q": 55,
            "text": "那（　）小姐来得太早了，银行还没开门呢。",
            "a": "B",
            "exp": "Đáp án B “位” (lượng từ lịch sự cho người): vị tiểu thư kia đến quá sớm."
          }
        ]
      },
      "p4": {
        "options": [
          "其实",
          "以为",
          "像",
          "爱好",
          "干净",
          "年级"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：春天了，街道两边的树都绿了。B：是，现在刮风也不（　）冬天那么冷了。",
            "a": "C",
            "exp": "Đáp án C “像” (giống như): bây giờ gió cũng không lạnh như mùa đông (不像冬天那么冷)."
          },
          {
            "q": 57,
            "text": "A：你对这个国家很了解吗？B：（　）不是很了解，我在那儿学习了半年就回国了。",
            "a": "A",
            "exp": "Đáp án A “其实” (thực ra): thực ra tôi cũng không hiểu lắm, học nửa năm đã về nước."
          },
          {
            "q": 58,
            "text": "A：终于把厨房打扫（　）了，累坏了吧？B：不累，但我要去洗个澡。",
            "a": "E",
            "exp": "Đáp án E “干净” (sạch sẽ): cuối cùng đã dọn sạch nhà bếp (打扫干净) rồi."
          },
          {
            "q": 59,
            "text": "A：您儿子真可爱，他多大了？B：8岁，今年秋天就上小学二（　）了。",
            "a": "F",
            "exp": "Đáp án F “年级” (khối lớp): mùa thu năm nay cháu lên lớp hai tiểu học (小学二年级)."
          },
          {
            "q": 60,
            "text": "A：我（　）你会买那条蓝色的裙子。B：我是喜欢蓝颜色的，但是那条有点儿短。",
            "a": "B",
            "exp": "Đáp án B “以为” (tưởng rằng): tôi tưởng bạn sẽ mua chiếc váy màu xanh (蓝裙子) đó."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "邻居说我的眼睛、鼻子长得像爸爸，但爸爸说我的眼睛和鼻子比他的漂亮多了。",
            "question": "邻居觉得他什么地方像爸爸？",
            "opts": [
              "头发",
              "眼睛",
              "耳朵"
            ],
            "a": "B",
            "exp": "Hàng xóm nói mắt và mũi (眼睛、鼻子) giống bố — trong ba đáp án, B “眼睛” (mắt) là đúng."
          },
          {
            "q": 62,
            "passage": "他是我们班的学生，爱读书，书包里总带着故事书，有时间他就看。",
            "question": "根据这段话，可以知道他：",
            "opts": [
              "爱看书",
              "喜欢唱歌",
              "聪明极了"
            ],
            "a": "A",
            "exp": "Anh ấy luôn mang sách truyện (故事书) trong cặp, có thời gian là đọc — rất thích đọc sách (爱看书), đáp án A."
          },
          {
            "q": 63,
            "passage": "去年，奶奶过生日的时候，我送她一个手机。开始她不同意买，说不需要，也不会用，但现在她认为手机的作用很大，已经离不开它了。",
            "question": "关于奶奶，可以知道什么？",
            "opts": [
              "喜欢用手机",
              "被叔叔接走了",
              "觉得手机很便宜"
            ],
            "a": "A",
            "exp": "Bà lúc đầu không muốn mua điện thoại nhưng giờ thấy tác dụng lớn, không rời được nó — bà thích dùng điện thoại (喜欢用手机), đáp án A."
          },
          {
            "q": 64,
            "passage": "刚参加工作，年轻人不要“眼高手低”，不要“小事不愿意做，大事又做不了”。应该认真做好每一件小事，一步一步慢慢来。",
            "question": "年轻人要注意：",
            "opts": [
              "认识更多朋友",
              "应先做好小事",
              "提高普通话水平"
            ],
            "a": "B",
            "exp": "Người trẻ không nên “mắt cao tay thấp”, nên làm tốt từng việc nhỏ rồi từ từ tiến lên — cần làm tốt việc nhỏ trước, đáp án B."
          },
          {
            "q": 65,
            "passage": "我早上一般6点起床，花15分钟洗脸刷牙，然后出去运动半个小时，回来后吃了早饭就去公司上班。",
            "question": "根据这段话，他习惯：",
            "opts": [
              "早上看电视",
              "早上洗头发",
              "在家吃早饭"
            ],
            "a": "C",
            "exp": "Sau khi tập thể dục về, anh ấy ăn sáng (吃早饭) xong mới đi làm — thói quen ăn sáng ở nhà, đáp án C."
          },
          {
            "q": 66,
            "passage": "学会写几个汉字很容易，但是要把字写漂亮很难。要想写一手好字，一定要多练习，时间久了，你的字就会变漂亮。",
            "question": "要把字写漂亮，必须：",
            "opts": [
              "用铅笔",
              "多练习",
              "多写句子"
            ],
            "a": "B",
            "exp": "Muốn viết chữ đẹp thì nhất định phải luyện tập nhiều (多练习) — đáp án B."
          },
          {
            "q": 67,
            "passage": "我是南方人，北方我只去过北京，我很想去其他城市看看。所以我决定今年夏天带女朋友去山西玩儿，我相信我们会玩儿得很高兴的。",
            "question": "他打算今年夏天：",
            "opts": [
              "去旅游",
              "办护照",
              "买辆自行车"
            ],
            "a": "A",
            "exp": "Anh ấy quyết định mùa hè này đưa bạn gái đi Sơn Tây chơi (去山西玩儿) — đi du lịch (去旅游), đáp án A."
          },
          {
            "q": 68,
            "passage": "这次比赛，他和第一名只差一点点，所以他有点儿生气，他觉得如果自己再努力一些就好了。",
            "question": "他认为自己应该：",
            "opts": [
              "说再见",
              "更努力些",
              "小心点儿"
            ],
            "a": "B",
            "exp": "Chỉ kém nhất một chút, anh ấy nghĩ nếu cố gắng hơn nữa (再努力一些) thì tốt — cần cố gắng hơn, đáp án B."
          },
          {
            "q": 69,
            "passage": "你看这儿，葡萄一公斤是9.50元，左边的9表示9元，中间的5表示5角，右边的0表示0分。",
            "question": "他们最可能在哪儿？",
            "opts": [
              "商店",
              "茶馆儿",
              "草地上"
            ],
            "a": "A",
            "exp": "Đang nói về giá nho (葡萄) tính theo ki-lô-gam 9,50 đồng — họ đang ở cửa hàng (商店), đáp án A."
          },
          {
            "q": 70,
            "passage": "那里的房子都一样，又矮又旧。但是过去有很多名人在那儿住过，所以如果有机会，欢迎你去那儿看看，可以帮你更好地了解那里的文化。",
            "question": "那里的房子：",
            "opts": [
              "不高",
              "很贵",
              "都不相同"
            ],
            "a": "A",
            "exp": "Những ngôi nhà ở đó đều thấp và cũ (又矮又旧) — nghĩa là không cao, đáp án A."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "不用了，没关系，马上就到宾馆了。",
          "不能，电脑还是有问题。",
          "去年夏天，我们学校举行运动会那天。",
          "你喜欢看什么电视节目？",
          "当然。我们先坐公共汽车，然后换地铁。",
          "那也不用着急，你先拿着用。"
        ],
        "items": [
          {
            "q": 41,
            "text": "现在可以上网了吗？",
            "a": "B",
            "exp": "Hỏi giờ đã lên mạng (上网) được chưa, đáp án B trả lời chưa được vì máy tính vẫn có vấn đề (电脑还是有问题)."
          },
          {
            "q": 42,
            "text": "有时候，我会看看新闻或者体育比赛。",
            "a": "D",
            "exp": "Câu hỏi D hỏi thích xem chương trình TV (电视节目) gì, đáp trả nói thỉnh thoảng xem tin tức hoặc thể thao (新闻或者体育比赛)."
          },
          {
            "q": 43,
            "text": "你这张照片照得真漂亮，什么时候照的？",
            "a": "C",
            "exp": "Hỏi tấm ảnh chụp khi nào, đáp án C trả lời vào ngày trường tổ chức hội thao (运动会) hè năm ngoái."
          },
          {
            "q": 44,
            "text": "中国有句话叫“有借有还，再借不难”。",
            "a": "F",
            "exp": "Câu tục ngữ “có vay có trả” (有借有还，再借不难) hợp với câu F “không cần vội, cậu cứ cầm dùng trước” (你先拿着用)."
          },
          {
            "q": 45,
            "text": "腿疼，是吗？那我们在这儿坐坐吧。",
            "a": "A",
            "exp": "Người kia đề nghị ngồi nghỉ vì đau chân (腿疼), đáp án A từ chối vì sắp đến khách sạn (宾馆) rồi."
          }
        ]
      },
      "p2": {
        "options": [
          "还可以，北方的冬天是很冷。",
          "坐出租车要40多分钟吧。",
          "给三年级学生上历史课。",
          "我记得以前这里都是些低矮的房子，没有这么多高楼。",
          "没有，我给他打了个电话，他同意我们的要求。"
        ],
        "items": [
          {
            "q": 46,
            "text": "怎么样？你中午见到马经理了吗？",
            "a": "E",
            "exp": "Hỏi trưa nay có gặp giám đốc Mã (马经理) không, đáp án E nói chưa gặp nhưng đã gọi điện và được đồng ý yêu cầu."
          },
          {
            "q": 47,
            "text": "这个城市变化真大啊！",
            "a": "D",
            "exp": "Khen thành phố thay đổi lớn, đáp án D so sánh trước đây toàn nhà thấp (低矮的房子), giờ nhiều nhà cao tầng (高楼)."
          },
          {
            "q": 48,
            "text": "他是我们学校的老师。",
            "a": "C",
            "exp": "Người kia giới thiệu ông ấy là giáo viên, đáp án C bổ sung ông ấy dạy lịch sử cho lớp ba (三年级)."
          },
          {
            "q": 49,
            "text": "火车站离那儿有多远？",
            "a": "B",
            "exp": "Hỏi ga tàu (火车站) cách đó bao xa, đáp án B ước lượng đi taxi hơn 40 phút."
          },
          {
            "q": 50,
            "text": "蓝小姐，不习惯我们这儿的天气吧？",
            "a": "A",
            "exp": "Hỏi cô Lam có quen thời tiết (天气) nơi đây không, đáp án A trả lời cũng được, mùa đông phương Bắc đúng là lạnh."
          }
        ]
      },
      "p3": {
        "options": [
          "班",
          "附近",
          "回答",
          "祝",
          "声音",
          "经常"
        ],
        "items": [
          {
            "q": 51,
            "text": "你去问问（　）哪儿有卖报纸的？",
            "a": "B",
            "exp": "Đáp án B “附近” (gần đây, xung quanh): cậu đi hỏi xem gần đây chỗ nào bán báo (报纸)?"
          },
          {
            "q": 52,
            "text": "在儿子（　）里，他应该是长得最高的。",
            "a": "A",
            "exp": "Đáp án A “班” (lớp học): trong lớp của thằng bé, chắc nó cao nhất."
          },
          {
            "q": 53,
            "text": "想好了？那请你来（　）这个问题。",
            "a": "C",
            "exp": "Đáp án C “回答” (trả lời): nghĩ kỹ rồi thì mời cậu trả lời câu hỏi này."
          },
          {
            "q": 54,
            "text": "小时候，爷爷（　）带我去公园玩儿。",
            "a": "F",
            "exp": "Đáp án F “经常” (thường xuyên): hồi nhỏ ông thường đưa tôi đi chơi công viên (公园)."
          },
          {
            "q": 55,
            "text": "送走鸡年，迎来狗年，我们（　）您在新的一年里身体健康，天天快乐！",
            "a": "D",
            "exp": "Đáp án D “祝” (chúc): chúng tôi chúc ngài năm mới sức khỏe dồi dào, vui vẻ mỗi ngày — lời chúc mừng năm mới."
          }
        ]
      },
      "p4": {
        "options": [
          "一定",
          "相信",
          "久",
          "爱好",
          "检查",
          "礼物"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：你对自己的成绩还满意吗？B：还可以，我（　）自己以后会跑得更快。",
            "a": "B",
            "exp": "Đáp án B “相信” (tin): tôi tin sau này mình sẽ chạy nhanh hơn."
          },
          {
            "q": 57,
            "text": "A：你打算6号回去？B：不（　），我7号下午有考试，7号上午回去也可以。",
            "a": "A",
            "exp": "Đáp án A “一定”: “不一定要” nghĩa là không nhất thiết ngày 6, vì ngày 7 mới thi nên có thể về sáng ngày 7."
          },
          {
            "q": 58,
            "text": "A：过两天是老爸的生日，你给他买（　）没？B：我准备给他买个新手机。",
            "a": "F",
            "exp": "Đáp án F “礼物” (quà): cậu mua quà cho bố chưa? — người kia định mua điện thoại mới làm quà."
          },
          {
            "q": 59,
            "text": "A：终于把数学作业做完了。B：要不要再（　）一下？",
            "a": "E",
            "exp": "Đáp án E “检查” (kiểm tra): có cần kiểm tra lại một lần nữa không?"
          },
          {
            "q": 60,
            "text": "A：哥，你怎么去了那么（　）？B：今天商店里人特别多。",
            "a": "C",
            "exp": "Đáp án C “久” (lâu): sao anh đi lâu thế? (你怎么去了那么久？) Vì hôm nay cửa hàng đông người (商店里人特别多) nên mất nhiều thời gian."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "我们那儿的环境还可以，很安静，街道也很干净，旁边还有一个公园，是个休息的好地方，欢迎你去那儿住一段时间。",
            "question": "他们那儿：",
            "opts": [
              "在南方",
              "热极了",
              "环境不错"
            ],
            "a": "C",
            "exp": "Đoạn văn miêu tả môi trường yên tĩnh (安静), đường phố sạch sẽ, cạnh công viên — môi trường tốt (环境不错), đáp án C."
          },
          {
            "q": 62,
            "passage": "我叫黄月，第一个字是我的姓。中国人的名字和你们国家的不太一样。中国人的姓是放在前面的，而且一般都是一个字。",
            "question": "根据这段话，中国人的名字：",
            "opts": [
              "姓在前面",
              "都比较长",
              "一共三个字"
            ],
            "a": "A",
            "exp": "Người Trung Quốc đặt họ (姓) ở trước tên và họ thường chỉ một chữ — đáp án A."
          },
          {
            "q": 63,
            "passage": "做蛋糕其实很简单，如果你有兴趣，我可以教你。你愿意学吗？愿意？那就要先准备面、牛奶、鸡蛋、糖和水果这些东西，然后就可以开始了。",
            "question": "说话人认为：",
            "opts": [
              "面条儿更贵",
              "米饭很便宜",
              "做蛋糕很容易"
            ],
            "a": "C",
            "exp": "Người nói bảo làm bánh (做蛋糕) thực ra rất đơn giản (很简单) và có thể dạy bạn — làm bánh rất dễ, đáp án C."
          },
          {
            "q": 64,
            "passage": "我刚才去河边走了走，那儿的草都绿了，树上的小鸟也变多了，又一个春天到了，这是我最喜欢的季节。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "秋天到了",
              "现在是春季",
              "花园的花开了"
            ],
            "a": "B",
            "exp": "Cỏ đã xanh, chim nhiều hơn, “lại một mùa xuân đến” (又一个春天到了) — hiện là mùa xuân (春季), đáp án B."
          },
          {
            "q": 65,
            "passage": "小谢是2011年9月来公司的，虽然时间短，但他做事一直很努力，很认真，同事们都很喜欢他。",
            "question": "根据这段话，可以知道小谢：",
            "opts": [
              "爱哭",
              "总是迟到",
              "参加工作了"
            ],
            "a": "C",
            "exp": "Tiểu Tạ đến công ty từ tháng 9 năm 2011, làm việc chăm chỉ — cậu ấy đã đi làm (参加工作), đáp án C."
          },
          {
            "q": 66,
            "passage": "现在，我们做个练习，请大家用黑板上的这几个词语写一段话，最少100字，下课前给我，听明白了吗？",
            "question": "说话人最可能是做什么的？",
            "opts": [
              "老师",
              "司机",
              "医生"
            ],
            "a": "A",
            "exp": "Ra bài tập yêu cầu dùng các từ trên bảng viết một đoạn văn và nộp trước khi hết giờ — người nói là giáo viên (老师), đáp án A."
          },
          {
            "q": 67,
            "passage": "那个药几乎没什么作用，她的牙还在疼。她昨天晚上没睡好觉，我担心会影响她的学习，所以我想带她去医院再检查一下。",
            "question": "说话人主要是什么意思？",
            "opts": [
              "感冒了",
              "没法选择",
              "要去看医生"
            ],
            "a": "C",
            "exp": "Thuốc gần như không có tác dụng, răng vẫn đau, định đưa cô ấy đi bệnh viện kiểm tra lại — cần đi khám bác sĩ (要去看医生), đáp án C."
          },
          {
            "q": 68,
            "passage": "虽然工作很忙，但我每天还是会找时间去锻炼身体，去跑步或者打篮球，周末，我还会和妻子去爬山。",
            "question": "关于说话人，可以知道什么？",
            "opts": [
              "非常热情",
              "经常运动",
              "很少生气"
            ],
            "a": "B",
            "exp": "Mỗi ngày đều dành thời gian chạy bộ hoặc chơi bóng rổ, cuối tuần leo núi (爬山) — thường xuyên vận động (经常运动), đáp án B."
          },
          {
            "q": 69,
            "passage": "女儿昨天告诉我，她决定和男朋友结婚了，我真为她高兴。第一次看见女儿的男朋友，我就觉得那是个聪明、可爱的年轻人，女儿和他在一起，我很放心。",
            "question": "女儿打算：",
            "opts": [
              "结婚",
              "学习表演",
              "去接孩子"
            ],
            "a": "A",
            "exp": "Con gái quyết định kết hôn (结婚) với bạn trai và bố mẹ rất yên tâm — đáp án A."
          },
          {
            "q": 70,
            "passage": "你点的菜太少。服务员，把菜单拿过来，我们再点两个菜。我们今天来条鱼吧，这家饭馆儿的鱼不错。",
            "question": "那家饭馆儿：",
            "opts": [
              "鱼很好吃",
              "没有羊肉",
              "菜不新鲜"
            ],
            "a": "A",
            "exp": "Gọi thêm hai món và gọi một con cá vì món cá của quán này ngon (这家饭馆儿的鱼不错) — quán này cá rất ngon, đáp án A."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "小关人很好，对谁都很热情。",
          "没想到才半年的时间，你的汉语水平就提高了这么多！",
          "最东边那个。但是他上午出去开会了，您下午再来？",
          "地图上的字太小了，我看不清楚。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "忘记开空调了，你去开一下。"
        ],
        "items": [
          {
            "q": 41,
            "text": "97分？你这次考试成绩不错啊。",
            "a": "B",
            "exp": "Khen điểm cao 97分, đáp án B ngạc nhiên vì trình độ tiếng Hán (汉语水平) tiến bộ nhiều chỉ trong nửa năm."
          },
          {
            "q": 42,
            "text": "奶奶，您等一下，我去给您拿眼镜。",
            "a": "D",
            "exp": "Bà bảo chữ trên bản đồ (地图) nhỏ quá nhìn không rõ, cháu đi lấy kính (眼镜) cho bà — đáp án D."
          },
          {
            "q": 43,
            "text": "请问，张校长的办公室是哪一间？",
            "a": "C",
            "exp": "Hỏi phòng làm việc của hiệu trưởng Trương (办公室) ở đâu, đáp án C chỉ phòng tận phía đông (最东边) và nói ông ấy đi họp."
          },
          {
            "q": 44,
            "text": "房间里怎么这么热？",
            "a": "F",
            "exp": "Than trong phòng nóng quá, đáp án F bảo quên bật điều hòa (空调) rồi."
          },
          {
            "q": 45,
            "text": "我刚来这里时，他帮了我不少忙。",
            "a": "A",
            "exp": "Người kia nói anh ấy từng giúp mình nhiều việc (帮了不少忙), đáp án A khen Tiểu Quan tốt bụng, nhiệt tình với mọi người."
          }
        ]
      },
      "p2": {
        "options": [
          "你先帮我把筷子和碗放到桌子上。",
          "喂，外面阴天了，我担心会下雨。",
          "这位是我的同学张乐，他现在是市第一医院的医生。",
          "王阿姨和我妈妈爱好相同。",
          "儿子去年的裤子和衬衫今年就不能穿了。"
        ],
        "items": [
          {
            "q": 46,
            "text": "小孩子长得真快！",
            "a": "E",
            "exp": "Khen trẻ con lớn nhanh (长得真快), đáp án E minh họa quần áo năm ngoái của thằng bé năm nay không mặc vừa nữa."
          },
          {
            "q": 47,
            "text": "除了爱唱歌外，她们还很喜欢跳舞。",
            "a": "D",
            "exp": "Câu nói về sở thích (爱好) hát và nhảy, đáp án D nói hai người cùng sở thích — hợp ý."
          },
          {
            "q": 48,
            "text": "我来介绍一下，这是我妻子小蓝。",
            "a": "C",
            "exp": "Người nói giới thiệu vợ mình, đáp án C cũng giới thiệu bạn học của mình (同学) — cùng hành động giới thiệu."
          },
          {
            "q": 49,
            "text": "饿了吧？今天不吃米饭，吃面条儿。",
            "a": "A",
            "exp": "Hôm nay ăn mì (面条儿) thay cơm, đáp án A nhờ bày đũa và bát (筷子和碗) lên bàn."
          },
          {
            "q": 50,
            "text": "你出门记得带把伞。",
            "a": "B",
            "exp": "Nhắc mang ô (带把伞) khi ra ngoài, đáp án B nói trời âm u (阴天), lo sẽ mưa (下雨)."
          }
        ]
      },
      "p3": {
        "options": [
          "糖",
          "安静",
          "出现",
          "结束",
          "声音",
          "节日"
        ],
        "items": [
          {
            "q": 51,
            "text": "牛奶太甜了，（　）放多了吧？",
            "a": "A",
            "exp": "Đáp án A “糖” (đường): sữa ngọt quá, chắc đường cho nhiều quá rồi."
          },
          {
            "q": 52,
            "text": "太阳和月亮会在同一个时候（　）吗？",
            "a": "C",
            "exp": "Đáp án C “出现” (xuất hiện): mặt trời (太阳) và mặt trăng (月亮) có xuất hiện cùng lúc không?"
          },
          {
            "q": 53,
            "text": "表演几点（　）？我去接你。",
            "a": "D",
            "exp": "Đáp án D “结束” (kết thúc): buổi biểu diễn (表演) mấy giờ kết thúc? Tôi đi đón bạn."
          },
          {
            "q": 54,
            "text": "祝您（　）快乐，这是我们送您的礼物，希望您喜欢。",
            "a": "F",
            "exp": "Đáp án F “节日” (ngày lễ): chúc ngài lễ vui vẻ, đây là quà (礼物) chúng tôi tặng."
          },
          {
            "q": 55,
            "text": "山上很（　），早上起床的时候还能听见鸟的叫声。",
            "a": "B",
            "exp": "Đáp án B “安静” (yên tĩnh): trên núi rất yên tĩnh, sáng dậy còn nghe tiếng chim hót (鸟的叫声)."
          }
        ]
      },
      "p4": {
        "options": [
          "参加",
          "米",
          "坏",
          "爱好",
          "洗手间",
          "当然"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：你怎么这么晚才到？B：对不起，我的自行车半路突然（　）了。",
            "a": "C",
            "exp": "Đáp án C “坏” (hỏng): xe đạp (自行车) giữa đường đột nhiên hỏng."
          },
          {
            "q": 57,
            "text": "A：下周我要去旅游，能借你的照相机用一下吗？B：（　）可以，你打算去哪儿？",
            "a": "F",
            "exp": "Đáp án F “当然” (tất nhiên): tất nhiên là được, cậu định đi đâu?"
          },
          {
            "q": 58,
            "text": "A：你上午没出去？B：没出去，我把厨房和（　）都打扫了一下。",
            "a": "E",
            "exp": "Đáp án E “洗手间” (nhà vệ sinh): tôi đã dọn dẹp nhà bếp (厨房) và nhà vệ sinh."
          },
          {
            "q": 59,
            "text": "A：你是今年刚（　）工作的？B：不是，我是去年秋天开始工作的，到现在都一年多了。",
            "a": "A",
            "exp": "Đáp án A “参加”: “参加工作” nghĩa là bắt đầu đi làm — cậu mới đi làm năm nay à?"
          },
          {
            "q": 60,
            "text": "A：你好，这儿附近有银行吗？B：你从这儿向西走1000（　），应该有一家。",
            "a": "B",
            "exp": "Đáp án B “米” (mét): đi về hướng tây 1000 mét (1000米), chắc có một ngân hàng."
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "我们把这张桌子搬到那边去吧，放在中间会影响大家走路的。",
            "question": "他们要把桌子：",
            "opts": [
              "放中间",
              "搬到一边",
              "还给别人"
            ],
            "a": "B",
            "exp": "Đề xuất chuyển cái bàn (桌子) sang phía kia vì để giữa vướng lối đi — chuyển sang một bên, đáp án B."
          },
          {
            "q": 62,
            "passage": "经理，我觉得服务员还是有点儿少，现在来店里吃饭的客人越来越多，特别是中午，大家经常忙不过来，您看要不要多找几个人？",
            "question": "说话人是什么意思？",
            "opts": [
              "服务员少",
              "工作不累",
              "经理要求低"
            ],
            "a": "A",
            "exp": "Nhân viên phục vụ (服务员) hơi ít, khách ngày càng đông, nhất là buổi trưa không kịp phục vụ — nhân viên phục vụ ít, đáp án A."
          },
          {
            "q": 63,
            "passage": "中国有句话叫“不怕慢，只怕站”。意思是说不怕走得慢，就怕站着不走。走得再慢，一步一步地走下去，也能走到想去的地方。",
            "question": "这段话主要想告诉我们：",
            "opts": [
              "要一直努力",
              "要敢想敢做",
              "别害怕变化"
            ],
            "a": "A",
            "exp": "“Không sợ chậm, chỉ sợ đứng yên” — chậm nhưng cứ bước đi vẫn tới đích — phải luôn cố gắng không ngừng, đáp án A."
          },
          {
            "q": 64,
            "passage": "如果别人告诉你有件衣服很好看，你可能不会相信，但如果是你自己看到的，那就不一样了，因为和耳朵比，人们更愿意相信自己的眼睛。",
            "question": "根据这段话，人们更愿意相信：",
            "opts": [
              "老师讲的",
              "老人说的",
              "自己看到的"
            ],
            "a": "C",
            "exp": "So với nghe bằng tai, người ta tin mắt mình hơn (相信自己的眼睛) — tin những gì mình nhìn thấy, đáp án C."
          },
          {
            "q": 65,
            "passage": "我哥哥是出租车司机，这么多年来，他的车几乎到过这个城市的每个地方，所以他对这个城市非常了解。",
            "question": "他哥哥：",
            "opts": [
              "要离开那儿",
              "总是骑车上班",
              "很了解这个城市"
            ],
            "a": "C",
            "exp": "Anh trai là tài xế taxi (出租车司机), xe gần như đi khắp mọi nơi trong thành phố — anh ấy rất hiểu thành phố này (非常了解), đáp án C."
          },
          {
            "q": 66,
            "passage": "以前，这个图书馆的右边都是些又矮又旧的房子，没想到现在变成了一个大花园，有花有草，漂亮极了。",
            "question": "过去，图书馆的右边是：",
            "opts": [
              "花园",
              "老房子",
              "水果店"
            ],
            "a": "B",
            "exp": "Trước đây bên phải thư viện (图书馆) toàn nhà thấp và cũ (又矮又旧的房子) — là nhà cũ, đáp án B."
          },
          {
            "q": 67,
            "passage": "“张”是我的姓，“雪”才是我的名字。中国人习惯把姓放在前面，把名字放在后面，这跟你们国家不一样。",
            "question": "中国人的名字：",
            "opts": [
              "很简单",
              "一般很长",
              "姓在最前面"
            ],
            "a": "C",
            "exp": "Người Trung Quốc quen đặt họ (姓) ở trước, tên ở sau — họ nằm ở vị trí đầu, đáp án C."
          },
          {
            "q": 68,
            "passage": "经过这件事情，我们两个的关系变得比以前更好了，现在我们经常下班后一起吃饭、看电影。",
            "question": "他们两个：",
            "opts": [
              "很少见面",
              "关系更好了",
              "结婚很久了"
            ],
            "a": "B",
            "exp": "Sau sự việc đó, quan hệ hai người tốt hơn trước (关系变得更好了), hay cùng ăn tối xem phim — quan hệ tốt hơn, đáp án B."
          },
          {
            "q": 69,
            "passage": "有些女孩儿认为越瘦越好看，为了能变瘦，有时候饭也不吃，这样做对身体很不好。其实，健康才是最重要的。",
            "question": "这段话告诉我们：",
            "opts": [
              "不要吃得太饱",
              "健康比漂亮重要",
              "不要为小事生气"
            ],
            "a": "B",
            "exp": "Nhịn ăn để giảm cân hại sức khỏe; sức khỏe (健康) mới là quan trọng nhất — sức khỏe quan trọng hơn vẻ đẹp, đáp án B."
          },
          {
            "q": 70,
            "passage": "我们常说做决定前一定要认真想想，但有时你会发现机会不等人，所以想清楚后就必须马上去做，不要以为机会会一直在那儿等着你。",
            "question": "根据这段话，我们应该：",
            "opts": [
              "关心别人",
              "认识更多朋友",
              "想好了就去做"
            ],
            "a": "C",
            "exp": "Cơ hội không chờ người, nghĩ kỹ rồi phải làm ngay — nghĩ kỹ rồi hãy làm (想好了就去做), đáp án C."
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "老王的儿子今年才15岁，就长到一米八五了。",
          "好，我看完这个节目就去睡。",
          "这次汉语考试，张东考得比上次好很多。",
          "你看见我的铅笔了吗？刚才做练习题我还用了呢。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "喂，路上车比较多，我可能晚点儿才能到机场。"
        ],
        "items": [
          {
            "q": 41,
            "text": "报纸下面你找了没有？",
            "a": "D",
            "exp": "“报纸下面”是在问有没有找到铅笔，D项“你看见我的铅笔了吗”正好提到铅笔，说的是找铅笔这件事，语义相配。"
          },
          {
            "q": 42,
            "text": "早点儿休息吧，都10点半了。",
            "a": "B",
            "exp": "对方劝早点儿休息（早点儿休息吧），B项“好，我看完这个节目就去睡”表示答应去看完电视节目就睡觉，正相对应。"
          },
          {
            "q": 43,
            "text": "他的学习成绩有了很大提高。",
            "a": "C",
            "exp": "这句话说成绩提高了，C项“这次汉语考试，张东考得比上次好很多”正好说明考试比上次好，也就是成绩提高，语义相配。"
          },
          {
            "q": 44,
            "text": "我记得他小时候个子很矮，没想到现在这么高了。",
            "a": "A",
            "exp": "话里说小时候个子矮、现在很高，A项“老王的儿子今年才15岁，就长到一米八五了”说明人长得很高，正好对应。"
          },
          {
            "q": 45,
            "text": "没关系，我还在等着拿行李呢。",
            "a": "F",
            "exp": "“没关系”是对对方可能晚到表示不在意，F项“路上车比较多，我可能晚点儿才能到机场”说的是路上堵车会晚到，正相对应。"
          }
        ]
      },
      "p2": {
        "options": [
          "过去那么久了，你不说我都想不起来了。",
          "这种鸟我还是第一次见。",
          "不要总想着让别人来帮你。",
          "他在医院住了三个月，医生说星期日就可以出院了。",
          "我穿这件白衬衫怎么样？"
        ],
        "items": [
          {
            "q": 46,
            "text": "它的嘴长得真奇怪。",
            "a": "B",
            "exp": "“它的嘴长得真奇怪”是在谈论一只鸟，B项“这种鸟我还是第一次见”提到鸟，说的都是鸟，语义相配。"
          },
          {
            "q": 47,
            "text": "我丈夫的腿已经好多了。",
            "a": "D",
            "exp": "说丈夫的腿好了，D项“他在医院住了三个月，医生说星期日就可以出院了”说明在医院养病快出院了，语义相配。"
          },
          {
            "q": 48,
            "text": "遇到问题要自己想办法解决。",
            "a": "C",
            "exp": "“遇到问题要自己想办法解决”与C项“不要总想着让别人来帮你”意思相近，都是劝人自己解决，语义相配。"
          },
          {
            "q": 49,
            "text": "还不错，你再试试蓝色的，看看哪个更好。",
            "a": "E",
            "exp": "“还不错”是在评价衣服，E项“我穿这件白衬衫怎么样”正好是在问别人自己穿白衬衫怎么样，语义相配。"
          },
          {
            "q": 50,
            "text": "他几乎把那件事忘了。",
            "a": "A",
            "exp": "“他几乎把那件事忘了”与A项“过去那么久了，你不说我都想不起来了”都表示事情过去很久、差不多忘了，语义相配。"
          }
        ]
      },
      "p3": {
        "options": [
          "向",
          "关",
          "突然",
          "同意",
          "声音",
          "世界"
        ],
        "items": [
          {
            "q": 51,
            "text": "放心，妈妈一定会（　）你这么做的。",
            "a": "D",
            "exp": "“同意”（đồng ý）表示赞成，句意为“妈妈一定会同意你这么做”，表示允许、赞成孩子这样做。"
          },
          {
            "q": 52,
            "text": "你昨天走的时候是不是忘记（　）空调？",
            "a": "B",
            "exp": "“关”（đóng, tắt）指关闭，句意为“走的时候是不是忘记关空调”，因为走后不能关，用“关”最合适。"
          },
          {
            "q": 53,
            "text": "你那儿有（　）地图吗？借我用用。",
            "a": "F",
            "exp": "“世界”（thế giới）在此组成“世界地图”，句意为“你那儿有世界地图吗”，借来用一用。"
          },
          {
            "q": 54,
            "text": "过去的就让它过去吧，做人应该（　）前看。",
            "a": "A",
            "exp": "“向”（hướng về phía）用于“向前看”，句意为“做人应该向前看”，劝人不要总想着过去。"
          },
          {
            "q": 55,
            "text": "怎么（　）刮起风来了？我们还去爬山吗？",
            "a": "C",
            "exp": "“突然”（đột nhiên）表示忽然、出乎意料，句意为“怎么突然刮起风来了”，表示风来得意外。"
          }
        ]
      },
      "p4": {
        "options": [
          "差",
          "决定",
          "啤酒",
          "爱好",
          "中间",
          "清楚"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：这件事电话里说不（　），我们见面再说吧。B：好，下了班我去接你。",
            "a": "F",
            "exp": "“清楚”（rõ ràng）组成“说不清楚”，句意为“电话里说不清楚”，所以约好见面再说。"
          },
          {
            "q": 57,
            "text": "A：爸，你看（　）那个怎么样？B：太小了，冰箱要买大一点儿的，左边那个不错。",
            "a": "E",
            "exp": "“中间”（ở giữa）指位置在中间，句意为“你看中间那个怎么样”，指两边的那个中间。"
          },
          {
            "q": 58,
            "text": "A：喝点儿什么？（　）还是饮料？B：饮料，晚上还要开车回去。",
            "a": "C",
            "exp": "“啤酒”（bia）是一种酒，句意为“喝啤酒还是饮料”，给对方两种选择，答者选了饮料。"
          },
          {
            "q": 59,
            "text": "A：我（　）从明天开始，每天早上6点起床。B：真的吗？太阳要从西边出来了。",
            "a": "B",
            "exp": "“决定”（quyết định）表示下决心，句意为“我决定从明天开始每天早上6点起床”，表示自己已下定决心。"
          },
          {
            "q": 60,
            "text": "A：我们要去踢足球，你去不去？B：去，我还（　）最后两个句子就写完了，等我一下。",
            "a": "A",
            "exp": "“差”（thiếu, còn）表示还缺、还少，句意为“我还差最后两个句子就写完了”，意思是在去之前把作业写完。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "中国的很多城市都有好几个名字，像广州市，除了羊城外，人们还叫它花城。",
            "question": "根据这段话，广州市：",
            "opts": [
              "很漂亮",
              "又叫羊城",
              "变化很大"
            ],
            "a": "B",
            "exp": "这段话说明广州除了叫花城，还叫羊城，因此选B“又叫羊城”。"
          },
          {
            "q": 62,
            "passage": "我们学校旁边有家咖啡馆儿，环境不错，我们去那儿边喝咖啡边等小李吧。",
            "question": "那家咖啡馆儿：",
            "opts": [
              "环境一般",
              "换菜单了",
              "离学校不远"
            ],
            "a": "C",
            "exp": "这段话提到咖啡馆在我们学校旁边，即离学校不远，因此选C。"
          },
          {
            "q": 63,
            "passage": "现在，北京很多公园的门票都很便宜，有的只需要两三块钱。如果你经常去公园运动，还可以办年票，这样不但不用每次去都买票，而且也更便宜了。",
            "question": "对常去公园的人来说，有了年票：",
            "opts": [
              "更方便",
              "选择少了",
              "出门更容易"
            ],
            "a": "A",
            "exp": "这段话说明办年票后不用每次买票、也更便宜，对常去公园的人更方便，因此选A。"
          },
          {
            "q": 64,
            "passage": "如果想了解一个国家的文化，就不能只看书本，还必须到这个国家走一走、看一看，这样才能明白“文化”二字的意思。",
            "question": "根据这段话，要了解一个国家的文化，必须：",
            "opts": [
              "多看书",
              "去留学",
              "去那个国家看看"
            ],
            "a": "C",
            "exp": "这段话强调了解文化不能只看书，必须亲自去那个国家走一走、看一看，因此选C。"
          },
          {
            "q": 65,
            "passage": "上周末我和同事一起去云南玩儿了两天，那里跟北方真的很不一样，我们照了很多照片，都在我电脑里，你要不要看看？",
            "question": "他：",
            "opts": [
              "爱帮助人",
              "没带相机",
              "去云南旅游过"
            ],
            "a": "C",
            "exp": "他说上周末和同事一起去云南玩了两天，说明他去云南旅游过，因此选C。"
          },
          {
            "q": 66,
            "passage": "我们等了快半个小时，那条街上都没有出租车经过，后来只能坐公共汽车过去了。",
            "question": "他们一开始打算：",
            "opts": [
              "往南走",
              "打车去",
              "坐公共汽车"
            ],
            "a": "B",
            "exp": "这段话提到等了很久没等到出租车，最后只能坐公共汽车，说明一开始打算打车去，因此选B。"
          },
          {
            "q": 67,
            "passage": "电视上说，这个月20号动物园会新来两只大熊猫，女儿还没见过大熊猫呢，到时候我们带她去吧。",
            "question": "他想带女儿：",
            "opts": [
              "看电影",
              "去骑马",
              "看大熊猫"
            ],
            "a": "C",
            "exp": "这段话提到动物园会新来大熊猫，女儿还没见过，所以想带女儿去看，因此选C“看大熊猫”。"
          },
          {
            "q": 68,
            "passage": "很多人年轻的时候不注意锻炼，只想着工作，等老了才发现再多的钱也比不上一个好身体，所以工作越忙越应该照顾好自己。",
            "question": "这段话主要想告诉我们：",
            "opts": [
              "健康更重要",
              "要努力工作",
              "要多关心老人"
            ],
            "a": "A",
            "exp": "这段话说明再多的钱也比不上好身体，强调健康比什么都重要，因此选A。"
          },
          {
            "q": 69,
            "passage": "在中国，去朋友家做客，离开时朋友可能会对你说“慢走”。其实他们的意思是让你在回去的路上小心点儿，不是让你慢点儿走。",
            "question": "朋友说“慢走”，最可能是什么意思？",
            "opts": [
              "欢迎再来",
              "路上小心",
              "别走得太快"
            ],
            "a": "B",
            "exp": "这段话解释“慢走”实际意思是让人回去路上小心，并不是真的慢点走，因此选B“路上小心”。"
          },
          {
            "q": 70,
            "passage": "这块儿手表是我10岁生日时爷爷送给我的，已经用了很多年了，虽然现在看上去有点儿旧，颜色也变了，但我还是很喜欢它，不愿意换新的。",
            "question": "那块儿手表：",
            "opts": [
              "已经旧了",
              "是节日礼物",
              "是为爷爷买的"
            ],
            "a": "A",
            "exp": "这段话提到手表用了很多年、看上去有点儿旧，因此选A“已经旧了”。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "听说她还很聪明，每次考试都是年级第一。",
          "跳了两个小时的舞，真累啊！",
          "你该多花点儿时间跟儿子在一起，多跟他聊聊天儿。",
          "公司最近怎么了？事情一件接着一件。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "好，我洗完头发就过去。"
        ],
        "items": [
          {
            "q": 41,
            "text": "姐，你要看的那个电视节目已经开始了。",
            "a": "F",
            "exp": "对方说电视节目已经开始了，F项“好，我洗完头发就过去”表示答应洗完头发就去看，语义相配。"
          },
          {
            "q": 42,
            "text": "孩子现在不太愿意跟我说话，怎么办？",
            "a": "C",
            "exp": "话里为儿子不愿跟自己说话而发愁，C项“你该多花点儿时间跟儿子在一起，多跟他聊聊天儿”正好给出建议，语义相配。"
          },
          {
            "q": 43,
            "text": "穿绿裙子的那个小朋友真可爱。",
            "a": "A",
            "exp": "“穿绿裙子的那个小朋友”是在说一个小孩，A项“听说她还很聪明，每次考试都是年级第一”正是夸这个小朋友，语义相配。"
          },
          {
            "q": 44,
            "text": "你先坐下来喝杯饮料，休息一下。",
            "a": "B",
            "exp": "对方劝人坐下休息，B项“跳了两个小时的舞，真累啊”说明很累，正好需要休息，语义相配。"
          },
          {
            "q": 45,
            "text": "旧的问题还没解决，新的问题又来了。",
            "a": "D",
            "exp": "“旧的问题还没解决，新的问题又来了”与D项“公司最近怎么了？事情一件接着一件”都表示问题接二连三，语义相配。"
          }
        ]
      },
      "p2": {
        "options": [
          "这是我昨天去商店给妹妹买的生日礼物。",
          "妈妈，你给我讲个故事吧？",
          "大家离得近一点儿，个子矮的同学站前面。",
          "除了工作学习，她还要照顾孩子。",
          "冰箱里只有牛奶和鸡蛋，没其他吃的了。"
        ],
        "items": [
          {
            "q": 46,
            "text": "准备好了吗？笑一笑，我要开始照了。",
            "a": "C",
            "exp": "“照”指照相、拍照，C项“大家离得近一点儿，个子矮的同学站前面”是照相前让大家排队站好，语义相配。"
          },
          {
            "q": 47,
            "text": "好，但听完了就要睡觉啊。",
            "a": "B",
            "exp": "“听完了”指听完故事，B项“妈妈，你给我讲个故事吧”是在请求讲故事，语义相配。"
          },
          {
            "q": 48,
            "text": "王阿姨每天都很忙。",
            "a": "D",
            "exp": "“王阿姨每天都很忙”与D项“除了工作学习，她还要照顾孩子”意思一致，都是在说阿姨很忙，语义相配。"
          },
          {
            "q": 49,
            "text": "看上去很不错，相信她一定会喜欢的。",
            "a": "A",
            "exp": "“相信她一定会喜欢的”是对礼物表示认可，A项“这是我昨天去商店给妹妹买的生日礼物”正是说礼物，语义相配。"
          },
          {
            "q": 50,
            "text": "那我们下午去超市吧。",
            "a": "E",
            "exp": "“去超市”是为了买东西，E项“冰箱里只有牛奶和鸡蛋，没其他吃的了”说明需要去超市采购，语义相配。"
          }
        ]
      },
      "p3": {
        "options": [
          "总是",
          "简单",
          "一定",
          "起飞",
          "声音",
          "难过"
        ],
        "items": [
          {
            "q": 51,
            "text": "她（　）得哭了起来。",
            "a": "F",
            "exp": "“难过”（buồn）指伤心，句意为“她难过得哭了起来”，因为太伤心所以哭了。"
          },
          {
            "q": 52,
            "text": "其实问题不像你想的那么（　）。",
            "a": "B",
            "exp": "“简单”（đơn giản）指容易，句意为“问题不像你想的那么简单”，说明问题比想象复杂。"
          },
          {
            "q": 53,
            "text": "请大家关上手机，飞机马上就要（　）。",
            "a": "D",
            "exp": "“起飞”（cất cánh）指飞机起飞，句意为“飞机马上就要起飞了”，所以让大家关手机。"
          },
          {
            "q": 54,
            "text": "人们（　）在生病以后，才认识到健康有多么重要。",
            "a": "A",
            "exp": "“总是”（luôn luôn）指常常、一向，句意为“人们总是在生病以后才认识到健康的重要”，强调一贯如此。"
          },
          {
            "q": 55,
            "text": "我这个月9号结婚，你（　）要来啊。",
            "a": "C",
            "exp": "“一定”（nhất định）表示必定，句意为“我这个月9号结婚，你一定要来啊”，是强烈邀请。"
          }
        ]
      },
      "p4": {
        "options": [
          "打算",
          "双",
          "应该",
          "爱好",
          "皮鞋",
          "记得"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：服务员，我们这桌少了一（　）筷子。B：对不起，我马上给您拿。",
            "a": "B",
            "exp": "“双”（đôi）是量词，指成对的东西，筷子用“一双”，句意为“少了一双筷子”。"
          },
          {
            "q": 57,
            "text": "A：今天先练到这儿，回去后要（　）复习。B：好的。老师再见。",
            "a": "F",
            "exp": "“记得”（nhớ）指记住，句意为“回去后要记得复习”，提醒学生别忘了复习。"
          },
          {
            "q": 58,
            "text": "A：银行那边打电话让我去面试，你说我去不去啊？B：我觉得这个机会不错，你（　）试试。",
            "a": "C",
            "exp": "“应该”（nên）表示应当，句意为“我觉得这个机会不错，你应该试试”，是劝对方去。"
          },
          {
            "q": 59,
            "text": "A：我（　）明天早上去北京西站买火车票。B：为什么不上网买呢？现在网上买票很方便。",
            "a": "A",
            "exp": "“打算”（dự định）表示计划，句意为“我打算明天早上去北京西站买火车票”，表示已有安排。"
          },
          {
            "q": 60,
            "text": "A：我们是去爬山，你怎么穿（　）啊？B：啊，我忘记换了。",
            "a": "E",
            "exp": "“皮鞋”（giày da）指皮鞋，爬山穿皮鞋不合适，句意为“你怎么穿皮鞋啊”，表示不解。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "你说中间那个碗？它有好几百年的历史了，听说现在最少能卖到一万元呢。",
            "question": "那个碗：",
            "opts": [
              "历史较长",
              "漂亮极了",
              "里面有米"
            ],
            "a": "A",
            "exp": "这段话提到那个碗有好几百年的历史，即历史较长，因此选A。"
          },
          {
            "q": 62,
            "passage": "他们最后还是决定坐船去，虽然比火车慢了6个小时，要第二天中午才能到，但是船票比火车票便宜很多。",
            "question": "他们认为：",
            "opts": [
              "应坐出租车",
              "坐船时间短",
              "火车票更贵"
            ],
            "a": "C",
            "exp": "这段话说明船票比火车票便宜很多，也就是说火车票更贵，因此选C。"
          },
          {
            "q": 63,
            "passage": "我办公室的电脑突然不能用了，你等会儿叫小张过来帮我看一下。对了，我下午要出去，不在公司，有什么事就给我发电子邮件或者打我手机。",
            "question": "他下午：",
            "opts": [
              "不在办公室",
              "去检查身体",
              "在家玩儿游戏"
            ],
            "a": "A",
            "exp": "这段话说他下午要出去、不在公司，也就是不在办公室，因此选A。"
          },
          {
            "q": 64,
            "passage": "我教你一个办法。工作前，先把要做的事情写下来，重要的、着急的事情用红笔画出来，这样你就能清楚地知道应该先做什么、后做什么了。",
            "question": "根据这段话，可以知道：",
            "opts": [
              "工作要认真",
              "容易的事后做",
              "要先做重要的事"
            ],
            "a": "C",
            "exp": "这段话教人把重要着急的事标出来先做，说明要先做重要的事，因此选C。"
          },
          {
            "q": 65,
            "passage": "我们周末要去南京旅游，听说南京现在比我们这儿热多了，都可以穿裙子了。",
            "question": "他们这儿现在：",
            "opts": [
              "是夏季",
              "还不能穿裙子",
              "跟南京一样冷"
            ],
            "a": "B",
            "exp": "南京可以穿裙子说明热，而“我们这儿”比南京凉，还不能穿裙子，因此选B。"
          },
          {
            "q": 66,
            "passage": "这几年，她的汉语水平提高了不少，对中国的了解也越来越多，这跟她经常看中文报纸和电影有很大关系。",
            "question": "关于她，可以知道：",
            "opts": [
              "会唱中文歌",
              "爱看体育新闻",
              "中文水平提高了"
            ],
            "a": "C",
            "exp": "这段话明确说她的汉语水平提高了不少，因此选C。"
          },
          {
            "q": 67,
            "passage": "邻居张爷爷是小学校长。他每天都第一个到学校，最后一个离开。他常说，如果工作是你自己感兴趣的，再累也是快乐的。",
            "question": "张爷爷：",
            "opts": [
              "爱帮助学生",
              "对人很热情",
              "喜欢自己的工作"
            ],
            "a": "C",
            "exp": "张爷爷说做自己感兴趣的工作再累也快乐，说明他喜欢自己的工作，因此选C。"
          },
          {
            "q": 68,
            "passage": "这个空调用了5年了，几乎没出过什么问题。但女儿担心它声音太大，晚上会影响我和她爸爸休息，所以一定要给我们换个新的。",
            "question": "根据这段话，女儿：",
            "opts": [
              "生气了",
              "关心爸妈",
              "不同意换空调"
            ],
            "a": "B",
            "exp": "女儿担心空调影响爸妈休息所以要换新的，说明她关心爸妈，因此选B。"
          },
          {
            "q": 69,
            "passage": "这个地方的茶特别有名，每年秋季还有一次茶文化节，很多人都会来参加，有些还是从国外来的朋友。",
            "question": "那个地方：",
            "opts": [
              "茶很有名",
              "啤酒好喝",
              "人们不习惯喝茶"
            ],
            "a": "A",
            "exp": "这段话明确说这个地方的茶特别有名，因此选A。"
          },
          {
            "q": 70,
            "passage": "出国留学对很多年轻人来说是一种锻炼。因为一个人在国外，不但要学会照顾自己，而且还要学着去解决自己以前没遇到过的问题。",
            "question": "这段话主要想告诉我们，去国外留学：",
            "opts": [
              "比较难",
              "能锻炼人",
              "需别人帮忙"
            ],
            "a": "B",
            "exp": "这段话开头就说留学是一种锻炼，说明留学能锻炼人，因此选B。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "面条儿快好了，我去拿碗筷，你叫你弟弟下来吧。",
          "雨越下越大了，你带伞了吗？",
          "你先上楼，我去旁边超市买个面包。",
          "你鼻子上有东西，左边，对，就是那儿。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "昨天的练习我有几个句子不明白，你给我讲讲。"
        ],
        "items": [
          {
            "q": 41,
            "text": "我跟你一起，家里没鸡蛋了。",
            "a": "C",
            "exp": "家里没鸡蛋了要买鸡蛋，C项“你先上楼，我去旁边超市买个面包”正是去超市买东西，可一起买，语义相配。"
          },
          {
            "q": 42,
            "text": "奶奶，还有多久才能吃饭啊？",
            "a": "A",
            "exp": "在问还要多久吃饭，A项“面条儿快好了，我去拿碗筷”说明饭马上就好，正相对应。"
          },
          {
            "q": 43,
            "text": "现在呢？干净了吗？",
            "a": "D",
            "exp": "“鼻子上有东西”需要擦掉，D项“你鼻子上有东西，左边，对，就是那儿”正是帮忙指出位置，语义相配。"
          },
          {
            "q": 44,
            "text": "是用铅笔画出来的这些吗？我看看。",
            "a": "F",
            "exp": "“用铅笔画出来”指做练习题用铅笔写，F项“昨天的练习我有几个句子不明白，你给我讲讲”说的是练习里的句子，语义相配。"
          },
          {
            "q": 45,
            "text": "没有，我早上出门的时候还是晴天呢。",
            "a": "B",
            "exp": "“没有”是否定回答，B项“雨越下越大了，你带伞了吗”是问有没有带伞，回答“没有”，语义相配。"
          }
        ]
      },
      "p2": {
        "options": [
          "每天晚上，叔叔都会在楼下的公园里教我。",
          "能用一下你的词典吗？我想查查这个字怎么读。",
          "我们有七八年没见了吧？",
          "那你在这儿休息一下，我去前面看看有没有卖饮料的。",
          "王小姐，这个帽子真漂亮，谢谢你。"
        ],
        "items": [
          {
            "q": 46,
            "text": "你几乎没什么变化，还跟以前一样年轻。",
            "a": "C",
            "exp": "“跟以前一样”是说很久没见、对方没变，C项“我们有七八年没见了吧”正是说分别很久，语义相配。"
          },
          {
            "q": 47,
            "text": "我不饿，就是有点儿渴。",
            "a": "D",
            "exp": "“渴”需要喝水，D项“我去前面看看有没有卖饮料的”正是去找饮料给解渴，语义相配。"
          },
          {
            "q": 48,
            "text": "我最近在学习打篮球。",
            "a": "A",
            "exp": "“在学习打篮球”是在学，A项“每天晚上，叔叔都会在楼下的公园里教我”正是叔叔教他，语义相配。"
          },
          {
            "q": 49,
            "text": "被小高借走了，你问他要吧。",
            "a": "B",
            "exp": "“借走了”指借东西，B项“能用一下你的词典吗”正是想借词典，语义相配。"
          },
          {
            "q": 50,
            "text": "不客气，你喜欢就好。",
            "a": "E",
            "exp": "“不客气”是对道谢的回答，E项“王小姐，这个帽子真漂亮，谢谢你”正是道谢，语义相配。"
          }
        ]
      },
      "p3": {
        "options": [
          "像",
          "坏",
          "一直",
          "提高",
          "声音",
          "回答"
        ],
        "items": [
          {
            "q": 51,
            "text": "从地图上看，黄河很（　）一个“几”字。",
            "a": "A",
            "exp": "“像”（giống như）指相似，句意为“黄河很像一个‘几’字”，说黄河的形状像“几”字。"
          },
          {
            "q": 52,
            "text": "我相信在她的帮助下，你的汉语水平一定会（　）的。",
            "a": "D",
            "exp": "“提高”（nâng cao）指水平上升，句意为“你的汉语水平一定会提高的”，表示会有进步。"
          },
          {
            "q": 53,
            "text": "谁能（　）黑板上的这个问题？",
            "a": "F",
            "exp": "“回答”（trả lời）指回答问题，句意为“谁能回答黑板上的这个问题”，是请人作答。"
          },
          {
            "q": 54,
            "text": "（　）到会议结束，大家也没想出办法来。",
            "a": "C",
            "exp": "“一直”（mãi, liên tục）表示持续不断，句意为“一直到会议结束大家也没想出办法”，强调始终没有。"
          },
          {
            "q": 55,
            "text": "你是不是忘记把牛奶放冰箱里了？两包都（　）了。",
            "a": "B",
            "exp": "“坏”（hỏng）指变质，句意为“两包牛奶都坏了”，因为没放冰箱所以坏了。"
          }
        ]
      },
      "p4": {
        "options": [
          "饱",
          "信用卡",
          "见面",
          "爱好",
          "张",
          "注意"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：我们在哪儿（　）？B：国家体育馆北门吧，那儿离你家和我家都近。",
            "a": "C",
            "exp": "“见面”（gặp mặt）指见面、会面，句意为“我们在哪儿见面”，约定见面的地点。"
          },
          {
            "q": 57,
            "text": "A：昨天我生日，儿子送给我一（　）他画的画儿。B：那你一定很高兴吧？",
            "a": "E",
            "exp": "“张”（tờ, tấm）是量词，画用“一张”，句意为“儿子送给我一张他画的画儿”。"
          },
          {
            "q": 58,
            "text": "A：对不起，李经理，我迟到了。B：没关系，先坐下开会吧，以后（　）点儿。",
            "a": "F",
            "exp": "“注意”（chú ý）指留意、小心，句意为“以后注意点儿”，是提醒对方下次别迟到。"
          },
          {
            "q": 59,
            "text": "A：明天30号了，记得还（　）。B：放心，我今天中午就去银行。",
            "a": "B",
            "exp": "“信用卡”（thẻ tín dụng）要还钱，句意为“记得还信用卡”，对方说去银行办理。"
          },
          {
            "q": 60,
            "text": "A：桌子上有蛋糕，你吃不吃？B：不吃了，我在爷爷家吃（　）了才回来的。",
            "a": "A",
            "exp": "“饱”（no）指吃饱，句意为“我在爷爷家吃饱了才回来”，所以不再吃了。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "房子很好，附近环境也不错，但还是要等我妻子看过以后才能做决定。",
            "question": "说话人是什么意思？",
            "opts": [
              "妻子不同意",
              "现在不能决定",
              "对房子不满意"
            ],
            "a": "B",
            "exp": "说话人虽然觉得房子好，但要等妻子看过才能决定，说明现在还不能决定，因此选B。"
          },
          {
            "q": 62,
            "passage": "我想找几个关于中国节日文化的小故事，明天要给班上的学生讲，你那儿有吗？",
            "question": "他最可能是做什么的？",
            "opts": [
              "司机",
              "医生",
              "老师"
            ],
            "a": "C",
            "exp": "要给班上的学生讲故事，说明他可能是老师，因此选C。"
          },
          {
            "q": 63,
            "passage": "欢迎大家来这儿旅游。别看我们这个城市不大，但已经有几千年的历史了。上午我先带大家去一条有名的街道走走，那儿不但有很多好吃的，而且街道两边的房子也很特别，来这儿的人是一定要去看看的。",
            "question": "关于那个城市，可以知道：",
            "opts": [
              "历史久远",
              "房子很矮",
              "人很热情"
            ],
            "a": "A",
            "exp": "这段话提到这座城市已经有几千年的历史了，即历史久远，因此选A。"
          },
          {
            "q": 64,
            "passage": "以前我每天早上都会跑半个小时的步，我知道这是个好习惯，对身体很好，但后来因为工作太忙，就没时间跑了。",
            "question": "他现在：",
            "opts": [
              "比较累",
              "不跑步了",
              "身体很差"
            ],
            "a": "B",
            "exp": "他以前每天跑步，后来因为太忙没时间跑，说明他现在不跑步了，因此选B。"
          },
          {
            "q": 65,
            "passage": "很多人会根据自己的兴趣爱好来选择工作，他们觉得选择自己喜欢的工作，更容易做出成绩。",
            "question": "根据爱好来选择工作，会：",
            "opts": [
              "更快完成",
              "更容易出成绩",
              "更易解决问题"
            ],
            "a": "B",
            "exp": "这段话明确说选自己喜欢的工作更容易做出成绩，因此选B。"
          },
          {
            "q": 66,
            "passage": "哥，你们先去咖啡馆儿吧，我突然想起来，我房间的空调还没关，我先回去一下，然后去咖啡馆儿找你们。",
            "question": "他接下来要做什么？",
            "opts": [
              "回去喝水",
              "打扫洗手间",
              "回家关空调"
            ],
            "a": "C",
            "exp": "他说想起来空调没关，要先回去一趟，就是回家关空调，因此选C。"
          },
          {
            "q": 67,
            "passage": "经过这件事，我明白了：机会只给有准备的人，知道自己想要的，然后为它去努力。只有这样，机会到来时，你才不会错过它。",
            "question": "怎样才不会错过机会？",
            "opts": [
              "认真做事",
              "先了解自己",
              "让自己做好准备"
            ],
            "a": "C",
            "exp": "这段话说明机会只给有准备的人，做好准备才不会错过机会，因此选C。"
          },
          {
            "q": 68,
            "passage": "这只小狗是我同学的，他让我帮忙照顾几天。前两天小狗生病了，还好发现得早，现在已经没事了，它比来的时候还胖了些呢。",
            "question": "关于那只狗，可以知道：",
            "opts": [
              "长胖了",
              "还在吃药",
              "感冒还没好"
            ],
            "a": "A",
            "exp": "这段话提到小狗比来的时候还胖了些，即长胖了，因此选A。"
          },
          {
            "q": 69,
            "passage": "每天接儿子回来的路上，他都要给我讲学校里的事。在他的眼里，世界每天都是新鲜的。",
            "question": "儿子眼中的世界是什么样的？",
            "opts": [
              "新鲜的",
              "奇怪的",
              "快乐的"
            ],
            "a": "A",
            "exp": "这段话明确说在儿子眼里世界每天都是新鲜的，因此选A。"
          },
          {
            "q": 70,
            "passage": "过去手机只能用来打电话，现在不但能听歌、玩儿游戏，上网也很方便。所以在汽车站或者地铁站里，经常能看见人们一边玩儿手机一边等车。",
            "question": "根据这段话，现在的手机：",
            "opts": [
              "可以上网",
              "会影响健康",
              "只能用来打电话"
            ],
            "a": "A",
            "exp": "这段话说明现在的手机不但能听歌玩游戏，上网也很方便，因此选A“可以上网”。"
          }
        ]
      }
    }
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
    ],
    "reading": {
      "p1": {
        "options": [
          "现在已经是晚上了吗？外面怎么那么黑？",
          "我下班会经过那里，要不要我明天帮你借回来？",
          "大城市里一般机会比较多。",
          "不用了，不冷，我一会儿就回来。",
          "当然。我们先坐公共汽车，然后换地铁。",
          "妈妈，我那件蓝色的衬衫呢？"
        ],
        "items": [
          {
            "q": 41,
            "text": "给你帽子，外面风刮得很大，别感冒了。",
            "a": "D",
            "exp": "对方给帽子、怕着凉，D项“不用了，不冷，我一会儿就回来”表示不用帽子，正相对应。"
          },
          {
            "q": 42,
            "text": "我在网上查了一下，只有国家图书馆有这本词典。",
            "a": "B",
            "exp": "国家图书馆离得远，B项“我下班会经过那里，要不要我明天帮你借回来”说会经过并愿意帮忙借，语义相配。"
          },
          {
            "q": 43,
            "text": "所以很多年轻人选择离开家去那儿工作。",
            "a": "C",
            "exp": "“所以”前要说明原因，C项“大城市里一般机会比较多”解释年轻人去大城市工作的原因，语义相配。"
          },
          {
            "q": 44,
            "text": "我给你洗了，你先穿别的衣服吧。",
            "a": "F",
            "exp": "“给你洗了”指洗衣服，F项“妈妈，我那件蓝色的衬衫呢”正是在找衣服，语义相配。"
          },
          {
            "q": 45,
            "text": "还不到三点呢，是天阴了。",
            "a": "A",
            "exp": "“天阴了”指天变暗，A项“现在已经是晚上了吗？外面怎么那么黑”正是觉得外面黑，语义相配。"
          }
        ]
      },
      "p2": {
        "options": [
          "春天到了，学校里的花儿都开了，草也绿了。",
          "你不是明天早上8点的火车吗？怎么还不休息？",
          "你们两个站近一点儿，笑一笑，对，就是这样。",
          "小时候，我家就在黄河边上。",
          "什么水果又像月亮又像船？"
        ],
        "items": [
          {
            "q": 46,
            "text": "香蕉，对不对？",
            "a": "E",
            "exp": "“香蕉，对不对”是对谜语的回答，E项“什么水果又像月亮又像船”正是出谜语，香蕉弯弯的像月亮又像船，语义相配。"
          },
          {
            "q": 47,
            "text": "我这就去洗脸刷牙，马上睡。",
            "a": "B",
            "exp": "“马上睡”是答应去睡觉，B项“你不是明天早上8点的火车吗？怎么还不休息”正催对方睡觉，语义相配。"
          },
          {
            "q": 48,
            "text": "把相机给我，我看看照得怎么样。",
            "a": "C",
            "exp": "“相机”“照得怎么样”指照相，C项“你们两个站近一点儿，笑一笑，对，就是这样”正是照相时说的话，语义相配。"
          },
          {
            "q": 49,
            "text": "我最喜欢这个季节了。",
            "a": "A",
            "exp": "“这个季节”需说明是哪个季节，A项“春天到了，学校里的花儿都开了，草也绿了”说的正是春天，语义相配。"
          },
          {
            "q": 50,
            "text": "后来因为我妈换工作，才搬到这里。",
            "a": "D",
            "exp": "“才搬到这里”讲的是搬家原因，D项“小时候，我家就在黄河边上”说明原来住在黄河边，语义相配。"
          }
        ]
      },
      "p3": {
        "options": [
          "其实",
          "奇怪",
          "必须",
          "筷子",
          "声音",
          "办法"
        ],
        "items": [
          {
            "q": 51,
            "text": "老师，这次考试（　）用铅笔答题吗？",
            "a": "C",
            "exp": "“必须”（phải, bắt buộc）表示一定要，句意为“这次考试必须用铅笔答题吗”，是询问要求。"
          },
          {
            "q": 52,
            "text": "鱼（　）是有耳朵的，只是很多人都没注意到。",
            "a": "A",
            "exp": "“其实”（thực ra）表示实际上，句意为“鱼其实是有耳朵的”，说明真实情况，与“只是很多人没注意到”相配。"
          },
          {
            "q": 53,
            "text": "再想想，看能不能找到更简单的解决（　）。",
            "a": "F",
            "exp": "“办法”（cách, biện pháp）指方法，句意为“找到更简单的解决办法”，与“解决”搭配。"
          },
          {
            "q": 54,
            "text": "这件事情太（　）了，让人很难相信。",
            "a": "B",
            "exp": "“奇怪”（kỳ lạ）指让人惊讶、难以理解，句意为“这件事太奇怪了，让人很难相信”。"
          },
          {
            "q": 55,
            "text": "13号桌少了一双（　）和一个碗，你快送过去。",
            "a": "D",
            "exp": "“筷子”（đũa）用“一双”作量词，句意为“少了一双筷子和一个碗”，正好搭配。"
          }
        ]
      },
      "p4": {
        "options": [
          "马上",
          "疼",
          "一共",
          "爱好",
          "中文",
          "瓶"
        ],
        "items": [
          {
            "q": 56,
            "text": "A：张阿姨请我们去她家过节，带什么礼物好呢？B：带（　）红酒或者买些水果都可以。",
            "a": "F",
            "exp": "“瓶”（chai）是量词，红酒用“一瓶”，句意为“带一瓶红酒或者买些水果都可以”。"
          },
          {
            "q": 57,
            "text": "A：你试着慢慢地站起来，怎么样？B：脚还是有点儿（　）。",
            "a": "B",
            "exp": "“疼”（đau）指疼痛，句意为“脚还是有点儿疼”，所以站不起来。"
          },
          {
            "q": 58,
            "text": "A：经理，李先生来了，正在会议室等您。B：好，我（　）过去。",
            "a": "A",
            "exp": "“马上”（ngay lập tức）表示立刻，句意为“好，我马上过去”，表示立刻就过去见李先生。"
          },
          {
            "q": 59,
            "text": "A：您好，（　）是99元7角5分。B：这是100，不用找了。",
            "a": "C",
            "exp": "“一共”（tổng cộng）表示总共，句意为“一共是99元7角5分”，是结账时说的总金额。"
          },
          {
            "q": 60,
            "text": "A：你的汉语水平怎么提高得这么快？B：我每天都看（　）报纸，而且还会听半个小时的新闻。",
            "a": "E",
            "exp": "“中文”（tiếng Trung）指中国语文，句意为“我每天都看中文报纸”，所以汉语水平提高快。"
          }
        ]
      },
      "p5": {
        "items": [
          {
            "q": 61,
            "passage": "现在越来越多的人喜欢拿出手机看时间，我还是觉得用手表更方便。",
            "question": "根据这段话，他更愿意：",
            "opts": [
              "打电话",
              "用手机上网",
              "用手表看时间"
            ],
            "a": "C",
            "exp": "他觉得自己用手表看时间更方便，所以更愿意用手表看时间，因此选C。"
          },
          {
            "q": 62,
            "passage": "老人们常说：“饭要一口一口地吃，路要一步一步地走。”做事也是这样，不能太着急，要慢慢来。",
            "question": "这段话主要想告诉我们：",
            "opts": [
              "不能吃太饱",
              "要多关心老人",
              "做事不能着急"
            ],
            "a": "C",
            "exp": "这段话用“一口一口吃、一步一步走”说明做事不能急、要慢慢来，因此选C。"
          },
          {
            "q": 63,
            "passage": "王校长虽然70多岁了，但看起来一点儿都不像，很多人都觉得他只有50来岁。他告诉我们，要想年轻，有两点很重要：第一要少生气，第二要多锻炼，经常跑跑步、打打球。",
            "question": "王校长认为，想年轻就应该：",
            "opts": [
              "多读书",
              "少生气",
              "常去检查身体"
            ],
            "a": "B",
            "exp": "王校长说想年轻第一要少生气、第二要多锻炼，选项中“少生气”正符合，因此选B。"
          },
          {
            "q": 64,
            "passage": "学过的东西，如果不经常看，很容易就会忘记。所以，要想把学过的东西记住，每过一段时间就应该复习一下。",
            "question": "为了记住学过的东西，应该：",
            "opts": [
              "经常复习",
              "不懂就问",
              "认真完成作业"
            ],
            "a": "A",
            "exp": "这段话说明经常复习才能记住学过的东西，因此选A“经常复习”。"
          },
          {
            "q": 65,
            "passage": "早上我在车站等了40多分钟，也没等到我要坐的那辆公共汽车。我担心再等下去会迟到，就坐出租车来公司了。",
            "question": "他今天早上：",
            "opts": [
              "迟到了",
              "起床晚了",
              "打车上班的"
            ],
            "a": "C",
            "exp": "他等不到公共汽车就坐出租车来公司，即打车上班，因此选C。"
          },
          {
            "q": 66,
            "passage": "小李，你的鼻子已经好多了，我再给你开点儿药，一周后你再来检查一下。",
            "question": "小李：",
            "opts": [
              "腿好多了",
              "还要吃药",
              "不同意吃米饭"
            ],
            "a": "B",
            "exp": "医生说再开点药、一周后再来检查，说明小李还要吃药，因此选B。"
          },
          {
            "q": 67,
            "passage": "这儿的夏天天气变化特别快，有时候上午还是晴天，中午就突然下起雨来，所以我出门前总会在包里放一把伞。",
            "question": "他出门时：",
            "opts": [
              "会带伞",
              "没带钱包",
              "很不快乐"
            ],
            "a": "A",
            "exp": "他出门前总会在包里放一把伞，说明他出门时会带伞，因此选A。"
          },
          {
            "q": 68,
            "passage": "爸，我刚才在楼下遇见您以前的学生王雨了，他比过去胖了些，一开始我都没认出来。他也搬到这附近住了，还说晚上过来看您。",
            "question": "王雨：",
            "opts": [
              "变胖了",
              "最近很忙",
              "是北方人"
            ],
            "a": "A",
            "exp": "这段话提到王雨比过去胖了些，说明他变胖了，因此选A。"
          },
          {
            "q": 69,
            "passage": "这是我女儿，今年秋天就要上一年级了。她不但爱唱歌，也爱跳舞，在家没事的时候，她总是在我和妻子面前又唱又跳，一分钟也安静不下来。",
            "question": "他女儿：",
            "opts": [
              "很聪明",
              "爱干净",
              "喜欢唱歌"
            ],
            "a": "C",
            "exp": "女儿爱唱歌也爱跳舞，还常常又唱又跳，说明她喜欢唱歌，因此选C。"
          },
          {
            "q": 70,
            "passage": "过去的几年，哥哥一直很努力地工作，现在已经是他们公司的经理了。他告诉我，要想做出成绩，除了认真工作，没有其他选择。",
            "question": "哥哥认为怎样才能做出成绩？",
            "opts": [
              "努力工作",
              "相信自己",
              "多和同事聊天儿"
            ],
            "a": "A",
            "exp": "哥哥说想做出成绩除了认真工作没有别的选择，说明要努力工作，因此选A。"
          }
        ]
      }
    }
  }
];
