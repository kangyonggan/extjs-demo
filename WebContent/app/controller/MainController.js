/**
 * 主控制器
 *
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.controller.MainController', {
    extend: 'Ext.app.Controller',
    views: ['Viewport', 'main.MainTreeView', 'main.MainTabpanelView'],
    stores: ['main.MainTreeStore'],
    models: ['main.MainTreeModel'],

    init: function () {
        //init函数通过this.control来负责监听
        this.control({
            //可以通过别名或itemId设置需要监听的组建
            //别名：'别名'，itemId: '#itemId'
            'mainTreeView': {
                //监听鼠标点击事件，点击后调用changePage方法
                itemclick: this.showPage
            }
        });
    },

    /**
     * 点击左边的功能树, 在右边的功能区以标签页的形式展现
     * @param view
     * @param rec
     */
    showPage: function (view, rec) {
        // 只处理叶子节点
        if (rec.data.leaf == true) {
            var mainTabPanel = Ext.getCmp('mainTabpanelView');

            var tab = Ext.getCmp(rec.data.id);

            if (!tab) {
                tab = mainTabPanel.add({
                    id: rec.data.id,
                    title: rec.data.text,
                    xtype: rec.data.url,
                    closable: true
                });
                mainTabPanel.setActiveTab(tab);
            } else {
                console.log("exists");
                mainTabPanel.setActiveTab(tab);
                return;
            }

            var store;
            // 用户管理，加载数据
            if (rec.data.id == 101) {
                store = Ext.data.StoreManager.lookup('user.UserGridStore');
                store.loadPage(1);
            }
        }
    }
});