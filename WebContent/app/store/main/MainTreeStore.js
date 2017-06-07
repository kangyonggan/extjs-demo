/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.store.main.MainTreeStore', {
    extend: 'Ext.data.TreeStore',
    defaultRoodId: 'root',
    model: 'App.model.main.MainTreeModel',

    proxy: {
        type: 'ajax',
        url: '././data/mainTree.json',
        reader: 'json'
    },
    autoLoad: true
});