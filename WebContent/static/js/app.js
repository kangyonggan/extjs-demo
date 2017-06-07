/**
 * App入口
 *
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.onReady(function () {
    //开启悬浮提示功能
    Ext.QuickTips.init();

    //开启动态加载
    Ext.Loader.setConfig({
        enabled: true
    });

    Ext.application({
        //设定命名空间
        name: 'App',
        //指定配置选项，设置相应的路径
        appFolder: 'app',
        //加载控制器
        controllers: ['MainController', 'UserController'],
        //自动加载和实例化Viewport文件
        autoCreateViewport: true
    });
});
