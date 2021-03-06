Ext.define('Common.data.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.identifier.Uuid'
    ],

    fields: [
        { name: 'id', type: 'string' }
    ],
    idProperty: 'id',

    identifier: 'uuid',
    schema: {
        namespace: 'Common.data.model'
    }
});
