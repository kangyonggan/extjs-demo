/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.store.user.UserGridStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.user.UserGridModel',
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: '././data/userGrid.json',
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total'
        }
    }
});