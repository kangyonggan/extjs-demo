/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.view.user.UserBaseContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.userBaseContainer',
    layout: 'border',
    items: [
        {
            region: 'center',
            autoScroll: true,
            items: [
                {
                    xtype: 'userGridContainer'
                }
            ]
        }
    ]
});