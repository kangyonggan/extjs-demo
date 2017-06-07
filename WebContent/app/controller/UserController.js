/**
 * 用户管理
 *
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.controller.UserController', {
    extend: 'Ext.app.Controller',
    views: ['user.UserBaseContainer', 'user.UserGridContainer', 'user.UserGridView', 'user.UserFormWindowView'],
    stores: ['user.UserGridStore', 'user.FilterSexStore'],
    models: ['user.UserGridModel', 'user.FilterSexModel'],

    init: function () {
        this.control({
            '#addUser': {	// 添加
                click: this.addUser
            },
            '#resetFilterUser':{	// 清空过滤表单
                click: this.resetFilterUser
            },
            '#userFormReset':{	// 清空form表单
                click: this.userFormReset
            }
        })
    },

    addUser: function () {
        Ext.create('App.view.user.UserFormWindowView').show();
    },

    resetFilterUser: function () {
        Ext.getCmp('userGridView').down("#filterUserSex").reset();
        Ext.getCmp('userGridView').down("#filterUsername").reset();
    },

    userFormReset: function () {
        Ext.getCmp('userFormWindowView').down("#userForm").getForm().reset();
    }
});




