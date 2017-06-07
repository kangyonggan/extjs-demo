/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.model.main.MainTreeModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'text', type: 'string'},
        {name: 'url', type: 'string'}
    ]
});