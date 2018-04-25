let reg = {}

//正整数正则
reg.posI = /^\d+$/;
//负整数正则
reg.negI = /^-\d+$/;
//整数正则
reg.numI = /^-?\d+$/;


//可以是整数也可以是浮点数
//正数
reg.posF = /^\d*\.?\d+$/;
//负数正则
reg.negF = /^-\d*\.?\d+$/;
//数字正则
reg.numF = /^-?\d*\.?\d+$/;

// 只能输入n位的数字：“^d{n}$”
// 只能输入至少n位数字：“^d{n,}$”
// 只能输入m-n位的数字：“^d{m,n}$”


//包含中文
reg.chinaLanguage = /[\u4E00-\u9FA5]/;

//邮箱
reg.email = {
    key:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    message:'请输入正确的邮箱地址'
}

//手机号
reg.phone = {
    key:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
    message:'请输入正确的手机号码'
}

//身份证
reg.id =  {
    key:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    message:'请输入正确的身份证号'
}

//qq
reg.qq = {
    key:/^[1-9][0-9]{4,10}$/,
    message:'请输入正确的qq号码'
}
//wx
reg.wx = {
    key:/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
    message:'请输入正确的微信号码'
}


//用户名正则，4到16位（字母，数字，下划线，减号）
reg.user = {
    key:/^[a-zA-Z0-9_-]{6,16}$/,
    message:'用户名包含6到16位（字母，数字，下划线，减号）'
}


//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
reg.pass = {
    key:/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
    message:'密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'
}

//金额，最多两位小数
reg.momey = {
    key:/^\d*(?:\.\d{0,2})?$/,
    message:'金额，最多两位小数'
}

//固话，传值
reg.fox = {
    key: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
    message: '请输入正确的固话格式'
}

//邮政
reg.post = {
    key:/^[1-9]d{5}(?!d)/,
    message:'请输入正确的邮政编码'
}


export default reg;