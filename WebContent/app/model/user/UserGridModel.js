/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.model.user.UserGridModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'username', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'realname', type: 'string'},
        {name: 'sex', type: 'string'}
    ]
});
