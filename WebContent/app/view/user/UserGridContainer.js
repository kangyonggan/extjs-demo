/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.view.user.UserGridContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.userGridContainer',
    items: [
        {
            xtype: 'userGridView'
        }
    ]
});