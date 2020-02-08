var VideoModel = BackBone.Model.extend({
    defaults: function (){
        return {
            title: '',
            description: '',
            thumbnail_url: ''
        }
    }
})