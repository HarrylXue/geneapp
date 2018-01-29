module.exports = ctx => {
  ctx.state.data = {
    msg: 'link succuss',
	report: {
		"attributes": [
			{
				"common_per": "17%",
				"warning_per": "33%",
				"name": "抗病能力",
				"good_per": "50%"
			},
			{
				"common_per": "57%",
				"warning_per": "6%",
				"name": "饮食管理",
				"good_per": "37%"
			},
			{
				"common_per": "72%",
				"warning_per": "14%",
				"name": "外貌特点",
				"good_per": "14%"
			},
			{
				"common_per": "55%",
				"warning_per": "18%",
				"name": "个性与情商能力",
				"good_per": "27%"
			},
			{
				"common_per": "67%",
				"warning_per": "0%",
				"name": "智能与学习能力",
				"good_per": "33%"
			},
			{
				"common_per": "100%",
				"warning_per": "0%",
				"name": "艺术才能",
				"good_per": "0%"
			},
			{
				"common_per": "60%",
				"warning_per": "20%",
				"name": "体力运动能力",
				"good_per": "20%"
			}
		],
		"medicines": [
			{
				"common_per": "50%",
				"warning_per": "25%",
				"name": "心血管系统药",
				"good_per": "25%"
			},
			{
				"common_per": "20%",
				"warning_per": "60%",
				"name": "内分泌与代谢药",
				"good_per": "20%"
			},
			{
				"common_per": "25%",
				"warning_per": "50%",
				"name": "抗感染药",
				"good_per": "25%"
			},
			{
				"common_per": "26%",
				"warning_per": "18%",
				"name": "抗癌药",
				"good_per": "56%"
			},
			{
				"common_per": "31%",
				"warning_per": "46%",
				"name": "免疫抑制药",
				"good_per": "23%"
			},
			{
				"common_per": "17%",
				"warning_per": "50%",
				"name": "镇痛与麻醉药",
				"good_per": "33%"
			},
			{
				"common_per": "39%",
				"warning_per": "28%",
				"name": "神经精神类药",
				"good_per": "33%"
			},
			{
				"common_per": "68%",
				"warning_per": "16%",
				"name": "其他药物",
				"good_per": "16%"
			}
		],
		"diseases": [
			{
				"common_per": "73%",
				"warning_per": "27%",
				"name": "癌症风险",
				"good_per": "0%"
			},
			{
				"common_per": "100%",
				"warning_per": "0%",
				"name": "心脑血管风险",
				"good_per": "0%"
			},
			{
				"common_per": "34%",
				"warning_per": "50%",
				"name": "消化道与代谢疾病风险",
				"good_per": "16%"
			},
			{
				"common_per": "100%",
				"warning_per": "0%",
				"name": "呼吸道疾病风险",
				"good_per": "0%"
			},
			{
				"common_per": "93%",
				"warning_per": "7%",
				"name": "神经系统疾病风险",
				"good_per": "0%"
			},
			{
				"common_per": "75%",
				"warning_per": "25%",
				"name": "泌尿生殖系统疾病风险",
				"good_per": "0%"
			},
			{
				"common_per": "81%",
				"warning_per": "13%",
				"name": "自体免疫疾病风险",
				"good_per": "6%"
			}
		]
	},
	result: {
		"attributes": [
			{
				"tested_snps": [
					{
						"name": "zh1000872",
						"genotype": "A;A"
					}
				],
				"code": "tfys01",
				"calculated_result": "一般能力",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000002",
						"genotype": "G;G"
					}
				],
				"code": "tfys02",
				"calculated_result": "一般能力",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000677",
						"genotype": "G;A"
					}
				],
				"code": "tfys03",
				"calculated_result": "一般能力",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001873",
						"genotype": "C;T"
					}
				],
				"code": "tfys05",
				"calculated_result": "一般能力",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001640",
						"genotype": "T;A"
					}
				],
				"code": "tfxx01",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001234",
						"genotype": "T;T"
					}
				],
				"code": "tfxx02",
				"calculated_result": "正常",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003120",
						"genotype": "G;G"
					}
				],
				"code": "xz07",
				"calculated_result": "尼古丁依赖风险一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002630",
						"genotype": "A;A"
					}
				],
				"code": "xz04",
				"calculated_result": "喝母乳可提升智商4点以上",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003243",
						"genotype": "C;C"
					}
				],
				"code": "xz05",
				"calculated_result": "咖啡因依赖度一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002382",
						"genotype": "G;G"
					}
				],
				"code": "xz03",
				"calculated_result": "避错能力佳，能够有效的避错",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001136",
						"genotype": "C;C"
					}
				],
				"code": "xz08",
				"calculated_result": "酒精戒断综合症风险较高 (2倍)",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003948",
						"genotype": "G;A"
					}
				],
				"code": "xz09",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003693",
						"genotype": "C;A"
					},
					{
						"name": "zh1000417",
						"genotype": "G;G"
					}
				],
				"code": "tz11",
				"calculated_result": "近视可能性稍偏低 (0.8倍)",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002383",
						"genotype": "C;T"
					}
				],
				"code": "tz10",
				"calculated_result": "一般类型，混合式肌肉",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003547",
						"genotype": "A;A"
					}
				],
				"code": "tz12",
				"calculated_result": "荷尔蒙 (SHBG及睾酮) 水平正常",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002727",
						"genotype": "C;A"
					},
					{
						"name": "zh1002179",
						"genotype": "T;T"
					}
				],
				"code": "wg07",
				"calculated_result": "斑秃风险较高 (1.35倍)",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000668",
						"genotype": "T;T"
					}
				],
				"code": "wg04",
				"calculated_result": "牙齿发育正常",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000369",
						"genotype": "G;A"
					},
					{
						"name": "zh1002632",
						"genotype": "T;T"
					},
					{
						"name": "zh1002633",
						"genotype": "A;A"
					}
				],
				"code": "wg01",
				"calculated_result": "长青春痘风险较低",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000870",
						"genotype": "G;G"
					}
				],
				"code": "wg08",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000418",
						"genotype": "G;G"
					}
				],
				"code": "wg09",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001518",
						"genotype": "C;T"
					}
				],
				"code": "kb02",
				"calculated_result": "HIV病毒载量降低60%",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003811",
						"genotype": "C;T"
					}
				],
				"code": "wg02",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003741",
						"genotype": "T;T"
					},
					{
						"name": "zh1003742",
						"genotype": "G;A"
					}
				],
				"code": "tfqs09",
				"calculated_result": "赌博倾向高",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003880",
						"genotype": "G;G"
					}
				],
				"code": "tfqs01",
				"calculated_result": "较喜欢探索冒险",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000670",
						"genotype": "G;G"
					}
				],
				"code": "tfqs02",
				"calculated_result": "较强的同理心",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000000",
						"genotype": "G;C"
					}
				],
				"code": "tfqs04",
				"calculated_result": "焦虑情绪正常",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002917",
						"genotype": "T;T"
					}
				],
				"code": "tfqs05",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003880",
						"genotype": "G;G"
					}
				],
				"code": "tfqs07",
				"calculated_result": "战士类型：更能抗拒压力，但是对生活比较不享受",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001421",
						"genotype": "G;A"
					},
					{
						"name": "zh1003542",
						"genotype": "T;T"
					},
					{
						"name": "zh1003676",
						"genotype": "A;A"
					}
				],
				"code": "kb07",
				"calculated_result": "疟疾风险较高 (1.9倍)",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1004011",
						"genotype": "G;G"
					}
				],
				"code": "kb04",
				"calculated_result": "易感性一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001233",
						"genotype": "C;T"
					},
					{
						"name": "zh1004325",
						"genotype": "C;C"
					}
				],
				"code": "xz11",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002659",
						"genotype": "G;G"
					},
					{
						"name": "zh1001026",
						"genotype": "A;A"
					}
				],
				"code": "yy14",
				"calculated_result": "血清维生素D含量较高",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001304",
						"genotype": "C;C"
					}
				],
				"code": "kb10",
				"calculated_result": "风险较高 (1.8倍)",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001027",
						"genotype": "C;T"
					}
				],
				"code": "tfxx07",
				"calculated_result": "记忆力一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000669",
						"genotype": "C;C"
					}
				],
				"code": "tfz03",
				"calculated_result": "运动对葡萄糖耐量的影响一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003245",
						"genotype": "T;A"
					}
				],
				"code": "tfz02",
				"calculated_result": "运动对减肥的效果稍不明显",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003107",
						"genotype": "C;T"
					}
				],
				"code": "tfz04",
				"calculated_result": "运动可稍改善胰岛素敏感性（2%改善）",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003390",
						"genotype": "G;T"
					},
					{
						"name": "zh1003394",
						"genotype": "G;G"
					}
				],
				"code": "yy06",
				"calculated_result": "一般水平",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002641",
						"genotype": "C;C"
					}
				],
				"code": "yy07",
				"calculated_result": "一般水平",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000079",
						"genotype": "A;A"
					}
				],
				"code": "yy04",
				"calculated_result": "一般水平",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003284",
						"genotype": "G;G"
					}
				],
				"code": "yy03",
				"calculated_result": "一般水平",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000136",
						"genotype": "T;T"
					}
				],
				"code": "yy01",
				"calculated_result": "风险一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001873",
						"genotype": "C;T"
					}
				],
				"code": "tfys06",
				"calculated_result": "一般能力",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003725",
						"genotype": "C;T"
					}
				],
				"code": "yy09",
				"calculated_result": "血液维生素E含量偏高",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001624",
						"genotype": "G;T"
					}
				],
				"code": "kb09",
				"calculated_result": "寿命超过平均年龄的几率较高",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1004010",
						"genotype": "C;C"
					}
				],
				"code": "kb08",
				"calculated_result": "进程较缓慢 (8年)",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002171",
						"genotype": "G;A"
					}
				],
				"code": "xz10",
				"calculated_result": "一般风险",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002915",
						"genotype": "T;T"
					}
				],
				"code": "yy10",
				"calculated_result": "酒精代谢能力一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003387",
						"genotype": "G;G"
					},
					{
						"name": "zh1002900",
						"genotype": "T;T"
					},
					{
						"name": "zh1000856",
						"genotype": "A;A"
					}
				],
				"code": "yy17",
				"calculated_result": "脂联素水平较高",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002383",
						"genotype": "C;T"
					}
				],
				"code": "tfyd02",
				"calculated_result": "运动员天赋一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003950",
						"genotype": "C;C"
					}
				],
				"code": "yy11",
				"calculated_result": "铁代谢能力一般",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003106",
						"genotype": "G;G"
					}
				],
				"code": "yy13",
				"calculated_result": "较不容易受咖啡因影响",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000875",
						"genotype": "C;T"
					}
				],
				"code": "tfyd01",
				"calculated_result": "不容易入睡、睡眠质量差",
				"conclusion": "warning"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000387",
						"genotype": "G;A"
					}
				],
				"code": "yy15",
				"calculated_result": "稍容易闻到尿液中芦笋代谢物",
				"conclusion": "common"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002912",
						"genotype": "A;A"
					}
				],
				"code": "tz04",
				"calculated_result": "对苦味较不敏感",
				"conclusion": "good"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003260",
						"genotype": "T;T"
					}
				],
				"code": "tz08",
				"calculated_result": "干耳垢",
				"conclusion": "common"
			}
		],
		"medicines": [
			{
				"cn_name": "沙丁胺醇",
				"prefix": "ywq02",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1001031",
								"genotype": "A;A"
							}
						],
						"code": "ywq02",
						"calculated_result": "哮喘治疗反应较差",
						"conclusion": "warning"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004091",
								"genotype": "C;C"
							}
						],
						"code": "ywq02-2",
						"calculated_result": "气道扩张反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "抗精神疾病药物",
				"prefix": "yws02",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003880",
								"genotype": "G;G"
							}
						],
						"code": "yws02",
						"calculated_result": "迟发型运动障碍风险较高",
						"conclusion": "warning"
					},
					{
						"tested_snps": [
							{
								"name": "zh1000005",
								"genotype": "C;T"
							}
						],
						"code": "yws02-2",
						"calculated_result": "代谢性疾病风险较高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "曲妥珠单抗（赫赛汀）",
				"prefix": "ywa16",
				"safety": [

				],
				"effect": [

				]
			},
			{
				"cn_name": "阿替洛尔",
				"prefix": "ywx09",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000365",
								"genotype": "C;C"
							}
						],
						"code": "ywx09",
						"calculated_result": "高密度胆固醇下降较明显",
						"conclusion": "warning"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002151",
								"genotype": "G;T"
							}
						],
						"code": "ywx09-2",
						"calculated_result": "降压治疗效果较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "奥氮平",
				"prefix": "yws17",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003969",
								"genotype": "C;C"
							}
						],
						"code": "yws17",
						"calculated_result": "体重增加风险较高",
						"conclusion": "warning"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000789",
								"genotype": "T;T"
							}
						],
						"code": "yws17-2",
						"calculated_result": "缓解程度正常",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "辛伐他汀",
				"prefix": "ywx01",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002883",
								"genotype": "T;T"
							}
						],
						"code": "ywx01",
						"calculated_result": "肌肉疼痛风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "氯氮平",
				"prefix": "yws06",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002695",
								"genotype": "C;T"
							}
						],
						"code": "yws06",
						"calculated_result": "长期服药体重增加稍明显",
						"conclusion": "warning"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000789",
								"genotype": "T;T"
							}
						],
						"code": "yws06-2",
						"calculated_result": "治疗时缓解程度正常",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "阿托伐他汀",
				"prefix": "ywx03",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002883",
								"genotype": "T;T"
							}
						],
						"code": "ywx03",
						"calculated_result": "肌肉疼痛风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "阿霉素",
				"prefix": "ywa13",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002931",
								"genotype": "G;G"
							}
						],
						"code": "ywa13-2",
						"calculated_result": "毒副作用较低",
						"conclusion": "good"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004140",
								"genotype": "C;C"
							}
						],
						"code": "ywa13",
						"calculated_result": "非霍奇金淋巴瘤心脏毒性较低",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "普伐他汀",
				"prefix": "ywx05",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1001354",
								"genotype": "C;C"
							}
						],
						"code": "ywx05",
						"calculated_result": "心血管事件风险较高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "利培酮",
				"prefix": "yws08",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004076",
								"genotype": "A;A"
							}
						],
						"code": "yws08",
						"calculated_result": "锥体外系症状风险较低",
						"conclusion": "good"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004127",
								"genotype": "G;A"
							}
						],
						"code": "yws08-2",
						"calculated_result": "症状改善较明显",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "吉西他滨",
				"prefix": "ywa12",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004073",
								"genotype": "A;A"
							}
						],
						"code": "ywa12",
						"calculated_result": "中性粒细胞减少风险较高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "西酞普兰",
				"prefix": "yws04",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004128",
								"genotype": "C;C"
							}
						],
						"code": "yws04",
						"calculated_result": "治疗反应较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "他汀类药物",
				"prefix": "ywx02",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002883",
								"genotype": "T;T"
							}
						],
						"code": "ywx02",
						"calculated_result": "肌肉疼痛风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "西立伐他汀",
				"prefix": "ywx04",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000364",
								"genotype": "G;G"
							}
						],
						"code": "ywx04",
						"calculated_result": "横纹肌溶解症风险较高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "β-受体阻滞剂",
				"prefix": "ywx06",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002695",
								"genotype": "C;T"
							}
						],
						"code": "ywx06",
						"calculated_result": "降低心率效果较明显",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "安非拉酮",
				"prefix": "yws19",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1003910",
								"genotype": "G;G"
							}
						],
						"code": "yws19",
						"calculated_result": "戒烟治疗反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "硫酸氢氯吡格雷",
				"prefix": "ywx18",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002356",
								"genotype": "A;A"
							},
							{
								"name": "zh1002357",
								"genotype": "A;A"
							},
							{
								"name": "zh1002359",
								"genotype": "G;G"
							}
						],
						"code": "ywx18",
						"calculated_result": "疗效较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "醋硝香豆醇",
				"prefix": "ywx19",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003377",
								"genotype": "G;A"
							}
						],
						"code": "ywx19",
						"calculated_result": "所需剂量较少",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "维拉帕米",
				"prefix": "ywx12",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000366",
								"genotype": "G;T"
							}
						],
						"code": "ywx12",
						"calculated_result": "心脏副作用稍强",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "呋塞米／速尿灵",
				"prefix": "ywx13",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000904",
								"genotype": "G;T"
							}
						],
						"code": "ywx13",
						"calculated_result": "疗效一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "美托洛尔",
				"prefix": "ywx10",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1001011",
								"genotype": "G;A"
							}
						],
						"code": "ywx10",
						"calculated_result": "男性高血压肾病疗效稍好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "血管紧张素转化酶抑制剂",
				"prefix": "ywx11",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003999",
								"genotype": "G;G"
							}
						],
						"code": "ywx11",
						"calculated_result": "水肿风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "氢氯噻嗪",
				"prefix": "ywx16",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000904",
								"genotype": "G;T"
							}
						],
						"code": "ywx16",
						"calculated_result": "疗效一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "抗凝血剂",
				"prefix": "ywx17",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003282",
								"genotype": "C;T"
							}
						],
						"code": "ywx17",
						"calculated_result": "按照一般剂量",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "利尿剂药物",
				"prefix": "ywx14",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000904",
								"genotype": "G;T"
							}
						],
						"code": "ywx14",
						"calculated_result": "疗效一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "安体舒通／螺内酯",
				"prefix": "ywx15",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000904",
								"genotype": "G;T"
							}
						],
						"code": "ywx15",
						"calculated_result": "疗效一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "顺氯氨铂／顺铂",
				"prefix": "ywa05",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa05-2",
						"calculated_result": "非小细胞肺癌化疗反应较好",
						"conclusion": "good"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa05",
						"calculated_result": "胃癌大肠癌生存期一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "利托那韦",
				"prefix": "ykg01",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004075",
								"genotype": "C;C"
							}
						],
						"code": "ykg01",
						"calculated_result": "治疗HIV时的肾结石风险较低",
						"conclusion": "good"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1001847",
								"genotype": "T;T"
							}
						],
						"code": "ykg01-2",
						"calculated_result": "治疗时细胞内浓度低，效果差",
						"conclusion": "warning"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004139",
								"genotype": "G;A"
							}
						],
						"code": "ykg01-3",
						"calculated_result": "抗逆转录病毒治疗失败风险较高",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "阿司匹林",
				"prefix": "ywx20",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1003485",
								"genotype": "C;T"
							}
						],
						"code": "ywx20",
						"calculated_result": "诱发哮喘风险较高（2倍）",
						"conclusion": "warning"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1001879",
								"genotype": "G;G"
							}
						],
						"code": "ywx20-2",
						"calculated_result": "无预防大肠癌效果",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "卡马西平",
				"prefix": "yws05",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004093",
								"genotype": "G;G"
							}
						],
						"code": "yws05-2",
						"calculated_result": "神经系统副作用风险较低",
						"conclusion": "good"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004083",
								"genotype": "A;A"
							}
						],
						"code": "yws05",
						"calculated_result": "史蒂芬-强生症候群风险较低",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "纳曲酮",
				"prefix": "ywt08",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004085",
								"genotype": "G;A"
							}
						],
						"code": "ywt08",
						"calculated_result": "毒性较高",
						"conclusion": "warning"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004085",
								"genotype": "G;A"
							}
						],
						"code": "ywt08-2",
						"calculated_result": "疗效较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "奥美拉唑",
				"prefix": "ywq05",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002356",
								"genotype": "A;A"
							},
							{
								"name": "zh1002359",
								"genotype": "G;G"
							}
						],
						"code": "ywq05",
						"calculated_result": "代谢速率降低，疗效较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "丙肝治疗反应",
				"prefix": "ywq06",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004142",
								"genotype": "T;T"
							}
						],
						"code": "ywq06",
						"calculated_result": "抗病毒治疗反应正常",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "丙肝治疗副作用",
				"prefix": "ywq07",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004144",
								"genotype": "T;T"
							}
						],
						"code": "ywq07",
						"calculated_result": "血小板减少症风险正常",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "铂",
				"prefix": "ywa01",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa01-2",
						"calculated_result": "非小细胞肺癌化疗反应较好",
						"conclusion": "good"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa01",
						"calculated_result": "胃癌大肠癌生存期一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "酞醚哌啶酮",
				"prefix": "ywt07",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004092",
								"genotype": "G;G"
							}
						],
						"code": "ywt07",
						"calculated_result": "治疗反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "海洛因",
				"prefix": "ywt01",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004085",
								"genotype": "G;A"
							}
						],
						"code": "ywt01",
						"calculated_result": "止痛剂量需要较高剂量",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "戒烟类药物",
				"prefix": "ywt02",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1003120",
								"genotype": "G;G"
							}
						],
						"code": "ywt02",
						"calculated_result": "尼古丁替代治疗需要的剂量较低",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "二膦酸盐",
				"prefix": "ywn08",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004074",
								"genotype": "C;A"
							}
						],
						"code": "ywn08",
						"calculated_result": "骨质疏松疗效较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "别嘌呤醇",
				"prefix": "ywn06",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004084",
								"genotype": "T;T"
							},
							{
								"name": "zh1004080",
								"genotype": "G;G"
							}
						],
						"code": "ywn06",
						"calculated_result": "可正常服用本药品",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "二甲双胍",
				"prefix": "ywn05",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004126",
								"genotype": "T;T"
							}
						],
						"code": "ywn05",
						"calculated_result": "糖尿病疗效较差",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "磺胺类药物",
				"prefix": "ywn04",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002487",
								"genotype": "C;C"
							}
						],
						"code": "ywn04",
						"calculated_result": "糖化血红蛋白下降幅度不明显",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "瑞格列奈",
				"prefix": "ywn02",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002246",
								"genotype": "C;T"
							}
						],
						"code": "ywn02",
						"calculated_result": "疗效较差",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "对乙酰氨基酚",
				"prefix": "ywt12",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004075",
								"genotype": "C;C"
							}
						],
						"code": "ywt12",
						"calculated_result": "大剂量时肝毒性风险高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "帕罗西汀",
				"prefix": "yws12",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004079",
								"genotype": "T;T"
							}
						],
						"code": "yws12-2",
						"calculated_result": "治疗反应一般",
						"conclusion": "common"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004087",
								"genotype": "G;G"
							}
						],
						"code": "yws12",
						"calculated_result": "治疗缓解效果一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "氟西汀",
				"prefix": "yws18",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004089",
								"genotype": "G;G"
							}
						],
						"code": "yws18",
						"calculated_result": "治疗反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "昔多芬／伟哥",
				"prefix": "ywq01",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1003530",
								"genotype": "G;A"
							}
						],
						"code": "ywq01",
						"calculated_result": "治疗反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "锂",
				"prefix": "yws11",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000799",
								"genotype": "G;G"
							}
						],
						"code": "yws11",
						"calculated_result": "治疗反应较佳",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "阿米替林",
				"prefix": "yws15",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002356",
								"genotype": "A;A"
							}
						],
						"code": "yws15",
						"calculated_result": "药物代谢速度速度较慢",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "伊潘立酮",
				"prefix": "yws14",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004135",
								"genotype": "A;A"
							},
							{
								"name": "zh1004141",
								"genotype": "C;T"
							}
						],
						"code": "yws14",
						"calculated_result": "心血管事件风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "西罗莫司",
				"prefix": "ywm04",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004088",
								"genotype": "G;G"
							}
						],
						"code": "ywm04",
						"calculated_result": "代谢较慢需要减少药量",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "甲氨喋呤",
				"prefix": "ywm05",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004138",
								"genotype": "G;A"
							}
						],
						"code": "ywm05",
						"calculated_result": "牛皮癣毒副作用风险正常",
						"conclusion": "common"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004138",
								"genotype": "G;A"
							}
						],
						"code": "ywm05-2",
						"calculated_result": "风湿病关节炎疗效一般",
						"conclusion": "common"
					},
					{
						"tested_snps": [
							{
								"name": "zh1000018",
								"genotype": "A;A"
							}
						],
						"code": "ywm05-3",
						"calculated_result": "无病变发生期较长",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "环磷酰胺",
				"prefix": "ywm06",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002931",
								"genotype": "G;G"
							}
						],
						"code": "ywm06",
						"calculated_result": "副作用风险正常",
						"conclusion": "common"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000428",
								"genotype": "C;C"
							}
						],
						"code": "ywm06-2",
						"calculated_result": "乳腺癌无病生存期一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "环孢霉素",
				"prefix": "ywm07",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004088",
								"genotype": "G;G"
							}
						],
						"code": "ywm07",
						"calculated_result": "需要降低剂量",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "孟鲁司特",
				"prefix": "ywm01",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1002513",
								"genotype": "G;G"
							}
						],
						"code": "ywm01",
						"calculated_result": "哮喘疗效较佳",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "吗替麦考酚酯",
				"prefix": "ywm02",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004134",
								"genotype": "G;T"
							}
						],
						"code": "ywm02",
						"calculated_result": "副作用风险较高",
						"conclusion": "warning"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004090",
								"genotype": "G;G"
							}
						],
						"code": "ywm02-3",
						"calculated_result": "诱发风险较低",
						"conclusion": "good"
					}
				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004090",
								"genotype": "G;G"
							}
						],
						"code": "ywm02-2",
						"calculated_result": "排斥风险较高",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "他克莫司",
				"prefix": "ywm03",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004088",
								"genotype": "G;G"
							}
						],
						"code": "ywm03",
						"calculated_result": "代谢较慢需要减少药量",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "地氯雷他定",
				"prefix": "ywm08",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004326",
								"genotype": "G;G"
							}
						],
						"code": "ywm08",
						"calculated_result": "治疗荨麻疹效果较差",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "巯嘌呤",
				"prefix": "ywa14",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000005",
								"genotype": "C;T"
							}
						],
						"code": "ywa14",
						"calculated_result": "淋巴瘤治疗时中断可能性较高",
						"conclusion": "warning"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "氟伏沙明",
				"prefix": "yws09",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004079",
								"genotype": "T;T"
							}
						],
						"code": "yws09",
						"calculated_result": "治疗反应一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "舒尼替尼（索坦）",
				"prefix": "ywa15",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004088",
								"genotype": "G;G"
							}
						],
						"code": "ywa15",
						"calculated_result": "治疗时毒性较低",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "抗抑郁药",
				"prefix": "yws01",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004086",
								"genotype": "T;T"
							}
						],
						"code": "yws01",
						"calculated_result": "某些药物反应较差",
						"conclusion": "warning"
					}
				]
			},
			{
				"cn_name": "普拉克索",
				"prefix": "yws07",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000789",
								"genotype": "T;T"
							}
						],
						"code": "yws07",
						"calculated_result": "帕金森病疗效较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "氟尿嘧啶",
				"prefix": "ywa11",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000350",
								"genotype": "G;G"
							}
						],
						"code": "ywa11",
						"calculated_result": "毒副作用一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "氟氯青霉素",
				"prefix": "ykg03",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1004077",
								"genotype": "C;T"
							}
						],
						"code": "ykg03",
						"calculated_result": "治疗时肝毒性风险一般",
						"conclusion": "common"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "卡波铂",
				"prefix": "ywa04",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1000005",
								"genotype": "C;T"
							}
						],
						"code": "ywa04-2",
						"calculated_result": "较差",
						"conclusion": "warning"
					},
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa04",
						"calculated_result": "非小细胞肺癌化疗反应较好",
						"conclusion": "good"
					}
				]
			},
			{
				"cn_name": "多西他奇／紫杉萜",
				"prefix": "ywa08",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1002685",
								"genotype": "A;A"
							}
						],
						"code": "ywa08",
						"calculated_result": "药物清除率高并发症低",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "卡培他滨",
				"prefix": "ywa09",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000018",
								"genotype": "A;A"
							}
						],
						"code": "ywa09",
						"calculated_result": "毒性较低",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			},
			{
				"cn_name": "奥沙利铂",
				"prefix": "ywa03",
				"safety": [

				],
				"effect": [
					{
						"tested_snps": [
							{
								"name": "zh1004143",
								"genotype": "C;C"
							}
						],
						"code": "ywa03",
						"calculated_result": "胃癌大肠癌生存期一般",
						"conclusion": "common"
					}
				]
			},
			{
				"cn_name": "紫杉醇",
				"prefix": "ywa07",
				"safety": [
					{
						"tested_snps": [
							{
								"name": "zh1000428",
								"genotype": "C;C"
							}
						],
						"code": "ywa07",
						"calculated_result": "毒性较低生存期较长",
						"conclusion": "good"
					}
				],
				"effect": [

				]
			}
		],
		"diseases": [
			{
				"tested_snps": [
					{
						"name": "zh1002092",
						"genotype": "G;A"
					}
				],
				"code": "sj09",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002089",
						"genotype": "G;A"
					},
					{
						"name": "zh1002758",
						"genotype": "T;T"
					}
				],
				"code": "sj08",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000557",
						"genotype": "T;T"
					},
					{
						"name": "zh1002546",
						"genotype": "C;A"
					},
					{
						"name": "zh1003655",
						"genotype": "G;A"
					}
				],
				"code": "sj06",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s25"
					},
					{
						"answer": "no",
						"code": "s23"
					}
				],
				"calculated_score": "1.6"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002291",
						"genotype": "C;C"
					},
					{
						"name": "zh1003921",
						"genotype": "A;A"
					}
				],
				"code": "sj05",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1004329",
						"genotype": "C;T"
					},
					{
						"name": "zh1004330",
						"genotype": "G;C"
					},
					{
						"name": "zh1004331",
						"genotype": "G;G"
					}
				],
				"code": "sj04",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002284",
						"genotype": "C;C"
					},
					{
						"name": "zh1000977",
						"genotype": "C;T"
					}
				],
				"code": "sj03",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001386",
						"genotype": "T;T"
					}
				],
				"code": "sj01",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000034",
						"genotype": "C;T"
					},
					{
						"name": "zh1002926",
						"genotype": "C;T"
					}
				],
				"code": "az12",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s9"
					},
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s17"
					},
					{
						"answer": "no",
						"code": "s41"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002410",
						"genotype": "G;G"
					},
					{
						"name": "zh1004327",
						"genotype": "C;C"
					}
				],
				"code": "az13",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002181",
						"genotype": "A;A"
					}
				],
				"code": "az10",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s4"
					},
					{
						"answer": "no",
						"code": "s1"
					},
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s33"
					},
					{
						"answer": "no",
						"code": "s9"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002008",
						"genotype": "A;A"
					},
					{
						"name": "zh1003255",
						"genotype": "G;A"
					},
					{
						"name": "zh1003257",
						"genotype": "C;A"
					}
				],
				"code": "az11",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s10"
					},
					{
						"answer": "no",
						"code": "s22"
					},
					{
						"answer": "no",
						"code": "s37"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001917",
						"genotype": "G;G"
					}
				],
				"code": "az15",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s8"
					},
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s40"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001256",
						"genotype": "A;A"
					}
				],
				"code": "az05",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s36"
					},
					{
						"answer": "no",
						"code": "s8"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001879",
						"genotype": "G;G"
					},
					{
						"name": "zh1001029",
						"genotype": "G;T"
					}
				],
				"code": "az04",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s8"
					},
					{
						"answer": "yes",
						"code": "s39"
					}
				],
				"calculated_score": "1.55"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001046",
						"genotype": "G;A"
					},
					{
						"name": "zh1003416",
						"genotype": "G;T"
					}
				],
				"code": "az07",
				"surveys_analysis": [
					{
						"answer": "yes",
						"code": "s7"
					},
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s13"
					},
					{
						"answer": "no",
						"code": "s35"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001044",
						"genotype": "A;A"
					}
				],
				"code": "az06",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s23"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002181",
						"genotype": "A;A"
					},
					{
						"name": "zh1001246",
						"genotype": "G;A"
					}
				],
				"code": "az01",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s1"
					},
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s31"
					}
				],
				"calculated_score": "1.44"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003557",
						"genotype": "T;T"
					},
					{
						"name": "zh1002390",
						"genotype": "C;A"
					},
					{
						"name": "zh1003558",
						"genotype": "C;T"
					}
				],
				"code": "az03",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s2"
					},
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s32"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002660",
						"genotype": "G;A"
					}
				],
				"code": "az02",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s24"
					},
					{
						"answer": "yes",
						"code": "s7"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003034",
						"genotype": "C;T"
					},
					{
						"name": "zh1002005",
						"genotype": "G;A"
					}
				],
				"code": "az08",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s29"
					}
				],
				"calculated_score": "1.59"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000469",
						"genotype": "G;G"
					},
					{
						"name": "zh1000059",
						"genotype": "C;T"
					}
				],
				"code": "xn02",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s16"
					},
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001084",
						"genotype": "T;T"
					}
				],
				"code": "xn01",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s16"
					},
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s11"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000094",
						"genotype": "A;A"
					}
				],
				"code": "xn06",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s11"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002030",
						"genotype": "C;T"
					}
				],
				"code": "xn07",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003045",
						"genotype": "A;A"
					}
				],
				"code": "xn04",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003111",
						"genotype": "C;C"
					}
				],
				"code": "xn08",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003470",
						"genotype": "C;T"
					},
					{
						"name": "zh1001350",
						"genotype": "C;C"
					}
				],
				"code": "xn09",
				"surveys_analysis": [
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s6"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003313",
						"genotype": "A;A"
					},
					{
						"name": "zh1002728",
						"genotype": "C;A"
					},
					{
						"name": "zh1001706",
						"genotype": "G;A"
					}
				],
				"code": "xh06",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000081",
						"genotype": "C;A"
					}
				],
				"code": "xn12",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000059",
						"genotype": "C;T"
					},
					{
						"name": "zh1004148",
						"genotype": "G;G"
					}
				],
				"code": "xn13",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000244",
						"genotype": "A;A"
					}
				],
				"code": "sj17",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001201",
						"genotype": "A;A"
					},
					{
						"name": "zh1002337",
						"genotype": "G;A"
					},
					{
						"name": "zh1003761",
						"genotype": "G;A"
					}
				],
				"code": "zt08",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003519",
						"genotype": "C;C"
					}
				],
				"code": "zt09",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s27"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000619",
						"genotype": "A;A"
					},
					{
						"name": "zh1002334",
						"genotype": "G;T"
					},
					{
						"name": "zh1003868",
						"genotype": "G;G"
					}
				],
				"code": "zt06",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s28"
					}
				],
				"calculated_score": "1.45"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001497",
						"genotype": "C;T"
					},
					{
						"name": "zh1000281",
						"genotype": "C;C"
					},
					{
						"name": "zh1000287",
						"genotype": "G;A"
					},
					{
						"name": "zh1001509",
						"genotype": "A;A"
					}
				],
				"code": "zt04",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s6"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002572",
						"genotype": "G;G"
					}
				],
				"code": "zt05",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003004",
						"genotype": "T;T"
					}
				],
				"code": "zt02",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000203",
						"genotype": "C;T"
					},
					{
						"name": "zh1000261",
						"genotype": "G;G"
					},
					{
						"name": "zh1001494",
						"genotype": "G;A"
					}
				],
				"code": "zt03",
				"surveys_analysis": [

				],
				"calculated_score": "0.66"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001151",
						"genotype": "T;T"
					},
					{
						"name": "zh1000597",
						"genotype": "G;A"
					}
				],
				"code": "zt01",
				"surveys_analysis": [
					{
						"answer": "yes",
						"code": "s12"
					},
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1.2"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002792",
						"genotype": "G;A"
					},
					{
						"name": "zh1000776",
						"genotype": "C;T"
					},
					{
						"name": "zh1002340",
						"genotype": "C;T"
					},
					{
						"name": "zh1001546",
						"genotype": "C;C"
					},
					{
						"name": "zh1002583",
						"genotype": "A;A"
					}
				],
				"code": "zt10",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002041",
						"genotype": "G;A"
					},
					{
						"name": "zh1002028",
						"genotype": "G;A"
					}
				],
				"code": "xn05",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000462",
						"genotype": "G;T"
					},
					{
						"name": "zh1003982",
						"genotype": "T;T"
					}
				],
				"code": "zt11",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001553",
						"genotype": "C;C"
					},
					{
						"name": "zh1001204",
						"genotype": "G;A"
					},
					{
						"name": "zh1001206",
						"genotype": "C;T"
					}
				],
				"code": "zt13",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003870",
						"genotype": "G;A"
					}
				],
				"code": "zt15",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000624",
						"genotype": "C;T"
					},
					{
						"name": "zh1001561",
						"genotype": "C;T"
					},
					{
						"name": "zh1001562",
						"genotype": "G;T"
					}
				],
				"code": "zt14",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001461",
						"genotype": "A;A"
					},
					{
						"name": "zh1000515",
						"genotype": "C;C"
					}
				],
				"code": "zt17",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002342",
						"genotype": "C;T"
					},
					{
						"name": "zh1002343",
						"genotype": "C;T"
					}
				],
				"code": "zt16",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000756",
						"genotype": "G;G"
					},
					{
						"name": "zh1003290",
						"genotype": "C;A"
					},
					{
						"name": "zh1000761",
						"genotype": "A;A"
					}
				],
				"code": "xh03",
				"surveys_analysis": [
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s11"
					}
				],
				"calculated_score": "1.2"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002457",
						"genotype": "C;A"
					}
				],
				"code": "xh02",
				"surveys_analysis": [

				],
				"calculated_score": "4.0"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001478",
						"genotype": "C;A"
					},
					{
						"name": "zh1001479",
						"genotype": "A;A"
					}
				],
				"code": "mn04",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003276",
						"genotype": "C;T"
					},
					{
						"name": "zh1002563",
						"genotype": "C;T"
					}
				],
				"code": "mn01",
				"surveys_analysis": [

				],
				"calculated_score": "1.3"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000470",
						"genotype": "C;A"
					},
					{
						"name": "zh1002701",
						"genotype": "G;G"
					}
				],
				"code": "xn03",
				"surveys_analysis": [
					{
						"answer": "yes",
						"code": "s3"
					},
					{
						"answer": "no",
						"code": "s9"
					},
					{
						"answer": "yes",
						"code": "s26"
					},
					{
						"answer": "no",
						"code": "s6"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003002",
						"genotype": "C;C"
					},
					{
						"name": "zh1001148",
						"genotype": "G;G"
					},
					{
						"name": "zh1001739",
						"genotype": "A;A"
					}
				],
				"code": "mn03",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "yes",
						"code": "s3"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001468",
						"genotype": "T;T"
					}
				],
				"code": "mn02",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002510",
						"genotype": "G;G"
					}
				],
				"code": "xh07",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "yes",
						"code": "s3"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003288",
						"genotype": "C;T"
					},
					{
						"name": "zh1003577",
						"genotype": "T;T"
					}
				],
				"code": "xh01",
				"surveys_analysis": [

				],
				"calculated_score": "1.67"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000950",
						"genotype": "A;A"
					},
					{
						"name": "zh1003467",
						"genotype": "T;T"
					}
				],
				"code": "xh05",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s9"
					}
				],
				"calculated_score": "0.84"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000231",
						"genotype": "C;C"
					}
				],
				"code": "sj14",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002560",
						"genotype": "C;C"
					}
				],
				"code": "sj15",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001457",
						"genotype": "C;C"
					},
					{
						"name": "zh1003313",
						"genotype": "A;A"
					}
				],
				"code": "sj16",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000216",
						"genotype": "G;A"
					}
				],
				"code": "sj10",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003698",
						"genotype": "G;A"
					},
					{
						"name": "zh1003924",
						"genotype": "T;T"
					}
				],
				"code": "sj13",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000054",
						"genotype": "A;A"
					},
					{
						"name": "zh1000462",
						"genotype": "G;T"
					},
					{
						"name": "zh1001306",
						"genotype": "G;A"
					},
					{
						"name": "zh1003041",
						"genotype": "G;G"
					},
					{
						"name": "zh1001299",
						"genotype": "G;G"
					},
					{
						"name": "zh1001303",
						"genotype": "A;A"
					}
				],
				"code": "az29",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s15"
					},
					{
						"answer": "no",
						"code": "s9"
					},
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s1"
					},
					{
						"answer": "no",
						"code": "s38"
					}
				],
				"calculated_score": "1.52"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001029",
						"genotype": "G;T"
					},
					{
						"name": "zh1003761",
						"genotype": "G;A"
					},
					{
						"name": "zh1002450",
						"genotype": "C;C"
					}
				],
				"code": "az28",
				"surveys_analysis": [

				],
				"calculated_score": "1.38"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001295",
						"genotype": "C;C"
					}
				],
				"code": "az23",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000052",
						"genotype": "G;T"
					},
					{
						"name": "zh1000053",
						"genotype": "G;A"
					}
				],
				"code": "az21",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s10"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1001285",
						"genotype": "G;G"
					}
				],
				"code": "az20",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s19"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1000168",
						"genotype": "A;A"
					}
				],
				"code": "hx04",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003180",
						"genotype": "T;T"
					},
					{
						"name": "zh1001029",
						"genotype": "G;T"
					}
				],
				"code": "hx01",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s0"
					},
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "no",
						"code": "s8"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1002731",
						"genotype": "A;A"
					}
				],
				"code": "hx02",
				"surveys_analysis": [
					{
						"answer": "no",
						"code": "s6"
					},
					{
						"answer": "yes",
						"code": "s3"
					}
				],
				"calculated_score": "1"
			},
			{
				"tested_snps": [
					{
						"name": "zh1003484",
						"genotype": "T;T"
					},
					{
						"name": "zh1002512",
						"genotype": "T;T"
					},
					{
						"name": "zh1003488",
						"genotype": "C;C"
					},
					{
						"name": "zh1003486",
						"genotype": "C;C"
					}
				],
				"code": "hx03",
				"surveys_analysis": [

				],
				"calculated_score": "1"
			}
		]
	}
  }
}

