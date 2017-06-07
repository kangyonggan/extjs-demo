Ext.define('App.view.user.UserFormWindowView', {
    extend: 'Ext.window.Window',
    id: 'userFormWindowView',
    title: '添加用户',
    modal: true,
    width: 400,
    height: 300,
    /* 自动滚轴 */
    autoScroll: true,
    closable: true,
    layout: 'fit',
    items: [{
        xtype: "form",
        id: "userForm",
        bodyPadding: 10,
        url: '/user/save',
        /* 自动滚轴 */
        autoScroll: true,
        frame: true,
        layout: 'form',
        defaultType : "textfield",
        items: [
            {
                name: 'username',
                allowBlank: false,
                blankText: "用户名不能为空",
                fieldLabel: "用户名",
                vtype: "alphanum", // 数字、字母、下划线
                vtypeText: "由字母、数字和下划线组成",
                minLength: 5,
                minLengthText: "用户名长度不能小于{0}",
                maxLength: 20,
                maxLengthText: "用户名长度不能大于{0}"
            },
            {
                name: 'password',
                fieldLabel: "密码",
                allowBlank: false,
                blankText: "密码不能为空",
                vtype: "alphanum", // 数字、字母、下划线
                vtypeText: "由字母、数字和下划线组成",
                minLength: 6,
                minLengthText: "密码长度不能小于{0}",
                maxLength: 32,
                maxLengthText: "密码长度不能大于{0}"
            },
            {
                name: 'realname',
                fieldLabel: "真实姓名",
                allowBlank: false,
                blankText: "真实姓名不能为空",
                regex: /^[\u4E00-\u9FA5]+$/,  // 汉字的正则表达式
                regexText: "真实姓名只能由汉字组成！"
            },
            {
                name: 'sex',
                fieldLabel: "性别",
                allowBlank: false,
                blankText: "性别不能为空",
                xtype: 'combo',
                editable: false,// 禁止手动写入
                /* 从本地加载数据 */
                queryMode: "local",
                /* 显示 data 的 field 名称 */
                displayField: 'name',
                valueField: 'value',
                store: "user.FilterSexStore"
            }
        ],
        bbar: [
            '->', // 右对齐， 简写！
            {
                itemId: 'userFormReset',
                xtype: 'button',
                text: '重置',
                iconCls: 'Arrowredo'
            },
            '-',
            {
                itemId: 'userFormSubmit',
                xtype: 'button',
                formBind: true,
                text: '提交',
                iconCls: 'Accept'
            }
        ]
    }]
});