/**
 * @author kangyonggan
 * @since 6/7/17
 */
Ext.define('App.view.main.MainTreeView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mainTreeView',
    rootVisible: false,
    border: false,
    store: 'main.MainTreeStore'
});