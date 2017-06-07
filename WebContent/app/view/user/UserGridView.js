/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.view.user.UserGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    id: 'userGridView',
    store: 'user.UserGridStore',
    columns: [
        {
            xtype: 'rownumberer',
            flex: 0.1
        },
        {
            text: 'ID',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        },
        {
            text: '用户名',
            dataIndex: 'username',
            flex: 1
        },
        {
            text: '密码',
            dataIndex: 'password',
            flex: 1
        },
        {
            text: '真实姓名',
            dataIndex: 'realname',
            flex: 1
        },
        {
            text: '性别',
            dataIndex: 'sex',
            flex: 1
        }
    ],
    bbar: [
        {
            xtype: 'pagingtoolbar',
            store: 'user.UserGridStore',
            displayInfo: true
        }
    ],
    tbar: [
        ' ',
        {
            xtype: 'combo',
            itemId: 'filterUserSex',
            fieldLabel: '性别',
            labelWidth: 35,
            width: 150,
            store: 'user.FilterSexStore',
            editable: false,
            displayField: 'name',
            valueField: 'value'
        },
        ' ',
        '-',
        ' ',
        {
            xtype: 'textfield',
            fieldLabel: '用户名',
            itemId: 'filterUsername',
            labelWidth: 45,
            width: 130
        },
        ' ',
        '-',
        ' ',
        {
            itemId: 'filterUser', xtype: 'button', text: '查询', iconCls: 'Arrowrefresh'
        },
        ' ',
        '-',
        ' ',
        {
            itemId: 'resetFilterUser', xtype: 'button', text: '清空', iconCls: 'Arrowundo'
        },
        '->',
        {itemId: 'addUser', xtype: 'button', text: '增加', iconCls: 'Add'}
    ]

});