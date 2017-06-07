/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.store.user.FilterSexStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.user.FilterSexModel',
    proxy: {
        type: 'ajax',
        url: '././data/filterUserSex.json',
        reader: 'json'
    },
    autoLoad: true
});