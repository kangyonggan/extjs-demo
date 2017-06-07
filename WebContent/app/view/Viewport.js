/**
 * 主页面
 *
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'viewport',

    layout: {
        type: 'border',
        padding: '0 5 5 5'
    },

    items: [
        {
            id: 'viewport-header',
            xtype: 'box',
            region: 'north',
            height: 60,
            html: '信息管理系统'
        },
        {
            region: 'center',
            title: '主页面',
            xtype: 'mainTabpanelView'
        },
        {
            region: 'west',
            title: '菜单',
            animCollapse: true,
            width: 200,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true,
            autoScroll: true,
            items: [
                {
                    xtype: 'mainTreeView'
                }
            ]
        },
        {
            region: 'east',
            width: 100,
            title: '公告',
            animCollapse: true,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true
        }
    ]
});