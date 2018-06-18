export default {
	config: {
		path: './config.json', // load/saveする設定ファイルのパス（相対パスの場合、ConfigGUI実行ファイルの位置からの相対位置と解釈）
		default: './default.json', // 起動時に config.json が存在しない場合、このファイルからデフォルト値をロードする
		name: 'XYZアプリ設定画面' // タイトルバーなどに表示
	},
	schema: [
		{
			key: 'username', // jsonオブジェクトにおけるキー名
			label: 'ユーザ名', // GUI内での入力項目ラベル名
			placeholder: 'ユーザ名をここに入力', // 入力フォーム(inputタグ)のplaceholder属性
			description: '項目の説明文です', // 入力フォーム直下に小さいフォントで説明を表示
			type: 'string', // 値の型（jsonにおける有効なデータ型）
			required: true, // falseの場合は空でも良い
			rules: [ // Validationルール（複数指定可能）
				{
					regex: '[a-zA-Z]*',
					error: '半角英字のみが使用できます' // regexにマッチしなかった際のエラー文
				},
				{
					regex: '.{5,10}',
					error: '5文字以上、10文字以下で指定してください'
				}
			]
		},
		{
			key: 'userid',
			label: 'ユーザID',
			placeholder: 'ユーザ名をここに入力',
			description: '入力フォームの下に小さい文字で表示される説明文です',
			type: 'number',
			required: false,
			rules: [
				{
					regex: '[^-]*',
					error: '負値は指定できません'
				},
				{
					regex: '[0-9]*',
					error: '半角数字のみが使用できます'
				}
			]
		}
	]
}
